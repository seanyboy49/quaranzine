const breakpoints = {
  phoneWide: `(max-width: 600px)`,
  tabletWide: `(max-width: 880px)`,
  laptop: `(max-width: 1024px)`,
  desktop: `(max-width: 1440px)`,
}

module.exports = {
  siteMetadata: {
    title: `Quaranzine`,
    description: `The quaranzine for the quaranzined.`,
    author: `Quaranzine Crew`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: breakpoints,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
