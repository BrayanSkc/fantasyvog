import React from "react";
import "./style.css";

export interface CardOpponentProps {}

const CardOpponent: React.SFC<CardOpponentProps> = () => {
  return (
    <div className="card-opponent-container">
      <img src="https://randomuser.me/api/portraits/men/42.jpg" className="picture-opponent" alt="pic-profile" />
      <span className="Name-cards-opponent">Name</span>
      <span className="game-wins-cards">10 games won</span>
    </div>
  );
};

export default CardOpponent;
