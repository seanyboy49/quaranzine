import styled, { css } from "styled-components"
import theme from "./theme"
import { mediaQueries } from "./layout"

const color = css`
  ${p =>
    p.black &&
    css`
      color: ${theme.black};
    `};
  ${p =>
    p.pink &&
    css`
      color: ${theme.pink};
    `};

  ${p =>
    p.white &&
    css`
      color: ${theme.white};
    `};
`

export const align = css`
  ${p =>
    p.center &&
    css`
      text-align: center;
    `};
  ${p =>
    p.right &&
    css`
      text-align: right;
    `};
`

export const H1 = styled.h1`
  font-family: "HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue";
  font-size: 30px;
  line-height: 33px;
  color: ${theme.pink};
  ${color};
  ${align};

  ${mediaQueries.phoneWide} {
    font-size: 20px;
    line-height: 25px;
  }
`

export const H2 = styled.h2`
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium", "Helvetica Neue";
  font-size: 25px;
  line-height: 28px;
  color: ${theme.pink};
  ${color};
  ${align};

  ${mediaQueries.phoneWide} {
    font-size: 15px;
    line-height: 20px;
  }
`

export const Text = styled.p`
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium", "Helvetica Neue";
  font-size: 17px;
  line-height: 20px;
  color: ${theme.black};
  width: 100%;
  ${color};
  ${align};

  ${mediaQueries.phoneWide} {
    font-size: 15px;
  }
`
