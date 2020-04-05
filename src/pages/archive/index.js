import React from "react"

import SEO from "../../components/seo"
import logo from "../../images/logo.svg"
import { NavBar, StyledLink, LogoContainer } from "../../styles/navigation"
import { IssueLinkBar, WeeklyIssueContainer, WeeklyTitle } from "./styled"
import theme from "../../styles/theme"

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
        <p>the quaranzine for the quaranzined</p>
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
