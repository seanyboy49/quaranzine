import styled, { css } from "styled-components"

const breakpoints = {
  phoneWide: `@media only screen and (max-width: 600px)`,
  tabletWide: `@media only screen and (max-width: 880px)`,
  laptop: `@media only screen and (max-width: 1024px)`,
  desktop: `@media only screen and (max-width: 1440px)`,
}

export const PaddedWidthContainer = styled.section`
  padding: 73.5px 145px;

  ${breakpoints.phoneWide} {
    padding: 28px 56px;
  }
`
export const FullWidthContainer = styled.section`
  padding: 145px 0;

  ${breakpoints.phoneWide} {
    padding: 56px 0;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;

  ${breakpoints.tabletWide} {
    flex-direction: column;
    align-items: center;
  }

  ${p =>
    p.center &&
    css`
      justify-content: center;
    `};

  ${p =>
    p.start &&
    css`
      justify-content: flex-start;
    `};

  ${p =>
    p.end &&
    css`
      justify-content: flex-end;
    `};
`

export const Column = styled.div`
  display: flex;
  width: ${props => props.width || 50}%;
  flex-direction: column;
  align-items: center;

  ${breakpoints.tabletWide} {
    width: 100%;
  }
`

export const CustomPosition = styled.div`
  position: absolute;
  right: 0;
`
