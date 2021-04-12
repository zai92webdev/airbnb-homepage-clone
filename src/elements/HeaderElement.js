import styled from 'styled-components';

export const HeaderEl= styled.header`
    position: fixed;
    top: 0;
    width: 100%;  
    background-color: ${props => props.BgWhite ? 'var(--white)' : 'default'};
    box-shadow: ${props => props.BgWhite ? '0 1px 10px 0 rgb(134, 134, 134, 0.3)' :'default' }; 
`

export const HeaderContainer= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 80px;
    width: 100%;
    height: 94px;
    z-index: 100;
    position: relative;

    @media (max-width:1118px){
        padding: 16px 40px ;
    }
`

export const WhiteOverlayBg= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--white);
    z-index: -1;
    height:200%;

    //when active
    transform:  ${props => (props.BgWhite && props.expand) ? 'translateY(0)' : 'translateY(-100%)' };
    z-index: ${props => (props.BgWhite && props.expand) ? '-1' : '-99' };

    @media (max-width:1118px){
        height:260px;
    }
`

export const GrayOverlayBg= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;  
    background-color: rgba(0, 0, 0, 0.575);
    z-index: -2;
    
    //when active
    transform:  ${props => (props.BgWhite && props.expand) ? 'translateY(0)':'translateY(-100%)' };



`