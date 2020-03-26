import React, { useState, useEffect } from "react";
import Input from "../../components/input";
import Contests from "../../components/contests";
import "./style.css";

export interface EntriesProps {}

const Entries: React.SFC<EntriesProps> = () => {
  const [search, setSearch] = useState();
  const [userName, setUserName] = useState();

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = () => {
    const localTkn = localStorage.getItem("loginToken");
    if (localTkn !== null) {
      const jwt = JSON.parse(localTkn);
      const {
        user: { nickname }
      } = jwt;
      setUserName(nickname);
    }
  };

  return (
    <div className="entries-container">
      <div className="entries-body-container-element">
        <div className="entries-background">
          <div className="entries-filter">
            <div className="entries-select-filter-container">
              <label htmlFor="select-filter" className="label-select-filter">
                Sort By
              </label>
              <select name="select-filter" className="entries-select-filter">
                <option disabled selected value="">
                  Time
                </option>
                <option value="1">Hello World</option>
              </select>
            </div>
            <Input
              name="search"
              classes={{
                input: "entries-input-input",
                container: "entries-input-custom"
              }}
              placeholder="&#xf50d; Search"
              type="text"
              value={search}
              onChange={({ target: { value } }: any) => {
                setSearch(value);
              }}
            />
          </div>

          <section className="entries-section-container">
            <div className="entries-articles-container">
              <span className="entries-title-contest">
                <b>FXI</b> Contests
              </span>
              <Contests
                dataFxi={{
                  date: "Tomorrow, 3:00PM",
                  viewer: "170 of 200 MAX",
                  title: "WIN BIG! ARSENAL VS EVERTON",
                  hours: "12-50-04"
                }}
                mode={"fxi"}
              ></Contests>
            </div>
            <div className="entries-articles-container">
              <span className="entries-title-contest">
                <b>public</b> Contests
              </span>
              <Contests
                dataPublic={{
                  date: "live now",
                  title: `INVICTUS vs ${userName}`,
                  pathPhotoH:
                    "https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png",
                  pathPhotoA:
                    "https://www.bankrollmob.com/pokernews_images/People/poker_players/isaac%20haxton.png"
                }}
                mode={"public"}
              ></Contests>
            </div>
          </section>
        </div>
        <aside className="entries-aside-container">
          <span>
            <b>ADVERTISING</b>
            <br /> HALF PAGE (300x600)
          </span>
        </aside>
      </div>
    </div>
  );
};

export default Entries;
