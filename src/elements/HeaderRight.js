import styled from 'styled-components';
import { FaBars, FaUserCircle  } from 'react-icons/fa'

export const NavRightWrapper = styled.div`
        display: flex;
        align-items: center;
        z-index: 10;
        margin-left: 30px;
    `
export const Link = styled.a`
        text-decoration: none;
        font-weight:600;
        font-size: 0.9rem;
        padding: 6px 12px;
        border-radius: 30px;
        cursor: pointer;
        text-align: center;
        color: ${props => props.BgWhite ? 'var(--gray4)' : 'var(--white)'};
        margin-right: 8px;
        display: grid;
        place-items: center;
        height: 40px;
        background: transparent;
        white-space:nowrap;
        
        &:hover {
            background-color: ${props => props.BgWhite ? 'rgba(228, 228, 228, 0.5)' : 'rgba(182, 182, 182, 0.5)'};
        }
    ` 

export const ButtonDropMenu = styled.button`
        position: relative;
        cursor: pointer;
        border-radius: 22px;
        transition: .3s ease ;
        background-color: var(--white);
        outline: none;
        border:  ${props => props.BgWhite ? '1px solid var(--white)': '1px solid var(--gray6)' };

        &:hover{
            box-shadow: 0 1px 2px 1px rgba(190, 190, 190, 0.671);
        }
    `

export const IconWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 36px;
        width: 70px;
        padding: 5px;
    `

export const NavIconBar = styled(FaBars)`
        color: var(--gray4);
        size: .9rem;
        margin-left: 7px;
    `

export const NavIconCircle = styled(FaUserCircle)`
        color: var(--gray4);
        font-size: 1.6rem;
    `

export const DropDownMenu = styled.div`
        position: absolute;
        top: 50px;
        right: 0;
        background-color: var(--white);
        padding: 0.5rem 0;
        border-radius: 10px;
        display: ${props => props.dropMenu ? 'flex' : 'none'};
        flex-direction: column;
        box-shadow: 0 2px 12px 0 var(--gray3);
    `

export const LinkDropMenu = styled.a`
        text-decoration: none;
        text-align: start;
        padding: 0.7rem ;
        padding-left: 0.9rem;
        font-size: 0.8rem;
        width: 13rem;
        color: rgb(68, 68, 68);
        font-family: sans-serif;

        &:hover {
            background-color: var(--gray10);
        }
    `

export const LinkDropMenuDivider = styled.div`
        width: 100%;
        border-bottom: 1px solid var(--gray12);
        margin: 8px 0;
    `

