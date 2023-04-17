import React,{Fragment}from "react";
import Button from "../../components/Button";
import Icon from "../../components/SVG";
import { ICON_NAMES } from "../../components/SVG/icon_names";
import HomeSection from "./homeSection";
import "./home.css";
import Carousel from "../../components/Carousel";
import { data } from "../../data/data";


function Home(){
    return(
        <section className="homeDiv">
            <div className="homeContainer">
                <div className="homeTextDiv">
                   <div>
                        <h2 className="max-bold homeH2">Dive Into The Depths</h2>
                        <h3 className="bold homeH3">Of Virtual Reality</h3>
                    </div>
                    <p className="homeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor incididunt ut labore et dolore<br/>
                        nisl tincidunt eget. Lectus mauris eros in vitae .
                    </p>
                    <div className="homeButtonDiv">
                        <Button mode="purple"><span>BUILD YOUR WORLD</span></Button>
                        <Icon name={ICON_NAMES.ASSETS.ARROW_RIGHT_ICON} />
                    </div>
                </div>
                <div className="homeImgDiv">
                    <img src={data.pageImg.home} alt="img"/>
                    <Icon 
                        name={ICON_NAMES.VECTOR.VECTOR_1_ICON} 
                        className="vector2"
                    />
                    <Icon 
                        name={ICON_NAMES.VECTOR.VECTOR_2_ICON} 
                        className="vector2"
                    />
                    <Icon 
                        name={ICON_NAMES.VECTOR.VECTOR_3_ICON}
                        className="vector3"
                    />
                </div>
            </div>
            <div className="communication">
                <Carousel 
                    data={data.contacts}
                    className="blockMargin"
                    nextClass="next"
                    prevClass="next"
                >
                    {data.contacts.map((el,i)=>{
                        return (
                                <Fragment key={i}>
                                    <HomeSection
                                        title={el.title}
                                        text={el.text}
                                        iconName={el.iconName}
                                    />
                                    <div className="hr"></div>
                                </Fragment>
                                )
                            })}
                </Carousel>
            </div>
        </section>
    )
}

export default Home
