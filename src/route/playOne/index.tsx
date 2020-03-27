import React, { useState } from "react";
import "./style.css";
import ChooseDate from "../../components/chooseDate";
import TableScore from "../../components/tableScore";
import ChatBar from "../../components/chatBar";
import { RouteComponentProps } from "react-router-dom";
import { PLAY } from "../../routes";
import HeadToHead from "../../components/headToHead";
import CardContestOne from "../../components/cardContestOne/index";
import YourTeam from "../../components/yourTeam/index";
import LiveScoring from "../../components/liveScoring";
import YourPlace from "../../components/yourPlace/index";
import TableLeaders from "../../components/tableLeaders";
export interface PlayOneProps extends RouteComponentProps {}

const fixture = [
  { game: "BYR@LIV", hour: "2:00PM" },
  { game: "BAR@PSG", hour: "2:00PM" }
];

const PlayOne: React.SFC<PlayOneProps> = ({ history }) => {
  const [stepView, setStepView] = useState(1);

  const goToBack = () => {
    if (stepView < 2) {
      history.push(PLAY);
    } else {
      setStepView(stepView - 1);
    }
  };
  const changeView = () => {
    if (stepView < 4) {
      setStepView(stepView + 1);
    }
  };
  return (
    <div className="play-container">
      <div className="play-box-container">
        <div className="play-contents-left">
          <span className="title-back-play" onClick={goToBack}>
            ← Back
          </span>
          <span className="title-play-one-contest">
            <b>Upcoming</b> 1-on-1 Contest
          </span>
          <div className="contest-card-contest">
            <CardContestOne node={stepView} onClick={changeView} />
          </div>
          {stepView === 4 ? <YourPlace /> : null}
          {stepView > 1 ? <YourTeam isInitial={stepView}/> : null}
          {stepView === 3 ? <LiveScoring /> : null}

          <div className="play-content-choose-date">
            <ChooseDate buttonVisible={false} match={fixture} />
          </div>

          {stepView < 2 ? (
            <div className="play-content-aside">
              <span>
                <b>ADVERTISING</b>
                <br />
                (840×180)
              </span>
            </div>
          ) : null}
          <div className="play-cards-body">
            <TableScore />
          </div>
        </div>
        <div className="play-content-right">
          <HeadToHead 
          currentStep={stepView}
          />
          {stepView < 4 ? <ChatBar title="1-on-1 Chat" /> : <TableLeaders/>}
        </div>
      </div>
    </div>
  );
};

export default PlayOne;
