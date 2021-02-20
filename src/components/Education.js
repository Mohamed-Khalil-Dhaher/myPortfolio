import React, { Component } from "react";
import ReactGA from "react-ga";
import axios from "axios";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      infos: []
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getmyInfos() {
    axios.get("./myInfos.json").then(({ data }) => {
      this.setState({
        infos: data
      });
    });
  }

  componentDidMount() {
    this.getmyInfos();
  }

  render() {
    return (
      <div className="appMain">
        <h1 className="education__title">Education</h1>
        {this.state.infos.map((info) => {
          return (
            <div className="education">
              <div className="educ">
                <div className="services__box">
                  <div>School: {info.school}</div>
                  <div>Degree: {info.degree}</div>
                  <div>Graduated: {info.graduated}</div>
                  <div>Description: {info.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Education;
