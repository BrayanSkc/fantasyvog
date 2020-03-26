import React, { useState, useEffect } from "react";
import Img from "../../assets/images/Img.png";
import "./style.css";
import Input from "../input";
import Button from "../button";
import Cash from "../../assets/images/cashLogo.png";
import Avatar from "../../assets/images/Avatar.png";
import Ava1 from "../../assets/images/Ava1.png";
import Ava2 from "../../assets/images/Ava2.png";
import Ava3 from "../../assets/images/Ava3.png";
import Ava4 from "../../assets/images/Ava4.png";
import Ava5 from "../../assets/images/Ava5.png";
import Ava6 from "../../assets/images/Ava6.png";

export interface InvitedProps {
  show: boolean;
  onClose: Function;
  isProfile?: boolean;
}
const Invited: React.SFC<InvitedProps> = ({ show, onClose, isProfile }) => {
  const [title, setTitle] = useState("Invited a friends");

  useEffect(() => {
    if (isProfile) {
      setTitle("Select Your Avatar");
    }
  }, [isProfile]);

  return (
    <>
      {show && !isProfile ? (
        <div className="invited-container">
          <div className="invited-friend-form">
            <div className="invited-friend-header">
              <span className="title-header">{title}</span>
              <span className="close-header" onClick={onClose as any}>
                x
              </span>
            </div>
            <div className="invited-friends-body">
              <img src={Img} className="avatar-friends" alt="" />
              <span className="title-body-friends">INVITE A FRIEND</span>
              <div className="text-body-friends">
                Your friend and you will win coins!
                <img src={Cash} alt="coins" className="icon-cash-invited" />
                <span>200</span>
              </div>
              <Input
                name="email"
                type="email"
                classes={{
                  input: "input-invited-friends",
                  container: "container-input-friends"
                }}
                label="Contest Name"
                placeholder="friends@email.com"
              />
              <Button className="btn-send-invited" onClick={onClose as any}>
                Send Invite
              </Button>
            </div>
          </div>
        </div>
      ) : show && isProfile ? (
        <div className="invited-container">
          <div className="invited-avatar-form">
            <div className="invited-friend-header">
              <span className="title-header">{title}</span>
              <span className="close-header" onClick={onClose as any}>
                x
              </span>
            </div>
            <div className="invited-avatar-body">
              <div className="profile-picture-img">
                <img src={Avatar} className="avatar-principal" alt="avatar" />
                <Button className="btn-change-profile">
                  Upload a New Photo
                </Button>
              </div>
              <div className="profile-avatar-img-background">
                <div className="container-avatars">
                  <img
                    src={Ava1}
                    className="avatar-change-options"
                    alt="pic-avatar"
                  />
                  <img
                    src={Ava2}
                    className="avatar-change-options"
                    alt="pic-avatar"
                  />
                  <img
                    src={Ava3}
                    className="avatar-change-options"
                    alt="pic-avatar"
                  />
                  <img
                    src={Ava4}
                    className="avatar-change-options"
                    alt="pic-avatar"
                  />
                  <img
                    src={Ava5}
                    className="avatar-change-options"
                    alt="pic-avatar"
                  />
                  <img
                    src={Ava6}
                    className="avatar-change-options"
                    alt="pic-avatar"
                  />
                </div>
              </div>
              <div className="btn-footer-avatar">
                <Button className="btn-avatar-primary">Cancel</Button>
                <Button className="btn-avatar-secondary">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Invited;
