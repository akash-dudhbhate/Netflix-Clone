import React, { useState, useEffect } from 'react';
import './TVShows.css';

// Import local images
import img1 from '../../assets/Cards/StrangerThings.jpeg';
import img2 from '../../assets/Cards/GameOfThrone.jpeg';
import img3 from '../../assets/Cards/Lucifer.jpg';
import img4 from '../../assets/Cards/Dark.jpg';
import img5 from '../../assets/Cards/Money_Heist.jpg';
import img6 from '../../assets/Cards/SuperNatural.jpeg';
import img7 from '../../assets/Cards/The Haunting of Hill House (2018) _ S_ 1 _ Ep_ 10….jpeg';
import img8 from '../../assets/Cards/SweetHome.jpeg';
import img9 from '../../assets/Cards/JujutsuKaisen.jpeg';
import r1 from '../../assets/Cards/ARCHANE.jpeg';
import r2 from '../../assets/Cards/Archer.jpeg';
import r3 from '../../assets/Cards/The_Witcher.jpg';
import r4 from '../../assets/Cards/Wednesday.jpeg';
import r5 from '../../assets/Cards/VampireDiaries.jpeg';
import r6 from '../../assets/Cards/The_Order.jpg';
import r7 from '../../assets/Cards/The_Bird_Box.jpg';
import r8 from '../../assets/Cards/LordOfRings.jpeg';
import r9 from '../../assets/Cards/WalkingDead.jpeg';

const TVShows = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // TV show data with additional information
  const tvShows = [
    { id: 1, title: 'Stranger Things', image: img1, year: '2016', rating: 'TV-14', seasons: 4 },
    { id: 2, title: 'Game of Thrones', image: img2, year: '2011', rating: 'TV-MA', seasons: 8 },
    { id: 3, title: 'Lucifer', image: img3, year: '2016', rating: 'TV-14', seasons: 6 },
    { id: 4, title: 'Dark', image: img4, year: '2017', rating: 'TV-MA', seasons: 3 },
    { id: 5, title: 'Money Heist', image: img5, year: '2017', rating: 'TV-MA', seasons: 5 },
    { id: 6, title: 'Supernatural', image: img6, year: '2005', rating: 'TV-14', seasons: 15 },
    { id: 7, title: 'The Haunting of Hill House', image: img7, year: '2018', rating: 'TV-MA', seasons: 1 },
    { id: 8, title: 'Sweet Home', image: img8, year: '2020', rating: 'TV-MA', seasons: 2 },
    { id: 9, title: 'Jujutsu Kaisen', image: img9, year: '2020', rating: 'TV-MA', seasons: 2 },
  ];

  // Second set for right carousel
  const tvShowsRight = [
    { id: 1, title: 'Arcane', image: r1, year: '2021', rating: 'TV-14', seasons: 1 },
    { id: 2, title: 'Archer', image: r2, year: '2009', rating: 'TV-MA', seasons: 14 },
    { id: 3, title: 'The Witcher', image: r3, year: '2019', rating: 'TV-MA', seasons: 3 },
    { id: 4, title: 'Wednesday', image: r4, year: '2022', rating: 'TV-14', seasons: 1 },
    { id: 5, title: 'The Vampire Diaries', image: r5, year: '2009', rating: 'TV-14', seasons: 8 },
    { id: 6, title: 'The Order', image: r6, year: '2019', rating: 'TV-MA', seasons: 2 },
    { id: 7, title: 'Bird Box', image: r7, year: '2018', rating: 'R', seasons: 1 },
    { id: 8, title: 'The Lord of the Rings', image: r8, year: '2001', rating: 'PG-13', seasons: 1 },
    { id: 9, title: 'The Walking Dead', image: r9, year: '2010', rating: 'TV-MA', seasons: 11 },
  ];

  // Toggle carousel animation
  const toggleCarousel = () => {
    setIsPaused(!isPaused);
  };

  // Add keyboard event listener for spacebar to pause/play
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        toggleCarousel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPaused]);

  return (
    <div className="tv-shows-container">
      <div className="tv-shows-header">
        <h1>Popular on Netflix</h1>
        <button 
          className="carousel-control" 
          onClick={toggleCarousel}
          aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
        >
          {isPaused ? '▶' : '❚❚'}
        </button>
      </div>
      <div className="carousels-row">
        <div className="container">
          <div 
            className={`carousel ${isPaused ? 'paused' : ''}`} 
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {tvShows.map((show, index) => (
              <div 
                key={`left-${show.id}`}
                className="carousel__face" 
                style={{ 
                  backgroundImage: `url(${show.image})`,
                  '--rotation': `${index * (360 / tvShows.length)}deg`
                }}
              >
                <div className="show-info">
                  <div className="show-meta">
                    <span className="show-year">{show.year}</span>
                    <span className="show-rating">{show.rating}</span>
                    <span className="show-seasons">{show.seasons} Season{show.seasons !== 1 ? 's' : ''}</span>
                  </div>
                  <span className="show-title">{show.title}</span>
                  <div className="show-actions">
                    <button className="play-button">▶ Play</button>
                    <button className="info-button">ℹ️ More Info</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div 
            className={`carousel ${isPaused ? 'paused' : ''}`} 
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {tvShowsRight.map((show, index) => (
              <div 
                key={`right-${show.id}`}
                className="carousel__face" 
                style={{ 
                  backgroundImage: `url(${show.image})`,
                  '--rotation': `${index * (360 / tvShowsRight.length)}deg`
                }}
              >
                <div className="show-info">
                  <div className="show-meta">
                    <span className="show-year">{show.year}</span>
                    <span className="show-rating">{show.rating}</span>
                    <span className="show-seasons">{show.seasons} Season{show.seasons !== 1 ? 's' : ''}</span>
                  </div>
                  <span className="show-title">{show.title}</span>
                  <div className="show-actions">
                    <button className="play-button">▶ Play</button>
                    <button className="info-button">ℹ️ More Info</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShows;