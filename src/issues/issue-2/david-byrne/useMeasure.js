import { useRef, useState, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"

export default function useMeasure() {
  // Create a ref that will be passed to an element to track
  const ref = useRef(null)
  // Initalize the dimensions of the element
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })
  // Initialize a new ResizeObserver in state. If it is not in state,
  // then it will create an infinite loop in the useEffect as a new
  // ResizeObserver will be created each time useMeasure runs
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => setBounds(entry.contentRect))
  )

  useEffect(() => {
    // Should only be called onMount and unMount
    // By the time the hook is run, ref.current will be defined
    ro.observe(ref.current)

    // Clean up the ro and stop observering
    return () => ro.disconnect()
  }, [ro])

  return [{ ref }, bounds]
}
