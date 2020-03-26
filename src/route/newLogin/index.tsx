import React from "react";
import "./style.css";
import Input from "../../components/input";
import Button from "../../components/button";
import Path from "../../components/path";
import { CHECK_IN, PLAY } from '../../routes';
import { RouteComponentProps } from "react-router-dom";

export interface LogInProps extends RouteComponentProps {}

const LogIn: React.SFC<LogInProps> = ({history}) => {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <span className="title-login-form">Login</span>
        <Input
          type="email"
          name="user"
          classes={{
            container: "login-input-container",
            input: "login-input-input"
          }}
          onChange={() => {}}
          label="Email"
          placeholder="user@email.com"
        />
        <Input
          type="password"
          name="password"
          classes={{
            container: "login-input-container",
            input: "login-input-input"
          }}
          onChange={() => {}}
          label="Password"
          placeholder="********"
        />
        <a href="!#" className="forget-login-form">
          Forgot your password?
        </a>
        <Button className="login-btn-principal" onClick={()=>{history.push(PLAY);}}>LOGIN</Button>
        <span className="new-user-login-form">
          New User? <Path path={CHECK_IN}>Sign up.</Path>
        </span>
      </div>
    </div>
  );
};

export default LogIn;
