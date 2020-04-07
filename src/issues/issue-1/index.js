import React from "react"

import Cover from "./cover"
import ApartmentDrawing from "./apartment-drawing"
import LineBreak from "./line-breaks"
import RejectingMaterialismChart from "./rejecting-materialism"
import Reflections from "./reflections"
import Attention from "./attention"
import InstagramPostMap from "./instagram-post-map"

const Issue1 = () => {
  return (
    <>
      <Cover />
      <LineBreak fileName="morse-follow-me" />
      <ApartmentDrawing />
      <LineBreak fileName="morse-into-the-void" />
      <RejectingMaterialismChart />
      <LineBreak fileName="boring-line" />
      <Reflections />
      <Attention />
      <LineBreak fileName="boring-line" />
      <InstagramPostMap />
    </>
  )
}

export default Issue1
