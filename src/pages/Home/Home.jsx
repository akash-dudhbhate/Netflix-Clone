import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import hero_title from '../../assets/hero_title.jpg';
import title from '../../assets/title.jpg';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';

const Home = () => {
  return (
    <div className='home'>
      <div className="hero-wrapper">
        <Navbar />
        <div className='hero'>
          <div className="hero-overlay"></div>
          <img src={hero_title} alt="" className='banner-img' />
          <div className="hero-content">
            <div className="hero-caption">
              <h1 className="title-text">WEDNESDAY</h1>
              <p className="description">
                Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries 
                while making new friends — and foes — at Nevermore Academy. Watch trailers & learn more.
              </p>
              <div className="hero-btns">
                <button className='btn play-btn'>
                  <img src={play_icon} alt="" />
                  <span>Play</span>
                </button>
                <button className='btn info-btn'>
                  <img src={info_icon} alt="" />
                  <span>More Info</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <TitleCards title="Popular on Netflix" category="popular" />
        <TitleCards title="Trending Now" category="trending" />
        <TitleCards title="New Releases" category="newReleases" />
        <TitleCards title="Action & Adventure" category="action" />
        <TitleCards title="Fantasy Favorites" category="fantasy" />
        <TitleCards title="Horror & Thrillers" category="horror" />
        <TitleCards title="Continue Watching" category="continue" />
      </div>
    </div>
  );
};
export default Home;
