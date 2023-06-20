import React from "react";
import "./followcards.css";
import tickicon from "../../assets/icons/tickicon.png";
import blueline from "../../assets/images/blueline.png";
const CardsFollow = () => {
  const Follow = [
    {
      icon: tickicon,
      name: "Jessica",
      followers: "2M Followers",
      designation: "Scientist",
      message: "Message",
      follow: "Follow",
    },
    {
      icon: tickicon,
      name: "Jack",
      followers: "2M Followers",
      designation: "Software Developer",
      message: "Message",
      follow: "Follow",
    },
    {
      icon: tickicon,
      name: "Thomas",
      followers: "2M Followers",
      designation: "Web Designer",
      message: "Message",
      follow: "Follow",
    },
    {
      icon: tickicon,
      name: "Atkinson",
      followers: "2M Followers",
      designation: "Artist",
      message: "Message",
      follow: "Follow",
    },
  ];
  const renderfollow = Follow.map((followlist) => {
    return (
      <div className="cardsfollowmain">
        <div className="user"></div>
        <div className="cardscontent">
          <div className="profile">
            <div className="all_names">
              <img src={tickicon} alt="image" />
              <h3>{followlist.name}</h3>
            </div>
            <h5>{followlist.followers}</h5>
          </div>
          <h4>{followlist.designation}</h4>
          <div className="butn">
            <button id="msg_butn">{followlist.message}</button>
            <button>{followlist.follow}</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="followmain">
      <div className="follow">
        <img src={blueline} alt="image" />
        <h1>FOLLOW</h1>
      </div>
      <div className="followlist">
        <React.Fragment>{renderfollow}</React.Fragment>
      </div>
    </div>
  );
};
export default CardsFollow;
