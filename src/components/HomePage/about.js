import React from "react";
import '../../styles/about.css';
import AboutImage from '../../images/nanamImage.png';

const About=()=>{
    return(
        <div className="About">
            <div className="TextAbout">
                <div className="AboutTitle">About Us</div>
                <div className="DescAbout">
                Pottani is a social-minded platform engaged in the integrated agro-complex sector (agriculture & fisheries). 
                <div className="DescAbout">
                    The provision of knowledge and equipment in the field of agrocomplex is Pottani's focus.
                </div>
                <div className="DescAbout">
                    Pottani also focuses on digitizing integrated marketing systems and production of urban agro-complexes and conventional farmers by using a touch of technological innovation and integrated systems in one platform.
                </div>
                </div>
            </div>
            <div className="imageAboutContainer">
                <img className="ImageAbout" src={AboutImage} alt="About"></img>
            </div>
        </div>
    )
}

export default About;