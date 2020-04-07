import styled from "styled-components"
import theme from "./theme"

// export const StyledH1 = styled.h1`
//   color: black;
//   margin: 0;
//   text-align: ${props => props.textAlign};
// `

export const H1 = styled.h1`
  font-family: "HelveticaNeue-Bold";
  font-size: 30px;
  line-height: 40px;
  color: ${theme.pink};

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 25px;
  }
`

export const H2 = styled.h2`
  font-family: "HelveticaNeue-Medium";
  font-size: 25px;
  line-height: 35px;
  color: ${theme.pink};

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
`

export const Text = styled.p`
  font-family: "HelveticaNeue-Medium";
  font-size: 17px;
  color: ${theme.black};

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`
