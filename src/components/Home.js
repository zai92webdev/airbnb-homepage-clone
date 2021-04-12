import React, {useState} from 'react'
import cardExplore from '../data/cardExplore.json'
import cardDiscover from '../data/cardDiscover.json'
import cardInspiration from '../data/cardInspiration.json'
import cardLive from '../data/cardLive.json'
import '../styles/Home.css'

function Home() {
    const [toggleState, setToggleState]= useState(0)
    const [toggleTabName, setToggleTabName] =useState('Beach destinations')

    const toggleTab=(index,tab) =>{
        setToggleState(index)
        setToggleTabName(tab)
    }

    return (
        <div className='home'>
            <div className='sectionExplore'>
                <h1>Explore nearby</h1>

                <div className='exploreCards'>

                    {cardExplore && cardExplore.map(data => (
                        <div className='card'>

                            <img src={data.image} alt="explore-card-img"/>
                            <div className='card__text'>
                                <p>{data.place}</p>
                                <span>{data.distance}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='sectionLiveAnywhere'>
                <h1>Live anywhere</h1>
                <div className='liveAnywhereCard'>
                    
                    {cardLive && cardLive.map(data=> (
                        <div className='cardLive'>
                            <div className='card__LiveImage'>
                                <img src={data.image} alt="live-card-img"/>
                            </div>
                            
                            <span>{data.title}</span>
                        </div>
                    ))}

                </div>
            </div>

            <div className='sectionSharing'>
                <div className='cardSharing'>
                    <h1>Your Experience is worth to having for</h1>
                    <p>Turn the white space into something useful</p>
                    <button>Become a Host</button>
                </div>

                <img src="https://images.pexels.com/photos/4122923/pexels-photo-4122923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="tt"/>
            </div>

            <div className='sectionDiscover'>
                <h1>Discover Experiences</h1>
                <h2>Unique activities with local experts—in person or online.</h2>

                <div className='discover'>
                    {cardDiscover && cardDiscover.map(data =>(
                        <div className='cardDiscover'>
                            <img src={data.image} alt="disc-img"/>
                            <p>{data.title}</p>
                            <span>{data.description}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='sectionInspiration'>
                <h1>Inspiration for future getaways</h1>

                <div className='inspiration__tabs'>
                    {cardInspiration && Object.keys(cardInspiration).map((tab,index)=> (
                        <button className={toggleState === index ? "buttonTab__active" : "buttonTab"} onClick={()=> toggleTab(index,tab)}>{tab}</button>
                    ))}
                </div>

                <div className='inspiration__venueList'>

                {cardInspiration && cardInspiration[toggleTabName].map(data =>(
                    <div className='cardVenue'>
                    <p>{data.capital}</p>
                    <span>{data.state}</span>
                </div>
                ))}
    

                </div>
            </div>
        </div>
    )
}

export default Home
