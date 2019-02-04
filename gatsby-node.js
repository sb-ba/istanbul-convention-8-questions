const { statSync, readdirSync } = require('fs');
const path = require('path');

const createLocalizedQuiz = (graphql, createPage) => {
  const getDirectories = p =>
    readdirSync(p).filter(f => statSync(path.join(p, f)).isDirectory());

  const createQuiz = (language, languages) =>
    graphql(`
    query {
      questions: allMarkdownRemark(
        filter: {
          fields: { folder: { eq: "${language}" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              answers
            }
          }
        }
      }
    }
  `).then(({ data: { questions: { edges } } }) => {
      const url = language === 'en' ? '/' : `/${language}/`;

      return createPage({
        path: url,
        component: path.resolve('src/templates/quiz/index.jsx'),
        context: {
          questions: edges,
          languages
        }
      });
    });

  const languages = getDirectories('./data/questions');

  return Promise.all(
    languages.map(language => createQuiz(language, languages))
  );
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const absPath = node.fileAbsolutePath.split('/');
    const folder = absPath[absPath.length - 2];
    const fileName = absPath[absPath.length - 1];

    createNodeField({
      node,
      name: 'fileName',
      value: fileName
    });

    createNodeField({
      node,
      name: 'folder',
      value: folder
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([createLocalizedQuiz(graphql, createPage)]);
};
