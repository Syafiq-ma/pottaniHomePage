import React from "react";

import '../styles/footer.css'

import Pottani from '../images/download.png'

import { FaInstagram, FaTwitter, FaFacebookSquare, FaYoutube} from "react-icons/fa";

const Footer = () =>{
    const Sosmed = [{id:'@pottani_official', icon: <FaInstagram/>},
                    {id:'@PottaniOfficial', icon: <FaTwitter/>},
                    {id: 'Pottani', icon: <FaFacebookSquare/>},
                    {id: 'Pottani Official', icon: <FaYoutube/>}
                ]
    return(
        <div className="Footer">
            <div className="FooterHead">
                <div className="FooterTitle">Interested to Join the Movement</div>
                <div className="ContactUs">
                    <input className="email" placeholder="Email" id="email"/>
                    <button className="ContactBtn">Contact Us</button>
                </div>
            </div>
            <div className="PottaniFooter">
                <img className="FooterLogo" src={Pottani}></img>
                <div className="Kantor">
                    <div className="KantorTitle">Kantor Kami</div>
                    <div className="address">Pogung Baru No. 43 E </div>
                    <div className="address">RT 14 RW 52</div>
                    <div className="address">Sinduadi, Mlati, Sleman</div>
                </div>
                <div className="Follow">
                    <div className="FollowTitle">Follow Us</div>
                    <div className="Sosmed">
                        {Sosmed.map(sosmed=>(
                            <div className="SosmedAccount">
                                <div className="SosmedIcon">{sosmed.icon}</div>
                                <div className="Account">{sosmed.id}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer