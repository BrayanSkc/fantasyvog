import React from "react";
import Button from "../button";
import cls from "classnames";
import Prize from "../../assets/images/Prize.png";
import Green from "../../assets/images/Green.png";

import "./style.css";

export interface ContestsProps {
  mode: "fxi" | "public";
  dataFxi?: {
    date: string;
    viewer: string;
    title: string;
    hours: string;
  };
  dataPublic?: {
    date: string;
    title: string;
    pathPhotoH: string;
    pathPhotoA: string;
  };
}

interface ContestsContainerProps {
  contentChildren: any;
  bottomChildren: any;
  rightChildren: any;
  className: "contest-fxi-mode" | "contest-public-mode";
  image: any;
}



const ContestsContainer: React.SFC<ContestsContainerProps> = ({
  contentChildren,
  bottomChildren,
  className,
  rightChildren,
  image
}) => {
  return (
    <article className={cls("contest-container", className)}>
      <div className="contest-content">
        <div className="contest-left-side">{contentChildren}</div>
        <div className="contest-right-side">
          <img
            className="contest-right-children-background"
            src={image}
            alt=""
          />
          {rightChildren}
        </div>
      </div>
      <footer className="contest-footer">{bottomChildren}</footer>
    </article>
  );
};
const Contests: React.SFC<ContestsProps> = ({ mode, dataFxi, dataPublic }) => {
  const timePlayed = (time: string | undefined) => {
    try {
      if (time !== undefined) {
        return `HRS ${time.split("-")[0]} MIN ${time.split("-")[1]} SEC ${
          time.split("-")[2]
        }`;
      } else {
        return "Unknown";
      }
    } catch {
      return "Err";
    }
  };

  if (mode === "fxi") {
    return (
      <ContestsContainer
        className="contest-fxi-mode"
        image={Prize}
        contentChildren={
          <>
            <div className="contest-top-details-fxi">
              <span className="fxi-date-left">{dataFxi?.date}</span>
              <span className="fxi-date-right">
                <i className="ifont icon-users">{dataFxi?.viewer}</i>
              </span>
            </div>
            <span className="fxi-title-center">{dataFxi?.title}</span>
            <div className="contest-bottom-details">
              <span className="fxi-date-bottom-left">
                {timePlayed(dataFxi?.hours)}
              </span>
            </div>
          </>
        }
        bottomChildren={
          <>
            <Button className={"btn-contest-footer-primary"} id={"button-time"}>
              <span>
                Beginner <i className="ifont icon-soccer-ball"></i>{" "}
              </span>
            </Button>
            <Button
              className={"btn-contest-footer-secondary"}
              id={"button-time"}
            >
              <span>
                View<b> Contest</b> <i className="ifont icon-right-circle"></i>
              </span>
            </Button>
          </>
        }
        rightChildren={<span className="contest-pointer-right"></span>}
      />
    );
  } else if (mode === "public") {
    return (
      <ContestsContainer
        image={Green}
        className="contest-public-mode"
        contentChildren={
          <>
            <div className="contest-top-details-public">
              <span className="public-date-left">{dataPublic?.date}</span>
            </div>
            <div className="contest-body-details-public">
              <span className="public-title-center">{dataPublic?.title}</span>
              <div className="contest-profile-picture">
                <img
                  className="contest-public-profile"
                  src={dataPublic?.pathPhotoA}
                  alt="player-one"
                />
                <span>vs</span>
                <img
                  className="contest-public-profile"
                  src={dataPublic?.pathPhotoH}
                  alt="player-two"
                />
              </div>
            </div>
          </>
        }
        bottomChildren={
          <>
            <Button
              className={"btn-contest-footer-primary"}
              id={"button-time-public"}
            >
              <span>
                <i className="ifont icon-soccer-ball"></i> 1-on-1
              </span>
            </Button>
            <Button
              className={"btn-contest-footer-secondary"}
              id={"button-time"}
            >
              <span>
                View<b> Contest</b> <i className="ifont icon-right-circle"></i>
              </span>
            </Button>
          </>
        }
        rightChildren={<span className="contest-pointer-right"></span>}
      />
    );
  } else {
    return null;
  }
};
export default Contests;
