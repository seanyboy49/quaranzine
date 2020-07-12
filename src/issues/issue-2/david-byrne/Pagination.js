import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { TextBox } from "./styled"
import { mediaQueries } from "../../../styles/layout"

const MiniImg = styled(Img)`
  margin: 10px;
  width: 35px;

  transition: 0.2s;
  transform: ${({ isAdjacent }) => isAdjacent && `scale(1.3)`}};
`

const ImgWrap = styled.div`
  :hover {
    ${MiniImg} {
      transition: 0.2s;
      cursor: pointer;
      transform: scale(2);
    }
  }
`

const PaginationWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  padding: 15px;

  ${mediaQueries.phoneWide} {
    justify-content: flex-start;
    margin: 5% 0;
  }
`

const Pagination = ({ albums, albumIndex, onClick }) => {
  // Needs to be undefined, because you can do math with null
  const [hoveredIndex, setHoveredIndex] = useState(undefined)

  return (
    <PaginationWrap>
      {albums.map((album, index) => {
        const isActive = index === albumIndex
        const isAdjacent = Math.abs(hoveredIndex - index) === 1

        return (
          <ImgWrap
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(undefined)}
            key={album.year}
            onClick={() => onClick(index)}
          >
            <MiniImg
              isAdjacent={isAdjacent}
              fluid={album.miniImg.childImageSharp.fluid}
            />
            {isActive && <TextBox>{album.year}</TextBox>}
          </ImgWrap>
        )
      })}
    </PaginationWrap>
  )
}

export default Pagination
