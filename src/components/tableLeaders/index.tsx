import React from "react";
import Cup from "../../assets/images/Trophy.png";
import Avatar from "../../assets/images/Avatar.png";
import Img1 from "../../assets/images/Ava1.png";
import Img2 from "../../assets/images/Ava2.png";
import Img3 from "../../assets/images/Ava3.png";
import Img4 from "../../assets/images/Ava4.png";
import Img5 from "../../assets/images/Ava5.png";

import "./style.css";

export interface TableLeadersProps {}

const TableLeaders: React.SFC<TableLeadersProps> = () => {
  return (
    <div className="table-leaders-container">
      <div className="header-table-leaders">
        <span className="title-table-leaders">Leaders</span>
      </div>

      <div className="body-contest-player-place">
        <div className="header-player-place">
          <div className="player-place-left">
            <img src={Avatar} alt="avatar" className="avatar-player-place" />
            <span className="name-player-place">ThePlayer</span>
          </div>
          <div className="player-place-right">
            <img src={Cup} alt="cup" className="cup-player-place" />
            <span className="player-place">1st</span>
          </div>
        </div>
        <div className="body-player-place">
          <table className="table-player-place">
            <tr>
              <th>
                <img src={Img1} className="img-player-place" alt="img" />
                <td className="td-points-player">30</td>
              </th>
              <th>
                <img src={Img2} className="img-player-place" alt="img" />
                <td className="td-points-player">20</td>
              </th>
              <th>
                <img src={Img3} className="img-player-place" alt="img" />
                <td className="td-points-player">10</td>
              </th>
              <th>
                <img src={Img4} className="img-player-place" alt="img" />
                <td className="td-points-player">20</td>
              </th>
              <th>
                <img src={Img5} className="img-player-place" alt="img" />
                <td className="td-points-player">50.8</td>
              </th>
            </tr>
          </table>
        </div>
        <div className="footer-player-place">
          <span className="points-player-place">130.8&nbsp;</span>
          <span className="points"> POINTS</span>
        </div>
      </div>

      <div className="body-contest-player-place">
        <div className="header-player-place">
          <div className="player-place-left">
            <img src={Img1} alt="avatar" className="avatar-player-place" />
            <span className="name-player-place">ThePro</span>
          </div>
          <div className="player-place-right">
            <span className="player-place">2nd</span>
          </div>
        </div>
        <div className="body-player-place">
          <table className="table-player-place">
            <tr>
              <th>
                <img src={Img1} className="img-player-place" alt="img" />
                <td className="td-points-player">10</td>
              </th>
              <th>
                <img src={Img2} className="img-player-place" alt="img" />
                <td className="td-points-player">10</td>
              </th>
              <th>
                <img src={Img3} className="img-player-place" alt="img" />
                <td className="td-points-player">10</td>
              </th>
              <th>
                <img src={Img4} className="img-player-place" alt="img" />
                <td className="td-points-player">10</td>
              </th>
              <th>
                <img src={Img5} className="img-player-place" alt="img" />
                <td className="td-points-player">20.8</td>
              </th>
            </tr>
          </table>
        </div>
        <div className="footer-player-place">
          <span className="points-player-place">60.8&nbsp;</span>
          <span className="points"> POINTS</span>
        </div>
      </div>
    </div>
  );
};

export default TableLeaders;
