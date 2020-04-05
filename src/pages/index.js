import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Issue 1: Handdrawn</h1>
    <p>Now go build something great.</p>
    <div>{/* <Image /> */}</div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/papaya/">Papaya</Link>
  </Layout>
)

export default IndexPage
