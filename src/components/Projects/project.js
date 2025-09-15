import React from "react";
import "./project.css"
import calc from "../../assests/calculator.png"
import redblood from "../../assests/redblood.jpg"
import rps from "../../assests/rock-paper-scis.png"


export function Tiles() {
    return (
        <section id="project">
            <div className="project-header">
                <h1>My projects</h1>
                <p>All the below projects are built as a part of the learning process.</p>
            </div>

            <div className="project-grid">
                <div className="tile">
                    <img src={calc} alt="calculator img" />
                    <p>This calculator project is built using basic HTML and JavaScript. I did this project to clear a few concepts.</p>
                    <div className="tech-stack">
    <span className="tag">HTML</span>
    <span className="tag">CSS</span>
    <span className="tag">JavaScript</span>
  </div>
                </div>

                <div className="tile">
                    <img src={rps} alt="rock-paper-scissor img" />
                    <p>This is just a normal page built while learning HTML and JavaScript.</p>
                    <div className="tech-stack">
    <span className="tag">HTML</span>
    
    <span className="tag">JavaScript</span>
  </div>
                </div>

                <div className="tile">
                    <img src={redblood} alt="ntr pic" />
                    <p>This pic is here because I just wanted to keep three tiles in this page so yeah.</p>
                </div>
            </div>
        </section>
    );
}







export default function Project(){
    return(
        <Tiles/>
    );
}