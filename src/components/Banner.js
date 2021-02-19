import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPlay
} from "react-icons/fa";
const Banner = () => {
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
                <h1>I'm Mohamed Khalil Dhaher</h1>
                <p>
                  I'm enthusiastic software engineer I have serious passion for
                  coding, animations and creating intuitive, dynamic user
                  experiences who specialized in front end and back end
                  development graduated from RBK Tunisia as Software engineer
                  working as full stack developer .
                </p>
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
              <img src="/assets/khalildh.png" alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
