import React from "react";
import "./project1content.css";
import medialander1 from "../../../assets/images/medialander1.gif";
const Project1content = () => {
  return (
    <div className="project1_allcontent">
      <h1>MEDIA LANDER</h1>
      <div className="project1content_info">
        <img src={medialander1} alt="image" />
        <p>
          It is a website which has signin and login webpages for users of
          Social Network. A user if already signed in can use login
          page.Login/Sign up page can be counted as a gateway to extensive user
          interaction. Usually Login system prevents unauthorized access to
          private data and allows elaborate communication. It requires username
          and a password for user identification and authentication.
        </p>
      </div>
    </div>
  );
};
export default Project1content;
