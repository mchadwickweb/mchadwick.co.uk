module.exports = {
  siteMetadata: {
    title: 'Michael Chadwick - Front end Developer based in Manchester, UK',
    siteUrl: 'https://www.mchadwick.co.uk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        exclude: ['/success'],
      }
    }
  ],
}
