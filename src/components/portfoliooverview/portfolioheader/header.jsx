import React, { useState } from "react";
import burger from "../../../assets/icons/hamburger.svg";
import close from "../../../assets/icons/close.svg";
import "./header.css";
const Portfolioheader = () => {
  const [sidebarOn, setSidebarOn] = useState(false);
  const Hamburger = (
    <>
      {!sidebarOn ? (
        <img
          src={burger}
          alt="icon"
          width="30px"
          height="30px"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(true);
          }}
        />
      ) : (
        <img
          src={close}
          alt="icon"
          width="30px"
          height="30px"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(false);
          }}
        />
      )}
    </>
  );
  const Sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <a href="#">Overview</a>
        <a href="#">Portfolio</a>
        <a href="#">Certification</a>
      </div>
    </div>
  );
  return (
    <div className="portfolio_headermain">
      <h2>PORTFOLIO</h2>
      <div className="head1">
        <nav>
          <a href="#">Overview</a>
          <a href="#">Portfolio</a>
          <a href="#">Certification</a>
        </nav>
        {Hamburger}
        {sidebarOn && Sidebar}
        <button>HireMe</button>
      </div>
    </div>
  );
};
export default Portfolioheader;
