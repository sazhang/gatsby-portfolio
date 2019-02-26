module.exports = {
  siteMetadata: {
    title: `Sarah Zhang Portfolio`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
};
