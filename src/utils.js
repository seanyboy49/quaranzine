export const findFileByName = (data, fileName) => {
  return data.allFile.edges.find(edge => edge.node.name === fileName)
}
