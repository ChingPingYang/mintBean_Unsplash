import React from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
const Navbar = (props) => {
    const {location} = props;
    return (
        <NavbarWrap>
            <StyledLink to="/dashboard" location={location.pathname} path="/dashboard">
                Dashboard
            </StyledLink>
            <StyledLink to="/toastui" location={location.pathname} path="/toastui">
                ToastUI
            </StyledLink>
        </NavbarWrap>
    )
}

const NavbarWrap = styled.div`
    background-color: ${props => props.theme.primYellow};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    color: white;
    font-size: 1.2rem;
    margin: 0px 20px;
    text-align: center;
    position: relative;
    transition: 0.3s;
    &:after {
        content: "";
        position: absolute;
        left: 0px;
        top: 20px;
        width: 100%;
        height: 2.3px;
        transform: scale(0);
        background-color: ${props => props.theme.darkGray};
        transition: 0.3s ease-in-out;
        opacity: 0;
    }
    &:hover {
        ${ props => props.location !== props.path && css`
            color: ${props => props.theme.darkGray};
        `}
        &:after{
            transform: scale(1);
            opacity: 1;
        }
    }
    /* check if the path is current path */
    ${props => props.location === props.path && css`
        color: ${props => props.theme.darkGray};
        &:after{
                transform: scale(1);
                opacity: 1;
            }
    `} 
`

export default withRouter(Navbar);