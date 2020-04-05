/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { NavBar, StyledLink } from "./styled"
import logo from "../images/logo.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar>
        <img width={128} src={logo} alt="small qrzn logo"></img>
        <p>the quaranzine for the quaranzined</p>
        <StyledLink to="/archive/">archive</StyledLink>
      </NavBar>
      <main>{children}</main>
      <footer>Built with love by people in quarantine</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
