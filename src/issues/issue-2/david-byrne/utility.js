/**
 * A helper function that assigns big and mini images to the corresponding album
 * object. We query images via graphql and have to manually merge them
 * with the albumsByYear data
 *
 * @param {Array<Object>} albumsByYear
 * @param {Array<Array<Object>>} bigImages
 * @param {Array<Array<Object>>} miniImages
 */
export function mapImagesToAlbums(albumsByYear, bigImages, miniImages) {
  return albumsByYear.map(album => {
    const bigImg = bigImages.nodes.find(node => node.name === album.year)
    const miniImg = miniImages.nodes.find(node => node.name === album.year)

    return {
      ...album,
      bigImg,
      miniImg,
    }
  })
}
