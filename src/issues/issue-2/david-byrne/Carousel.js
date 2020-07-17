import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useTransition, animated } from "react-spring"

import { TextBox } from "./styled"

const MiniImg = styled(Img)`
  z-index: 1000;
  margin: 15px;
  width: 35px;

  transition: 0.4s;
  transform: ${({ isActive }) => isActive && `scale(1.8)`}};
`

const ImgWrap = styled(animated.div)`
  will-change: transform, opacity;
  position: relative;
  // width: 100%;
  margin: auto;
  border: 1px solid blue;
  text-align: center;
  display: inline-block;
`

const CarouselWrap = styled.div`
  border: 5px solid black;
  display: block;
  margin: 5% 0;
`

const getListFromAdjacent = (array, index) => {
  const lastIdx = array.length - 1
  let previous, current, next

  // first item in the list
  if (index === 0) {
    previous = { item: array[lastIdx], index: lastIdx }
    current = { item: array[index], index }
    next = { item: array[index + 1], index: index + 1 }
  }
  // last item in the list
  else if (index === lastIdx) {
    console.log("last array", array)
    previous = { item: array[lastIdx - 1], index: lastIdx - 1 }
    current = { item: array[lastIdx], index: lastIdx }
    next = { item: array[0], index: 0 }
  } else {
    previous = { item: array[index - 1], index: index - 1 }
    current = { item: array[index], index }
    next = { item: array[index + 1], index: index + 1 }
  }

  previous.position = "previous"
  current.position = "current"
  next.position = "next"

  return [previous, current, next]
}

const Carousel = ({ albums, albumIndex, onClick }) => {
  const [carousel, setCarousel] = useState(getListFromAdjacent(albums, 0))
  console.log("carousel", carousel)

  const renderTransitions = useTransition(carousel, {
    keys: ({ index }) => index,
    from: props => {
      return { x: 0, opacity: 0 }
    },
    enter: ({ position }) => {
      if (position === "previous") {
        return { x: 10, opacity: 1 }
      } else if (position === "next") {
        return { x: -10, opacity: 1 }
      } else return { x: 0, opacity: 1 }
    },
    update: props => {
      //   console.log("update", props)
      // return { x: -10 }
    },
    leave: ({ position }) => {
      if (position === "previous") {
        return { x: -10, opacity: 0 }
      } else if (position === "next") {
        return { x: 10, opacity: 0 }
      }
    },

    // trail: 250,
  })

  return (
    <CarouselWrap>
      {renderTransitions(({ x, ...rest }, { item, index }) => {
        console.log("index", index)
        const isActive = index === albumIndex
        // console.log("x", x)
        return (
          <>
            <ImgWrap
              key={item.year}
              onClick={() => {
                onClick(index)
                setCarousel(getListFromAdjacent(albums, index))
              }}
              style={{
                transform: x.to(x => {
                  // console.log("x", x)
                  return `translate3d(${x}px, 0, 0)`
                }),
                ...rest,
              }}
            >
              <MiniImg
                isActive={isActive}
                fixed={item.miniImg.childImageSharp.fixed}
              />
            </ImgWrap>
          </>
        )
      })}
    </CarouselWrap>
  )

  //   return (
  //     <CarouselWrap>
  //       {carousel.map(({ item, index }, idx) => {
  //         const isActive = index === albumIndex

  //         return (
  //           <ImgWrap
  //             key={item.year}
  //             onClick={() => {
  //               onClick(index)
  //               setCarousel(getListFromAdjacent(albums, index))
  //             }}
  //           >
  //             <MiniImg
  //               isActive={isActive}
  //               fixed={item.miniImg.childImageSharp.fixed}
  //             />
  //             {isActive && (
  //               <TextBox style={{ marginTop: "10px" }}>{item.year}</TextBox>
  //             )}
  //           </ImgWrap>
  //         )
  //       })}
  //     </CarouselWrap>
  //   )
}

export default Carousel
