import React from "react";
import "./style.css";
import Avatar from "../../assets/images/Avatar.png";
import Opponent from "../../assets/images/Ava1.png";
import Button from "../button";
import Path from "../path";
import { PLAYERS } from "../../routes";

export interface CardContestOneProps {
  node?: number;
  onClick: Function;
}

const CardContestOne: React.SFC<CardContestOneProps> = ({
  node = 1,
  onClick
}) => {
  return (
    <div className="card-one-vs-one-container" onClick={onClick as any}>
      <div className="card-container-section-one">
        <div className="header-text-card-one">
          <span className="title-card-one">
            THE NAME OF THE CONTEST GOES HERE
          </span>
          {node < 3 ? (
            <span className="date-text-card-one">TOMORROW, 3:00 PM</span>
          ) : node > 3 ? (
            <span className="date-text-card-one">05/07/2019, 3:00 PM</span>
          ) : null}
          {node === 1 ? (
            <div className="card-avatar-container-one">
              <img src={Avatar} className="avatar-header" alt="avatar" />
              <span style={{ color: "#fff", fontSize: 20 }}>vs</span>
              <img src={Opponent} className="avatar-header" alt="avatar" />
            </div>
          ) : null}
        </div>
      </div>
      {node < 4 ? (
        <div className="card-container-section-two">
          <span className="title-card-two">WINNER TAKES ALL</span>
          <span className="points-section-two">1,600</span>
        </div>
      ) : null}
      {node < 3 ? (
        <div className="card-container-section-three">
          <span className="date-text-card-one">GOES LIVE IN</span>
          <span className="date-text-card-one">
            HRS <b>12</b> MIN <b>12</b> SEC <b>12</b>
          </span>
        </div>
      ) : null}
      <div className="card-container-footer">
        <div className="contest-button-section-three">
          <Button className="btn-section-three">1-on-1</Button>
          <Button className="btn-section-three">
            <i className="ifont icon-soccer-ball"></i>
            Pick’n’Go
          </Button>
        </div>
        {node === 1 ? (
          <Path path={PLAYERS} className="btn-path-card-contest">
            <span style={{ color: "#00980C", fontWeight: "bold" }}>₦500</span>
            &nbsp;to&nbsp;<b> Enter</b>
          </Path>
        ) : node >= 4 ? (<Button className="btn-rematch">Rematch</Button>):null}
      </div>
    </div>
  );
};

export default CardContestOne;
