import React, { useState, Children } from "react";
import "./style.css";
import Button from "../button/index";
import Input from "../input";
import Path from "../path";
import { PROFILE, LOGIN } from "../../routes";
import { deleteDataToken } from "../../utils/localStorage";

export interface ModalProps {
  isShow: boolean;
  onClose: Function;
  isSettings?: boolean;
  containerModal?: {
    header: string;
    img?: string;
    body: string;
    footerL: string;
    footerR?: string;
    recovery?: boolean;
    button: string;
  };
}

const Modal: React.SFC<ModalProps> = ({
  isShow,
  onClose,
  isSettings,
  containerModal
}) => {
  const [showSetting, setShowSetting] = useState(false);

  const logOff = () => {
    deleteDataToken();
    onClose();
  };

  return (
    <>
      {isShow && !isSettings ? (
        <div className="container-modal">
          <div className="modal-form-blank">
            <div className="modal-header-form-blank">
              {containerModal?.img && (
                <img
                  src={containerModal?.img}
                  alt="logo"
                  className="logo-header-form"
                />
              )}
              <span className="title-header-form-blank">
                {containerModal?.header}
              </span>
            </div>
            <span className="modal-body-text-form">
              {containerModal?.body}
              {containerModal?.recovery && (
                <Input
                  type="email"
                  label="email"
                  classes={{
                    container: "modal-input-container-recovery",
                    input: "modal-input-input-recovery"
                  }}
                  onChange={() => {}}
                  name="recoveryEmail"
                  placeholder="user@email.com"
                />
              )}
            </span>
            <Button className="btn-modal-form-blank" onClick={onClose as any}>
              {containerModal?.button}
            </Button>
            <span className="modal-footer-left-text">
              {containerModal?.footerL}
              <span className="modal-footer-right-text">
                {containerModal?.footerR}
              </span>
            </span>
          </div>
        </div>
      ) : isShow && isSettings ? (
        <>
          <div
            className="setting-modal-profile-container"
            onClick={onClose as any}
          >
            <div
              className="setting-modal-profile-background"
              onClick={event => event.stopPropagation()}
            >
              <div className="setting-modal-profile-options">
                <li className="li-options-menu-profile">
                  You have{" "}
                  <span className="letter-golden">&nbsp; 3 new &nbsp;</span>
                  Notification{" "}
                </li>
                <div className="setting-modal-mobile-options">
                  <li
                    className="li-options-menu-profile"
                    onClick={() => setShowSetting(!showSetting)}
                  >
                    <b>Settings</b>
                  </li>
                  {showSetting && (
                    <>
                      <li className="li-options-menu-profile-setting">
                        <Path path={PROFILE}>Personal Information</Path>
                      </li>
                      <li className="li-options-menu-profile-setting">
                        Balance and Transaction History
                      </li>
                      <li className="li-options-menu-profile-setting">
                        Notification
                      </li>
                    </>
                  )}
                </div>
                <li className="li-options-menu-profile">FAQ </li>
                <li className="li-options-menu-profile">Support Chat </li>
                <div className="setting-view-off">
                  <li className="li-options-menu-profile" onClick={onClose as any}>
                    <Path path={PROFILE}>
                      Settings
                    </Path>
                  </li>
                </div>
                <li className="li-options-menu-profile" onClick={logOff}>
                  <Path path={LOGIN}>Log Off</Path>
                </li>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;





