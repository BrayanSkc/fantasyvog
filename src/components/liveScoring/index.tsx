import React from "react";
import "./style.css";

export interface LiveScoringProps {}

const LiveScoring: React.SFC<LiveScoringProps> = () => {

  return (
    <div className="live-scoring-container">
      <div className="live-scoring-header">
        <span className="title-live-scoring">Live Scoring</span>
      </div>
      <ul className="fixture-scoring-container">
        <li className="item-live-scoring">
          <div className="team-fixture-scoring-left">
            <span className="team-name-scoring">Chelsea</span>
            <div className="team-logo-scoring">
              <img
                src="https://media.api-football.com/teams/49.png"
                className="logo-scoring"
                alt="logo-team"
              />
            </div>
          </div>

          <div className="scoring-live-team">
            <span className="score-live">1 : 1</span>
          </div>
          <div className="team-fixture-scoring">
            <div className="team-logo-scoring">
              <img
                src="https://media.api-football.com/teams/50.png"
                className="logo-scoring"
                alt="logo-team"
              />
            </div>
            <span className="team-name-scoring">Manchester City</span>
          </div>
        </li>
        <li className="item-live-scoring">
          <div className="team-fixture-scoring-left">
            <span className="team-name-scoring">Liverpool</span>
            <div className="team-logo-scoring">
              <img
                src="https://media.api-football.com/teams/40.png"
                className="logo-scoring"
                alt="logo-team"
              />
            </div>
          </div>

          <div className="scoring-live-team">
            <span className="score-live">1 : 1</span>
          </div>
          <div className="team-fixture-scoring">
            <div className="team-logo-scoring">
              <img
                src="https://media.api-football.com/teams/45.png"
                className="logo-scoring"
                alt="logo-team"
              />
            </div>
            <span className="team-name-scoring">Everton</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LiveScoring;
