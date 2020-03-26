import React, { useState } from "react";
import Modal from "../../components/modal";
import Logo from "../../assets/images/LogoPremier.png";
import "./style.css";

export interface TableProps {}

const positionLeague = {
  league: [
    {
      rank: "1",
      team_id: 40,
      teamName: "Liverpool",
      logo: "https://media.api-football.com/teams/40.png",
      played: "14",
      win: "13",
      draw: "1",
      lose: "0",
      GF: "32",
      GA: "12",
      GD: "+20",
      points: "40"
    },
    {
      rank: "2",
      team_id: 46,
      teamName: "Leicester",
      logo: "https://media.api-football.com/teams/46.png",
      played: "14",
      win: "10",
      draw: "2",
      lose: "2",
      GF: "33",
      GA: "9",
      GD: "+24",
      points: "32"
    },
    {
      rank: "3",
      team_id: 50,
      teamName: "Manchester City",
      logo: "https://media.api-football.com/teams/50.png",
      played: "14",
      win: "9",
      draw: "2",
      lose: "3",
      GF: "39",
      GA: "16",
      GD: "+23",
      points: "29"
    },
    {
      rank: "4",
      team_id: 49,
      teamName: "Chelsea",
      logo: "https://media.api-football.com/teams/49.png",
      played: "14",
      win: "8",
      draw: "2",
      lose: "4",
      GF: "28",
      GA: "20",
      GD: "+8",
      points: "26"
    },
    {
      rank: "5",
      team_id: 47,
      teamName: "Tottenham",
      logo: "https://media.api-football.com/teams/47.png",
      played: "14",
      win: "5",
      draw: "5",
      lose: "4",
      GF: "24",
      GA: "21",
      GD: "+3",
      points: "20"
    },
    {
      rank: "6",
      team_id: 39,
      teamName: "Wolves",
      logo: "https://media.api-football.com/teams/39.png",
      played: "14",
      win: "4",
      draw: "8",
      lose: "2",
      GF: "19",
      GA: "17",
      GD: "+2",
      points: "20"
    },
    {
      rank: "7",
      team_id: 62,
      teamName: "Sheffield Utd",
      logo: "https://media.api-football.com/teams/36.png",
      played: "14",
      win: "4",
      draw: "7",
      lose: "3",
      GF: "17",
      GA: "13",
      GD: "+4",
      points: "19"
    },
    {
      rank: "8",
      team_id: 42,
      teamName: "Arsenal",
      logo: "https://media.api-football.com/teams/42.png",
      played: "14",
      win: "4",
      draw: "7",
      lose: "3",
      GF: "20",
      GA: "21",
      GD: "-1",
      points: "19"
    },
    {
      rank: "9",
      team_id: 33,
      teamName: "Manchester United",
      logo: "https://media.api-football.com/teams/33.png",
      played: "14",
      win: "4",
      draw: "6",
      lose: "4",
      GF: "21",
      GA: "17",
      GD: "+4",
      points: "18"
    },
    {
      rank: "10",
      team_id: 44,
      teamName: "Burnley",
      logo: "https://media.api-football.com/teams/44.png",
      played: "14",
      win: "5",
      draw: "3",
      lose: "6",
      GF: "20",
      GA: "20",
      GD: "0",
      points: "18"
    },
    {
      rank: "11",
      team_id: 52,
      teamName: "Crystal Palace",
      logo: "https://media.api-football.com/teams/52.png",
      played: "14",
      win: "5",
      draw: "3",
      lose: "6",
      GF: "13",
      GA: "18",
      GD: "-5",
      points: "18"
    },
    {
      rank: "12",
      team_id: 35,
      teamName: "Bournemouth",
      logo: "https://media.api-football.com/teams/35.png",
      played: "14",
      win: "4",
      draw: "4",
      lose: "6",
      GF: "18",
      GA: "20",
      GD: "-2",
      points: "16"
    },
    {
      rank: "13",
      team_id: 48,
      teamName: "West Ham",
      logo: "https://media.api-football.com/teams/48.png",
      played: "14",
      win: "4",
      draw: "4",
      lose: "6",
      GF: "17",
      GA: "23",
      GD: "-6",
      points: "16"
    },
    {
      rank: "14",
      team_id: 34,
      teamName: "Newcastle",
      logo: "https://media.api-football.com/teams/34.png",
      played: "14",
      win: "4",
      draw: "4",
      lose: "6",
      GF: "13",
      GA: "22",
      GD: "-9",
      points: "16"
    },
    {
      rank: "15",
      team_id: 66,
      teamName: "Aston Villa",
      logo: "https://media.api-football.com/teams/36.png",
      played: "14",
      win: "4",
      draw: "3",
      lose: "7",
      GF: "21",
      GA: "22",
      GD: "-1",
      points: "15"
    },
    {
      rank: "16",
      team_id: 51,
      teamName: "Brighton",
      logo: "https://media.api-football.com/teams/51.png",
      played: "14",
      win: "4",
      draw: "3",
      lose: "7",
      GF: "16",
      GA: "21",
      GD: "-5",
      points: "15"
    },
    {
      rank: "17",
      team_id: 45,
      teamName: "Everton",
      logo: "https://media.api-football.com/teams/45.png",
      played: "14",
      win: "4",
      draw: "2",
      lose: "8",
      GF: "14",
      GA: "22",
      GD: "-8",
      points: "14"
    },
    {
      rank: "18",
      team_id: 41,
      teamName: "Southampton",
      logo: "https://media.api-football.com/teams/41.png",
      played: "14",
      win: "3",
      draw: "3",
      lose: "8",
      GF: "15",
      GA: "32",
      GD: "-17",
      points: "12"
    },
    {
      rank: "19",
      team_id: 71,
      teamName: "Norwich",
      logo: "https://media.api-football.com/teams/36.png",
      played: "14",
      win: "3",
      draw: "2",
      lose: "9",
      GF: "15",
      GA: "30",
      GD: "-15",
      points: "11"
    },
    {
      rank: "20",
      team_id: 38,
      teamName: "Watford",
      logo: "https://media.api-football.com/teams/38.png",
      played: "14",
      win: "1",
      draw: "5",
      lose: "8",
      GF: "9",
      GA: "28",
      GD: "-19",
      points: "8"
    }
  ]
};

const Table: React.SFC<TableProps> = () => {
  const [openModal, setOpenModal] = useState(false);

  const renderTableHeader = () => {
    let columns = {
      rank: "",
      teamName: "",
      played: "",
      win: "",
      draw: "",
      lose: "",
      GF: "",
      GA: "",
      GD: "",
      points: ""
    };

    let header = Object.keys(columns);
    return header.map((key, index) => {
      return (
        <th key={index} className="title-th-position">
          {key.toUpperCase()}
        </th>
      );
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [teamClick, setTeamClick] = useState("");
  const [postPerPage] = useState(20);
  const paginate = (pageNumbers: any) => setCurrentPage(pageNumbers);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosition = positionLeague.league.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handleItemClick = (e: any) => {
    let team_name = String(e.id);
    setTeamClick(team_name);
    setOpenModal(true);
  };

  const renderTableData = () => {
    return currentPosition.map(
      ({
        rank,
        logo,
        teamName,
        played,
        win,
        draw,
        lose,
        GF,
        GA,
        GD,
        points
      }) => (
        <tr key={rank} className="tr-container-position">
          <td className="td-container-position">{rank}</td>
          <td
            id={teamName}
            onClick={e => handleItemClick(e.target)}
            className="td-container-position-team-name"
          >
            <img src={logo} alt="shield-logo" className="position-shield" />{" "}
            {teamName}
          </td>
          <td className="td-container-position">{played}</td>
          <td className="td-container-position">{win}</td>
          <td className="td-container-position">{draw}</td>
          <td className="td-container-position">{lose}</td>
          <td className="td-container-position">{GF}</td>
          <td className="td-container-position">{GA}</td>
          <td className="td-container-position">{GD}</td>
          <td className="td-container-position">{points}</td>
        </tr>
      )
    );
  };
  return (
    <>
      <div className="background-container-table">
        <div className="container-table">
          <div className="table-container">
            <div className="position-header">
              <span className="title-table">Premier League</span>
              <img src={Logo} alt="Barclays" className="position-logo-head" />
            </div>
            <div className="team-container">
              <table id="teams">
                <thead>
                  <tr>{renderTableHeader()}</tr>
                </thead>
                <tbody>{renderTableData()}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="table-footer-pagination"></div>
        <Modal
          isShow={openModal}
          onClose={() => setOpenModal(false)}
          containerModal={{
            header: "Account Created",
            img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png",
            body:
              "Check your email for the link to reset your password! If you don’t receive the link in the next few minutes, please click on the “Re-send” link below.",
            footerL: "New User?",
            footerR: "Sign up.",
            button:"OK",
            recovery: false
          }}
        />
      </div>
    </>
  );
};

export default Table;
