import React from "react"
import { Carousel } from "react-responsive-carousel"

const FavoriteSmells = () => {
  return (
    <Carousel autoPlay>
      <div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
            width="100"
          />
          <p className="legend">Legend 1</p>
        </div>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  )
}

export default FavoriteSmells
