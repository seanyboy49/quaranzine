import React from "react"
import styled from "styled-components"

import { PaddedWidthContainer, Row } from "../../styles/layout"
import { Text } from "../../styles/text"

const P = styled(Text)`
  font-size: 25px;
  margin: 0.5em 0;
`

const Credits = () => {
  return (
    <PaddedWidthContainer>
      <P>credits</P>

      <P>founders:</P>
      <P right>Diego Carbajal</P>
      <P right>Charlene Kaye</P>
      <P right>JG Debray</P>

      <P>art direction:</P>
      <P right>JG Debray</P>

      <P>developers:</P>
      <P right>Jina Zhu</P>
      <P right>Sean Lee</P>

      <P>contributors:</P>
      <P right>Leah Yen Jarret</P>
      <P right>Caitlin Hohn</P>
      <P right>Dustin Willoughby</P>
      <P right>Connie Zhou</P>
      <P right>Liann Kaye</P>

      <P>all artwork except where credited by JG Debray</P>
    </PaddedWidthContainer>
  )
}

export default Credits
