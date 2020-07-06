import styled from "styled-components"
import { mediaQueries } from "../../../styles/layout"

export const Background = styled.div`
  background-color: #f8a9a4;
  padding: 0;
  margin: 0;
`
export const TitleWrapper = styled.div`
  position: relative;
`
export const Title = styled.h1`
  padding: 2rem 3rem;
  margin: 0;
  font-size: 6rem;

  ${mediaQueries.tabletWide} {
    padding: 1rem 0.5rem;
    font-size: 4.7rem;
  }
`
export const Authors = styled.h3`
  position: absolute;
  right: 10%;
  top: 70%;
  text-align: right;
  font-size: 1.5rem;

  ${mediaQueries.tabletWide} {
    position: relative;
    text-align: left;
    margin: 3% 0rem 5% 14%;
    font-size: 1.5rem;
  }
`
export const Cover = styled.div`
  padding: 0;
  margin: 0;
`
export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 3rem;

  ${mediaQueries.tabletWide} {
    margin: 2rem;
  }
`
export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${mediaQueries.tabletWide} {
    flex-direction: ${props => props.direction || "column"};
  }
`
export const ArticleText = styled.div`
  font-size: 1.25rem;
  margin: ${props => props.marginTop || 2}rem 3rem 2rem 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-basis: 50%;

  ${mediaQueries.tabletWide} {
    flex-basis: 0%;
    margin: 1rem;
  }
`
export const ImageWrapper = styled.div`
  padding: 0;
  margin: 0;
  flex-basis: 30%;

  ${mediaQueries.tabletWide} {
    flex-basis: 0%;
    height: 100%;
    width: 100%;
  }
`
export const P = styled.p`
  font-size: ${props => props.fontSize}rem;
  margin: 1rem;
  margin-left: ${props => props.marginLeft}rem;

  ${mediaQueries.tabletWide} {
    margin: 0.5rem 0rem;
    font-size: ${props => props.fontSize}rem;
  }

  ${mediaQueries.phoneWide} {
    margin: 0.5rem 0rem;
    font-size: ${props => props.fontSize - 0.3}rem;
  }
`
