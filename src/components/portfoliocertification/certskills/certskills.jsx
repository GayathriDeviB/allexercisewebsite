import React from "react";
import "./certskills.css";
const Certskills = () => {
  return (
    <div className="skillsmain">
      <h1>SKILLS</h1>
      <p id="html">HTML</p>
      <div className="container">
        <div className="skillshtml">75%</div>
      </div>
      <p id="css">CSS</p>
      <div className="container">
        <div className="skillscss">60%</div>
      </div>
      <p id="js">REACT JS</p>
      <div className="container">
        <div className="skillsjs">60%</div>
      </div>
    </div>
  );
};
export default Certskills;