import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Pagination from "./Pagination"

import { Background, Text } from "./styled"
import albumByYearData from "./albumsByYear.js"
import { mapImagesToAlbums } from "./utility"

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

  return (
    <Background backgroundColor={currentAlbum.backgroundColor}>
      <Header currentAlbum={currentAlbum} />
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
