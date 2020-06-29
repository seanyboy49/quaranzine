import { useEffect, useState, useCallback } from "react"
/**
 *
 * @param {Array<String>} queries - An array media queries, e.g., '(min-width: 1000px)'
 * @param {Array<Number>} columnValues - An array of possible number of columns to return
 * @param {Number} defaultColumnValue - If no matches, return the defaultColumnValue
 */

export default function useMedia(queries, columnValues, defaultColumnValue) {
  // findIndex returns the index of the media query that matches
  // we then use that index to return the corresponding column
  const match = useCallback(
    () =>
      columnValues[queries.findIndex(q => matchMedia(q).matches)] ||
      defaultColumnValue,
    [columnValues, defaultColumnValue, queries]
  )

  const [numberOfColumns, setNumberOfColumns] = useState(match)

  useEffect(() => {
    console.log("usefect media")
    const resizeHandler = () => setNumberOfColumns(match)
    window.addEventListener("resize", resizeHandler)

    return () => window.removeEventListener("resize", resizeHandler)
  }, [match])

  return numberOfColumns
}
