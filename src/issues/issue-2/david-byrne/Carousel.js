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
  margin: auto;
  text-align: center;
`

const CarouselWrap = styled.div`
  display: flex;
  margin: 5% auto;
  width: 80%;
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
    leave: ({ position }) => {
      if (position === "previous") {
        return { x: -10, opacity: 0, position: "absolute" }
      } else if (position === "next") {
        return { x: 10, opacity: 0, position: "absolute" }
      }
    },
    config: { mass: 5, tension: 500, friction: 100 },
  })

  return (
    <CarouselWrap>
      {renderTransitions(({ x, ...rest }, { item, index }) => {
        const isActive = index === albumIndex

        return (
          <>
            <ImgWrap
              key={index}
              onClick={() => {
                onClick(index)
                setCarousel(getListFromAdjacent(albums, index))
              }}
              style={{
                transform: x.to(x => `translate3d(${x}px, 0, 0)`),
                ...rest,
              }}
            >
              <MiniImg
                isActive={isActive}
                fixed={item.miniImg.childImageSharp.fixed}
              />
              {isActive && <TextBox>{item.year}</TextBox>}
            </ImgWrap>
          </>
        )
      })}
    </CarouselWrap>
  )
}

export default Carousel
