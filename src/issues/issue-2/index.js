import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import DavidByrne from "./david-byrne"
import FavoriteSmells from "./fav-smells"
import Nyc360 from "./nyc-360"
import Paradise from "./gate-of-paradise"
import Cover from "./cover"

const Issue2 = () => {
  return (
    <>
      <Cover />
      {/* <DavidByrne /> */}
      <Paradise />
      <FavoriteSmells />
      <Nyc360 />
    </>
  )
}

export default Issue2
