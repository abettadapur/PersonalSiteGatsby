module.exports = {
  siteMetadata: {
    title: `Alex Bettadapur`,
  },
  plugins: [
    `gatsby-plugin-typescript`, 
    `gatsby-plugin-react-helmet`, 
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
  ],
}
