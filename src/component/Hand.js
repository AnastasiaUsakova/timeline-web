import React from "react";
import Card from "./Card";

const Hand = (props) => {
    let cards = props.cards || [];
    return (
        <div className="hand">
            {cards.map((c, i) => <Card key={i}
                                       description={c.description}
                                       onClick={() => props.onClick(i)}
                                       isISelected={props.selectedIndex === i}
                                 />
            )}
        </div>
    );
};

export default Hand;