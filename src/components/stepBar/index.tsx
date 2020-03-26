import React from "react";
import "./style.css";

export interface StepBarProps {
  title: string;
  step: number;
}

var style = ["default", "default", "default", "default"];

const arrayFour = [1,2,3,4]

const StepBar: React.SFC<StepBarProps> = ({ title, step=0 }) => {
  
  for (let index = 0; index < step; index++) {
    style[index] = "active";
  }

  return (
    <div className="step-bar-container">
      <span className="step-bar-title">{title}</span>
      <ul className="progressbar">
        {
          arrayFour.map(id => (
            <li className={id <= step? "active" : ""}></li>
          ))
        }
      </ul>
    </div>
  );
};

export default StepBar;
