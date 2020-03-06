import React from "react";
import './Deck.css'
import deck from './../assets/deck.png';

const Deck = (props) => {
    return (
        <div className="deck-element" onClick={props.onClick}>
            <img src={deck} alt="deck"/>
        </div>
    );
};
Deck.defaultProps = {
    onClick: () => {}
};

export default Deck;