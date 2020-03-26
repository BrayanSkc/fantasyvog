import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../../components/button";
import { getDataToken } from "../../utils/localStorage";
import { getPlayers } from "../../utils/function";
import CardsPlayer from "../../components/cardPlayer";
import Player from '../../assets/images/Player2.png'

export interface AllPlayersProps {}

const AllPlayers: React.SFC<AllPlayersProps> = () => {
    const [team, setTeam] = useState<any[]>([]);

    useEffect(() => {
        getInfoUser();
      }, []);
    
      const getInfoUser = () => {
        try {
          const data = getDataToken();
          if (data !== null) {
            const {
              user: { favTeam }
            } = data;
            getPlayer(favTeam);
          }
        } catch (err) {
          throw err;
        }
      };

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

      const currentPlayer = team.slice(0, 9);

  return (
    <div className="all-players-container">
      <div className="all-player-header-contest">
        <div className="all-player-filter-left">
          <div className="player-selected-all-player">
            <span className="title-player-selected">Player Selected</span>
            <span className="quantity-player-selected">0 / 5</span>
          </div>
          <div className="player-selected-all-player">
            <span className="title-player-selected">Salary Remaining</span>
            <span className="quantity-player-selected">₦ 50.000</span>
          </div>
        </div>
        <div className="all-player-filter-right">
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
      </div>
      <div className="all-player-second-header">
        <span className="position-player">
          <b>Draff</b> Defender
        </span>
        <div className="filter-right-second-header">
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
      </div>
      <div className="all-players-body-cards">
      {currentPlayer.map(item => (
          <CardsPlayer
            key={item.team_id + item.player_name}
            id_player={item.team_id}
            pathImage={Player}
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

export default AllPlayers;
