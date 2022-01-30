import React from 'react'
import styled from 'styled-components';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
    
        &::before{
            content: "";
            position: absolute;
            bottom: .5rem;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: .5rem;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 1000;
            color: red;
            opacity:.15;
            font-size: 2.5rem;
            position: absolute;
            left: 0;
            top: 40%;
            z-index: -1;
        
        }
    }
`;

export default Title;
