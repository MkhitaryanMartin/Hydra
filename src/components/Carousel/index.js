import React,{useState,useEffect} from "react";
import Icon from "../SVG";
import { ICON_NAMES } from "../SVG/icon_names";
import "./carousel.css"

function Carousel({
    children,
    data=[],
    className="",
    arrowMode="",
    nextClass="",
    prevClass="",
    classes=""
}){
const [count, setCount]= useState(0);
const length = data.length - 1;
const width =100

useEffect(()=>{
    const handleWidth = ()=>{
       if(window.innerWidth >= 1100){
          setCount(0)
       }
    }

    window.addEventListener("resize", handleWidth);

    return () => {
       window.removeEventListener('resize', handleWidth);
     };

 },[])

const next =()=>{
    if(count >= ( width * length)){
       setCount(0)
    }else{
       setCount(count + width)
    }
 }
 const prev =()=>{
    if(count === (0) ){
       setCount(width * length)
    }else{
       setCount(count - width)
    }
 }
    return(
        <div 
            className="carouselContainer"
        >
            <div 
                className={`carouselBlock ${className}`}
                style={{transform:`translateX(-${count}%)`}}
            >
                {children}
            </div>
            <Icon 
                name={ICON_NAMES.ASSETS.NEXT_ICON} 
                mode={arrowMode}
                onClick={next}
                className={`arrowPrev ${nextClass}`}
            />
            <Icon 
                name={ICON_NAMES.ASSETS.PREV_ICON} 
                mode={arrowMode}
                onClick={prev}
                className={`arrowNext ${prevClass}`}
            />
        </div>
    )
}

export default Carousel