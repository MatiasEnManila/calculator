import React from "react";

function Button (props) {
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div
        className={`button-div ${isOperator(props.children) ? 'operador' : ''}`.trimEnd()}>
            {/* resultado que se va a reemplazar como la clase */}
            {props.children}
        </div>
    );
}

export default Button;