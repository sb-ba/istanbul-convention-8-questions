const proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: '8M Survey'
  },

  plugins: [
    'gatsby-plugin-netlify',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'questions',
        path: `${__dirname}/data/questions`
      }
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/icons/
        }
      }
    },

    'gatsby-transformer-remark',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-react-helmet'
  ],

  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000'
      })
    );
  }
};
