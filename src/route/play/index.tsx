import React from "react";
import "./style.css";
import CardGame from "../../components/cardGame/index";
import CardOne from "../../assets/images/IMG2.jpg";
import CardTwo from "../../assets/images/IMG3.jpg";
import Field from "../../assets/images/Field.png";
import CardThree from "../../assets/images/Profile.png";
import Button from "../../components/button";
import Contests from "../../components/contests";
import { RouteComponentProps } from "react-router-dom";
import { START } from "../../routes";

export interface PlayProps extends RouteComponentProps {}

const Play: React.SFC<PlayProps> = ({ history }) => {
  const routeChange = () => {
    history.push(START);
  };

  return (
    <div className="play-container">
      <div className="play-box-container">
        <div className="play-contents-left">
          <span className="title-box-play">
            <b>FXI</b> Highlights
          </span>
          <div className="play-cards-header">
            <CardGame pathImage={CardOne} isGreen={false} />
            <div className="space" />
            <CardGame pathImage={CardTwo} isGreen={true} />
          </div>
          <div className="play-cards-body">
            <div className="create-cards-body">
              <img src={CardThree} alt="" className="img-photo-left" />
              <div className="data-center-card-body">
                <span className="title-center-card">CREATE A CONTEST</span>
                <span className="data-center-card">
                  Challenge your friends in head-to-head
                </span>
                <Button className="btn-cards-play" onClick={routeChange}>
                  CREATE A CONTEST
                </Button>
              </div>
              <img src={Field} alt="" className="img-photo-right" />
            </div>
          </div>

          <div className="play-contents-footer">
            <span className="title-contents">
              <b>FXI</b> Contests
            </span>
            <ul>
              <li className="li-play-fxi">
                <Contests
                  dataFxi={{
                    date: "Tomorrow, 3:00PM",
                    viewer: "170 of 200 MAX",
                    title: "WIN BIG! ARSENAL VS EVERTON",
                    hours: "12-50-04"
                  }}
                  mode={"fxi"}
                />
              </li>
              <li className="li-play-fxi">
                <Contests
                  dataFxi={{
                    date: "Tomorrow, 3:00PM",
                    viewer: "170 of 200 MAX",
                    title: "WIN BIG! ARSENAL VS EVERTON",
                    hours: "12-50-04"
                  }}
                  mode={"fxi"}
                />
              </li>
              <li className="li-play-fxi">
                <Contests
                  dataFxi={{
                    date: "Tomorrow, 3:00PM",
                    viewer: "170 of 200 MAX",
                    title: "WIN BIG! ARSENAL VS EVERTON",
                    hours: "12-50-04"
                  }}
                  mode={"fxi"}
                />
              </li>
              <span className="title-box-play">
                <b>Public</b> Contents
              </span>
              <li className="li-play-fxi">
                <Contests
                  dataPublic={{
                    date: "live now",
                    title: `INVICTUS vs ThePro`,
                    pathPhotoH:
                      "https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png",
                    pathPhotoA:
                      "https://www.bankrollmob.com/pokernews_images/People/poker_players/isaac%20haxton.png"
                  }}
                  mode={"public"}
                ></Contests>
              </li>
              <li className="li-play-fxi">
                <Contests
                  dataPublic={{
                    date: "live now",
                    title: `INVICTUS vs ThePro`,
                    pathPhotoH:
                      "https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png",
                    pathPhotoA:
                      "https://www.bankrollmob.com/pokernews_images/People/poker_players/isaac%20haxton.png"
                  }}
                  mode={"public"}
                ></Contests>
              </li>
            </ul>
          </div>
        </div>
        <div className="play-contest-right">
          <span>
            <b>ADVERTISING</b>
            <br /> HALF PAGE (300x600)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Play;
