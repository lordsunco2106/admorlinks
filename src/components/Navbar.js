import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'
import { ButtonContainer } from './Button';




class Navbar extends Component {   
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm bg-success navbar-dark px-sm-3">
           <Link to="/">
                <img src={logo} alt='logo' className='navbar-brand'/>
           </Link>
           <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
           <Link to="/" className="nav-link">
           Products
           </Link>
           </li>
           <li className="nav-item ml-5">
           <Link to="/default" className="nav-link">
           Contacts
           </Link>
           </li>
           <li className="nav-item ml-5">
           <Link to="/laptop" className="nav-link">
           Laptops
           </Link>
           </li>
           <li className="nav-item ml-5">
           <Link to="/accesslists" className="nav-link">
           Accessories
           </Link>
           </li>
           </ul>
           <Link to='/cart' className="ml-auto">
           <ButtonContainer>
           <span className="mr-2"><ion-icon name="cart-outline"></ion-icon></span>
           My Cart
           </ButtonContainer>
           </Link>
           </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
background: var(--mainGreen);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.1rem;
    text-transform: capitalize;
}
`
