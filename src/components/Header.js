import React, {useState, useEffect, useRef,forwardRef} from 'react'
import {  FaSearch  } from 'react-icons/fa'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { FaGlobe } from 'react-icons/fa'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {NavLogo,
    StyledName,
    LinkLeftIcon
} from '../elements/HeaderLeft'
import {
    NavRightWrapper,
    NavIconCircle,
    NavIconBar,
    Link,
    LinkDropMenuDivider,
    LinkDropMenu,
    IconWrapper,
    DropDownMenu,
    ButtonDropMenu} 
from '../elements/HeaderRight'
import {
    ButtonStyled,
    StyleP, 
    SearchIconWrapper,
    IconSearch} 
from '../elements/SearchButton'
import {
    HeaderCenter,
    HeaderCenterForm,
    HeaderCenterDiv,
    ButtonWrapper,
    ButtonLocation,
    ButtonCheckinOut,
    ButtonGuest,
    ButtonGuestLeftDiv,
    ButtonGuestRightIcon,
    ButtonLocationDropdown,
    ButtonGuestDropdown,
    DivItem,
    DivText,
    DivButton
} from '../elements/HeaderCenter'
import {
    HeaderEl,
    HeaderContainer,
    WhiteOverlayBg,
    GrayOverlayBg
} from '../elements/HeaderElement'



function Header(props) {
    const [BackgroundWhite, setBackgroundWhite] = useState(false)
    const [BackgroundExpand, setBackgroundExpand] = useState(false)
    const [adult, setAdult] = useState(0)
    const [children, setChildren] = useState(0)
    const [infant, setInfant] = useState(0)
    const [dropMenu, setDropMenu] = useState(false)
    const dropMenuRef = useRef()

    const locationRef = useRef()
    const dateRef = useRef()
    const dropLocationRef = useRef()
    const dropGuestRef = useRef()
    const headerRef = useRef()
    const dateCheckInRef = useRef()
    const dateCheckOutRef = useRef()
    
    const [btnLocation, setBtnLocation] = useState(false)
    const [btnGuest, setBtnGuest] = useState(false) 

    const [isLoading , setIsLoading] = useState(true)

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)


    useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    setBackgroundWhite(true)
                    setBackgroundExpand(false)
                } else{ 
                    setBackgroundWhite(false)
                }
            })
            setIsLoading(false)
        
        return () => {
            window.removeEventListener('scroll',()=>{})
        }
    }, []) 

    useEffect(()=> {
        const handler = (e) => {  
            if(headerRef.current.contains(e.target)){
                setBackgroundExpand(false)
            }
            if(!dropLocationRef.current.contains(e.target)){
                setBtnLocation(false)
            }
            if(!dropGuestRef.current.contains(e.target)){
                setBtnGuest(false);
            }
            if(!dropMenuRef.current.contains(e.target)){
                setDropMenu(false)
            }
        }
        document.addEventListener("mouseup", handler)
        return () => {
            document.removeEventListener("mouseup", handler)
        }
    },[])



const toggleLocation=()=> {
    locationRef.current.focus()
    setBtnLocation(true)
}

const handleNearby=() => {
    dateRef.current.focus()
    setBtnLocation(false)
}


const ExampleCustomInput = forwardRef(
    ({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref} >
        {value ? value : 'Add dates'}
    </button>
    ),
)

const handleCheckOut=()=> {
    if(!startDate) {
        dateRef.current.focus()
        dateCheckInRef.current.setOpen(true)
    }else {
        dateCheckOutRef.current.setOpen(true)
    }}
    if(isLoading) {
        return <div>Loading...</div>
    }
    return (
        <HeaderEl BgWhite={BackgroundWhite}>

            <WhiteOverlayBg BgWhite={BackgroundWhite} expand={BackgroundExpand} ></WhiteOverlayBg>
            <GrayOverlayBg BgWhite={BackgroundWhite} expand={BackgroundExpand} ref={headerRef} ></GrayOverlayBg>

            <HeaderContainer>
                <LinkLeftIcon href='/' BgWhite={BackgroundWhite}>
                    <NavLogo />
                    <StyledName>airbnb</StyledName>
                </LinkLeftIcon>
                
                <ButtonStyled BgWhite={BackgroundWhite} expand={BackgroundExpand} type='button' onClick={()=> setBackgroundExpand(true)}>
                    <StyleP>Start your search</StyleP>
                        <SearchIconWrapper >
                            <IconSearch />
                        </SearchIconWrapper>
                </ButtonStyled> 


            {/* header center position absolute */}
            <HeaderCenter BgWhite={BackgroundWhite} expand={BackgroundExpand}>
                <HeaderCenterDiv BgWhite={BackgroundWhite} >
                    <a >Places to stay</a>
                    <a>Experiences</a>
                    <a>Online Experiences</a>
                </HeaderCenterDiv>

                <HeaderCenterForm tabIndex='true' BgWhite={BackgroundWhite} expand={BackgroundExpand}>

                    <ButtonWrapper BgWhite={BackgroundWhite} expand={BackgroundExpand}>
                        <ButtonLocation onClick={toggleLocation}>
                            <h6 >Location</h6>
                            <input ref={locationRef} type="text" placeholder='Where are you going?' />
                        </ButtonLocation>

                        <ButtonLocationDropdown OpenLocation={btnLocation} >
                            <p onClick={handleNearby} ref={dropLocationRef}>
                                <img src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq" alt="Explore"/>
                                <span>Explore Nearby Destination</span>
                            </p>
                        </ButtonLocationDropdown>

                        <ButtonCheckinOut ref={dateRef} onClick={()=>dateCheckInRef.current.setOpen(true)}>
                            <h6>Check in</h6>
                            <DatePicker 
                                isClearable
                                selected={startDate} 
                                onChange={date => setStartDate(date)} 
                                ref={dateCheckInRef}
                                startDate={startDate}
                                endDate={endDate}
                                customInput={<ExampleCustomInput />}
                                dateFormat="MMM d"
                                selectsStart
                                minDate={new Date()}

                                popperModifiers={{
                                    offset: {
                                        enabled: true,
                                        offset: "-100px, 10px"
                                    }
                                }}
                            />
                        </ButtonCheckinOut>

                        <ButtonCheckinOut onClick={handleCheckOut}>
                            <h6>Check out</h6>
                            <DatePicker 
                                isClearable
                                selected={endDate} 
                                onChange={date => setEndDate(date)} 
                                selectsEnd
                                ref={dateCheckOutRef}
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="MMM d"
                                customInput={<ExampleCustomInput />}
                                minDate={startDate}
                                
                                popperModifiers={{
                                    offset: {
                                        enabled: true,
                                        offset: "10px, 10px"
                                    }
                                }}
                            />
                        </ButtonCheckinOut>

                        <ButtonGuest onClick={()=> setBtnGuest(true)}>
                            <ButtonGuestLeftDiv>
                                <h6>Guest</h6>
                                {(adult+children+infant) === 0  ? <p>Add guest</p> : <span>{adult+children+infant} Guest{infant === 0 ? null : ', '+ infant + ' infant'}</span>    }
                            </ButtonGuestLeftDiv>

                            <ButtonGuestRightIcon > 
                                <FaSearch />
                                <span>Search</span>
                            </ButtonGuestRightIcon>
                        </ButtonGuest>
                        

                    <ButtonGuestDropdown ref={dropGuestRef} OpenGuest={btnGuest}>
                        <DivItem>
                        <DivText>
                            <h6>Adults</h6>
                            <p>Ages 13 or above</p>
                        </DivText>
                        <DivButton>
                            <button onClick={() => adult <= 0 ? setAdult(0) : setAdult(adult-1) } 
                                style={{cursor: adult === 0 ? 'not-allowed': 'pointer' , opacity: adult === 0 ? '0.2': 1 }}
                            ><BiMinus /> </button>
                            <span> {adult}</span>
                            <button onClick={() => setAdult(adult+1)} ><BiPlus /> </button>
                        </DivButton>
                    </DivItem>
                    <DivItem>
                        <DivText>
                            <h6>Adults</h6>
                            <p>Ages 13 or above</p>
                        </DivText>
                        <DivButton>
                            <button onClick={() => children <= 0 ? setChildren(0) : setChildren(children-1) } 
                                style={{cursor: children === 0 ? 'not-allowed': 'pointer' , opacity: children === 0 ? '0.2': 1 }}
                            ><BiMinus /> </button>
                            <span> {children}</span>
                            <button onClick={() => setChildren(children+1)}><BiPlus /> </button>
                        </DivButton>
                    </DivItem>
                    <DivItem>
                        <DivText>
                            <h6>Adults</h6>
                            <p>Ages 13 or above</p>
                        </DivText>
                        <DivButton>
                            <button onClick={() => infant <= 0 ? setInfant(0) : setInfant(infant-1) } 
                                style={{cursor: infant === 0 ? 'not-allowed': 'pointer' , opacity: infant === 0 ? '0.2': 1 }}
                            ><BiMinus /> </button>
                            <span> {infant}</span>
                            <button onClick={() => setInfant(infant+1)} ><BiPlus /> </button>
                        </DivButton>
                    </DivItem>
                </ButtonGuestDropdown>

                    </ButtonWrapper> 
                </HeaderCenterForm>
            </HeaderCenter>


            <NavRightWrapper >
                <Link BgWhite={BackgroundWhite}>Become a host</Link>
                <Link BgWhite={BackgroundWhite}>
                    <FaGlobe />
                </Link>

                <ButtonDropMenu onClick={()=> setDropMenu(true)} ref={dropMenuRef}>
                    <IconWrapper >
                        <NavIconBar />
                        <NavIconCircle />
                    </IconWrapper>
                    
                    <DropDownMenu dropMenu={dropMenu}>
                        <LinkDropMenu >Sign up</LinkDropMenu>
                        <LinkDropMenu >Log in</LinkDropMenu>
                        <LinkDropMenuDivider ></LinkDropMenuDivider>
                        <LinkDropMenu >Host your home</LinkDropMenu>
                        <LinkDropMenu >Host an experience</LinkDropMenu>
                        <LinkDropMenu >Help</LinkDropMenu>
                    </DropDownMenu>
                </ButtonDropMenu>

            </NavRightWrapper>

            </HeaderContainer>
        
            
        </HeaderEl>
    )
}

export default Header
