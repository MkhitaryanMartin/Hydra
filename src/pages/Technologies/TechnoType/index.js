import React from "react";
import Icon from "../../../components/SVG";
import { ICON_NAMES } from "../../../components/SVG/icon_names";
import classes from "./style.module.css";


function TechnoType({
    number="",
    title="",
}){
    const getNumber = number => number.toString().padStart(2, 0);
    return (
        <div className={`${classes.typeContainer}`} >
            <div className={classes.numberDiv}>
                <div><span className="ultra-bold">{getNumber(number + 1)}</span></div>
            </div>
            <div className={classes.arrowDiv}>
                <Icon name={ICON_NAMES.ASSETS.ARROW_RIGHT_ICON}/>
                <h6 className={classes.h6}>{title}</h6>
            </div>
        </div>
    )
}

export default TechnoType