/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// import {apiApollo} from "./src/core/variables";
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
import {apiApollo} from "./src/core/variables";
require("dotenv").config({
  path: `.env.${activeEnv}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `UI CoChat`,
    description: `Phần mềm kết nối người mua với người bán dễ dàng hơn...`,
    author: `dailyxe.com.vn`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UI CoChat`,
        short_name: `CoChat`,
        start_url: `/`,
        background_color: `#bf3737`,
        theme_color: `#bf3737`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/assets/images/logo-rao-xe.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
            `gatsby-remark-line-breaks`
        ]
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'HASURA',
        fieldName: 'hasura',
        url: apiApollo,
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: apiApollo,
        headers:{
          "x-hasura-admin-secret": "acoTTdemoCODai"
        }
      }
    }
  ],
}
