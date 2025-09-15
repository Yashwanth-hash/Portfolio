import React from 'react';
import './hero.css';
import { Link } from 'react-scroll';
import profile from "../../assests/profile.jpg"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import resume from "../../assests/Resume.docx"
export function Image(){
        return(
        <img
            src= {profile}
            alt= "profile pic"
            style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid lightblue"
                
            }}
        
        />     
        );
}

export function Buttons(){
    return(
        <div class="links"> 
        <span><a href="https://github.com/Yashwanth-hash" rel="noopener noreferrer" className="git"><FaGithub size={40} /></a></span>
        <span><a href="https://www.linkedin.com/in/yashwanth-kumar-212a0632a/" rel="noopener noreferrer" className='linkedin' ><FaLinkedin size={40}/></a></span>
        <span><a href="https://www.instagram.com/_yashwanth_its_me/" rel="noopener noreferrer" className='instagram'><FaInstagram size={40}/></a></span>
        </div>
       
    );

}

export function Resume(){
    return(
        <a href={resume}>
            <button className='resume'>Download Resume</button>
        </a>
    );
}



const intro =() =>{
    return(
        <section id="intro">
            <div className="introo">
                <span className='hello'>Hello,</span>
                <span className='mid'>I'm <span className='introName'>Yashwanth</span><br></br>Web Developer</span>
                <p className='Intropara'>I can develop front websites and I am extending this line so <br></br>that it looks good.Hehe I will add something here later</p>
                <div><Link><button className='btn'>Connect with me</button></Link>
                        <Resume/>
                </div>
                
                <Buttons/>
            </div>

            <div className="profile-image">
                <Image/>
            </div>
            
        </section>
    )
}

export default intro;

