import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import hero_title from '../../assets/hero_title.jpg'
import title from '../../assets/title.jpg'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero'>
            <img src={hero_title} alt="" className='banner-img' />
            <div className="hero-caption">
                <img src={title} alt="" className='caption-img' />
                <p>
                Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy. Watch trailers & learn more.
                </p>
                <div className="hero-btns">
                    <button className='btn'><img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home