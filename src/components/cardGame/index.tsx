import React, { useState } from "react";
import "./style.css";
import { PLAY_PUBLIC, PLAY_ONE } from "../../routes";
import Path from "../path/index";
import classNames from "classnames";

export interface CardGameProps {
  pathImage: string;
  isGreen: boolean;
}

const CardGame: React.SFC<CardGameProps> = ({ pathImage, isGreen }) => {
  return (
    <div className="card-game-container">
      <div className="left-card">
        <img src={pathImage} alt="" className="card-left-img" />
      </div>
      <div
        className={classNames({
          "right-card": !isGreen,
          "right-card-green": !!isGreen
        })}
      >
        <span className="title-right-card">Big Money Contest</span>
        <span className="body-right-card">
          Draft your team and get ready for the game!
        </span>
        {isGreen ? (
          <Path path={PLAY_ONE} className="btn-card-game">
            Play Now
          </Path>
        ) : (
          <Path path={PLAY_PUBLIC} className="btn-card-game">
            Play Now
          </Path>
        )}
      </div>
    </div>
  );
};

export default CardGame;
