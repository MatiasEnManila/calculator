import React from "react";
import '../components/stylesheets/Screen.css'

const Screen = ({input}) => {
    return (
        <div className="input number-color">
        {/* valor que ingreso el usuario */}
            {input}
        </div>
    );
}

export default Screen;