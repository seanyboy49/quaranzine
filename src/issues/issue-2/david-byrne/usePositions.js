import { useTransition } from "react-spring"

const usePositions = (gridItems, { xOffset, yOffset }) =>
  useTransition(gridItems, {
    keys: item => item.word,
    from: ({ xy, width, height }) => {
      return {
        xy: [xOffset, yOffset],
        width,
        height,
        opacity: 0,
      }
    },
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: ({ xy, width, height }) => {
      return {
        xy: [xOffset, yOffset],
        opacity: 0,
      }
    },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

export default usePositions
