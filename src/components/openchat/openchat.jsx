import React from "react";
import "./openchat.css";
import sendicon from "../../assets/icons/sendicon.png";
import tickicon from "../../assets/icons/tickicon.png";
import happyicon from "../../assets/icons/happy.png";
import paperclipicon from "../../assets/icons/paper-clip.png";
import microphoneicon from "../../assets/icons/microphone.png";
const OpenChat = () => {
  return (
    <div className="openchatmain">
      <div className="chatpage">
        <div className="user"></div>
        <div className="all_profiles">
          <div className="about">
            <img src={tickicon} alt="image" />
            <h3>Atkinson</h3>
          </div>
          <h4>Artist</h4>
        </div>
        <div className="followers">
          <p>
            Be the first to get one of the 100+ launch -NFTs in our newly
            launched Marketprice Beta! Get Me Here.
          </p>
          <h3>2M Followers</h3>
        </div>
        <div className="post">
          <p>
            <b>43+</b>Posts
          </p>

          <button id="msg">Message</button>
        </div>
        <button id="foll">Follow</button>
      </div>
      <div className="chatpageopen">
        <div className="chatsinside">
          <div className="chat1">
            <p>
              <b>
                Self Confidence is the key to success, or we can say it the
                first step towards success. If a person possesses
                self-confidence, then he/she has inevitably won half the battle.
              </b>
            </p>
          </div>
          <div className="chat2">
            <p>
              We see people in school, workplaces and public sectors who have
              achieved success be more initiative, more forward and active, and
              more confident with their decisions, making them stand out from
              the crowd.
            </p>
          </div>
          <div className="chat3">
            <p>
              <b>
                Just like self-love, self-confidence takes time to acquire. But
                once you start believing in yourself, no one can stop you from
                conquering all the heights in your life and career.
              </b>
            </p>
          </div>
        </div>
        <form>
          <input type="image" src={happyicon} alt="image" />
          <input type="text" id="type_message" placeholder="Type a message here" />
          <input type="image" src={paperclipicon} alt="image" />
          <input type="image" src={microphoneicon} alt="image" />
          <button>
            <img src={sendicon} alt="image" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default OpenChat;
