import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component{
    render(){
        return(
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" >
            <Link to='/'>
                <img src='img/library_school_icon.png' alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/' className="nav-link ">
                    The Book Yard
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className="ms-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                     shopping cart
                </ButtonContainer>
            </Link>
           </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainGreen);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.9rem;
    text-transform:capitalize;
}
`;
