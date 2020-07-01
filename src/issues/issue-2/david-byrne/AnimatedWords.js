import React from "react"

import { AnimatedWordContainer, AnimatedTextWrap, TextBox } from "./styled"

const AnimatedWords = ({ forwardedRef, heights, renderTransitions }) => {
  return (
    <AnimatedWordContainer
      {...forwardedRef}
      style={{ height: Math.max(...heights) }}
    >
      {renderTransitions(({ xy, ...rest }, item, transition) => {
        return (
          <AnimatedTextWrap
            key={item.word}
            style={{
              transform: xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`),
              ...rest,
            }}
          >
            <TextBox>{item.word}</TextBox>
          </AnimatedTextWrap>
        )
      })}
    </AnimatedWordContainer>
  )
}

export default AnimatedWords
