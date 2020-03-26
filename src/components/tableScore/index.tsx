import React from "react";
import "./style.css";
export interface TableScoreProps {}

const TableScore: React.SFC<TableScoreProps> = () => {
  return (
    <div className="table-score-container">
      <div className="header-score-table">
        <span className="title-header-score">System Score</span>
      </div>
      <div className="body-score-table">
        <span className="title-body-score">All Players</span>
        <ul>
          <li className="item-table-score">
            <span className="left">Goals</span>
            <span className="right-points">+10pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Assist</span>
            <span className="right-points">+6pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Shot</span>
            <span className="right-points">+1pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Shot On Goals</span>
            <span className="right-points">+1pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Crosses</span>
            <span className="right-points">+0.75pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Fouls Drawn</span>
            <span className="right-points">+1pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Fouls Conceded</span>
            <span className="right-points-foul">-0.5pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Tackle Won</span>
            <span className="right-points">+1pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Passes Intercepted</span>
            <span className="right-points-foul">+0.5pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Yellow Card</span>
            <span className="right-points-foul">-1.5pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Red Card</span>
            <span className="right-points-foul">-3pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Penalty Kick Miss</span>
            <span className="right-points-foul">-6pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Clean Sheet (D) </span>
            <span className="right-points">+3pts</span>
          </li>
        </ul>
        <span className="title-body-score">Goalkeepers</span>
        <ul>
          <li className="item-table-score">
            <span className="left">Saves</span>
            <span className="right-points">+2pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Goal Conceded</span>
            <span className="right-points-foul">-2pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Clean Sheet</span>
            <span className="right-points">+5pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Win</span>
            <span className="right-points">5pts</span>
          </li>
          <li className="item-table-score">
            <span className="left">Penalty Kick Save</span>
            <span className="right-points-foul">-0.5pts</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableScore;
