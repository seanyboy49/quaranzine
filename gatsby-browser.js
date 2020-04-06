/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/global.css"

Object.prototype.findFileByName = function(fileName) {
  return this.allFile.edges.find(edge => edge.node.name === fileName)
}
