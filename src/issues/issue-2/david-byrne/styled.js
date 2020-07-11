import styled, { css } from "styled-components"
import { animated } from "react-spring"

import grit from "./grit"
import { mediaQueries } from "../../../styles/layout"

export const Background = styled.div`
  height: 100%;
  padding: 1em 0;
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: url(${grit});
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;

  ${mediaQueries.phoneWide} {
    flex-direction: column;
  }
`

export const AnimatedWordContainer = styled.div`
  margin: auto;

  width: 100%;
`

export const ImgWrap = styled.div`
  margin: auto;
  display: block;
  width: 45%;
  z-index: 1;
  padding: 30px;

  ${mediaQueries.phoneWide} {
    padding: 1em;
  }
`

export const AnimatedTextWrap = styled(animated.div)`
  position: absolute;
  will-change: transform, width, height, opacity;
  padding-left: 10px;
`

export const TextBox = styled.div`
  display: inline-block;
  background: ${({ color }) => color || "white"};
  padding: 0.3em 0.4em;
  box-shadow: 5px 5px;
  font-family: "arial";
  font-weight: ${({ bold }) => bold && `900`};
  text-align: center;

  font-size: clamp(12px, 1rem + 0.5vw, 24px);

  ${mediaQueries.phoneWide} {
    padding: 5px 10px;
    font-size: clamp(8px, 1rem, 14px);
  }
`

export const Text = styled.div`
  font-family: "arial";
  text-align: center;
  margin: auto 0;
  color: ${({ color }) => (color && color) || "black"};
  font-weight: ${({ bold }) => bold && `900`};
  font-size: clamp(12px, 1rem + 0.5vw, 24px);
`

export const WordCountContainer = styled.div`
  border: 0.2em solid ${({ color }) => color || "black"};
  position: absolute;
  right: 14vw;
  padding: 0.5em;

  ${mediaQueries.phoneWide} {
    max-width: 50vw;
    right: initial;
    margin: auto;
    margin-top: 0.2em;
    position: relative;
  }
`
