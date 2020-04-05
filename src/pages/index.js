import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { NavBar, StyledLink } from "../styles/navigation"
import { PaddedWidthContainer } from "../styles/layout"
import { StyledH1 } from "../styles/text"

import logo from "../images/logo.svg"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "quaranzine-hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
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

      <Img fluid={data.file.childImageSharp.fluid} />
      <PaddedWidthContainer>
        <StyledH1 textAlign="right">issue #1: by hand</StyledH1>
        <h1>
          qrzn is the mag for people who are bored out of their minds and want
          to see stuff or read stuff that’s fairly interesting. Mostly it’s a
          way for my friends and i to force each other to design things even
          though we’d much rather sit and watch the world burn around us. Each
          issue is based on a different theme, so we’re reinventing the magazine
          every week. We’ve got contributors from all over the world, like New
          York, Paris, Toronto, Singapore, Lima, New Jersey, etc. If you want to
          be a part of this, dm us your stuff @qrzn_mag
        </h1>
      </PaddedWidthContainer>
    </>
  )
  // return (
  //   <Layout>
  //     <SEO title="Home" />
  //   </Layout>
  // )
}

export default Home
