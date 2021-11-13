import React from "react";
import '../../styles/financial.css'
import TeamIcon from '../../images/teamIcon.png'
import ScroolIcon from '../../images/scrollIcon.png'
import IncomeIcon from '../../images/IncomeIcon.png'
import HandIcon from '../../images/handIcon.png'

const Financial = () => {
    const Finansial = [{title:'Increase Potensial Profit Partner (Farme, User & Sme’s)', icon:IncomeIcon},
                {title:'More Option Prefrence & AI Tech', icon:HandIcon},
                {title:'One-Stop Scrolling One Stop Shoping', icon:ScroolIcon},
                {title:'Develop Community Interaction & Collaboration', icon:TeamIcon}]
    return(
        <div className="Financial">
            <div className="FinancialBackground">
                <div className="FinancialContainer">
                    <div className="FinancialTitleArea">
                        <div className="FinancialTitle">Financial Forecasting</div>
                        <button className="FinancialButton">Download</button>
                    </div>
                    <div className="FinancialBox">
                        {Finansial.map((finansial)=>(
                        <div className="FinancialItem">
                            <div className="FinancialItemIcon">
                                <img src={finansial.icon}></img>
                            </div>
                            <div className="FinancialItemTitle">
                                {finansial.title}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financial