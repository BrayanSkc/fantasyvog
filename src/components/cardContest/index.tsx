import React from "react";
import "./style.css";
import Button from "../button";
import Path from "../path";
import { ALL_PLAYERS } from "../../routes";

export interface CardContestProps {}

const CardContest: React.SFC<CardContestProps> = () => {
  return (
    <div className="card-contest-container">
      <div className="header-card-contest">
        <span className="title-header-card-left">TOMORROW, 3:00 PM</span>

        <span className="title-header-card-right">
          <i className="ifont icon-users" /> 170 of 200 MAX
        </span>
      </div>
      <div className="body-card-contest">
        <span className="title-card-contest">
          THE NAME OF THE CONTEST GOES HERE
        </span>

        <span className="description-card-contest">HRS 12 MIN 50 SEC 04</span>
        <div className="footer-card-contest">
          <>
            <Button className="btn-primary-card-contest">
              <i className="ifont  icon-money"/>
              Beginner
            </Button>
            <Button className="btn-primary-card-contest">
              <i className="ifont  icon-soccer-ball" />
              Pick’n’Go
            </Button>
          </>
          <Path path={ALL_PLAYERS} className="btn-path-card-contest">
            <span style={{ color: "#00980C", fontWeight: "bold" }}>₦500</span>
            &nbsp;to&nbsp;<b> Enter</b>
          </Path>
        </div>
      </div>
    </div>
  );
};

export default CardContest;
