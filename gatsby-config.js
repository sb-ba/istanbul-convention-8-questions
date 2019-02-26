const proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: '8M Survey',
    facebookLink: 'https://www.facebook.com/councilofeurope/',
    twitterLink: 'https://twitter.com/coe',
    instagramLink: 'https://www.instagram.com/councilofeurope/'
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'translations',
        path: `${__dirname}/data/translations`
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'explainer',
        path: `${__dirname}/data/explainer`
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'explainer',
        path: `${__dirname}/data/explainer-results`
      }
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/icons|logos/
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
