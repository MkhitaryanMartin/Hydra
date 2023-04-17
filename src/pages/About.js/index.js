import React from "react";
import Button from "../../components/Button";
import classes from "./style.module.css";
import TextArrow from "../../components/TextArrow";
import { data } from "../../data/data";


function About(){
    return (
        <section className={classes.container}>
            <TextArrow
                 h2="INTRODUCTION"
                 h3="TO HYDRA VR"
                 text={data.text.textArow}
            />
            <div className={classes.imgContainer}>
                <div className={classes.imgDiv}>
                    <img src={data.pageImg.about} alt="img"/>
                </div>
                <div className={classes.imgTextDiv}>
                    <div className={classes.vr}>
                        <h2 className="semi_bold">ABOUT</h2>
                        <h3 className="medium">HYDRA VR</h3>
                    </div>
                    <p className="regular">{data.text.about}</p>
                    <Button mode="purple"><span className="normal">LET’S GET IN TOUCH</span></Button>
                </div>
            </div>
            <TextArrow
                h2="WHY BUILD"
                h3="WITH HYDRA?"
                text={data.text.textArow}
            />
        </section>
    )
}

export default About