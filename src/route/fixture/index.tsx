import React, { useState } from "react";
import "./style.css";
import Match from "../../components/match";
import Pagination from "../../components/pagination";

export interface FixtureProps {}

const matchFixture = {
  match: [
    {
      home_team:
      "https://media.api-football.com/teams/40.png",
      away_team:
        "https://media.api-football.com/teams/33.png",
      hour_match: "17:00",
      day_match: "Friday 14, February",
      stadium_match: "Old Trafford(Manchester)"
    },
    {
      home_team:
        "https://media.api-football.com/teams/49.png",
      away_team:
        "https://media.api-football.com/teams/50.png",
      hour_match: "11:30",
      day_match: "Saturday 15, February",
      stadium_match: "Emirates Stadium(Arsenal)"
    },
    {
      home_team:
        "https://media.api-football.com/teams/46.png",
      away_team:
        "https://media.api-football.com/teams/52.png",
      hour_match: "11:30",
      day_match: "Saturday 15, February",
      stadium_match: "Tottenham Hotspur(Tottenham)"
    },
    {
      home_team:
        "https://media.api-football.com/teams/42.png",
      away_team:
        "https://media.api-football.com/teams/34.png",
      hour_match: "17:20",
      day_match: "Saturday 15, February",
      stadium_match: "King Power Stadium(Leicester)"
    },
    {
      home_team:
        "https://media.api-football.com/teams/39.png",
      away_team:
        "https://media.api-football.com/teams/51.png",
      hour_match: "07:20",
      day_match: "Sunday 16, February",
      stadium_match: "Craven Cottage(Stoke City)"
    }
  ]
};

const Fixture: React.SFC<FixtureProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  const paginate = (pageNumbers: any) => setCurrentPage(pageNumbers);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentMatch = matchFixture.match.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <>
      <div className="fixture-container">
        <span className="title-fixture-next">Next Fixture</span>
        <div className="match-container">
          <div className="team-data">
            {currentMatch.map(item => (
              <Match
                team_A={item.home_team}
                team_B={item.away_team}
                hour={item.hour_match}
                stadium={item.stadium_match}
                dayEvent={item.day_match}
                key={item.day_match + item.hour_match + item.stadium_match}
              />
            ))}
            ;
          </div>
        </div>
        <div className="fixture-footer-pagination">
            <Pagination
              postPerPage={postPerPage}
              totalPost={matchFixture.match.length}
              paginate={paginate}
            />
          </div>
      </div>
    </>
  );
};

export default Fixture;
