import React from "react";
import "./newscards.css";
import mtabu from "../../assets/images/mtabu.jpg";
import blueline from "../../assets/images/blueline.png";
const NewsCards = () => {
  const News = [
    {
      Image: mtabu,
      topic: "The news mint. 1 week ago",
      description: "DeFi booming with new initiative and launches in the space",
      views: "205 Views",
      trending: "TRENDING",
    },
    {
      Image: mtabu,
      topic: "The news mint. 1 week ago",
      description: "DeFi booming with new initiative and launches in the space",
      views: "205 Views",
      trending: "TRENDING",
    },
    {
      Image: mtabu,
      topic: "The news mint. 1 week ago",
      description: "DeFi booming with new initiative and launches in the space",
      views: "205 Views",
      trending: "TRENDING",
    },
  ];
  const renderNews = News.map((newslist) => {
    return (
      <div className="newsmain">
        <img src={newslist.Image} alt="image" />
        <div className="newsmaincontent">
          <h4>{newslist.topic}</h4>
          <p>
            <b>{newslist.description}</b>
          </p>
          <div className="viewsmain">
            <h4>{newslist.views}</h4>
            <a href="#">{newslist.trending}</a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="newscardsmain">
      <React.Fragment>
        <div className="news">
          <div className="heading">
            <img src={blueline} alt="image" />
            <h1>NEWS</h1>
          </div>
          <div className="news1">
            <img src={mtabu} alt="image" />
            <div className="content">
              <h4>The news mint. 1 week ago</h4>
              <p>
                <b>
                  DeFi booming with new initiative and launches in the space
                </b>
              </p>
              <div className="view1">
                <h4>205 Views</h4>
                <a href="#">TRENDING</a>
              </div>
            </div>
          </div>
          <div className="news2">
            <h4>The news mint. 1 week ago</h4>
            <p>
              <b>#NFTize the art industry</b>
            </p>
            <div className="view2">
              <h4>205 Views</h4>
              <a href="#">LATEST</a>
            </div>
          </div>
          {renderNews}
        </div>
      </React.Fragment>
    </div>
  );
};
export default NewsCards;
