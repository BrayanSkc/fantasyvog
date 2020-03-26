import * as React from "react";
import Trophy from '../../assets/images/Trophy.png'
import "./style.css";

export interface TablePriceProps {}

const TablePrice: React.SFC<TablePriceProps> = () => {
  return (
    <div className="container-table-prize">
      <div className="header-table-prize">
        <span className="title-table-prize">Prize Payout</span>
      </div>
      <div className="body-table-prize">
        <ul>
          <li className="item-table-prize is-top">
            <span className="position-table-prizes-top">1st <img src={Trophy} className="Trophy" alt="Trophy"/></span>
            <span className="points-table-prizes">₦ 2700,00</span>
          </li>
          <li className="item-table-prize is-top">
            <span className="position-table-prizes-top">2nd</span>
            <span className="points-table-prizes">₦ 2610,00</span>
          </li>
          <li className="item-table-prize is-top">
            <span className="position-table-prizes-top">3rd</span>
            <span className="points-table-prizes">₦ 2605,00</span>
          </li>
          <li className="item-table-prize">
            <span className="position-table-prizes">4th</span>
            <span className="points-table-prizes">₦ 2600,00</span>
          </li>
          <li className="item-table-prize">
            <span className="position-table-prizes">5th</span>
            <span className="points-table-prizes">₦ 2586,00</span>
          </li>
          <li className="item-table-prize">
            <span className="position-table-prizes">6th</span>
            <span className="points-table-prizes">₦ 2560,00</span>
          </li>
          <li className="item-table-prize">
            <span className="position-table-prizes">7th</span>
            <span className="points-table-prizes">₦ 2016,00</span>
          </li>
          <li className="item-table-prize">
            <span className="position-table-prizes">8th</span>
            <span className="points-table-prizes">₦ 2000,00</span>
          </li>
          <li className="item-table-prize">
            <span className="position-table-prizes">9th</span>
            <span className="points-table-prizes">₦ 1926,00</span>
          </li>
          <li className="item-table-prize">
            <span className="position-table-prizes">10th</span>
            <span className="points-table-prizes">₦ 1500,00 </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TablePrice;
