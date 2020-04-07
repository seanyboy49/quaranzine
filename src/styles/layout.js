import styled, { css } from "styled-components"

export const PaddedWidthContainer = styled.section`
  padding: 73.5px 145px;

  @media only screen and (max-width: 600px) {
    padding: 28px 56px;
  }
`
export const FullWidthContainer = styled.section`
  padding: 145px 0;

  @media only screen and (max-width: 600px) {
    padding: 56px 0;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

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
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Column = styled.div`
    display: flex;
    width: ${props => props.width || 50}%;
    flex-direction: column;
    align-items: ${props => props.align || "center"};
`
