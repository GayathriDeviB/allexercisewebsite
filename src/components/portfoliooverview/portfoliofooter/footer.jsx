import React from "react";
import socialmedia from "../../../assets/images/socialmedia.gif";
import facebook from "../../../assets/icons/facebook.png";
import instagram from "../../../assets/icons/instagram.png";
import linkedin from "../../../assets/icons/linkedin.png";
import telegram from "../../../assets/icons/telegram.png";
import twitter from "../../../assets/icons/twitter.png";
import whatsapp from "../../../assets/icons/whatsapp.png";
import email from "../../../assets/icons/email.gif";
import "./footer.css";
const Portfoliofooter = () => {
  return (
    <div className="conclusion">
      <nav>
        <a href="#">
          <h1>Overview</h1>
        </a>
        <a href="#">
          <h1>Portfolio</h1>
        </a>
        <a href="#">
          <h1>Certification</h1>
        </a>
      </nav>
      <div className="find_me_main">
        <div className="find_me">
          <div className="find_me1">
            <p>Find me on </p>
          </div>
          <div className="find_me2">
            <img src={socialmedia} alt="image" />
            <p> social media:</p>
          </div>
        </div>
        <div className="media_icons">
          <nav>
            <a href="#">
              <img src={facebook} alt="icon" />
            </a>
            <a href="#">
              <img src={instagram} alt="icon" />
            </a>
            <a href="#">
              <img src={linkedin} alt="icon" />
            </a>
            <a href="#">
              <img src={telegram} alt="icon" />
            </a>
            <a href="#">
              <img src={twitter} alt="icon" />
            </a>
            <a href="#">
              <img src={whatsapp} alt="icon" />
            </a>
          </nav>
        </div>
        <nav id="mail">
          <a href="#">
            <img src={email} alt="icon" />
          </a>
          <a href="#">gd019946@gmail.com</a>
        </nav>
      </div>
    </div>
  );
};
export default Portfoliofooter;
