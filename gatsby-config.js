module.exports = {
  siteMetadata: {
    title: 'EU sanctions watch',
    twitter: 'https://twitter.com/CiFAR_EU',
    facebook: 'https://www.facebook.com/civilforumAR/'
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
          include: /static/
        }
      }
    },

    'gatsby-transformer-remark',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-react-helmet'
  ]
};
