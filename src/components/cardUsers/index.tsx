import React from "react";
import "./style.css";
import Button from "../button";

export interface CardUsersProps {
  nameUser: String;
  points: String;
  ranking?: string;
  image: string;
  nameToFilter?: string;
  typeButton: "profile" | "friends" | "default" | "none";
}

const CardUsers: React.SFC<CardUsersProps> = ({
  nameUser,
  points,
  image,
  nameToFilter,
  ranking,
  typeButton
}) => {
  const getStyleButton = (type: String) => {
    switch (type) {
      case "friends":
        return <Button className="btn-friends-design-one">Challenge</Button>;
      case "profile":
        return (
          <>
            <Button className="btn-friends-design-profile-cancel">
              <i className="ifont icon-cancel" />
            </Button>
            <Button className="btn-friends-design-profile-ok">
              <i className="ifont icon-ok" />
            </Button>
          </>
        );
      case "default":
        return (
          <>
            <Button className="btn-friends-design-one">Challenge</Button>
            <Button className="btn-friends-design-profile-ok">
              <i className="ifont icon-plus" />
            </Button>
          </>
        );

      case "none":
        return null;
    }
  };

  return (
    <div className="cards-container">
      <div className="left-card-container">
        <table className="left-card-container">
          <tr>
            <th className="rank-leaders">{ranking}</th>
            <th>
              <img src={image} alt="pic users" className="pic-user" />
            </th>
            <th className="user-data-card">
              <span className="name-left-card">{nameUser}</span>

              <td>
                <span className="dinner-left-card">₦ {points}</span>
              </td>
            </th>
          </tr>
        </table>
      </div>
      {typeButton && (
        <div className="right-card-container">{getStyleButton(typeButton)}</div>
      )}
    </div>
  );
};

export default CardUsers;
