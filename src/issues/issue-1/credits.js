import React from "react"
import styled from "styled-components"

import { PaddedWidthContainer, Row } from "../../styles/layout"
import { H1, H2, Text } from "../../styles/text"

const StyledH1 = styled(H1)`
  width: 100%;
`

const StyledH2 = styled(H2)`
  width: 100%;
  margin-bottom: 0;
`

const Credits = () => {
  return (
    <PaddedWidthContainer id="credits">
      <Row>
        <StyledH1 center>credits</StyledH1>
        <StyledH2>founders:</StyledH2>
        <Text>
          Diego Carbajal
          <br />
          Charlene Kaye
          <br />
          JG Debray
        </Text>

        <StyledH2>art direction:</StyledH2>
        <Text>JG Debray</Text>

        <StyledH2>developers:</StyledH2>
        <Text>
          Sean Lee
          <br />
          Jina Zhu
        </Text>

        <StyledH2>contributors:</StyledH2>
        <Text>
          Pierre Chazot
          <br />
          Yianni Tzitzifas
          <br />
          Kimberley Chou Tsun An
          <br />
          Ford Donovan
        </Text>
      </Row>
    </PaddedWidthContainer>
  )
}

export default Credits
