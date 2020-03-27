import React, { useState, useEffect } from "react";
import "./style.css";
import Input from "../../components/input";
import Button from "../../components/button";
import Path from "../../components/path";
import { CHECK_IN, PLAY } from "../../routes";
import { RouteComponentProps } from "react-router-dom";
import { getDataToken, setDataToken } from "../../utils/localStorage";
import { getToken } from "../../utils/function";
import Modal from "../../components/modal";
import { isValidEmail, isValidPass } from "../../utils/validations";
import classNames from "classnames";

export interface LogInProps extends RouteComponentProps {}

const LogIn: React.SFC<LogInProps> = ({ history }) => {
  //useState
  const [pass, setPass] = useState("Pluriza1");
  const [email, setEmail] = useState("pluriza@pluriza.com");
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    isLogin();
  }, []);

  const isLogin = () => {
    const token = getDataToken();
    if (token !== null) {
      history.push(PLAY);
    }
  };
  const infoLogin = {
    Email: email,
    Pass: pass
  };

  const login = async () => {
    try {
      const jwt = await getToken(infoLogin);
      setDataToken(jwt);
      history.push(PLAY);
    } catch (err) {
      console.log(err);
      setError(true);
      // alert("Oops, an error has occurred :(");
    }
  };
  const forgotData = () => {
    setOpenModal(true);
  };
  const sendValues = async ({ email, pass }: any) => {
    try {
      setError(false);
      if (!isValidEmail(email) || !isValidPass) {
        setError(true);
      } else {
        await login();
      }
    } catch (err) {
      console.log(err);
      alert("Oops, an error has occurred :(");
    }
  };

  return (
    <div className="login-container">
      <div
        className={classNames({
          "login-form-container": !openModal,
          "login-form-none": !!openModal
        })}
        onFocus={() => setError(false)}
      >
        {error && (
          <div className="container-error-login">
            <p className="message-error-login">Bad fields</p>
          </div>
        )}
        <div className="new-login-contest">
          <span className="title-login-form">Login</span>
          <label htmlFor="email" className="label-new-login">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user@email.com"
            value={email}
            onChange={({ target: { value } }: any) => {
              setEmail(value);
            }}
            className="new-login-input-input"
          ></input>

          <label htmlFor="Password" className="label-new-login">
            Password
          </label>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="******"
            value={pass}
            onChange={({ target: { value } }: any) => {
              setPass(value);
            }}
            className="new-login-input-input"
          ></input>
          {/* <Input
          type="password"
          name="password"
          classes={{
            container: "new-login-input-container",
            input: "new-login-input-input"
          }}
          onChange={({ target: { value } }: any) => {
            setPass(value);
          }}
          value={pass}
          label="Password"
          placeholder="********"
        /> */}
          <span className="forget-login-form" onClick={forgotData}>
            Forgot your password?
          </span>
          <Button
            className="login-btn-principal"
            onClick={() => sendValues({ email, pass })}
          >
            LOGIN
          </Button>
          <span className="new-user-login-form">
            New User? <Path path={CHECK_IN}>Sign up.</Path>
          </span>
        </div>
      </div>
      <Modal
        isShow={openModal}
        onClose={() => setOpenModal(false)}
        containerModal={{
          header: "Forgot Your Password?",

          body:
            "Don’t worry! Just type your e-mail and click on the button below and we will send you a link to reset your password.",
          footerL: "New User?",
          footerR: "Sign up.",
          button: "Send a reset link",
          recovery: true
        }}
      />
    </div>
  );
};

export default LogIn;
