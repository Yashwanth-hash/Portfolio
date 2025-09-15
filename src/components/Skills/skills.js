import React from "react";

import './skills.css';

const skills=()=>{
    return(
        <section id="skills">
            <span className="title">About me</span>
            <span className="skilldes">I'm a passionate web developer with not much experience to be precise I am a beginner trying to create repsonsive websites.I know the basics of html css and javascript and learing react and nextjs<br></br>My approach to web development focuses on creating intuitive user experiences while writing clean, maintainable code. I'm constantly learning new technologies and techniques to stay at the forefront of web development.</span>
            <span className="title1">Skills</span>
            <div className="container">
            <span class="skill">HTML </span>
            <span class="skill">CSS </span>
            <span class="skill">JAVASCRIPT </span>
            <span class="skill">GIT </span>
            <span class="skill">FIGMA </span>
            <span class="skill">REACT </span>
            </div>
        </section>
    )
}

export default skills;