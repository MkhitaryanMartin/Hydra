import React from "react";
import Icon from "../../components/SVG";
import { ICON_NAMES } from "../../components/SVG/icon_names";
import Button from "../../components/Button";
import classes from "./style.module.css"
import { NavLink,Link } from "react-router-dom";
import { data } from "../../data/data";

function Footer(){

    return (
        <footer>
            <div className={classes.linkDiv}>
                <NavLink to="/">
                    <Icon
                        name={ICON_NAMES.LOGO.HYDRA_ICON}
                        width="185"
                        height="187"
                    />
                </NavLink>
                <Icon 
                    name={ICON_NAMES.VECTOR.VECTOR_21_ICON}
                    className={classes.vector}
                />
                <div className={classes.about}>
                    {data.navLink.map((link,i)=>{
                        return (
                            <NavLink to={link} key={i}>
                                {link}
                            </NavLink>
                            )
                    })}
                </div>
                <Icon 
                    name={ICON_NAMES.VECTOR.VECTOR_21_ICON}
                    className={classes.vector}
                />
                <div className={classes.about}> 
                    {data.footerLink.pageLink.map((link,i)=>{
                        return (
                            <NavLink to={link} key={i}>
                                {link}
                            </NavLink>
                            )
                    })}
                </div>
                <Icon 
                    name={ICON_NAMES.VECTOR.VECTOR_21_ICON}
                    className={classes.vector}
                />
                <div className={classes.socDiv}>
                    <p>SOCIALIZE WITH HYDRA</p>
                    <div className={classes.siteIconDiv}>
                    {data.footerLink.siteLink.map((link,i)=>{
                            return (
                                <Link to="#" key={i}>
                                    <Icon name={link}/>
                                </Link>
                            )
                        })}
                    </div>
                    <Button className="purple">BUILD YOUR WORLD</Button>
                </div>
            </div>
            <hr/>
            <address 
                className={`${classes.address} 
                normal`}>
                2023 &copy;  HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED 
            </address>
        </footer>
    )
}

export default Footer