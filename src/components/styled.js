import styled from "styled-components"
import { Link } from "gatsby"

export const NavBar = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: ${props => props.justify || "space-between"};
  align-items: center;
`

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
