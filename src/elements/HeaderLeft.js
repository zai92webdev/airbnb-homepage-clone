import { FaAirbnb  } from 'react-icons/fa'
import styled from 'styled-components';

export const LinkLeftIcon = styled.a`
cursor: pointer;
display: flex;
align-items: center;
font-size: 2.3rem;
text-decoration: none;
z-index: 100;
padding: 5px;
color: ${props => props.BgWhite ? 'var(--red1)': 'var(--white)'};
` 

export const StyledName = styled.p`
margin-right: 5px;
font-size: 1.7rem;
font-weight: 900;
`
export const NavLogo = styled(FaAirbnb)`
margin-right: 5px;
`
