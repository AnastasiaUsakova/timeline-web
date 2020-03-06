import React from "react";
import './Card.css';
import Plus from "./Plus";

const Card = (props) => {
    let cardClass = "card ";
    if (props.isISelected) {
        cardClass += "selected";
    }
    return (
        <div className="card-container">
            {props.addBefore && <div className="left"><Plus onClick={props.onBeforeClick}/></div>}
            <div className={cardClass} onClick={props.onClick}>
                <div className="description">
                    {props.description ? props.description: 'description'}
                </div>
                <div className="year">
                    {props.year ? props.year: ''}
                </div>
            </div>
            {props.addAfter && <div className="right"><Plus onClick={props.onAfterClick}/></div>}
        </div>
    );
};
Card.defaultProps = {
    addBefore: false,
    addAfter: false,
    onBeforeClick: () => {},
    onAfterClick: () => {}
};

export default Card;