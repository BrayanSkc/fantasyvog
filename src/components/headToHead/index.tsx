import React, { useState, useEffect } from "react";
import "./style.css";
import ImgLeft from "../../assets/images/Avatar.png";
import ImgRight from "../../assets/images/Ava1.png";
import Button from "../button";

export interface HeadToHeadProps {
  currentStep: number;
}

const HeadToHead: React.SFC<HeadToHeadProps> = ({ currentStep }) => {
  const [changeOpen, setChangeOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentStep === 1) {
      setChangeOpen(false);
      setIsVisible(true);
    } else if (currentStep === 2) {
      setChangeOpen(true);
      setIsVisible(true);
    } else if (currentStep >= 3) {
      setChangeOpen(true);
      setIsVisible(false);
    }
  }, [currentStep]);

  return (
    <>
      {!changeOpen ? (
        <div className="head-to-head-container">
          <Button className="btn-head-primary send">SEND A MESSAGE</Button>
          <Button className="btn-head-primary decline">DECLINE</Button>
          <div className="head-to-head-information">
            <div className="information-players-head">
              <img
                src={ImgLeft}
                style={{ height: 30, borderRadius: "50%" }}
                alt="profile"
              />
              <span className="text-information">You vs Pro</span>
              <img
                src={ImgRight}
                style={{ height: 30, borderRadius: "50%" }}
                alt="profile"
              />
            </div>
            <div className="information-score">
              <span className="scored-left">1</span>
              <span className="scored-right">- 0</span>
            </div>
            <span className="footer-scored">OVERALL 1-ON-1 RECORD</span>
          </div>
        </div>
      ) : (
        <div className="head-to-head-container-two">
          <div className="body-head-to-head">
            <div className="title-head-mode-two">
              <span className="title-mode-two">HEAD TO HEAD</span>
              <span className="text-mode-two">TODAY, 3:00 PM</span>
            </div>
            <div className="information-players-head">
              <table>
                <tr className="tr-information-players">
                  <th className="th-information-players">
                    <img
                      src={ImgLeft}
                      className="img-information-player"
                      alt="profile"
                    />
                    <td className="td-name-player">you</td>
                  </th>
                  <th className="th-information-players">
                    <span
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 30
                      }}
                    >
                      vs
                    </span>
                  </th>
                  <th className="th-information-players">
                    <img
                      src={ImgRight}
                      className="img-information-player"
                      alt="profile"
                    />
                    <td className="td-name-player">ThePro</td>
                  </th>
                </tr>
              </table>
            </div>
            <div className="footer-head-to-head">
              <Button className="btn-head-primary send">SEND A MESSAGE</Button>
            </div>
          </div>
          {isVisible && (
            <Button className="btn-head-primary decline">CANCEL ENTRY</Button>
          )}
        </div>
      )}
    </>
  );
};

export default HeadToHead;
