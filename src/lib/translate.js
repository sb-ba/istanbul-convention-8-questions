export default (key, translations) => {
  const translation = translations.find(
    ({ node: { frontmatter: nodeFrontmatter } }) => !!nodeFrontmatter[key]
  );

  if (!translation) {
    return null;
  }

  const {
    node: { frontmatter }
  } = translation;

  return frontmatter[key];
};
