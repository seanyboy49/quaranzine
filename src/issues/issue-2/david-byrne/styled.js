import styled, { css } from "styled-components"
import { animated } from "react-spring"

import grit from "./grit"
import { mediaQueries } from "../../../styles/layout"

export const Background = styled.div`
  height: 110vh;
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: url(${grit});
`

export const FlexContainer = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-around;

  ${mediaQueries.phoneWide} {
    flex-direction: column;
    height: 70vh;
  }
`

export const AnimatedWordContainer = styled.div`
  margin: auto;
  background-color: lightgreen;
  width: 100%;
  padding-left: 20px;
`

export const ImgWrap = styled.div`
  margin: auto;
  display: block;
  width: 45%;
  z-index: 1;
  padding: 30px;
`

export const AnimatedTextWrap = styled(animated.div)`
  position: absolute;
  will-change: transform, width, height, opacity;
`

export const TextBox = styled.div`
  display: inline-block;
  background: ${({ color }) => color || "white"};
  padding: 0.3em 0.4em;
  box-shadow: 5px 5px;
  font-family: "arial";
  font-weight: ${({ bold }) => bold && `900`};
  text-align: center;

  font-size: clamp(12px, 1rem + 1vw, 24px);

  ${mediaQueries.phoneWide} {
    padding: 5px 10px;
    font-size: clamp(10px, 1rem + 1vw, 16px);
  }
`

export const Text = styled.div`
  font-family: "arial";
  text-align: center;
  margin: auto 0;
  color: ${({ color }) => color || "black"};
  font-weight: ${({ bold }) => bold && `900`};
  font-size: ${({ fontSize }) => `${fontSize}px` || "22px"};
`
