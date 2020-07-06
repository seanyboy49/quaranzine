import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Cover from "./cover"
import DavidByrne from "./david-byrne"
import FavoriteSmells from "./fav-smells"
import Nyc360 from "./nyc-360"
import Paradise from "./gate-of-paradise"
import Wedding from "./wedding/post-wedding"
import DogsMind from "./dogs-mind"
import MissNewYork from "./miss-newyork"
import DJBan from "./dj-ban"

const Issue2 = () => {
  return (
    <>
      <Cover />
      <DavidByrne />
      <Paradise />
      <FavoriteSmells />
      <Nyc360 />
      <DogsMind />
      <MissNewYork />
      <DJBan />
      <Wedding />
    </>
  )
}

export default Issue2
