import React,{useEffect, useRef} from "react";
import Icon from "../../components/SVG";
import { ICON_NAMES } from "../../components/SVG/icon_names";
import Nav from "./Nav";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header(){
    const headerRef = useRef()
    useEffect(() => {
        let timer
        const handleScroll = () => {
            clearTimeout(timer);
            headerRef.current.classList.add("hederHidden")
            timer = setTimeout(()=> {
                headerRef.current.classList.remove("hederHidden")
                if(window.pageYOffset === 0){
                    headerRef.current.classList.remove("background")
                    headerRef.current.classList.remove("hederHidden")
                  }else{
                    headerRef.current.classList.add("background")
                  }
            }, 1000);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <header className="header" ref={headerRef}>
            <div className="logoDiv">
                <NavLink to="/" className="headerNavLink">
                    <Icon 
                        name={ICON_NAMES.LOGO.HYDRA_ICON} 
                        className="logoSvg" 
                    />
                    <Icon  
                        name={ICON_NAMES.LOGO.HYDRA_TEXT} 
                        className="logoSvgText" 
                    />
                </NavLink>
            </div>
            <Nav/>
            <div className="headerBtnDiv">
                <Button className="headerBtn" mode="inherit">
                    <p> CONTACT US</p>
                </Button>
                <Button className="joinBtn">
                    <p>JOIN HYDRA</p>
                </Button>
            </div>
        </header>
    )
}

export default Header