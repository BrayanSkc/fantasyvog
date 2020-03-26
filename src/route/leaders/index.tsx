import React, { useEffect, useState } from "react";
import "./style.css";
import { GetUserData } from "../../utils/function";
import CardUsers from "../../components/cardUsers/index";

export interface LeaderProps {}

const Leader: React.SFC<LeaderProps> = () => {
  const [leaderList, setLeaderList] = useState<any[]>([]);

  useEffect(() => {
    (async function() {
      try {
        const response = await GetUserData();
        const { results } = response;
        setLeaderList(results);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="leaders-container">
      <div className="leaders-container-box">
        <div className="leaders-contents-left">
          <span className="title-header-box">
            <b>FXI</b> Leaders
          </span>
          <div className="leader-body-left">
            <ul leader-body-left>
              <li>
                {leaderList.map((item, index) => (
                  <CardUsers
                    key={index}
                    ranking={index + 1 + "th"}
                    image={item.picture.thumbnail}
                    nameUser={item.name.first}
                    points={item.location.street.number}
                    typeButton="default"
                  />
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="leaders-contents-right">
          <span className="title-header-box">
            <b>Your</b> Position
          </span>
          <div className="leader-contents-right">
          <CardUsers
          ranking="75th"
            nameUser="PlayerName"
            image="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            points="2345"
            typeButton="none"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
