import React from "react"

import Cover from "./cover"
import ApartmentDrawing from "./apartment-drawing"
import LineBreak from "./line-breaks"
import RejectingMaterialismChart from "./rejecting-materialism"
import Reflections from "./reflections"
import Attention from "./attention"
import InstagramPostMap from "./instagram-post-map"
import PointingFingers from "./pointing-fingers"
import SpringPoem from "./spring-poem"
import PodcatRatings from "./podcast-ratings"
import LimerickMinute from "./limerick-minute"
import BarbershopsAreClosed from "./barbershops-are-closed"
import DescentIntoMadness from "./descent-into-madness"
import Nav from "../../pages/navBar"

import Sext from "./sext-ed"
import Credits from "./credits"

const Issue1 = () => {
  return (
    <>
      <Nav />
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
      <LineBreak fileName="morse-because-theres" />
      <PointingFingers />
      <LineBreak fileName="morse-nothing-better" />
      <SpringPoem />
      <LineBreak fileName="morse-to-do-today" />
      <PodcatRatings />
      <LineBreak fileName="boring-line" />
      <LimerickMinute />
      <LineBreak fileName="boring-line" />
      <BarbershopsAreClosed />
      <LineBreak fileName="boring-line" />
      <DescentIntoMadness />
      <LineBreak fileName="boring-line" />
      <Sext />
      <LineBreak fileName="boring-line" />
      <Credits />
    </>
  )
}

export default Issue1
