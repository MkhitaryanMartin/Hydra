import React from "react";
import classes from "./style.module.css";
import ServicesItem from "./servicesItem";
import { data } from "../../data/data";
import Carousel from "../../components/Carousel";

function Services(){
    return (
        <section className={classes.sectionContainer}>
            <div className={classes.container}>
            <Carousel
                 data={data.services}
                 arrowMode="true"
                >
                  {data.services.map((el)=>{
                     return (
                        <div key={el.title}>
                           <ServicesItem
                              img={el.img}
                              classes={classes}
                              text={el.text}
                              title={el.title}
                           />
                        </div>
                     )
                  })}
                </Carousel>
            </div>
            
        </section>
    )
}

export default Services