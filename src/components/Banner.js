import React from 'react'
import styled from 'styled-components';

const DivBanner = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--black1);
    margin-bottom: 4rem; 
    position: relative;
    z-index: -100;
    padding: 120px 0 0;
    display: flex;
    justify-content: center;

    @media (max-width: 1118px){
        padding: 175px 0 0;
    }
`

const DivContainer = styled.div`

    & img{
        width: 100%;
        object-fit: contain;
        max-width: 1750px;
        padding: 0 40px 100px 40px;
    }
`

function Banner() {
    return (
        <DivBanner>
            <DivContainer>
                <img src="/images/Banner-image.jpg" alt=""/>
            </DivContainer>
        </DivBanner>
    )
}

export default Banner
