import React from "react";
import './Plus.css'

const Plus = (props) => {
    return (
        <div className="plus" onClick={props.onClick}>
            +
        </div>
    );
};
Plus.defaultProps = {
  onClick: () => {}
};

export default Plus;