import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

import Header from "./Header"
import AnimatedWords from "./AnimatedWords"
import Pagination from "./Pagination"

import useMedia from "./useMedia"
import useMeasure from "./useMeasure"
import usePositions from "./usePositions"
import albumByYearData from "./albumsByYear.js"
import { mapImagesToAlbums, calculateGridItems } from "./utility"
import { Background, Text, FlexContainer, ImgWrap } from "./styled"

const xOffset = window.innerWidth / 2
const yOffset = 212

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
  const words = currentAlbum.words

  // Hook1: Tie media queries to the number of columns
  const numberOfColumns = useMedia(
    ["(min-width: 1440px)", "(min-width: 1000px)"],
    [4, 3],
    2
  )

  // Hook2: Measure the width of the container element
  const [ref, { width: containerWidth }] = useMeasure()

  const half = Math.ceil(words.length / 2)
  const firstHalfWords = words.slice(0, half)
  const secondHalfWords = words.slice(half)

  // Transform items to give them animatable values
  const [leftHeights, leftGridItems] = calculateGridItems({
    numColumns: numberOfColumns,
    items: firstHalfWords,
    width: containerWidth,
  })

  const [rightHeights, rightGridItems] = calculateGridItems({
    numColumns: numberOfColumns,
    items: secondHalfWords,
    width: containerWidth,
  })

  //Hook3: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const renderLeftTransitions = usePositions(leftGridItems, {
    xOffset,
    yOffset,
  })

  const renderRightTransitions = usePositions(rightGridItems, {
    xOffset: -xOffset,
    yOffset,
  })
  console.log("render")

  return (
    <Background backgroundColor={currentAlbum.backgroundColor}>
      <Header currentAlbum={currentAlbum} />

      <FlexContainer>
        <AnimatedWords
          forwardedRef={ref}
          heights={leftHeights}
          renderTransitions={renderLeftTransitions}
        />

        <ImgWrap>
          <Img fluid={currentAlbum.bigImg.childImageSharp.fluid} />
        </ImgWrap>

        <AnimatedWords
          forwardedRef={ref}
          heights={rightHeights}
          renderTransitions={renderRightTransitions}
        />
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

// const Masonry = () => {
//   console.log("render")
//   const { mini, big } = useStaticQuery(graphql`
//     query {
//       mini: allFile(
//         filter: { relativeDirectory: { eq: "issue-2/david-byrne/mini" } }
//       ) {
//         ...ImageFragment
//       }
//       big: allFile(
//         filter: { relativeDirectory: { eq: "issue-2/david-byrne/big" } }
//       ) {
//         ...ImageFragment
//       }
//     }
//   `)
//   // Map images to album data
//   const albums = mapImagesToAlbums(albumByYearData, big, mini)
//   const [albumIndex, setAlbumIndex] = useState(0)

//   // Hook1: Tie media queries to the number of columns
//   const columns = useMedia(
//     ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
//     [5, 4, 3],
//     2
//   )
//   // Hook2: Measure the width of the container element
//   const [bind, { width }] = useMeasure()
//   // Hook3: Hold items
//   const [items, set] = useState(data)
//   // Hook4: shuffle data every 2 seconds
//   // useEffect(() => void setInterval(() => set(_.shuffle), 2000), [])
//   // Form a grid of stacked items using width & columns we got from hooks 1 & 2
//   let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
//   let gridItems = items.map((child, i) => {
//     const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
//     const xy = [
//       (width / columns) * column,
//       (heights[column] += child.height / 2) - child.height / 2,
//     ] // X = container width / number of columns * column index, Y = it's just the height of the current column
//     return { ...child, xy, width: width / columns, height: child.height / 2 }
//   })
//   // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
//   const transitions = useTransition(gridItems, item => item.css, {
//     from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
//     enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
//     update: ({ xy, width, height }) => ({ xy, width, height }),
//     leave: { height: 0, opacity: 0 },
//     config: { mass: 5, tension: 500, friction: 100 },
//     trail: 25,
//   })
//   // Render the grid
//   return (
//     <>
//       <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
//         {transitions.map(({ item, props: { xy, ...rest }, key }) => (
//           <a.div
//             key={key}
//             style={{
//               transform: xy.interpolate(
//                 (x, y) => `translate3d(${x}px,${y}px,0)`
//               ),
//               ...rest,
//             }}
//           >
//             <div style={{ backgroundImage: item.css }} />
//           </a.div>
//         ))}
//       </div>
//       <Pagination
//         albums={albums}
//         albumIndex={albumIndex}
//         onClick={() => set(_.shuffle)}
//       />
//     </>
//   )
// }
// export default Masonry
