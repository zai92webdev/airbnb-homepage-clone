import styled from 'styled-components';

export const HeaderCenter= styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    transition: .2s cubic-bezier(.34,.75,.11,.93);
    transform: ${props => (props.BgWhite && !props.expand) ? 'scale(0) translateY(-200px) ' : 'scale(1) translateY(0) ' };
    opacity:${props => (props.BgWhite && !props.expand) ? '0' : '1' };

    @media (max-width:1118px){
    top:80px
    }
`

export const HeaderCenterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.1rem;
    width: 800px;
    color: ${props => props.BgWhite ? 'var(--black1)': 'var(--white)'};

    & > a {
        padding: 11px 16px;
        cursor: pointer;
        position: relative;
        font-size: .9rem;
        text-decoration: none;
        font-weight: 600;
    }

    & > a:hover {
        color:  ${props => props.BgWhite ? 'rgb(99, 98, 98)': 'rgb(236, 234, 234)'};
    }
    & > a:first-child::after {
        content: "";
        height: 2px;
        background-color: ${props => props.BgWhite ? 'rgb(24, 21, 21)': 'var(--white)'};
        position: absolute;
        bottom: 0;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        width: 20px;
    }

    & > a::before{
        content: "";
        height: 2px;
        background-color:${props => props.BgWhite ? 'rgb(24, 21, 21)': 'var(--white)'};
        position: absolute;
        bottom: 0;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        width: 10px;
        transition: .2s ease-in;
        transform: scale(0);
    }
    & > a:hover::before{
        transform: scale(1);
    }

    @media (max-width:820px){
        max-width:800px;
        width:100%
    }
`

export const LinkCenter = styled.a`
    padding: 11px 16px;
    cursor: pointer;
    position: relative;
    font-size: .9rem;
    text-decoration: none;
    font-weight: 600;
`

export const HeaderCenterForm = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonWrapper = styled.button`
        display: flex;
        opacity: 1;
        z-index: 10;
        width: fit-content;
        border-radius: 40px;
        box-shadow: 0 0 0 1px var(--gray11);
        background-color: var(--white);
        outline: none;
        border: none;


        &:focus-within > button > button{
            width:100%;
            & span{
                position:static;
                opacity: 1;
                transform:translateX(0);
            }

            @media (max-width:1118px){
                width: 48px;
                & span{
                    opacity: 0;
                    position:absolute;
                    }
                
            }
        }
`

export const ButtonLocation = styled.button`
    line-height: 1rem;
    background: transparent;
    cursor: pointer;
    padding: 1rem 0.6rem 1rem 1.9rem;
    border-radius: 40px;
    border: none;
    outline: none;
    cursor: pointer;  
    text-align: start; 
    height: 68px; 
    width: 265px;
    overflow:hidden;

    &:hover{
        background-color: var(--brown2);
    }
    &:focus-within {
        background-color: var(--white) !important;
        box-shadow: 0 0 10px 0px rgb(143, 143, 143);
        z-index: 1;
    }
    & h6 {
        width: 100%;
        font-size: 0.7rem;
        color: rgb(66, 66, 66);
        padding-bottom: 4px;

    }
    & input {
        border: none;
        outline: none;
        background-color: transparent;
        color: var(--gray2);
        font-size: 14px;
        font-weight: 600;
        width:100%;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
    }
    & input::placeholder{
        font-weight: 100;
        color: var(--gray4);
        padding-right:5px;

    }
    @media (max-width:1118px){
        width: 155px;
        padding: 1rem 1rem 1rem 1.4rem;
    }
`

export const ButtonLocationDropdown = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    background-color: var(--white);
    margin-right: auto;
    margin-top: 15px;
    padding: 15px 0;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 0 10px 0 var(--gray3);
    display: ${props => props.OpenLocation ? 'block': 'none'};

    & p{
        display: flex;
        align-items: center;
        height: 54px;
        width: 400px;
        font-size: 15px;
        padding-left: 1rem;
        cursor: pointer;
    }
    & p:hover{
        background-color: var(--gray10);
    }
    & img{
        object-fit: contain;
        width: 40px;
        margin-right: 10px;
    }
`

export const ButtonCheckinOut = styled.button`
    line-height: 1rem;
    background: transparent;
    cursor: pointer;
    padding: 1rem 0.6rem 1rem 1.9rem;
    border-radius: 40px;
    border: none;
    outline: none;
    cursor: pointer;  
    text-align: start; 
    height: 68px; 

    &:focus-within {
        background-color: var(--white) !important;
        box-shadow: 0 0 10px 0px rgb(143, 143, 143);
        z-index: 1;
    }
    &:hover{
        background-color: var(--brown2);
    }
    & h6 {
        width: 7.1rem;
        font-size: 0.7rem;
        color: rgb(66, 66, 66);
        padding-bottom: 4px;
    }

    //React DatePicker css classname
    & .example-custom-input{
    border: none;
    width: 100%;
    height: 20px;
    text-align: start;
    background: transparent;
    outline: none;
    }
    & .react-datepicker-wrapper,
        .react-datepicker__input-container,
        .react-datepicker__input-container input {
        width: 100%;    
        }      

    @media (max-width:1118px){
        padding: 1rem 0.6rem 1rem 1rem;
    }
`

export const ButtonGuest = styled.button`
    line-height: 1rem;
    background: transparent;
    cursor: pointer;
    padding: 1rem 0.6rem 1rem 1.9rem;
    border-radius: 40px;
    border: none;
    outline: none;
    cursor: pointer;  
    text-align: start; 
    height: 68px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 16.6rem;
    padding: 0.6rem 0.6rem 0.6rem 1.9rem;

    &:focus-within {
        background-color: var(--white) !important;
        box-shadow: 0 0 10px 0px rgb(143, 143, 143);
        z-index: 1;
    }

    &:hover{
        background-color: var(--brown2);
    }
    & h6 {
        width: 7.1rem;
        font-size: 0.7rem;
        color: rgb(66, 66, 66);
        padding-bottom: 4px;
    }

    @media (max-width:1118px){
        width: 13rem;
        padding: 1rem 0.6rem 1rem 1rem;
    }
`

export const ButtonGuestLeftDiv = styled.div`
    width:100%;
    max-width:150px;

    & h6{
        width:100%;
        margin:0;
        padding:0;
    }

    & span{
        color: var(--gray2);
        font-size: 14px;
        font-weight: 600;

        display:flex;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }

    @media (max-width:1118px){
        max-width:100px;
    }
`
export const ButtonGuestRightIcon = styled.button`
    display: flex;
    height: 48px;
    max-width:95px;
    min-width: 48px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 40px;
    padding: 11px 7px 11px 11px;
    font-size: 1.1rem;
    border: none;
    position: relative;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    background-image: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;
    color:var(--white);
    margin-left:10px;

    &:hover,
    &:focus {
        background-image: linear-gradient(to right, #db395f 0%, #ce1c57 50%, #c0075d 100%) !important;
    }
    & span{
        position:absolute;
        transform:translateX(50px);
        opacity: 0;
        width: 50px;
        transition: 0.3s cubic-bezier(0,.86,.16,.8);
        font-size: 1rem;
    }
`

export const ButtonGuestDropdown = styled.div`
    position: absolute;
    right: 0;
    top: 70px;
    background-color: var(--white);
    margin-left: auto;
    margin-top: 32px;
    padding: 1rem 2rem;
    border-radius: 30px;
    box-shadow: 0 0 10px 0 var(--gray3);
    display: ${props => props.OpenGuest ? 'block': 'none'};
`

export const DivItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 4px 16px 0;
    width: 330px;

    &:nth-child(-n+2){
        border-bottom: 1px solid var(--gray12);
    }
`
export const DivText = styled.div`
    & h6{
        font-size: .9rem;
        font-family: sans-serif;
        text-align: start;
    }
    & p{
        font-size: 0.8rem;
        font-family: sans-serif;
        color: var(--gray4);
    }
`

export const DivButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;

    & button{
        display: grid;
        place-items: center;
        border: none;
        font-size: 1rem;
        border-radius: 50%;
        border: 1px solid var(--gray6);
        padding: 6px;
        background: var(--white);
        color: var(--gray4);
        font-weight: 100%;
        outline: none;
        cursor: pointer;
    }
    & span{
        font-size: 1rem;
        display: flex;
        align-items: center ;
    }
`