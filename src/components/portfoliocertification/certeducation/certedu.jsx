import React from "react";
import sclicon from "../../../assets/icons/sclicon.jpg";
import ugicon from "../../../assets/icons/ugicon.png";
import pgicon from "../../../assets/icons/pgicon.jpg";
import "./certedu.css";
const Certedu = () => {
  const Education = [
    {
      icon: sclicon,
      description: "Pursued my SSLC and HSS education at VVMHSS",
    },
    {
      icon: ugicon,
      description:
        "I had done Bachelor of Science in Mathematics at SSS Shasun Jain College",
    },
    {
      icon: pgicon,
      description:
        "Completed Master of Science in Mathematics at Guru Nanak College",
    },
  ];
  const rendereducation = Education.map((edulist) => {
    return (
      <div className="education">
        <img src={edulist.icon} alt="image" />
        <p>{edulist.description}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="educationmain">
        <h1>EDUCATION</h1>
        <div className="edu">{rendereducation}</div>
      </div>
    </React.Fragment>
  );
};
export default Certedu;
