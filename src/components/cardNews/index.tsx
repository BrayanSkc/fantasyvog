import React from "react";
import "./style.css";
import IMG from "../../assets/images/IMG4.jpg";

export interface CardNewsProps {
  onClick:Function
}

const CardNews: React.SFC<CardNewsProps> = ({onClick}) => {
  return (
    <div className="card-container" onClick={onClick as any}>
      <div className="left-card-news">
        <img src={IMG} className="image-new-left" alt="news pic" />
      </div>
      <div className="right-card-news">
        <span className="date-card-new">2020/12/12</span>
        <span className="title-card-new">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <span className="body-card-new">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,Magni optio
          odit voluptate
        </span>
      </div>
    </div>
  );
};

export default CardNews;
