import React from "react";
import { SortablePane, Pane } from "react-sortable-pane";
import card from "../../assets/images/card.png";
import card2 from "../../assets/images/card6.png";
import card3 from "../../assets/images/card2.png";
import card4 from "../../assets/images/card3.png";
import card5 from "../../assets/images/card4.png";
import card6 from "../../assets/images/card5.png";
import "./style.css";
import {paneStyle } from "./styleTs";

import "./style.css";

export interface YourTeamProps {}

const YourTeam: React.SFC<YourTeamProps> = () => {
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
  
return (
    <div className="your-team-container">
      <div className="your-team-header">
        <span className="title-your-team">Your Team</span>
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
