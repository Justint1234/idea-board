import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
  background: red;
`

class NavBar extends Component {
  render() {
    return (
      <NavBarStyles id="nav-container" class="some-class">
        <Link to="/">Go Home</Link>
        <Link to="/login">Log-In</Link>
        <Link to="/ideas">Ideas</Link>
      </NavBarStyles>
    );
  }
}

export default NavBar;