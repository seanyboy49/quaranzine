import React from "react"

import quarantineTrimsVideo from "../../gifs/quarantine-trims.mp4"
import { PaddedWidthContainer } from "../../styles/layout"
import { H2 } from "../../styles/text"
import "./video.css"

const BarbershopsAreClosed = () => {
  return (
    <PaddedWidthContainer id="barbershops-are-closed">
      <H2 center>
        all the barbershops in
        <br />
        new york city are closed
      </H2>
      <video
        style={{ margin: "auto auto", display: "block", maxWidth: "80%" }}
        autoPlay
        loop
        muted
        playsInline
        defaultMuted
        src={quarantineTrimsVideo}
      >
        <source src={quarantineTrimsVideo} type="video/mp4" />
        <img
          src={quarantineTrimsVideo}
          alt="beating heart full of coronavirus"
        />
      </video>
    </PaddedWidthContainer>
  )
}

export default BarbershopsAreClosed
