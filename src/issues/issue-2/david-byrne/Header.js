import React from "react"
import styled from "styled-components"

import { TextBox, Text } from "./styled"
import grit from "./grit"

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 10px;
`

const HeaderText = styled(TextBox)`
  font-size: clamp(12px, 1.5rem + 1vw, 32px);
  background-image: url(${grit});
`

const Header = ({ currentAlbum }) => {
  return (
    <TitleWrap>
      <HeaderText bold color={"#38a4d6"}>
        David Byrne's
      </HeaderText>
      <Text bold color={currentAlbum.textColor}>
        {currentAlbum.year}
      </Text>
      <HeaderText bold color={"#38a4d6"}>
        oft used words
      </HeaderText>
    </TitleWrap>
  )
}

export default Header
