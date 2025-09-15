import React from "react";
import "./education.css";

export default function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-cards">
        <div className="education-card">
          <h3>10th Graduate</h3>
          <p>Passed out: 2022</p>
          <p>Surya School</p>
        </div>
        <div className="education-card">
          <h3>12th Graduae</h3>
          <p>Passed out: 2024</p>
          <p>FIITJEE College, Hyderabad</p>
        </div>
        <div className="education-card">
          <h3>B.Tech</h3>
          <p>Currently Pursuing</p>
          <p>VIT-AP University</p>
        </div>
      </div>
    </div>
  );
}
