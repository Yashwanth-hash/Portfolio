import React from 'react';
import './Navbar.css';

import {Link} from 'react-scroll';


const Navbar = () =>{
    return(
        <nav className='navbar'>
            <div className='side'>S.Yashwanth Kumar
            
            </div>
            
            <div className='MainMenu'>
                <Link to="intro" smooth={true} duration={500}className='MainMenuItem'>Home</Link>
                <Link to ="skills" smooth={true} duration={500}className='MainMenuItem'>About</Link>
                <Link to="project" smooth={true} duration={500}className='MainMenuItem'>Projects</Link>
                <Link to="education-container" smooth={true} duration={500}className='MainMenuItem'>Education</Link>
                <Link to="contact-container" smooth={true} duration={500}className='MainMenuItem'>Contact</Link>

            </div>
        </nav>
    )
}

export default Navbar