import styled from "styled-components"
import { Link } from "gatsby"

export const NavBar = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`
