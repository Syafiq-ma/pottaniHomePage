import React from "react";
import '../../styles/advantage.css'
import Background from '../../images/backgroundadvantage.png'
import TeamIcon from '../../images/teamIcon.png'
import UsbIcon from '../../images/usbIcon.png'
import AIIcon from '../../images/AIIcon.png'
import SendIcon from '../../images/sendIcon.png'

const Advantages = () => {
    const Advantage = [{title:'Distribute Information & Education', icon:SendIcon},
                {title:'Collaboration Innovator & Community', icon:TeamIcon},
                {title:'Digital Tech with AI touch', icon:AIIcon},
                {title:'Distribute Cultivaion Goods', icon:UsbIcon}]
    return(
        <div className="Advantages">
            <div className="advantagesBackground">
            <div className="AdvantageContainer">
            <div className="CompetitiveAdvantage">Competitive Advantage</div>
                <div className="AdvantageWrapper">
                {Advantage.map((advantage)=>(
                <div className="AdvantageBox">
                    <div className="AdvantageIcon">
                        <img src={advantage.icon} alt="Advantage"></img>
                    </div>
                    <div className="AdvantageTitle">
                        {advantage.title}
                    </div>
                </div>
                ))}
                </div>

            </div>
            </div>
        </div>
    )
}

export default Advantages