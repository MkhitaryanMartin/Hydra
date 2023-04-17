import React from "react";
import techClass from "./style.module.css";
import TextArrow from "../../components/TextArrow";
import TechnoType from "./TechnoType/index";
import Carousel from "../../components/Carousel";
import { data } from "../../data/data";

function Technologies(){
   
    return (
        <section className={techClass.container}>
            <div className={techClass.titleDiv}>
                <h3>TECHNOLOGIES & HARDWARE</h3>
                <h4>USED BY HYDRA VR.</h4>
            </div>
            <div className={techClass.transformDiv}>
                <div className={techClass.imgDiv} >
                    <Carousel
                       data={data.technologies}
                       arrowMode="true"
                    >
                        {data.technologies.map((el)=>{
                            return (
                                <img 
                                   src={el} 
                                   alt="img"
                                   key={el}
                                />
                            )
                        })}
                    </Carousel>
                </div>
                
            </div>
            <TextArrow 
               h2="HOW WE BUILD"
               h3="WITH HYDRA VR?"
               text={data.text.textArow}
            />
            <div className={techClass.typeDiv} >
                <Carousel
                  data={data.technoType}
                  arrowMode="true"
                  nextClass={techClass.nextt}
                  prevClass={techClass.prevv}
                  classes={techClass}
                >
                    {data.technoType.map((title,i)=>{
                    return <TechnoType 
                       key={i}
                       number={i}
                       title={title}
                       
                    />
                })}
                </Carousel>
            </div>
        </section>
    )
}

export default Technologies