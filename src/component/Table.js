import React from "react";
import Card from "./Card";

const Table = (props) => {
    const cards = props.cards || [];
    return (
        <>
            <div className="table">
                {cards.map((c, i) => <Card key={c.id}
                                      description={c.description}
                                      year={c.year}
                                      addBefore={props.editMode && i === 0}
                                      addAfter={props.editMode}
                                      onBeforeClick={() => props.onClick(i)}
                                      onAfterClick={() => props.onClick(i + 1)}
                />)}
            </div>
        </>
    );
};

export default Table;