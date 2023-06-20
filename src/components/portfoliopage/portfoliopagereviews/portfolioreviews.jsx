import React from "react";
import "./portfolioreviews.css";
import review from "../../../assets/icons/review.png";
const Portfoliopagereviews = () => {
  const Reviews = [
    {
      icon: review,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      icon: review,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      icon: review,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      icon: review,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      icon: review,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
  ];
  const renderReviews = Reviews.map((revlist) => {
    return (
      <div className="review_content">
        <img src={revlist.icon} alt="icon" />
        <p>{revlist.description}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="reviews_main">
        <h1>REVIEWS</h1>
        <div className="all_reviews">{renderReviews}</div>
      </div>
    </React.Fragment>
  );
};
export default Portfoliopagereviews;
