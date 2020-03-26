import React, { useState } from "react";

import "./style.css";

export interface CardsProps {
  id_player: string;
  pathImage: string;
  namePlayer: string;
  positionPlayer: string;
  agePlayer: string;
  birth_date: string | null;
  nationality: string | null;
  height: string | null;
  weight: string | null;
  goals: number;
  yellow: number;
  red: number;
  minutes_played: number;
  className?: string;
}

const Cards: React.SFC<CardsProps> = props => {
  const [openModal, setOpenModal] = useState(false);
  const handleChangeClick = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className="cards-player" onClick={handleChangeClick}>
        <img
          src={props.pathImage}
          alt={`-${props.id_player}`}
          className="photo-player"
        />
        <div className="data-player-detail">
          <div>Name: {props.namePlayer}</div>
          <div>Position: {props.positionPlayer} </div>
          <div>Age: {props.agePlayer} Years</div>
        </div>
      </div>
    </>
  );
};

export default Cards;

/*
Vista Desktop, mobile
Player (VF)
Entry (Quemado)
Login (JWT)
Sing Up
Pantalla Usuario (Perfil)
Git 
*/
