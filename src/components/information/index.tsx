import React, { useState, useEffect } from "react";
import Invited from '../invited/index';
import "./style.css";
import Button from "../button";
import Input from "../input";
import { getDataToken } from "../../utils/localStorage";

export interface InformationProps {}

const Information: React.SFC<InformationProps> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("*****A");
  const [phone, setPhone] = useState();
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState();
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [codePostal, setCodePostal] = useState();
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getInfoUser();
  }, []);

  const getInfoUser = () => {
    const data = getDataToken();
    const { user } = data;
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setNickname(user.nickname);
    setEmail(user.email);
    setPhone(user.phoneNumber);
    setBirth(user.dateOfBirth);
    setAddress(user.location.addres ? user.location.addres : "");
    setProvince(user.location.province);
    setCity(user.location.city);
    setCodePostal(user.location.postalCode);
  };

const changeAvatar=()=>{
setOpenModal(true)
}

  return (
    <>
      <div className="profile-options-photo-right">
        <table>
          <tr>
            <th>
              <img
                src="https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png"
                alt=""
                className="photo-profile-config-right"
              />
            </th>
            <th className="title-player-profile">
              {nickname}
              <td className="change-avatar-profile" onClick={changeAvatar}>
                Click here to change your avatar
              </td>
              <Invited
              show={openModal}
              onClose={()=>setOpenModal(false)}
              isProfile={openModal}
              />
            </th>
          </tr>
        </table>
      </div>
      <div className="profile-options-form">
        <span className="form-title-options">Personal Information</span>
        <div className="first-row-input-profile">
          <Input
            type="text"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="first-name"
            label="First Name"
            value={firstName}
            onChange={({ target: { value } }: any) => {
              setFirstName(value);
            }}
          />
          <Input
            type="text"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="last-name"
            onChange={({ target: { value } }: any) => {
              setLastName(value);
            }}
            label="Last Name"
            value={lastName}
          />
        </div>
        <div className="secund-row-input-profile">
          <Input
            type="date"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="birth-date"
            onChange={({ target: { value } }: any) => {
              setBirth(value);
            }}
            label="Birth Day"
            value={birth}
          />
        </div>
        <div className="secund-row-input-profile">
          <Input
            type="text"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="nick-name"
            onChange={({ target: { value } }: any) => {
              setNickname(value);
            }}
            label="Nickname"
            value={nickname}
          />
        </div>
        <div className="first-row-input-profile">
          <Input
            type="email"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="email"
            onChange={({ target: { value } }: any) => {
              setEmail(value);
            }}
            label="Email"
            value={email}
          />
          <Input
            type="text"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="phone"
            onChange={({ target: { value } }: any) => {
              setPhone(value);
            }}
            label="Phone Number"
            value={phone}
          />
        </div>
        <div className="secund-row-input-profile">
          <Input
            type="password"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="password"
            onChange={({ target: { value } }: any) => {
              setPassword(value);
            }}
            label="Password"
            value={password}
          />
          <span className="option-edit">edit</span>
        </div>
        <span className="form-title-options">Address Information</span>
        <div className="secund-row-input-profile">
          <Input
            type="text"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="address"
            onChange={({ target: { value } }: any) => {
              setPassword(value);
            }}
            label="address"
            value={address}
          />
        </div>

        <div className="first-row-input-profile">
          <Input
            type="text"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="province"
            onChange={({ target: { value } }: any) => {
              setEmail(value);
            }}
            label="province"
            value={province}
          />
          <Input
            type="text"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="city"
            onChange={({ target: { value } }: any) => {
              setPhone(value);
            }}
            label="city"
            value={city}
          />
        </div>
        <div className="secund-row-input-profile">
          <Input
            type="text"
            classes={{
              input: "input-container-profile-form",
              container: "input-setting-profile-form"
            }}
            name="postal"
            onChange={({ target: { value } }: any) => {
              setPassword(value);
            }}
            label="code Postal"
            value={codePostal}
          />
        </div>
        <div className="btn-footer-profile-options">
          <Button className="btn-avatar-primary" id="cancel-changes">
            Cancel
          </Button>
          <Button className="btn-avatar-secondary" id="save-changes">
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
};

export default Information;
