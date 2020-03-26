import React, { useState, useEffect } from "react";
import "./style.css";
import Custom from "../../assets/images/Custom.png";
import Classic from "../../assets/images/Classic.png";
import Button from "../button";
import classNames from "classnames";

export interface TeamOptionsProps {
  onClick:Function
}

const TeamOptions: React.SFC<TeamOptionsProps> = ({onClick}) => {
  const [isCustom, setIsCustom] = useState(false);
  const [isClassic, setIsClassic] = useState(false);
  const [nextStep, setNextStep] = useState(false);

  const goToDate = () => {
    if (isCustom) {
      setNextStep(true);
    }
  };
  return (
    <div className="team-options-container">
      <div
        className={classNames({
          "options-team": !isClassic,
          "options-team-selected": !!isClassic
        })}
        onClick={() => setIsClassic(!isClassic)}
      >
        <div className="img-left-team">
          <img src={Classic} alt="pic-field" className="picture-field-left" />
        </div>
        <div className="data-right-team">
          <span className="title-field">Classic</span>
          <span className="description-field">
            Create your lineup drafting up to 11 players
          </span>
        </div>
      </div>

      <div
        className={classNames({
          "options-team": !isCustom,
          "options-team-selected": !!isCustom
        })}
        onClick={() => setIsCustom(!isCustom)}
      >
        <div className="img-left-team">
          <img src={Custom} alt="pic-field" className="picture-field-left" />
        </div>
        <div className="data-right-team">
          <span className="title-field">Pick’n Go</span>
          <span className="description-field">
            Create your lineup drafting 5 players
          </span>
        </div>
      </div>

      <Button
        className={classNames({
          "btn-team-options": !isClassic,
          "btn-team-options-selected": !!isClassic
        })}
        onClick={onClick as any}
      >
        CHOOSE A DATE
      </Button>
    </div>
  );
};

export default TeamOptions;
