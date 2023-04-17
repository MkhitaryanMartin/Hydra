import React from "react";
import Icon from "../../components/SVG";

const HomeSection=({
    iconName="",
    iconClass="",
    title="",
    text="",
    titleClass="",
    textClass="",
})=>{
    return (
        <div className="homeBlock">
            <Icon name={iconName} className={iconClass}/>
            <div className="homeSectionTextDiv">
                <p className={titleClass ? titleClass:"semi_medium titleHidden"}>{title}</p>
                <p className={textClass ? textClass: "sami_regular text"}>{text}</p>
            </div>
        </div>
    )
}
export default HomeSection