import React from "react";
import Button from "../../components/Button";

function ServicesItem({
    img,
    title="",
    text="",
    onClick,
    classes={}
}){
    return (
        <div className={`${classes.serviceBlock}`}>
            <div className={classes.imgDiv}>
                <img src={img} alt="img"/>
            </div>
            <h2>{title}</h2>
            <hr></hr>
            <p>{text}</p>
            <Button onClick={onClick}><span>TRY IT NOW</span></Button>
        </div>
    )
}
export default ServicesItem