import React, { useState } from "react";
import Switch from "react-switch";
import "./style.css";

export interface NotificationProps {}

const Notification: React.SFC<NotificationProps> = () => {
  const [checkedEmail, setCheckedEmail] = useState(true);
  const [checkedFriends, setCheckedFriends] = useState(true);
  const [checkedChallenge, setCheckedChallenge] = useState(false);
  const [checkedLive, setCheckedLive] = useState(true);
  const [checkedResults, setCheckedResults] = useState(false);

  return (
    <>
      <ul className="options-notifications">
        <li className="li-notification-options">
          Notify via email
          <Switch
            checked={checkedEmail}
            onChange={() => setCheckedEmail(!checkedEmail)}
            onColor="#ffc8b8"
            onHandleColor="#ff6600"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={20}
            height={10}
            width={30}
          />
        </li>
        <li className="li-options-title">Types of notification</li>
        <li className="li-notification-options">
          Friend request
          <Switch
            checked={checkedFriends}
            onChange={() => setCheckedFriends(!checkedFriends)}
            onColor="#ffc8b8"
            onHandleColor="#ff6600"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={20}
            height={10}
            width={30}
          />
        </li>
        <li className="li-notification-options">
          Challenge request
          <Switch
            checked={checkedChallenge}
            onChange={() => setCheckedChallenge(!checkedChallenge)}
            onColor="#ffc8b8"
            onHandleColor="#ff6600"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={20}
            height={10}
            width={30}
          />
        </li>
        <li className="li-notification-options">
          Live contest
          <Switch
            checked={checkedLive}
            onChange={() => setCheckedLive(!checkedLive)}
            onColor="#ffc8b8"
            onHandleColor="#ff6600"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={20}
            height={10}
            width={30}
          />
        </li>
        <li className="li-notification-options">
          Contest results
          <Switch
            checked={checkedResults}
            onChange={() => setCheckedResults(!checkedResults)}
            onColor="#ffc8b8"
            onHandleColor="#ff6600"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={20}
            height={10}
            width={30}
          />
        </li>
      </ul>
    </>
  );
};

export default Notification;
