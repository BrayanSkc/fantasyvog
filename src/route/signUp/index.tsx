import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { postRegistration } from "../../utils/function";
import Check from "../../assets/images/Check.png";
import "./style.css";
import { LOGIN } from "../../routes";
import { RouteComponentProps } from "react-router-dom";
import Recaptcha from "react-recaptcha";
import Modal from "../../components/modal";

export interface SignUpProps extends RouteComponentProps {}

const SignUp: React.SFC<SignUpProps> = ({ history }) => {
  //useState
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("All fields are required");
  const [captcha, setCaptcha] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //Fetch

  const register = {
    FirstName: firstName,
    LastName: lastName,
    DateOfBirth: birth,
    Nickname: nickname,
    Email: email,
    PhoneNumber: phone,
    Password: password,
    Location: {
      Address: "street 12th One Way",
      Province: "Florida",
      City: "Miami",
      PostalCode: "85"
    }
  };

  const loginToGo = () => {
    setOpenModal(false);
    history.push(LOGIN);
  };
  const isValidEmail = (mail: string) => {
    return /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(mail);
  };

  const isValidName = (name: string) => {
    setMessage(
      "Invalid name or nickname, must have at least 4 characters without space"
    );
    return /^([a-zA-Z]{3,})$/.test(name);
  };
  const isValidPass = (pass: string) => {
    if (pass.length < 8) {
      setMessage("Invalid password, must be at least 8 characters");
    } else {
      setMessage(
        "Invalid password, you must have at least one, uppercase, one lower case and one number"
      );
    }
    return /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(pass);
  };
  const isValidPwd = () => {
    if (pass === password) {
      return true;
    }
    setMessage("Passwords do not match");
    return false;
  };

  const isValidBirth = (date: any) => {
    if (date === undefined || date === "") {
      setMessage("Invalid birthday");

      return false;
    }
    return true;
  };
  const sendValues = async () => {
    if (
      !isValidEmail(email) ||
      !isValidName(firstName) ||
      !isValidName(lastName) ||
      !isValidName(nickname) ||
      !isValidPass(password) ||
      !isValidPwd() ||
      !isValidBirth(birth) ||
      !isValidCaptcha()
    ) {
      setError(true);
    } else {
      await postRegistration(register);
      //      history.push(LOGIN);
      setOpenModal(true);
      return true;
    }
  };
  var recaptchaLoaded = function() {
    console.log("Done!!!!");
  };

  const isValidCaptcha = () => {
    if (captcha === false) {
      setMessage("please, resolved captcha");
      return false;
    }
    return true;
  };

  var verifyCaptcha = function(response: any) {
    if (response) {
      setCaptcha(true);
    }
  };

  return (
    <>
      <div className="container-sign-up">
        {error && (
          <div className="container-error-sign">
            <p className="message-error-sign">{message}</p>
          </div>
        )}
        <form
          className="form-sign-up"
          onSubmit={e => {
            e.preventDefault();
          }}
          onFocus={() => {
            setError(false);
          }}
        >
          <h1 className="header-sign-up">Sign Up</h1>
          <span className="sign-up-description">Personal Information</span>
          <Input
            label="First Name"
            type="text"
            name="first-name"
            value={firstName}
            onChange={({ target: { value } }: any) => {
              setFirstName(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />
          <Input
            label="Last Name"
            type="text"
            name="last-name"
            value={lastName}
            onChange={({ target: { value } }: any) => {
              setLastName(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />
          <Input
            label="Nickname"
            type="text"
            name="nickname"
            value={nickname}
            onChange={({ target: { value } }: any) => {
              setNickname(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={({ target: { value } }: any) => {
              setEmail(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }: any) => {
              setPassword(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />
          <Input
            label="Confirm Password"
            type="password"
            name="pass"
            value={pass}
            onChange={({ target: { value } }: any) => {
              setPass(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />
          <Input
            label="Birth Day"
            type="date"
            name="birthday"
            value={birth}
            onChange={({ target: { value } }: any) => {
              setBirth(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />

          <span className="sign-up-description">Contact Information</span>
          <Input
            label="Telephone Number"
            type="text"
            name="telephone"
            value={phone}
            onChange={({ target: { value } }: any) => {
              setPhone(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />
          <Input
            label="Address"
            type="text"
            name="Address"
            value={nickname}
            onChange={({ target: { value } }: any) => {
              setNickname(value);
            }}
            classes={{ container: "input-sign-custom" }}
          />

          <div className="sign-container-city">
            <Input
              type="text"
              label="City"
              name="city"
              value={email}
              onChange={({ target: { value } }: any) => {
                setEmail(value);
              }}
              classes={{ container: "input-sign-custom" }}
            />
            <Input
              label="State"
              type="text"
              name="state"
              value={password}
              onChange={({ target: { value } }: any) => {
                setPassword(value);
              }}
              classes={{ container: "input-sign-custom" }}
            />
          </div>

          <div className="sign-container-city">
            <Input
              label="Country"
              type="text"
              name="country"
              value={pass}
              onChange={({ target: { value } }: any) => {
                setPass(value);
              }}
              classes={{ container: "input-sign-custom" }}
            />
            <Input
              label="Zip Code"
              type="text"
              name="ZipCode"
              value={""}
              onChange={() => {}}
              classes={{ container: "input-sign-custom" }}
            />
          </div>
          <div className="checkbox-container-sign-up">
            <Input
              type="checkbox"
              name="terms"
              value={"false"}
              onChange={() => {}}
              classes={{
                container: "container-sign-check",
                input: "input-sign-check"
              }}
            />
            <span className="text-terms-sign">
              I Agree the Terms of Services and Privacy Policy.
            </span>
          </div>

          <div className="recaptcha-contest-sign-up" id="recaptcha-contest">
            <Recaptcha
              sitekey="6LddRN8UAAAAAHFY8FXMGshwc7R_6VStel-Bh6zY"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifyCaptcha}
              size="normal"
            />
          </div>

          <Button className={"btn-sign-up"} onClick={sendValues}>
            {"Register"}
          </Button>
        </form>
        <Modal
          isShow={openModal}
          onClose={loginToGo}
          containerModal={{
            header: "Account Created",
            img: Check,
            body:
              "Please, check your email for the validation link to activate your account.",
            footerL: "Didn’t receive the validation link?",
            footerR: "Click here to resend.",
            button: "OK",
            recovery: false
          }}
        />
      </div>
    </>
  );
};

export default SignUp;
