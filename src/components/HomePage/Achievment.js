import React from "react";

import '../../styles/achievment.css'

import AIJAM from '../../images/AIJAM.png'
import ASMI from '../../images/ASMI.png'
import BIT from '../../images/BIT.png'
import WMM from '../../images/WMM.png'
import Pinpenas from '../../images/Pinpenas.png'

const Achievment = () =>{
    const Competition = [{name:"Silver medal in AIIJAM-Japan 2019", rank: "(International Innovation Competititon)", logo:AIJAM},
                        {name:"2nd PINPENAS 2021", rank: "(National Innovation Competition)", logo:Pinpenas},
                        {name:"Finalist in WMM 2020", rank: "(Business Innovation)", logo:WMM},
                        {name:"TOP 100 Startup in ASMI 2021", rank: "(Competition by Ministry of Education and Culture)", logo:ASMI},
                        {name:"Finalist BIT BPPT", rank: "(National Innovation)", logo:BIT}]
    return(
        <div className="Achievment">
            <div className="AchievmentTitle">
                Achievement
            </div>
            <div className="AchievmentContainer">
            {Competition.map((competition)=>(
                <div className="AchievmentBox">
                    <img className="CompetitionLogo" src={competition.logo} src="Competition"></img>
                    <div className="Competition">
                        {competition.name}
                    </div>
                    <div className="CompetitionRank">
                        {competition.rank}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Achievment