import React from "react";

import Image1 from '../../images/image1.png'
import Rectangle1 from '../../images/rectangle1.png'
import Image4 from '../../images/image4.png'
import Rectangle2 from '../../images/rectangle2.png'

import peopleIcon from '../../images/peopleIcon.png'
import PartnerIcon from '../../images/handshakeIcon.png'
import achivmentIcon from '../../images/achivmentIcon.png'
import orderIcon from '../../images/orderIcon.png'

import '../../styles/home.css'
import '../../styles/homeinfo.css'

const Home = () => {
    const Info = [
        {name:'Active User', jumlah:'250', icon:peopleIcon},
        {name:'Partners', jumlah:'250', icon:PartnerIcon},
        {name:'Awards', jumlah:'50', icon:achivmentIcon},
        {name:'Total Order', jumlah:'250', icon:orderIcon}]
    return(
        <>
        <div className='Home'>
            <img className='rectangle1' src={Rectangle1} alt="Rectangle"></img>
            <img className='image1' src={Image1} alt='wanita menyiram tanaman'></img>
            <div className='image1container'>
                
                <div className="HomeTitle">
                    <div className='HomeWeb'>
                        <h1 className="pottanicom">Pottani.com</h1>
                    </div>
                    <div className="HomeDesc">
                    An integrated agrocomplex social platform. 
                    </div>
                    <div className="HomeButton">
                        <button className="RegisterBtn">Register</button>
                        <p className="learnmoreBtn">Learn More</p>
                    </div>
                </div>
            </div>
            <div className='image2container'>
                <img className='rectangle2' src={Rectangle2} alt="Rectangle"></img>
                <img className='image4' src={Image4} alt='petani melon'></img>
            </div>
        </div>

        <div className="HomeInfo">
            <div className="BoxInfo">
                {Info.map((info) => (
                    <div className="infoContainer">
                        <div className="infoIcon">
                            <img src={info.icon} alt="Icon"></img>
                        </div>
                        <div className="infoText">
                            <p className="totalInfo">{info.jumlah}</p>
                            <p className="titleInfo">{info.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Home;