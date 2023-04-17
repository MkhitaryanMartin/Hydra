import React from "react";
import "./style.css"

function Input({
    type="",
    placeholder="",
    onChange,
    mode="",
    className="",
    containerClass="",
    errorText="",
    name={}
}){
    return (
        <div className={`containerDefault ${containerClass}`}>
            <input
               {...name}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
               className={mode ? `${mode} ${className}`: `inputDefault  ${className}`}
            />
            {errorText ? <p className="errorText">{errorText}</p>:""}
        </div>
    )
}

export default Input