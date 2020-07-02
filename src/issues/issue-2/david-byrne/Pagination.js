import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { TextBox, Text } from "./styled"

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
  display: flex;
  justify-content: center;
  overflow-x: scroll;
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
              <TextBox size={16}>{album.year}</TextBox>
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
