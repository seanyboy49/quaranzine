import { useTransition } from "react-spring"
import { number } from "prop-types"

class NumberCruncher {
  constructor(upperBound) {
    this.upperBound = upperBound
  }

  positiveOrNegative(number) {
    return (number *= Math.floor(Math.random() * 2) == 1 ? 1 : -1)
  }

  getRandomNumberFromRange() {
    const randomNumber = Math.floor(Math.random() * this.upperBound) + 1

    return this.positiveOrNegative(randomNumber)
  }

  getXY() {
    const x = this.getRandomNumberFromRange()
    const y = this.getRandomNumberFromRange()

    return [x, y]
  }
}

const numberCruncher = new NumberCruncher(4)

const usePositions = (gridItems, { xOffset, yOffset }) =>
  useTransition(gridItems, {
    keys: item => item.word,
    from: ({ xy, width, height }) => ({
      xy: [xOffset, yOffset],
      skew: numberCruncher.getXY(),
      width,
      height,
      opacity: 0,
    }),
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
