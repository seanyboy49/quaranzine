import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import logo from "../images/logo.svg"
import {
  NavBar,
  StyledLink,
  LogoContainer,
  WeeklyIssueContainer,
  IssueLinkBar,
  WeeklyTitle,
} from "../components/styled"
import theme from "../styles/theme"

const Archive = () => {
  const weeklyIssues = [
    { linkBarColor: theme.blue, titleColor: theme.red },
    { linkBarColor: "purple", titleColor: "yellow" },
  ]

  return (
    <>
      <SEO title="Archive" />
      <NavBar justify={"flex-start"}>
        <StyledLink to="/">Home</StyledLink>
      </NavBar>
      <LogoContainer>
        <img width="200" src={logo} alt="qrzn logo"></img>
        <p>the quaranzine for the quaranzined</p>
      </LogoContainer>
      <WeeklyIssueContainer>
        {weeklyIssues.map((weeklyIssue, index) => {
          return (
            <IssueLinkBar backgroundColor={weeklyIssue.linkBarColor}>
              <WeeklyTitle textColor={weeklyIssue.titleColor}>
                Week {index + 1}.
              </WeeklyTitle>
            </IssueLinkBar>
          )
        })}

        {/* <IssueLinkBar backgroundColor={theme.blue}>
          <WeeklyTitle textColor={theme.red}>Week 1.</WeeklyTitle>
        </IssueLinkBar> */}
      </WeeklyIssueContainer>
    </>
  )
}

export default Archive
