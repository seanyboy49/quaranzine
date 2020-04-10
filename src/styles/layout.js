import styled, { css } from "styled-components"

export const breakpoints = {
  phoneWide: `(max-width: 600px)`,
  tabletWide: `(max-width: 880px)`,
  laptop: `(max-width: 1024px)`,
  desktop: `(max-width: 1440px)`,
}

export const mediaQueries = Object.entries(breakpoints)
  .map(([media, query]) => {
    return {
      [media]: `@media only screen and ${query}`,
    }
  })
  .reduce((mediaQueries, query) => {
    return {
      ...mediaQueries,
      ...query,
    }
  }, {})

export const PaddedWidthContainer = styled.section`
    padding: 73.5px 145px;

  ${mediaQueries.tabletWide} {
    padding: 28px 56px;
  }
`
export const FullWidthContainer = styled.section`
    padding: 145px 0;

  ${mediaQueries.tabletWide} {
    padding: 56px 0;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;

  ${mediaQueries.tabletWide} {
    flex-direction: column;
    align-items: center;

    ${p =>
      p.reverseColumn &&
      css`
        flex-direction: column-reverse;
      `}
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
  align-items: ${props => props.align || "center"};

  ${mediaQueries.tabletWide} {
    width: 100%;
  }
`

export const FluidImageContainer = styled.div`
  width: ${props => props.desktop || 70}%;

  ${mediaQueries.phoneWide} {
    width: ${props => props.mobile || 90}%;
  }
`
