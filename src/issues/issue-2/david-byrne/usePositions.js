import { useTransition } from "react-spring"

class NumberCruncher {
  constructor(upperBound) {
    this.upperBound = upperBound
  }

  // Randomly make the number positive or negative
  positiveOrNegative(number) {
    return (number *= Math.floor(Math.random() * 2) == 1 ? 1 : -1)
  }

  // Generate a random number up until an upperBound
  getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * this.upperBound) + 1

    return this.positiveOrNegative(randomNumber)
  }

  getXY() {
    const x = this.getRandomNumber()
    const y = this.getRandomNumber()

    return [x, y]
  }
}

const numberCruncher = new NumberCruncher(4)

const usePositions = (gridItems, { xOffset }) =>
  useTransition(gridItems, {
    keys: item => item.word,
    from: ({ xy, width, height }) => ({
      xy: [xOffset, 0],
      skew: numberCruncher.getXY(),
      width,
      height,
      opacity: 0,
    }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: ({ xy, width, height }) => {
      return {
        xy: [xOffset, 0],
        opacity: 0,
      }
    },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

export default usePositions
