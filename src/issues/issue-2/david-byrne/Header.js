import React from "react"

import { TitleWrap, TextBox, Text } from "./styled"

const Header = ({ currentAlbum }) => {
  return (
    <TitleWrap>
      <TextBox color={"#38a4d6"}>David Byrne's</TextBox>
      <Text color={currentAlbum.textColor}>{currentAlbum.year}</Text>
      <TextBox color={"#38a4d6"}>oft used words</TextBox>
    </TitleWrap>
  )
}

export default Header
