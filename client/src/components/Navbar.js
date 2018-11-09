import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavbarStyles = styled.div`
background: royalblue;
font-size: 30px;
display: flex;
justify-content: space-evenly;

a {
text-decoration: none;
}
`
class Navbar extends Component {
    render() {
        return (
            <NavbarStyles>
                <Link to='/'>Go Home</Link>
                <Link to='/login'> Log-in</Link>
                <Link to='/ideas'>ideas</Link>
            </NavbarStyles>
        );
    }
}

export default Navbar;