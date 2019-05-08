
import React from 'react';

function Pokedex({visibilityFilter, cards, handleClick}) {
    // console.log(visibilityFilter)
    const allCards = cards.map((card) => {
        // console.log(card);
        return <li key={card.id} onClick={() => {
            handleClick(card.id);
            }}>{card.name}</li>
        });

    const caughtCards = cards.filter((caught) => {
        // console.log(caught)
        return caught.isCaught === true
    });

    // Can I somehow put this in all cards? if that makes sense in the morning it would be combines with caughtCards sort of in allcards
    const uncaughtCards = cards.filter(uncaught => {
        return uncaught.isCaught !== true
    });
    
    const catchCard = caughtCards.map((caught) => {
        console.log(caught)
        return <li key={caught.id} onClick={() => {
            handleClick(caught.id);
        }}>{caught.name}</li>
    });

    const uncaught = uncaughtCards.map(uncaught => {
        return <li key={uncaught.id} onClick={() =>{
            handleClick(uncaught.id)
        }}>{uncaught.name}</li>
    });

    console.log(`caught cards are ${catchCard}`);  
    console.log(`uncaught cards are ${uncaught}`);
    return (
        <ul>
            {visibilityFilter === "all" ? allCards : visibilityFilter ==="caught" ? catchCard : visibilityFilter === "uncaught" ? uncaught : null}
        </ul>
    );
}


export default Pokedex;