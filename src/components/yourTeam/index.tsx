import React, { useState, useEffect } from "react";
import { SortablePane, Pane } from "react-sortable-pane";
import Avatar from "../../assets/images/Avatar.png";
import card from "../../assets/images/card.png";
import card2 from "../../assets/images/card6.png";
import card3 from "../../assets/images/card2.png";
import card4 from "../../assets/images/card3.png";
import card5 from "../../assets/images/card4.png";
import card6 from "../../assets/images/card5.png";
import "./style.css";
import classNames from "classnames";
import { paneStyle } from "./styleTs";

import "./style.css";

export interface YourTeamProps {
  isInitial: number;
}

const YourTeam: React.SFC<YourTeamProps> = ({ isInitial }) => {
  //#region Maps
  const midfielder = [card, card6, ""].map(key => (
    <Pane key={key} defaultSize={{ width: 150, height: 50 }} style={paneStyle}>
      <img src={key} alt="" style={{ height: 80 }} />
    </Pane>
  ));

  const panes = [card3, card4, card5].map(key => (
    <Pane key={key} defaultSize={{ width: 150, height: 50 }} style={paneStyle}>
      <img src={key} alt="" style={{ height: 80 }} />
    </Pane>
  ));
  const defense = ["", card2, ""].map(key => (
    <Pane key={key} defaultSize={{ width: 150, height: 50 }} style={paneStyle}>
      <img src={key} alt="" style={{ height: 80 }} />
    </Pane>
  ));
  //#endregion
  const [initialHeader, setInitialHeader] = useState(true);

  const changeHeader = () => {
    if (isInitial > 2) {
      setInitialHeader(false);
    } else {
      setInitialHeader(true);
    }
  };
  useEffect(() => {changeHeader()}, [isInitial]);

  return (
    <div className="your-team-container">
      <div
        className={classNames({
          "your-team-header": !!initialHeader,
          "your-team-header-black": !initialHeader
        })}
      >
        {initialHeader ? (
          <span className="title-your-team">Your Team</span>
        ) : (
          <div className="header-position-team-black">
            <div className="left-header-team-black">
              <span className="title-position-black">17th</span>
              <img src={Avatar} className="profile-team-black" alt="" />
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                ThePlayers
              </span>
            </div>
            <div className="right-header-team-black">
              <div className="current-winning-team">
                <span className="title-team-points">
                  <b>Current</b> Winnings
                </span>
                <span className="title-position-black">₦ 100,00 </span>
              </div>
              <div className="current-team-points">
                <span className="title-team-points">
                  <b>Team</b> Points
                </span>
                <span
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}
                >
                  115.50{" "}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="your-team-background">
        <div className="contest-your-team">
          <div className="card-team-contest">
            <SortablePane direction="horizontal" margin={2}>
              {midfielder}
            </SortablePane>
            <SortablePane direction="horizontal" margin={2}>
              {panes}
            </SortablePane>
            <SortablePane direction="horizontal" margin={2}>
              {defense}
            </SortablePane>
          </div>
        </div>
      </div>
      <div className="footer-your-team">
        <span className="text-footer">Team Performance</span>
      </div>
    </div>
  );
};

export default YourTeam;
