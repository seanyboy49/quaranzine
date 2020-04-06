import React from "react"

import Cover from "./cover"
import ApartmentDrawing from "./apartment-drawing"
import LineBreak from "./line-breaks"

import Sext from "./sext-ed"
import Credits from "./credits"

const Issue1 = () => {
  return (
    <>
      <Cover />
      <LineBreak fileName="morse-follow-me" />
      <ApartmentDrawing />
      <LineBreak fileName="morse-into-the-void" />

      <Sext />
      <Credits />
    </>
  )
}

export default Issue1
