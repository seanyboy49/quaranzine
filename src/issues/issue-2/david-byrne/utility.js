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
/**
 * A helper funciton for calculating the static values of the items
 * that will eventually be passed to the useTransition hook
 *
 * @param {Number} numColumns
 * @param {Array<Object>} items
 */

const CARD_HEIGHT = 85

export function calculateGridItems({ numColumns, items, width }) {
  // Column heights are initiliazed to zero because we'll add to them every time we place a new tile
  const heights = new Array(numColumns).fill(0)

  const gridItems = items.map(word => {
    // We want to fill the smallest column with a tile before adding tiles to other columns
    const columnIndex = heights.indexOf(Math.min(...heights))

    const xy = [
      (width / numColumns) * columnIndex, // X = Width of container divided by # of columns and multipled by column index.
      heights[columnIndex], // Y = The height of the column
    ]

    // Increase the column height by the card height
    heights[columnIndex] += CARD_HEIGHT

    return {
      word,
      xy,
      width: width / numColumns, // card width is calculated to match the column width
      height: CARD_HEIGHT,
    }
  })

  return [heights, gridItems]
}
