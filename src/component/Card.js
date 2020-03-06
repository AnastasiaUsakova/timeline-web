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
            {props.addBefore && <Plus onClick={props.onBeforeClick}/>}
            <div className={cardClass} onClick={props.onClick}>
                <div className="description">
                    {props.description ? props.description: 'description'}
                </div>
                <div className="year">
                    {props.year ? props.year: ''}
                </div>
            </div>
            {props.addAfter && <Plus onClick={props.onAfterClick}/>}
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