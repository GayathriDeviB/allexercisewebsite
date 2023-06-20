import React from "react";
import messenger from "../../assets/icons/messenger.jpeg";
import add from "../../assets/icons/add.jpeg";
import search from "../../assets/icons/searchicon.jpg";
import "./header.css";
import Addpost from "../addpost/addpost";
const Socialnetworkheader = () => {
  // const [addpostOpen, setAddpostOpen] = useState(false);
  return (
    <div className="headermain">
      <h3>Social Network</h3>
      <form>
        <input type="text" placeholder="Search" />
        <button id="b1">
          <img src={search} alt="searchicon" />
        </button>
      </form>
      <a href="#">Wall</a>
      <a href="#">Friends</a>
      <button id="b2">
        <img src={messenger} alt="messenger" />
      </button>
      <button id="b3">
        <img src={add} alt="add" />
        Create Post
      </button>
      <button id="b4">Logout</button>
      {/* <Addpost trigger={addpostOpen} setTrigger={setAddpostOpen} /> */}
    </div>
  );
};
export default Socialnetworkheader;
