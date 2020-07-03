import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { TextBox, Text } from "./styled"
import { mediaQueries } from "../../../styles/layout"

const MiniImg = styled(Img)`
  margin: 15px;
  width: 50px;

  transform: ${({ active }) => active && `scale(1.3)`};
  transition: 0.3s;

  :hover {
    cursor: pointer;
  }
`

const PaginationWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: scroll;

  ${mediaQueries.phoneWide} {
    justify-content: flex-start;
    margin: 5% 0;
  }
`

const Pagination = ({ albums, albumIndex, onClick }) => {
  return (
    <PaginationWrap>
      {albums.map((album, index) => {
        const isActive = index === albumIndex

        return (
          <div key={album.year} onClick={() => onClick(index)}>
            <MiniImg
              active={isActive}
              fluid={album.miniImg.childImageSharp.fluid}
            />
            {isActive ? (
              <TextBox>{album.year}</TextBox>
            ) : (
              <Text color={albums[albumIndex].textColor}>{album.year}</Text>
            )}
          </div>
        )
      })}
    </PaginationWrap>
  )
}

export default Pagination
