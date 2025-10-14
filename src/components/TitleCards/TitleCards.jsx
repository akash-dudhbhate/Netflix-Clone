import React from 'react';
import './TitleCards.css';
import Cards_data from '../../assets/Cards/Cards_data';

const TitleCards = ({ title = 'Popular on Netflix', category = 'popular' }) => {
    // Filter cards based on category
    const getFilteredCards = () => {
        const allCards = [...Cards_data];
        const shuffled = [...allCards].sort(() => 0.5 - Math.random());
        
        switch(category) {
            case 'trending':
                // First 20 cards for trending
                return shuffled.slice(0, 20);
            case 'continue':
                // Next 20 cards for continue watching
                return shuffled.slice(10, 30);
            case 'newReleases':
                // Next 20 cards for new releases
                return shuffled.slice(20, 40);
            case 'action':
                // Filter action-related shows
                return allCards.filter(card => 
                    card.name.toLowerCase().includes('action') || 
                    card.name.toLowerCase().includes('daredevil') ||
                    card.name.toLowerCase().includes('bright') ||
                    card.name.toLowerCase().includes('prey')
                ).slice(0, 20);
            case 'fantasy':
                // Filter fantasy shows
                return allCards.filter(card => 
                    card.name.toLowerCase().includes('witcher') ||
                    card.name.toLowerCase().includes('lord of the rings') ||
                    card.name.toLowerCase().includes('game of thrones') ||
                    card.name.toLowerCase().includes('harry potter')
                ).slice(0, 20);
            case 'horror':
                // Filter horror shows
                return allCards.filter(card => 
                    card.name.toLowerCase().includes('haunting') ||
                    card.name.toLowerCase().includes('conjuring') ||
                    card.name.toLowerCase().includes('evil dead') ||
                    card.name.toLowerCase().includes('silence') ||
                    card.name.toLowerCase().includes('it')
                ).slice(0, 20);
            case 'popular':
            default:
                // First 20 cards for popular
                return shuffled.slice(0, 20);
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