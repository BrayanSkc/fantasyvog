import React, { useState } from "react";
import "./style.css";
import { Picker } from "emoji-mart";
import Arrow from "../../assets/images/Arrow.png";
import Avatar from "../../assets/images/Ava1.png";
import Avatar2 from "../../assets/images/Ava2.png";
import Emoji from "../../assets/images/Emoji.png";
import Send from "../../assets/images/Send.png";

export interface ChatBarProps {
  title:string
}

const ChatBar: React.SFC<ChatBarProps> = ({title}) => {
  const [openChat, setOpenChat] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const ToggleChat = () => {
    setOpenChat(!openChat);
  };

  return (
    <>
      {!openChat ? (
        <div className="chat-bar-container" onClick={ToggleChat}>
          <span className="title-chat-bar">{title}</span>
          <img src={Arrow} alt="arrow" />
        </div>
      ) : (
        <div className="screen-container">
          <div className="chat-open-container">
            <div className="header-open-chat" onClick={ToggleChat}>
              <span className="title-open-chat">Contest Live Chat</span>
              <span className="title-open-chat">x</span>
            </div>
            <div className="header-friends-open-chat">
              <span className="title-header-card-right">
                <i className="ifont icon-users" /> 150
              </span>
            </div>
            <div className="body-open-chat">
              <div className="message-user-left">
                <img
                  src={Avatar}
                  className="avatar-chat"
                  alt="profile-friends"
                />
                <span className="text-message-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit deleniti sed asperiores omnis.
                </span>
              </div>
              <div className="message-user-right">
                <img
                  src={Avatar2}
                  className="avatar-chat"
                  alt="profile-friends"
                />
                <span className="text-message-right">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit deleniti sed asperiores omnis.
                </span>
              </div>
            </div>
            <div className="footer-chat-send">
              <input
                type="text"
                placeholder="Typing your message"
                className="typing-chat"
              />
              <div className="icon-end-chat">
                <img
                  src={Emoji}
                  alt="emoji"
                  className="icon-chat-end"
                  onClick={() => setShowPicker(!showPicker)}
                />
                <img src={Send} alt="send" className="icon-chat-end" />
              </div>

              {showPicker && (
                <div className="show-picker">
                  <Picker
                    set="apple"
                    color={"#ed651f"}
                    sheetSize={20}
                    emojiSize={15}
                    autoFocus={true}
                    onClick={() => setShowPicker(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBar;
