import React from "react";
import Avatar from '../../assets/images/Avatar.png'
import Trophy from '../../assets/images/Trophy.png'
import "./style.css";

export interface YourPlaceProps {}

const YourPlace: React.SFC<YourPlaceProps> = () => {
  return (
    <div className="your-place-container">
      <img src={Avatar} style={{borderRadius:"50%"}}alt="avatar" />
      <span className="title-your-place">You Placed <b>1st</b><img src={Trophy} className="cup-player-place" alt="Trophy"/> </span>
      <span className="money-your-place">₦ 1.600,00 </span>
      <span className="points-your-place">115.50 <span style={{opacity:0.5, fontWeight:400}}>Points</span> </span>
    </div>
  );
};

export default YourPlace;
