import React from "react";

import "../../styles/support.css"

import UGM from '../../images/UGM.png'
import INNOPA from '../../images/INNOPA.png'
import AIJAM from '../../images/AIJAM.png'
import TFF from '../../images/tff.png'
import CircleLogo from '../../images/circlelogo.png'
import Ristekdikti from '../../images/ristekdikti.png'
import BPPT from '../../images/bppt.png'

const Support = () => {
    return(
        <div className="Support">
            <div className="SupportTitle">
                Support
            </div>
            <div className="SupportContainer">
                <img className="SupportLogo" src={UGM} alt="UGM"></img>
                <img className="SupportLogo" src={INNOPA} alt="Innopa"></img>
                <img className="SupportLogo" src={AIJAM} alt="Aijam"></img>
                <img className="SupportLogo" src={TFF} alt="Tff"></img>
                <img className="SupportLogo" src={CircleLogo} alt="Logo"></img>
                <img className="SupportLogo" src={Ristekdikti} alt="Ristekdikti"></img>
                <img className="SupportLogo" src={BPPT} alt="BPPT"></img>
            </div>
        </div>
    )
}

export default Support