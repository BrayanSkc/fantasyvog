import React, { useState, useEffect } from "react";
import "./style.css";
import CardsPlayer from "../../components/cardPlayer";
import Button from "../../components/button";
import Image from "../../assets/images/Player2.png";
import { getPlayers } from "../../utils/function";
import { getDataToken } from "../../utils/localStorage";
export interface PlayerProps {}

const Player: React.SFC<PlayerProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);
  const [team, setTeam] = useState<any[]>([]);

  // useEffect(() => {
  //   getInfoUser();
  // }, []);

  // const getInfoUser = () => {
  //   try {
  //     const data = getDataToken();
  //     if (data !== null) {
  //       const {
  //         user: { favTeam }
  //       } = data;
  //       getPlayer(favTeam);
  //     }
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  const getPlayer = async (favTeam: number) => {
    const players = await getPlayers(50);
    setTeam(
      players.map(m => ({
        key: m.player_id,
        player_id: m.player_id,
        player_name: m.player_name,
        position: m.position,
        age: m.age,
        team_id: m.team_id,
        team_name: m.team_name,
        goals: m.goals.total,
        assists: m.goals.assists,
        minutes_played: m.games.minutes_played
      }))
    );
  };
  const paginate = (pageNumbers: any) => setCurrentPage(pageNumbers);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPlayer = team.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="players-container">
      <div className="header-filter-player-position">
        <div className="header-filter-player-container">
          <Button className={"btn-secondary-player-custom"}>
            {
              <div className="btn-aligns-player-selected">
                <span>Player Selected </span>
                <span className="layer-details-btn">0 / 5</span>
              </div>
            }
          </Button>
          <Button className={"btn-secondary-player-custom"}>
            {
              <div className="btn-aligns-player-selected">
                <span>Avg/Player</span>
                <span className="layer-details-btn">₦ 0</span>
              </div>
            }
          </Button>
          <Button className={"btn-secondary-player-custom"}>
            {
              <div className="btn-aligns-player-selected">
                <span>Salary Remaining</span>
                <span className="layer-details-btn">₦ 42600</span>
              </div>
            }
          </Button>
        </div>
        <div className="header-filter-btn-player-position">
          <table className="btn-player-position-img">
            <tr className="display-image-position">
              <td>
                <img
                  src="https://i.ya-webdesign.com/images/profile-icon-png-5.png"
                  alt="profile"
                  className="profile-selected-img"
                />
              </td>
              <td>
                <Button className={"btn-secondary-player-position"}>
                  {<span>GK</span>}
                </Button>
              </td>
            </tr>
            <tr className="display-image-position">
              <td>
                <img
                  src="https://i.ya-webdesign.com/images/profile-icon-png-5.png"
                  alt="profile"
                  className="profile-selected-img"
                />
              </td>
              <td>
                <Button className={"btn-secondary-player-position"}>
                  {<span>DEF</span>}
                </Button>
              </td>
            </tr>
            <tr className="display-image-position">
              <td>
                <img
                  src="https://i.ya-webdesign.com/images/profile-icon-png-5.png"
                  alt="profile"
                  className="profile-selected-img"
                />
              </td>
              <td>
                <Button className={"btn-secondary-player-position"}>
                  {<span>DEF</span>}
                </Button>
              </td>
            </tr>
            <tr className="display-image-position">
              <td>
                <img
                  src="https://i.ya-webdesign.com/images/profile-icon-png-5.png"
                  alt="profile"
                  className="profile-selected-img"
                />
              </td>
              <td>
                <Button className={"btn-secondary-player-position"}>
                  {<span>F</span>}
                </Button>
              </td>
            </tr>
          </table>
        </div>
        <div className="header-filter-btn-this-team">
          <table className="btn-player-position-img">
            <tr className="display-image-position">
              <td>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/device-1-1/512/Untitled-25-512.png"
                  alt="profile"
                  className="profile-selected-img"
                />
              </td>
              <td>
                <Button className={"btn-secondary-player-position"}>
                  {<span>My Teams</span>}
                </Button>
              </td>
            </tr>
          </table>
          <Button className={"btn-secondary-player-custom-two"}>
            {"use this team"}
          </Button>
        </div>
      </div>

      <div className="header-filter-player">
        <Button className={"btn-secondary-player-custom-two"}>
          <i className="ifont icon-search-1" />
          <span> Search</span>
        </Button>
        <Button className={"btn-secondary-player-custom-two"}>
          <i className="ifont icon-dollar" />
          <span> Compare</span>
        </Button>
        <Button className={"btn-secondary-player-custom-two"}>
          <i className="ifont icon-money-2 " />
          <span> Filter</span>
        </Button>
      </div>
      <div className="player-container-cards">
        {currentPlayer.map(item => (
          <CardsPlayer
            key={item.team_id + item.player_name}
            id_player={item.team_id}
            pathImage={Image}
            namePlayer={item.player_name}
            positionPlayer={item.position}
            agePlayer={item.age}
            nationality={item.nationality}
            club={item.team_name}
            height={item.height}
            weight={item.weight}
            goals={item.goals}
            assists={item.assists}
            minutes_played={item.minutes_played}
          />
        ))}
      </div>
    </div>
  );
};

export default Player;
