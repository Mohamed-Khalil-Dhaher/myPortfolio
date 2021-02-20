import React from "react";

const Skills = () => {
  const [state] = React.useState([
    {
      name: "React",
      value: 80
    },
    {
      name: "Html",
      value: 65
    },
    {
      name: "Javascript",
      value: 60
    },
    {
      name: "ExpressJS",
      value: 80
    },
    {
      name: "Node",
      value: 70
    },
    {
      name: "Mongoose",
      value: 80
    },
    {
      name: "mySQL",
      value: 50
    }
  ]);
  return (
    <div>
      <div className="row" id="Skills">
        <div className="col-12 skills">
          {state.map((x) => (
            <div>
              <strong>{x.name}</strong>
              <p>{x.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
