import styled from "styled-components"
import grit from "./grit"

export const Background = styled.div`
  height: 100vh;
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: url(${grit});
`
