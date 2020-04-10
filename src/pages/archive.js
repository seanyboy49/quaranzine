import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import logo from "../images/logo.svg"
import { NavBar, StyledLink, LogoContainer } from "../styles/navigation"
import { Text } from "../styles/text"
import theme from "../styles/theme"

const IssueLinkBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  width: 100%;
  background-color: ${props => props.backgroundColor};
`

const WeeklyIssueContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 70px 0 0 0;
  display: block;
`

const WeeklyTitle = styled.p`
  font-size: 65px;
  color: ${props => props.textColor};
  margin: 0;
`

const Archive = () => {
  const weeklyIssues = [{ linkBarColor: theme.blue, titleColor: theme.red }]

  return (
    <>
      <SEO title="Archive" />
      <NavBar justify={"flex-start"}>
        <StyledLink to="/">Home</StyledLink>
      </NavBar>
      <LogoContainer>
        <img width="200" src={logo} alt="qrzn logo"></img>
        <Text center>the quaranzine for the quaranzined</Text>
      </LogoContainer>
      <WeeklyIssueContainer>
        {weeklyIssues.map((weeklyIssue, index) => {
          return (
            <StyledLink to="/">
              <IssueLinkBar backgroundColor={weeklyIssue.linkBarColor}>
                <WeeklyTitle textColor={weeklyIssue.titleColor}>
                  Week {index + 1}.
                </WeeklyTitle>
              </IssueLinkBar>
            </StyledLink>
          )
        })}
      </WeeklyIssueContainer>
    </>
  )
}

export default Archive
