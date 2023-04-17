import { ICON_NAMES } from "../components/SVG/icon_names";
import img1 from "../assets/img/serviceImg1.jpg";
import img2 from "../assets/img/serviceImg2.jpg";
import img3 from "../assets/img/serviceImg3.jpg";
import img4 from "../assets/img/serviceImg4.jpg";
import unreal  from  "../assets/img/unreal.png";
import vive  from  "../assets/img/vive.png";
import unity  from  "../assets/img/unity.png";
import oculos  from  "../assets/img/oculos.png";
import aboutPexels from  "../assets/img/pexels-michelangelo.png";
import homePexels from  "../assets/img/pexels-michelangelo1.png";

export const data ={
    contacts:[
        {
            iconName: ICON_NAMES.COMMUNICATION.GLOCATION_ICON,
            title: "Pay Us a Visit", 
            text: "Union St, Seattle, WA 98101, United States",
            id:1
        },
        {
            iconName: ICON_NAMES.COMMUNICATION.PHONE_ICON,
            title: "Give Us a Call" ,
            text:"(110) 1111-1010",
            id:2
        },
        {
            iconName: ICON_NAMES.COMMUNICATION.MESSAGE_ICON,
            title:"Send Us a Message",
            text:"Contact@HydraVTech.com",
            id:3
        }
    ],
    services : [
        {   img:img1,
            title:"SIMULATION",
            text: `Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.`,

        },
        {   img:img2,
            title:"EDUCATION",
            text: `Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.`,
            
        },
        {   img: img3,
            title:"SELF-CARE",
            text: `Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.`,
            
        },
        {   img:img4,
            title:"OUTDOOR",
            text: `Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.`,
            
        }
    ],
    technologies : [
        unreal,
        vive,
        unity,
        oculos
    ],
    technoType: [
        "3D Conception&",
        "Interaction",
        "VR World User",
        "Hydra VR" 
    ],
    text:{
        about: `Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna
        neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut 
        placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus 
        purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero
        justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet
        sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet 
        nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.`,
        textArow: `Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.`,
    },
    pageImg:{
        about: aboutPexels,
        home: homePexels
    },
    navLink:[
        " ABOUT",
        "SERVICES",
        "TECHNOLOGIES",
        "HOW TO",
        "JOIN HYDRA"
    ],
    footerLink:{
        pageLink:[
            "F.A.Q",
            "SITEMAP",
            "CONDITIONS",
            "LICENSES"
        ],
        siteLink:[
            ICON_NAMES.SITE.FB_ICON,
            ICON_NAMES.SITE.TWITTER_ICON,
            ICON_NAMES.SITE.LINKEDIN_ICON,
            ICON_NAMES.SITE.YOUTUBE_ICON,
            ICON_NAMES.SITE.INSTAGRAM_ICON
        ]
    }

}