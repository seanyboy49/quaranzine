import { useEffect, useState, useCallback } from "react"
/**
 *
 * @param {Array<String>} queries - An array media queries, e.g., '(min-width: 1000px)'
 * @param {Array<Object>} values - An array of possible number of media values to return
 * @param {Number} defaultValue - If no matches, return the defaultValue
 */

export default function useMedia({ queries, values, defaultValue }) {
  // findIndex returns the index of the media query that matches
  // we then use that index to return the corresponding media value
  const match = useCallback(() => {
    const matchedQueryIndex = queries.findIndex(
      query => matchMedia(query).matches
    )

    return values[matchedQueryIndex] || defaultValue
  }, [values, defaultValue, queries])

  const [mediaValues, setMediaValues] = useState(match)

  useEffect(() => {
    const resizeHandler = () => setMediaValues(match)
    window.addEventListener("resize", resizeHandler)

    return () => window.removeEventListener("resize", resizeHandler)
  }, [match])

  return mediaValues
}
