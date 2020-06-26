import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Background } from "./styled"
import albumByYearData from "./albumsByYear"

function mapImagesToAlbums(albumsByYear, bigImages, miniImages) {
  return albumsByYear.map(album => {
    const bigImg = bigImages.nodes.find(node => node.name === album.year)
    const miniImg = miniImages.nodes.find(node => node.name === album.year)

    return {
      ...album,
      bigImg,
      miniImg,
    }
  })
}
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

  console.log("currentAlbum", currentAlbum)

  return (
    <Background backgroundColor={currentAlbum.backgroundColor}>
      <h1>David Byrne</h1>
    </Background>
  )
}

export default DavidByrne
