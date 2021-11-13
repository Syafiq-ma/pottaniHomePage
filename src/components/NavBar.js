import React, {useState,setState}  from "react";
import '../styles/Navbar.css';
import '../styles/Sidebar.css'
import logo from '../images/pottani.png'
import {FaBars, FaTimes} from 'react-icons/fa'

import {Link} from 'react-scroll'

const NavBar = () => {
    const [mobile, setMobile] = useState(false)
    return(
        <nav className="Navbar">
            {mobile?
            <div className="SidebarContainer">
                <button className='closeIcon' onClick={()=>setMobile(false)}>
                    <FaTimes/>
                </button>
                <div className='SidebarMenu'>
                    <div className='SidebarItem'>
                        <Link  to="About" spy={true} smooth={true} offset={-100}  onClick={()=>setMobile(false)}>About</Link>
                    </div>
                    <div className='SidebarItem'>
                        <Link to="Product" spy={true} smooth={true} offset={-100} onClick={()=>setMobile(false)}>Product</Link>
                    </div>
                    <div className='SidebarItem'>
                        <Link to="Advantages" spy={true} smooth={true} offset={-100} onClick={()=>setMobile(false)}>Why Trust Us?</Link>
                    </div>
                    <div className="btnWrapper">
                        <button className='SidebarButton'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
            :
            <div className="NavBarContainer">
                <div className='NavLogo'>
                    <Link  to="Home" spy={true} smooth={true} offset={-100}>
                        <img src={logo} alt="Pottani"></img>
                    </Link>
                </div>
                <div className='NavMenu'>
                    <div className='NavItem'>
                        <Link  to="About" spy={true} smooth={true} offset={-100}>About</Link>
                    </div>
                    <div className='NavItem'>
                        <Link to="Product" spy={true} smooth={true} offset={-100}>Product</Link>
                    </div>
                    <div className='NavItem'>
                        <Link to="Advantages" spy={true} smooth={true} offset={-100}>Why Trust Us?</Link>
                    </div>
                    <button className='NavButton'>
                        Login
                    </button>
                </div>
                <button className="MobileIcon" onClick={()=>setMobile(true)}>
                    <FaBars/>
                </button>
            </div>}
            
        </nav>
    )
}

export default NavBar;