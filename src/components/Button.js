import React from "react";
import './stylesheets/Button.css'

function Button (props) {
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
        // Comparación: compare type of data of value with what's on the right side of the comparison operand
    };

    return (
        <div
        className={`button-div ${isOperator(props.children) ? 'operand' : ''}`.trimEnd()}
        onClick={() => props.handleClick(props.children)}>
            {/* resultado que se va a reemplazar como la clase */}
            {props.children}
        </div>
    );
}

export default Button;