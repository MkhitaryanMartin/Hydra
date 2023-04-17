import React from "react";
import "./style.css";


function Button({
    onClick,
    style={},
    mode="",
    className="",
    children,
    isValid=false
}){
const classe=mode ? `btn--default btn--${mode} ${className}`: `btn--default ${className}`
    return (
        <button
         className={isValid ? `${classe} disabled`: `${classe}`}
         onClick={onClick}
         style={style}
         disabled={isValid}
        >
         {children}
        </button>
    )
}

export default Button