import styled from "styled-components"

export const PaddedWidthContainer = styled.section`
  padding: 73.5px 145px;
`
export const FullWidthContainer = styled.section`
  padding: 145px 0;
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Column = styled.div`
  display: flex;
  width: ${props => props.width || 50}%;
  flex-direction: column;
  align-items: center;
`
export const CustomPosition = styled.div`
  position: absolute;
  right: 0;
`
