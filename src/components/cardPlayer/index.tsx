import React from "react";
import "./style.css";

export interface CardsPlayerProps {
  id_player: number;
  pathImage: string;
  namePlayer: string;
  positionPlayer: string;
  agePlayer: number;
  club: string;
  nationality: string | null;
  height: string | null;
  weight: string | null;
  goals: number;
  assists: number;
  minutes_played: number;
  className?: string;
}

const CardsPlayer: React.SFC<CardsPlayerProps> = ({
  id_player,
  pathImage,
  namePlayer,
  positionPlayer,
  agePlayer,
  club,
  nationality,
  height,
  weight,
  goals,
  assists,
  minutes_played,
  className
}) => {
  return (
    <div className="card-player-container">
      <div className="card-player-details">
        <h3 className="card-player-name">{namePlayer}</h3>
        <span className="card-player-club">{club}</span>
        <div className="player-details-detail">
          <table>
            <tr>
              <td>Age:</td>
              <td> {agePlayer}</td>
            </tr>
            <tr>
              <td>Assists: </td>
              <td>{assists}</td>
            </tr>
            <tr>
              <td>Goals: </td>
              <td>{goals}</td>
            </tr>
            <tr>
              <td>Game Time: </td>
              <td>{minutes_played}'</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="card-player-image">
        <img
          src={pathImage}
          alt="player-profile"
          className="profile-player-photo"
        />
      </div>
    </div>
  );
};

export default CardsPlayer;
