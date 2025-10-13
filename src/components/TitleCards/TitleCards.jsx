import React from 'react';
import './TitleCards.css';
import Cards_data from '../../assets/Cards/Cards_data';

const TitleCards = ({ title = 'Popular on Netflix', category = 'popular' }) => {
    // Filter cards based on category
    const getFilteredCards = () => {
        switch(category) {
            case 'popular':
                return Cards_data.slice(0, 8); // First 8 cards for popular
            case 'trending':
                return Cards_data.slice(4, 12); // Next 8 cards for trending
            case 'continue':
                return Cards_data.slice(8, 16); // Next 8 cards for continue watching
            default:
                return Cards_data.slice(0, 8);
        }
    };

    const cardsToShow = getFilteredCards();

    return (
        <div className='titleCards'>
            <h2>{title}</h2>
            <div className="card-list">
                {cardsToShow.map((card, index) => (
                    <div className="card" key={`${category}-${index}`}>
                        <div className="card-image">
                            <img src={card.image} alt={card.name} />
                        </div>
                        <p className="card-title">{card.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TitleCards;