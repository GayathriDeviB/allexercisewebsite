import React from "react";
import tickicon from "../../assets/icons/tickicon.png";
import blueline from "../../assets/images/blueline.png";
import "./card.css";
const Card = () => {
  const Profile = [
    {
      icon: tickicon,
      name: "Dora",
      designation: "Travelling Agent",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      follow: "Follow",
    },
    {
      icon: tickicon,
      name: "Jessica",
      designation: "Scientist",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      follow: "Follow",
    },
    {
      icon: tickicon,
      name: "Shobi",
      designation: "Developer",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      follow: "Follow",
    },
    {
      icon: tickicon,
      name: "Thomas",
      designation: "Designer",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      follow: "Follow",
    },
    {
      icon: tickicon,
      name: "Atkinson",
      designation: "Artist",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      follow: "Follow",
    },
    {
      icon: tickicon,
      name: "Jack",
      designation: "Software Developer",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      follow: "Follow",
    },
  ];
  const renderprofile = Profile.map((prolist) => {
    return (
      <div className="profilemain">
        <div className="user"></div>
        <div className="profileinfo">
          <div className="user_name">
            <img src={prolist.icon} alt="tick" />
            <h1>{prolist.name}</h1>
          </div>
          <p>{prolist.designation}</p>
          <p>{prolist.description}</p>
          <p>
            <b>{prolist.followers}</b>
          </p>
          <div className="post">
            <p>{prolist.posts}</p>
            <button>{prolist.message}</button>
          </div>
          <button>{prolist.follow}</button>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="allcards">
        <div className="cardhead">
          <img src={blueline} alt="image" />
          <h1>Popular people on social network</h1>
        </div>
        <div className="cardmain">{renderprofile}</div>
      </div>
    </React.Fragment>
  );
};
export default Card;
