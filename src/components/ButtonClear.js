import React from "react";
import './stylesheets/ButtonClear.css'

const ButtonClear = (props) => {
    return (
    <div className="button-clear"
    onClick={ () => props.handleClick(props.children) }>
        {/* se asigna desde Apps.js para que se ejecute aca*/}
        {props.children}
    </div>
    );
};

// onClick attritube is an eventListener
export default ButtonClear;