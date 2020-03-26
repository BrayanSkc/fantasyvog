import React, { useState, useEffect } from "react";
import "./style.css";
import StepBar from "../../components/stepBar";
import Button from "../../components/button/index";
import CardOpponent from "../../components/cardOpponent";
import TeamOptions from "../../components/teamOptions/index";
import ChooseDate from "../../components/chooseDate/index";
import SettingStart from "../../components/settingsStart/index";
import { RouteComponentProps } from "react-router-dom";
export interface StartProps extends RouteComponentProps {}

const matched = [
  {
    game: "BRN@STK",
    hour: "1:30PM"
  },
  { game: "BRN@STK", hour: "1:30PM" },
  {
    game: "BRN@STK",
    hour: "1:30PM"
  },
  { game: "BRN@STK", hour: "1:30PM" },
  { game: "RMD@VAL", hour: "3:30PM" }
];

const Start: React.SFC<StartProps> = ({ history }) => {
  //UseState
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");

  //Constantes
  const array2 = [1, 2, 3, 4, 5];
  const array = [1, 2, 3];

  //Metodos
  const changeStep = () => {
    switch (step) {
      case 2:
        setTitle("Choose Team");
        break;
      case 3:
        setTitle("Choose Date");
        break;
      case 4:
        setTitle("Contest Settings");
        break;
      default:
        setTitle("Choose an Opponent");
    }
  };

  useEffect(() => {
    changeStep();
  }, [step]);

  return (
    <div className="start-container">
      <span
        className="title-go-back"
        onClick={() => {
          if (step < 2) {
            history.goBack();
          } else {
            setStep(step - 1);
          }
        }}
      >
        ← Back
      </span>
      <div className="body-start-container">
        <StepBar step={step} title={title} />
        {step < 2 ? (
          <div className="recent-players-start">
            <div className="header-body-start">
              <Button
                className="btn-body-start-primary"
                onClick={() => setStep(step + 1)}
              >
                Create a public contest
              </Button>
              <Button
                className="btn-body-start-secondary"
                onClick={() => setStep(step + 1)}
              >
                Invite a Friend by email
              </Button>
            </div>
            <span className="title-players">
              <b>Recent</b> Players
            </span>
            <div className="list-card-recent">
              {array.map(item => (
                <CardOpponent key={item} />
              ))}
            </div>
            <span className="title-players">
              <b>Friends</b> 2
            </span>
            <div className="list-card-recent">
              {array2.map(item => (
                <CardOpponent key={item} />
              ))}
            </div>
          </div>
        ) : step === 2 ? (
          <TeamOptions onClick={() => setStep(3)} />
        ) : step === 3 ? (
          <>
            <ChooseDate
              match={matched}
              buttonVisible={true}
              onClick={() => setStep(4)}
            />

            <ChooseDate
              match={matched}
              buttonVisible={true}
              onClick={() => setStep(4)}
            />
          </>
        ) : (
          <SettingStart />
        )}
      </div>
    </div>
  );
};

export default Start;
