import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { TextBox, Text } from "./styled"

const MiniImg = styled(Img)`
  margin: 15px;
  width: 50px;

  :hover {
    cursor: pointer;
  }
`

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
`

const Pagination = ({ albums, albumIndex, onClick }) => {
  return (
    <PaginationWrap>
      {albums.map((album, index) => {
        return (
          <div key={index} onClick={() => onClick(index)}>
            <MiniImg fluid={album.miniImg.childImageSharp.fluid} />
            {index === albumIndex ? (
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
