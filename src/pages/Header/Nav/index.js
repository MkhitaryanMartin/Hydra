import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../../components/SVG";
import { ICON_NAMES } from "../../../components/SVG/icon_names";
import { useToggle } from "../../../hooks/useToggle";
import { data } from "../../../data/data";
import "./style.css"

function Nav(){
    const [menu, setMenu]=useToggle(false)
    return (
        <nav className={"nav"}>
            <div className="linkBlock">
               {data.navLink.map((link,i)=>{
                if(i <=  3){
                    return (
                        <NavLink to={link} key={i}>
                            {link}
                        </NavLink>
                    )
                }
                return null
               })}
            </div>
            <Icon name={ICON_NAMES.ASSETS.MENU_ICON} onClick={setMenu} className="hiddenMenu"/>
            <div className={menu ? "menuBlock":"hidden"}>
            <hr/>
            {data.navLink.map((link,i)=>{
                if(i <=  3){
                    return (
                        <NavLink to={link} key={i}>
                            {link}
                        </NavLink>
                    )
                }
                return null
               })}
            </div>
        </nav>
    )
}

export default Nav