import React from "react";
import Icon from "../SVG";
import { ICON_NAMES } from "../SVG/icon_names";
import classes from "./style.module.css";

function TextArrow({h2="",h3="",text="", onClick}){

    return(
        <div className={classes.container}>
                <div>
                    <h2 className="semi_bold">{h2}</h2>
                    <div className={classes.arrow_block}>
                        <h3 className="medium">{h3}</h3>
                        <Icon 
                            name={ICON_NAMES.ASSETS.ARROW_RIGHT_LONG_ICON} onClick={onClick} 
                        />
                    </div>
                </div>
                <p className="regular">{text}</p>
            </div>
    )
}

export default TextArrow