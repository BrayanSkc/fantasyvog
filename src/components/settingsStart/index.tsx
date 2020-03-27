import React, { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import "./style.css";
import Input from "../input";
import { ALL_PLAYERS } from '../../routes';
import Path from "../path";


interface SettingStartProps {}

const SettingStart: React.SFC<SettingStartProps> = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [viewPicker, setViewPicker] = useState(false);
  const [contest, setContest] = useState("");
  const [entry, setEntry] = useState("₦");


  return (
    <div className="settings-start-container">
      <Input
        label="Contest Name"
        value={contest}
        name="contest"
        onChange={({ target: { value } }: any) => {
          setContest(value);
        }}
        type="text"
        classes={{
          input: "input-settings-start",
          container: "container-settings-start"
        }}
        endIcon={
          <span
            className="icon-settings-emoji"
            onClick={() => {
              setViewPicker(!viewPicker);
            }}
          >
            ☺
          </span>
        }
      />
      {viewPicker && (
        <Picker
          set="apple"
          onSelect={() => setChosenEmoji(chosenEmoji)}
          color={"#ed651f"}
          sheetSize={20}
          emojiSize={15}
          autoFocus={true}
          onClick={e => setContest(e.name)}
        />
      )}

      <Input
        label="Entry Value"
        name="EntryValue"
        value={entry}
        type="text"
        onChange={({ target: { value } }: any) => {
          setEntry(value);
        }}
        classes={{
          input: "input-settings-start",
          container: "container-settings-start"
        }}
      />
      <Input
        label="Prize Payout"
        name="Prize"
        value="WINNER TAKES ALL"
        type="text"
        classes={{
          input: "input-settings-start",
          container: "container-settings-start"
        }}
      />
      <Input
        label="Prize Pool"
        name=""
        type="text"
        value="₦ 2,900.00"
        classes={{
          input: "input-settings-start",
          container: "container-settings-start"
        }}
      />
      <Path path={ALL_PLAYERS} className="btn-start-finish"> CREATE CONTEST</Path>
    </div>
  );
};

export default SettingStart;
