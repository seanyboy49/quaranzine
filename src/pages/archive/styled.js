import styled from "styled-components"

export const IssueLinkBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  width: 100%;
  background-color: ${props => props.backgroundColor};
`

export const WeeklyIssueContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 70px 0 0 0;
  display: block;
`

export const WeeklyTitle = styled.p`
  font-size: 65px;
  color: ${props => props.textColor};
  margin: 0;
`
