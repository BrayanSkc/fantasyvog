import React from "react";
import "./style.css";
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <>
      <body>

        <div className="container-card">
          <div className="card">
            <div className="card_part card_part-one"></div>
            <div className="card_part card_part-two"></div>
            <div className="card_part card_part-three"></div>
            <div className="card_part card_part-four"></div>
          </div>
        </div>
        <div className="radio-card">
        <input type="radio" name="radio" id="radio"/>
        <input type="radio" name="radio" id="radio2"/>
        <input type="radio" name="radio" id="radio3"/>
        </div>        
      </body>
    </>
  );
};

export default Home;
