import React, { useState } from "react";
import "./style.css";
import Button from "../button/index";
import classNames from "classnames";

export interface ChooseDateProps {
  onClick?: Function;
  buttonVisible: boolean;
  match: {
    game: string;
    hour: string;
  }[];
}
const ChooseDate: React.SFC<ChooseDateProps> = ({
  onClick,
  match,
  buttonVisible
}) => {
  const [time, setTime] = useState("01:10:20");

  return (
    <div
      className={classNames({
        "choose-date-container": !!buttonVisible,
        "choose-date-container-box": !buttonVisible
      })}
    >
      <div className="choose-date-box">
        <div className="choose-box-header">
          <span className="left-title">JULY 8TH</span>
          <span className="right-title">
            Starts in <span style={{ color: "#E5A700" }}>{time}</span>
          </span>
        </div>
        <div className="choose-box-body">
          {match.map(item => (
            <div className="box-match">
              <span className="title-match">{item.game}</span>
              <span className="time-match">{item.hour}</span>
            </div>
          ))}
        </div>
        {buttonVisible && (
          <Button className="btn-box-choose" onClick={onClick as any}>
            SELECT THIS DAY
          </Button>
        )}
      </div>
      {/* 
      <div className="choose-date-box">
        <div className="choose-box-header">
          <span className="left-title">JULY 9TH</span>
          <span className="right-title">
            Starts in <span style={{ color: "#E5A700" }}>{time}</span>
          </span>
        </div>
        <div className="choose-box-body">
          <div className="box-match">
            <span className="title-match">BRN@STK</span>
            <span className="time-match">1:30PM</span>
          </div>
          <div className="box-match">
            <span className="title-match">BRN@STK</span>
            <span className="time-match">1:30PM</span>
          </div>
          <div className="box-match">
            <span className="title-match">BRN@STK</span>
            <span className="time-match">1:30PM</span>
          </div>
          <div className="box-match">
            <span className="title-match">BRN@STK</span>
            <span className="time-match">1:30PM</span>
          </div>
          <div className="box-match">
            <span className="title-match">BRN@STK</span>
            <span className="time-match">1:30PM</span>
          </div>
        </div>
        <Button className="btn-box-choose" onClick={onClick as any}>
          SELECT THIS DAY
        </Button>
      </div> */}
    </div>
  );
};

export default ChooseDate;
