import React, { useState, useEffect } from "react";
import "./style.css";
import Input from "../../components/input";
import Button from "../../components/button";
import { getToken } from "../../utils/function";
import { setDataToken, getDataToken } from "../../utils/localStorage";
import { RouteComponentProps } from "react-router-dom";
import { PLAY } from "../../routes";
import Modal from "../../components/modal";
import classNames from "classnames";

export interface LoginProps extends RouteComponentProps {}

const Login: React.SFC<LoginProps> = ({ history }) => {
  useEffect(() => {
    isLogin();
  }, []);

  const [pass, setPass] = useState("Pluriza1");
  const [email, setEmail] = useState("pluriza@pluriza.com");
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const isValidEmail = (mail: string) => {
    return /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(mail);
    // ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$
  };

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

  const sendValues = async ({ email, pass }: any) => {
    try {
      setError(false);
      if (!isValidEmail(email) || pass === undefined || pass.length < 6) {
        setError(true);
      } else {
        await login();
      }
    } catch (err) {
      console.log(err);
      alert("Oops, an error has occurred :(");
    }
  };

  const forgotData = () => {
    setOpenModal(true);
  };

  return (
    <div className="login-container-form">
      <div
        className={classNames({
          "log-form": !openModal,
          "l-form-none": !!openModal
        })}
      >
        {error && (
          <div className="container-error">
            <p className="message-error">Bad fields</p>
          </div>
        )}
        <div className="form-container-properties">
          <h2 className="title-form-login">Login</h2>
          <form
            className="container-form"
            onSubmit={event => event.preventDefault()}
          >
            <div className="input-form">
              <Input
                type="text"
                value={email}
                label="Email"
                placeholder="user@email.com"
                onChange={({ target: { value } }: any) => {
                  setEmail(value);
                }}
                onFocus={() => {}}
                name="email"
              />
              <Input
                type="password"
                value={pass}
                label="Password"
                placeholder="input you pass"
                name="password"
                onChange={({ target: { value } }: any) => {
                  setPass(value);
                }}
                onFocus={() => setError(false)}
              />
            </div>
            <span className="forgot" onClick={forgotData}>
              Forgot Username?
            </span>

            <div className="container-button">
              <Button
                id="btn-login"
                className={"btn-custom-primary-login"}
                onClick={() => sendValues({ email, pass })}
              >
                Login
              </Button>
            </div>
          </form>
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

export default Login;
