import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Pagination from "./Pagination"

import useMedia from "./useMedia"
import albumByYearData from "./albumsByYear.js"
import { mapImagesToAlbums } from "./utility"
import { Background, Text, FlexContainer, ImgWrap } from "./styled"

const DavidByrne = () => {
  // Query images
  const { mini, big } = useStaticQuery(graphql`
    query {
      mini: allFile(
        filter: { relativeDirectory: { eq: "issue-2/david-byrne/mini" } }
      ) {
        ...ImageFragment
      }
      big: allFile(
        filter: { relativeDirectory: { eq: "issue-2/david-byrne/big" } }
      ) {
        ...ImageFragment
      }
    }
  `)
  // Map images to album data
  const albums = mapImagesToAlbums(albumByYearData, big, mini)

  // Keep track of current album
  const [albumIndex, setAlbumIndex] = useState(0)
  const currentAlbum = albums[albumIndex]

  // Hook1: Tie media queries to the number of columns
  const numberOfColumns = useMedia(
    ["(min-width: 1440px)", "(min-width: 1000px)"],
    [4, 3],
    2
  )
  console.log("numberOfColumns", numberOfColumns)

  return (
    <Background backgroundColor={currentAlbum.backgroundColor}>
      <Header currentAlbum={currentAlbum} />

      <FlexContainer>
        <ImgWrap>
          <Img fluid={currentAlbum.bigImg.childImageSharp.fluid} />
        </ImgWrap>
      </FlexContainer>

      <Text>{currentAlbum.title}</Text>
      <Pagination
        albums={albums}
        albumIndex={albumIndex}
        onClick={setAlbumIndex}
      />
    </Background>
  )
}

export default DavidByrne
