import React, { useEffect, useState } from "react";
import "./style.css";
import Input from "../../components/input";
import CardUsers from "../../components/cardUsers";
import { GetUserData } from "../../utils/function";
import Button from "../../components/button";
import Invited from "../../components/invited";

export interface FriendsProps {}

const Friends: React.SFC<FriendsProps> = () => {
  const [gameFriends, setGameFriends] = useState<any[]>([]);
  const [copyGameFriends, setCopyGameFriends] = useState<any[]>([]);
  const [classFilter, setClassFilter] = useState("input-users-friends");
  const [flexFilter, setFlexFilter] = useState("header-friends-left");
  const [searchFriends, setSearchFriends] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleOnClick = (state: boolean) => {
    if (state) {
      setClassFilter("input-users-friends");
      setFlexFilter("header-friends-left");
    } else {
      setClassFilter("input-search-friends");
      setFlexFilter("header-friends-left-flex");
    }
  };
  const HandleChange = (e: string) => {
    setSearchFriends(e);
    playerFilter(e);
  };

  const playerFilter = (key: String) => {
    key = key.toLowerCase();
    const filter = gameFriends.filter(item =>
      item.name.first.toLowerCase().startsWith(key)
    );
    setCopyGameFriends(filter);
    };

  //Traer Elementos//
  useEffect(() => {
    (async function() {
      try {
        const response = await GetUserData();
        const { results } = response;
        setGameFriends(results);
        setCopyGameFriends(results);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const toggleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="friends-container">
      <div className="friends-contents-box">
        <div className="friends-contents-left">
          <div className={flexFilter}>
            <span className="quantity-friends">
              Friends {copyGameFriends.length}
            </span>
            <Input
              name="search"
              classes={{
                input: "entries-input-input",
                container: classFilter
              }}
              placeholder="&#xf50d; Search"
              type="text"
              value={searchFriends}
              onChange={({ target: { value } }: any) => {
                HandleChange(value);
              }}
              onBlur={() => handleOnClick(true)}
              onFocus={() => handleOnClick(false)}
            />
          </div>
          <div className="body-friends-left">
            <ul>
              {copyGameFriends.map(item => (
                <CardUsers
                  key={item.login.uuid}
                  nameUser={item.name.first}
                  image={item.picture.thumbnail}
                  points={item.location.street.number}
                  typeButton="friends"
                />
              ))}
            </ul>
          </div>

          {!!searchFriends && (
            <>
              <span className="quantity-friends">
                Other Players {gameFriends.length}
              </span>
              <div className="body-friends-left">
                <ul>
                  {gameFriends.map(item => (
                    <CardUsers
                      key={item.login.uuid}
                      nameUser={item.name.first}
                      image={item.picture.thumbnail}
                      points={item.location.street.number}
                      typeButton="friends"
                    />
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="friends-contents-right">
          <span className="quantity-friends">Friend Request {1}</span>
          <div className="friends-body-right">
            <CardUsers
              nameUser="PlayerName"
              image="https://randomuser.me/api/portraits/thumb/men/75.jpg"
              points="2345"
              typeButton="profile"
            />
            <Button className="btn-profile-friends-right" onClick={toggleModal}>
              Invite your friends and{" "}
              <span style={{ color: "yellow" }}>win prizes</span>
            </Button>
          </div>
        </div>
      </div>
      <Invited show={openModal} onClose={() => setOpenModal(false)} isProfile={false} />
    </div>
  );
};

export default Friends;
