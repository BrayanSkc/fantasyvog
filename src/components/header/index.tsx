/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import Logo from "../../assets/images/Logo.png";
import Path from "../path";
import Button from "../button";
import Coin from "../../assets/images/cashLogo.png";
import Modal from "../modal";
import "./style.css";
import { getDataToken } from "../../utils/localStorage";
import { useLocation } from "react-router-dom";
import {
  LOGIN,
  PLAY,
  HOME,
  CHECK_IN,
  ENTRIES,
  NEWS,
  LEADER,
  FRIENDS
} from "../../routes";
import classNames from "classnames";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleChangeClick = () => {
    setOpenModal(true);
  };

  const { pathname } = useLocation();
  const token = useMemo(() => getDataToken(), [pathname]);
  const isActive = (path: string) => {
    console.log(pathname);
    if (pathname === path) {
      return true;
    }
    return false;
  };
  return (
    <>
      <div className="container-nav">
        <img
          src={Logo}
          alt="Logo"
          className={classNames({
            "logo-header": !token,
            "logo-header-login": !!token
          })}
        />
        {!token ? (
          <>
            <Path path={HOME} className="link-header-FAQ">
              FAQ
            </Path>
            <div className="view-header-none-mobile">
              <Path path={CHECK_IN} className="link-header-principal">
                Create an account
              </Path>
            </div>
            <Path path={LOGIN} className="link-header-secondary">
              Log In
            </Path>
          </>
        ) : (
          <>
            <div className="header-menu-open-mobile">
              <Path
                path={PLAY}
                className={classNames({
                  "link-header-primary-login": !isActive("/play"),
                  "link-header-primary-login-active": isActive("/play")
                })}
              >
                Play
              </Path>
              <Path
                path={ENTRIES}
                className={classNames({
                  "link-header-primary-login": !isActive("/entries"),
                  "link-header-primary-login-active": isActive("/entries")
                })}
              >
                Entries
              </Path>
              <Path
                path={FRIENDS}
                className={classNames({
                  "link-header-primary-login": !isActive("/friends"),
                  "link-header-primary-login-active": isActive("/friends")
                })}
              >
                Friends{" "}
              </Path>

              <Path
                path={NEWS}
                className={classNames({
                  "link-header-primary-login": !isActive("/news"),
                  "link-header-primary-login-active": isActive("/news")
                })}
              >
                News
              </Path>

              <Path
                path={LEADER}
                className={classNames({
                  "link-header-primary-login": !isActive("/leader"),
                  "link-header-primary-login-active": isActive("/leader")
                })}
              >
                Leaders
              </Path>
            </div>
            <div className="container-cash-header">
              <div className="label-cash-header">
                <img src={Coin} alt="money-cash" className="coin-image-size" />
                <span className="points-cash-label">200</span>
              </div>
              <div className="label-quantity-header">
                <span className="points-cash-label">₦ 416,260.00</span>
              </div>
              <Button
                onClick={handleChangeClick}
                className={"btn-header-profile"}
              >
                <img
                  src="https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png"
                  alt=""
                  className="photo-profile-class"
                />
                <span className="icon-profile-nav"> ▼</span>
              </Button>
            </div>
          </>
        )}
      </div>
      {token&&(
      <div className="second-container-header">
        <Path
          path={PLAY}
          className={classNames({
            "link-header-primary-login": !isActive("/play"),
            "link-header-primary-login-active": isActive("/play")
          })}
        >
          Play
        </Path>
        <Path
          path={ENTRIES}
          className={classNames({
            "link-header-primary-login": !isActive("/entries"),
            "link-header-primary-login-active": isActive("/entries")
          })}
        >
          Entries
        </Path>
        <Path
          path={FRIENDS}
          className={classNames({
            "link-header-primary-login": !isActive("/friends"),
            "link-header-primary-login-active": isActive("/friends")
          })}
        >
          Friends{" "}
        </Path>

        <Path
          path={NEWS}
          className={classNames({
            "link-header-primary-login": !isActive("/news"),
            "link-header-primary-login-active": isActive("/news")
          })}
        >
          News
        </Path>

        <Path
          path={LEADER}
          className={classNames({
            "link-header-primary-login": !isActive("/leader"),
            "link-header-primary-login-active": isActive("/leader")
          })}
        >
          Leaders
        </Path>
      </div>
      )}

      <Modal
        isShow={openModal}
        isSettings={true}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};
export default Header;
