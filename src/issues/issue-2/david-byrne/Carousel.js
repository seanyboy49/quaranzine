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
  transform: ${({ isAdjacent }) => isAdjacent && `scale(1.3)`}};
  transform: ${({ isActive }) => isActive && `scale(1.8)`}};
`

const ImgWrap = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CarouselWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5% 0;
`

const getListFromAdjacent = (array, index) => {
  const first = array[0]
  const last = array.length - 1

  // first item in the list
  if (index === 0) {
    const previous = { item: array[last], index: last }
    const current = { item: array[index], index }
    const next = { item: array[index + 1], index: index + 1 }

    return [previous, current, next]
  }

  // last item in the list
  if (index === last) {
    const previous = { item: array[last - 1], index: last - 1 }
    const current = { item: array[last], index: last }
    const next = { item: array[first], index: first }

    return [previous, current, next]
  }

  const previous = { item: array[index - 1], index: index - 1 }
  const current = { item: array[index], index }
  const next = { item: array[index + 1], index: index + 1 }

  return [previous, current, next]
}

const Carousel = ({ albums, albumIndex, onClick }) => {
  const [carousel, setCarousel] = useState(getListFromAdjacent(albums, 0))
  const renderTransitions = useTransition(carousel, {
    keys: carouselItem => carouselItem.index,
    from: props => {
      return { opacity: 0 }
    },
    enter: props => {
      return { x: 10, opacity: 1 }
    },
    update: props => {
      return { x: 10 }
    },
    leave: props => {
      console.log("props", props)
      return { x: -10, opacity: 0 }
    },
    config: { mass: 5, tension: 100, friction: 100 },
    trail: 0,
  })
  console.log(carousel)

  return (
    <CarouselWrap>
      {renderTransitions(({ x, ...rest }, { item, index }, transition) => {
        // console.log("x", x)
        return (
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
            <MiniImg fixed={item.miniImg.childImageSharp.fixed} />
          </ImgWrap>
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
