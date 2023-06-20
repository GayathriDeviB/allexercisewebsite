import React from "react";
import "./recentchat.css";
import dora from "../../assets/images/dora.jpeg";
import jack from "../../assets/images/jack.jpg";
import jessica from "../../assets/images/jessica.jpg";
import rowan from "../../assets/images/rowan.jpg";
import shobi from "../../assets/images/shobi.png";
import thomas from "../../assets/images/thomas.jpg";
const RecentChat = () => {
  const Chat = [
    {
      Image: dora,
      name: "Dora",
      designation: "Travelling Agent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adjaiscing elit. Donec dolar tell us at lacinia...",
    },
    {
      Image: jessica,
      name: "Jessica",
      designation: "Scientist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adjaiscing elit. Donec dolar tell us at lacinia...",
    },
    {
      Image: shobi,
      name: "Shobi",
      designation: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adjaiscing elit. Donec dolar tell us at lacinia...",
    },
    {
      Image: thomas,
      name: "Thomas",
      designation: "Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adjaiscing elit. Donec dolar tell us at lacinia...",
    },
    {
      Image: rowan,
      name: "Atkinson",
      designation: "Artist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adjaiscing elit. Donec dolar tell us at lacinia...",
    },
    {
      Image: jack,
      name: "Jack",
      designation: "Software Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adjaiscing elit. Donec dolar tell us at lacinia...",
    },
  ];
  const renderChat = Chat.map((chatlist) => {
    return (
      <div className="individualchatsmain">
        <div className="individualchats">
          <img src={chatlist.Image} alt="image" />
          <div className="messages">
            <div className="person_name">
              <h3 id="name">{chatlist.name}</h3>
              <h4 id="design">{chatlist.designation}</h4>
            </div>
            <p>{chatlist.description}</p>
          </div>
        </div>
        <hr />
      </div>
    );
  });
  return (
    <div className="recentchatmain">
      <React.Fragment>
        <div className="topic">
          <h1>Recent Chats</h1>
        </div>
        <div className="recentchatslist">{renderChat}</div>
      </React.Fragment>
    </div>
  );
};
export default RecentChat;
