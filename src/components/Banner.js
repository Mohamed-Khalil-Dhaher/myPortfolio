import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPlay
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I'm Mohamed Khalil Dhaher",
    text: "I am a full-stack developer",
    image: "/assets/khalildh.png"
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn-outline">
                    My portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
