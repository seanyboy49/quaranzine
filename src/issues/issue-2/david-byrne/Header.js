import React from "react"
import styled from "styled-components"

import { TextBox, Text } from "./styled"

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`

const Header = ({ currentAlbum }) => {
  return (
    <TitleWrap>
      <TextBox bold fontSize={30} color={"#38a4d6"}>
        David Byrne's
      </TextBox>
      <Text bold fontSize={30} color={currentAlbum.textColor}>
        {currentAlbum.year}
      </Text>
      <TextBox bold fontSize={30} color={"#38a4d6"}>
        oft used words
      </TextBox>
    </TitleWrap>
  )
}

export default Header
