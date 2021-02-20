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
    text: "This is what i can offer you"
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: "FaGithub",
      heading: "Web Development",
      text:
        "building and maintenance of websites, i do the work that happens behind the scenes to make a website look great"
    },
    {
      id: 2,
      icon: "FaCamera",
      heading: "Photography",
      text: "I like capturing light with a camera or a phone"
    },
    {
      id: 3,
      icon: "FaCircleNotch",
      heading: "Web Design",
      text:
        "I work on the appearance, layout, and, in some cases, content of a website"
    },
    {
      id: 4,
      icon: "FaApple",
      heading: "App Development",
      text:
        "the process of creating a computer program or a set of programs to perform the different tasks that a business requires"
    },
    {
      id: 5,
      icon: "FaFileVideo",
      heading: "Video Editing",
      text:
        "The first thing you need to know is that desktop video editing apps are great options. In fact, I usually edit my own videos on my desktop"
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
