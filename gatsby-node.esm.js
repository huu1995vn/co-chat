const path = require(`path`)


exports.onPreInit = () => console.log("Loaded source-plugin")
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      devtool: 'eval-source-map',
    })
  }
exports.onCreateWebpackConfig = ({
    stage,
    actions,
    getConfig
  }) => {
    if (stage === 'build-html') {
      actions.setWebpackConfig({
        externals: getConfig().externals.concat(function(context, request, callback) {
          const regex = /^@?firebase(\/(.+))?/;
          // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
          if (regex.test(request)) {
            return callback(null, 'umd ' + request);
          }
          callback();
        })
      });
    }
  };
exports.sourceNodes = async function sourceNodes({
    actions,
    cache,
    createContentDigest,
    createNodeId,
    getNodesByType,
    getNode
},
    pluginOptions
) {
    await cache.set(`hello`, `world`)
    console.log(await cache.get(`hello`))
}
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // page.matchPath is a special key that's used for matching pages
    if (page.path.match(/^\/admin/)) {
        page.matchPath = `/admin/*`

        // Update the page.
        createPage(page)

    }
    if (page.path.match(/^\/ho-tro/)) {
      page.matchPath = `/ho-tro/*`
      // Update the page.
      createPage(page)

  }
    if (page.path.match(/^\/help/)) {
        page.matchPath = `/help/*`
        // Update the page.
        createPage(page)
        
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage, deletePage } = actions;

    // createPage({
    //     path: "/files/test",
    //     component: path.resolve(`./src/templates/tailieu-content.js`),
    // })
}