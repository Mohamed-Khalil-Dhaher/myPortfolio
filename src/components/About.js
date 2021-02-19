import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "simply dummy text"
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mohamed khalil Dhaher" },
    { id: 2, title: "Email:", text: "dhaherkhalil91@gmail.com" },
    { id: 3, title: "Phone:", text: "+216 53 383 798" },
    { id: 4, title: "Linkedin:", text: "Not yet" }
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/assets/profilPic.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I am enthusiastic software engineer I have serious passion for
                coding animations and creating intuitive dynamic user
                experiences who specialized in front end and back end
                development
              </div>
              <div className="about__info-p2">
                graduated from RBK Tunisia as Software engineer working as full
                stack developer
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
