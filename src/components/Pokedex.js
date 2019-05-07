
import React from 'react';

function Pokedex({cards}) {
    
    const cardItems = cards.map(card => {
        return <li>{card.name}</li>
    });
    
    return (
        <ul>
            {cardItems}
        </ul>
    );
}


export default Pokedex;