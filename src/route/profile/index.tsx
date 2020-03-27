import React, { useState } from "react";
import Path from "../../components/path";
import Accounts from "../../components/accounts";
import { PROFILE } from "../../routes";
import "./style.css";
import Information from "../../components/information";
import Notification from "../../components/notification/index";
import classNames from "classnames";

export interface ProfileProps {}

const Profile: React.SFC<ProfileProps> = () => {
  const [viewType, setViewType] = useState("profile");
  const [classRightOption, setClassRightOption] = useState(
    "profile-options-settings-right"
  );
  const [takeScreen, setTakeScreen] = useState(false);

  const handleViewChange = (view: string) => {
    switch (view) {
      case "profile":
        setViewType("profile");
        setClassRightOption("profile-options-settings-right");
        setTakeScreen(false);
        break;
      case "balance":
        setViewType("balance");
        setClassRightOption("profile-options-balance-right");
        setTakeScreen(true);
        break;
      default:
        setViewType("notification");
        setClassRightOption("container-notification-profile");
        setTakeScreen(true);
        break;
    }
  };
  return (
    <div
      className={classNames({
        "profile-container-settings": !takeScreen,
        "profile-container-settings-screen": !!takeScreen
      })}
    >
      <div className="profile-settings-background">
        <span className="profile-settings-title">Settings</span>
        <div className="profile-options-settings">
          <div className="profile-options-settings-left">
            <ul className="options-settings">
              <li
                className={classNames({
                  "left-options-li ": viewType !== "profile",
                  "left-options-li active-setting": viewType === "profile"
                })}
                onClick={() => handleViewChange("profile")}
              >
                <Path path={PROFILE}>Personal Information</Path>
              </li>
              <li
                 className={classNames({
                  "left-options-li ": viewType !== "balance",
                  "left-options-li active-setting": viewType === "balance"
                })}
                onClick={() => handleViewChange("balance")}
              >
                <span> Balance and Transaction History</span>
              </li>
              <li
                className={classNames({
                  "left-options-li ": viewType !== "notification",
                  "left-options-li active-setting": viewType === "notification"
                })}
                onClick={() => handleViewChange("notification")}
              >
                <Path path={PROFILE}> Notification</Path>
              </li>
              <li className="left-options-li">
                <Path path={PROFILE}> Privacy Politic & Terms of Service</Path>
              </li>
              <li className="left-options-li">
                <Path path={PROFILE}> Self Exclusion</Path>
              </li>
            </ul>
          </div>
          <div className={classRightOption}>
            {viewType === "profile" ? (
              <Information />
            ) : viewType === "balance" ? (
              <Accounts
              onClick={()=>setTakeScreen(false)}
              />
            ) : (
              <Notification />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
