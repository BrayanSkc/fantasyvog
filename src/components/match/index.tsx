import * as React from "react";
import Stadium from "../../assets/images/Stadium.png";

import "./style.css";

export interface MatchProps {
  team_A: string;
  team_B: string;
  dayEvent: string;
  hour: string;
  stadium: String;
}

const Match: React.SFC<MatchProps> = ({
  team_A,
  team_B,
  hour,
  dayEvent,
  stadium
}) => {
  return (
    <>
      <h3 className="match-date-details">{dayEvent}</h3>
      <div className="match-details">
        <img src={team_A} alt="team-a" className="team-logo" />
        <h6 className="match-hour">{hour}</h6>
        <img src={team_B} alt="team-b" className="team-logo" />
        <div className="stadium-detail">
          <img src={Stadium} alt="stadium-img" className="stadium-logo" />
          <h6 className="stadium-match">{stadium}</h6>
        </div>
      </div>
    </>
  );
};

export default Match;
