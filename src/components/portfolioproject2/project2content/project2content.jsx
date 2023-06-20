import React from "react";
import "./project2content.css";
import socialnetwork1 from "../../../assets/images/socialnetwork1.gif";
const Project2content = () => {
  return (
    <div className="project2_allcontent">
      <h1>SOCIAL NETWORK</h1>
      <div className="project2content_info">
        <img src={socialnetwork1} alt="image" />
        <p>
          It is a website which has home page, friends and chats pages. We can
          be able to open the chats page and click on individual chats.Social
          networks are websites and apps that allow users and organizations to
          connect, communicate, share information and form relationships. People
          can connect with others in the same area, families, friends, and those
          with the same interests.
        </p>
      </div>
    </div>
  );
};
export default Project2content;
