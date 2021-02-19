import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar
} from "react-icons/fa";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text: "is simply dummy text"
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: "FaGithub",
      heading: "Web Development",
      text: "simply dummy text"
    },
    {
      id: 2,
      icon: "FaCamera",
      heading: "Photography",
      text: "simply dummy text"
    },
    {
      id: 3,
      icon: "FaCircleNotch",
      heading: "Web Design",
      text: "simply dummy text"
    },
    {
      id: 4,
      icon: "FaApple",
      heading: "App Development",
      text: "simply dummy text"
    },
    {
      id: 5,
      icon: "FaFileVideo",
      heading: "Video Editing",
      text: "simply dummy text"
    },
    {
      id: 6,
      icon: "FaSearchDollar",
      heading: "SEO Expert",
      text: "simply dummy text"
    }
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  <FaGithub className="commonIcons" />
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
//React JS Website | Modern Responsive Portfolio Website [Urdu/Hindi]
