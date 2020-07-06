import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Pictures = (props) => {
    const {imgURL} = props;
    return (
        <Wrap imgURL={imgURL}>
            <StyledLink to={{
                pathname: "/toastui",
                state: `${imgURL}`
            }}/>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 300px;
    height: 300px;
    margin: 15px 15px;
    background: url(${props => props.imgURL}) no-repeat;
    background-position: center;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
`

export default Pictures;