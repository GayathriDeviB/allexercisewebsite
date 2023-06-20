import React, { useState } from "react";
import likeicon from "../../assets/icons/likeicon.png";
import retweet from "../../assets/icons/retweet.png";
import mtabu from "../../assets/images/mtabu.jpg";
import photography from "../../assets/images/photography.jpg";
import likebackground from "../../assets/icons/likebackground.png";
import "./newsfeed.css";
const NewsFeed = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  const [heartBackground, setHeartBackground] = useState(false);
  return (
    <div className="newsfeed_main">
      <div className="main">
        <div className="intro">
          <img src={mtabu} alt="mountabu" />
          <div className="name_profile">
            <p>
              <span>Reymond Gale</span>@reygale
            </p>
            <p>Motion artist,MGX</p>
          </div>
        </div>
        <button>Viral</button>
      </div>
      <img id="image1" src={photography} alt="photography" />
      <div className="caption">
        <div className="captioninfo">
          <p id="para1">
            <b>NFT Photography peak time in george town</b>
          </p>
          <p>2Mins ago</p>
        </div>
        <div className="para_content">
          <p>
            Be the first to get one of the 100+ launch-NFTs in our newly
            launched Marketplace Beta! Get Me Here...
          </p>
          <p>
            <span>93</span>Views
          </p>
        </div>
      </div>
      <div className="feed_expression">
        <div className="reactions">
          <div className="like">
            {!heartBackground ? (
              <button
                onClick={() => {
                  handleCount();
                  setHeartBackground(true);
                }}
              >
                <img id="image2" src={likeicon} alt="like" />
              </button>
            ) : (
              <button onClick={() => setHeartBackground(false)}>
                <img src={likebackground} width="20" height="20" alt="icon" />
              </button>
            )}

            <p>
              <span>{count}</span>likes
            </p>
          </div>
          <div className="tweet">
            <button>
              <img id="image3" src={retweet} alt="tweet" />
            </button>
            <p>
              <span>12</span>Tweets
            </p>
          </div>
        </div>
        <button id="butn">Add Tweet</button>
      </div>
    </div>
  );
};
export default NewsFeed;
