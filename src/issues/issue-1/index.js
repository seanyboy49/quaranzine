import React from "react"

import Cover from "./cover"
import ApartmentDrawing from "./apartment-drawing"
import LineBreak from "./line-breaks"
import Chart from "./chart"

const Issue1 = () => {
  return (
    <>
      <Cover />
      <LineBreak fileName="morse-follow-me" />
      <ApartmentDrawing />
      <LineBreak fileName="morse-into-the-void" />
      <Chart />
    </>
  )
}

export default Issue1
