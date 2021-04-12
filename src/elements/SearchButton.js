import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';


export const ButtonStyled = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid #71717177;
cursor: pointer;
background-color: var(--white);
border-radius: 30px;
outline: none;
height: 48px;
transition: .1s ease;
outline: none;
transform: ${(props) => (props.BgWhite && !props.expand) ? 'translateY(0)': 'translateY(-200px)' };
width: ${(props) =>(props.BgWhite && !props.expand) ? '300px' : 'initial'};

&:hover {
    box-shadow: 0 1px 2px 1px rgba(190, 190, 190, 0.671);
}

@media (max-width:1118px){
    margin-right:auto;
}
`

export const StyleP = styled.p`
font-size: 1rem;
padding: 0 1rem;
text-align: start;
margin-left: 8px;
flex: 1;
font-weight: 500;
color: var(--gray4);
white-space:nowrap;

@media (max-width:1118px){
    padding: 0 .5rem;
    margin-left: 5px;
}
`

export const SearchIconWrapper = styled.div `
height: 2rem;
width: 2rem;
padding: 10px;
margin: 7px 7px 7px 0;
background-color: var(--red2);
border-radius: 50%;
color: white;
`
export const IconSearch = styled(FaSearch) `
font-size: 14px;
font-weight: bolder;
`



