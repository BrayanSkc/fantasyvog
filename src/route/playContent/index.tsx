import React, { useState } from "react";
import "./style.css";
import { PLAY } from "../../routes";
import { RouteComponentProps } from "react-router-dom";
import TableScore from "../../components/tableScore/index";
import ChooseDate from "../../components/chooseDate/index";
import CardContest from "../../components/cardContest";
import ChatBar from "../../components/chatBar";
import TablePrice from '../../components/tablePrize/index';

export interface PlayContentProps extends RouteComponentProps {}

const fixture = [
  { game: "BYR@LIV", hour: "2:00PM" },
  { game: "BAR@PSG", hour: "2:00PM" },
  { game: "BBV@ATH", hour: "2:00PM" },
  { game: "MUN@CHE", hour: "2:00PM" }
];

const PlayContent: React.SFC<PlayContentProps> = ({ history }) => {
  const goToBack = () => {
    history.push(PLAY);
  };

  return (
    <div className="play-container">
      <div className="play-box-container">
        <div className="play-contents-left">
          <span className="title-back-play" onClick={goToBack}>
            ← Back
          </span>

          <div className="contest-card-contest">
            <CardContest />
          </div>
          <div className="play-content-choose-date">
            <ChooseDate buttonVisible={false} match={fixture} />
          </div>

          <div className="play-content-aside">
            <span>
              <b>ADVERTISING</b>
              <br />
              (840×180)
            </span>
          </div>
          <div className="play-cards-body">
            <TableScore />
          </div>
        </div>

        <div className="play-content-right">
         <TablePrice/>
          <ChatBar title="Trash Talk"/>
          
        </div>
      </div>
    </div>
  );
};

export default PlayContent;
