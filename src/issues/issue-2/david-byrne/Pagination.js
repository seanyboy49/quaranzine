import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { TextBox } from "./styled"
import { mediaQueries } from "../../../styles/layout"

const MiniImg = styled(Img)`
  z-index: 1000;
  margin: 10px;
  width: 35px;

  transition: 0.4s;
  transform: ${({ isAdjacent }) => isAdjacent && `scale(1.3)`}};
`

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    ${MiniImg} {
      transition: 0.2s;
      cursor: pointer;
      transform: scale(1.8);
    }
  }
`

const PaginationWrap = styled.div`
  // width: 100%;
  display: flex;
  justify-content: center;
  margin: 2% 0;
  overflow-x: scroll;
  padding: 15px;

  ${mediaQueries.phoneWide} {
    justify-content: flex-start;
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
              fixed={album.miniImg.childImageSharp.fixed}
            />
            {isActive && (
              <TextBox style={{ marginTop: "10px" }}>{album.year}</TextBox>
            )}
          </ImgWrap>
        )
      })}
    </PaginationWrap>
  )
}

export default Pagination
