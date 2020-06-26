import styled from "styled-components"
import grit from "./grit"

export const Background = styled.div`
  height: 100vh;
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: url(${grit});
`

export const FlexContainer = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
`

export const AnimatedWordContainer = styled.div`
  margin: auto;
  background-color: lightgreen;
  width: 100%;
`

export const ImgWrap = styled.div`
  margin: auto;
  display: block;
  height: 385px;
  src: url(${({ src }) => src});
  z-index: 1;
  padding: 20px;
`
export const Img = styled.img`
  height: 385px;
  src: url(${({ src }) => src});
`

export const ImgMini = styled.img`
  margin: 15px;
  width: ${({ size }) => size}px;
  src: url(${({ src }) => src});

  :hover {
    cursor: pointer;
  }
`

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`

// export const AnimatedTextWrap = styled(animated.div)`
//   padding: 10px 20px;
//   position: absolute;
//   will-change: transform, width, height, opacity;
// `

export const TextBox = styled.div`
  display: inline-block;
  padding: 10px 15px;
  background: ${({ color }) => color || "white"};
  box-shadow: 5px 5px;
  font-family: "arial";
  font-size: 20px;
  text-align: center;
`

export const Text = styled.div`
  font-family: "arial";
  font-size: 22px;
  text-align: center;
  margin: auto 0;
  color: ${({ color }) => color || "black"};
`

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const MiniIconWrap = styled.div`
  display: flex;
  flex-direction: column;
`
