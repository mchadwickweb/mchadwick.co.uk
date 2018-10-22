module.exports = {
  siteMetadata: {
    title: 'Michael Chadwick - Front end Developer based in Manchester, UK',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Circular Std', 'Arial', 'sans-serif'],
          urls: ['./fonts/fonts.css']
        }
      }
    }
  ],
}
