import React from "react"
import '../../styles/team.css'
import Pharid from '../../images/pharid.png'
import Gennardo from '../../images/genardo.png'
import Hanifah from '../../images/hanifah.png'
import Mahendra from '../../images/mahendra.png'

const Team = () => {
    const team = [{name:'Pharid El Amady', position: 'Chief Executive Officer', photo:Pharid},
                {name:'Hanifah Rahmawati', position: 'Chief Operating Officer', photo:Hanifah},
                {name:'Mahendra Wijaya', position: 'Chief Marketing Officer', photo:Mahendra},
                {name:'Gennardo Kidam', position: 'Chief Technology Officer', photo:Gennardo},]
    return(
        <div className="Team">
            <div className="TeamTitle">Meet Our Team</div>
            <div className="TeamContainer">
            {team.map((team)=>(
                <div className="TeamBox">
                    <img className="TeamPhoto" src={team.photo} alt="Team"></img>
                    <div className="TeamName">
                        {team.name}
                    </div>
                    <div className="TeamPosition">
                        {team.position}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Team