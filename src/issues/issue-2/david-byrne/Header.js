import React from "react"
import styled from "styled-components"

import { TextBox, Text } from "./styled"
import grit from "./grit"
import { mediaQueries } from "../../../styles/layout"

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 10px;
`

const HeaderText = styled(TextBox)`
  font-size: clamp(14px, 1.5rem + 1vw, 32px);
  background-image: url(${grit});

  ${mediaQueries.phoneWide} {
    font-size: 19px;
    padding: 15px 10px;
  }
`

const Header = ({ currentAlbum, isPhoneWide }) => {
  if (isPhoneWide) {
    return (
      <TitleWrap>
        <HeaderText bold color={"#38a4d6"}>
          David Byrne's oft used words
        </HeaderText>
      </TitleWrap>
    )
  }

  return (
    <TitleWrap>
      <HeaderText bold color={"#38a4d6"}>
        David Byrne's
      </HeaderText>

      <Text large bold color={currentAlbum.textColor}>
        {currentAlbum.year}
      </Text>

      <HeaderText bold color={"#38a4d6"}>
        oft used words
      </HeaderText>
    </TitleWrap>
  )
}

export default Header
