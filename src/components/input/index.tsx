import React, { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from "react";
import cls  from 'classnames'
import "./style.css";



export interface InputProps {
  classes?: {
    container?: string;
    input?: string;
  };
  value?: string | string[] | number;
  onChange?: ChangeEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  placeholder?: string;
  endIcon?: any;
  label?: string;
  type?: string;
  list?: string;
  onKeyup?: KeyboardEventHandler;
  name:string;
}

const Input: React.SFC<InputProps> = ({
  classes = {},
  value,
  onChange,
  placeholder,
  label,
  type,
  endIcon,
  list,
  onFocus,
  onBlur,
  onKeyup
}) => {

  return (
    <div className={cls("input-container", classes.container)}>
      <input
        list={list}
        type={type}
        value={value}
        autoComplete="off"
        name="custom-element"
        placeholder={placeholder}
        className={cls("input-element", classes.input)}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={onKeyup}
      />
      {label && (
        <label htmlFor="custom-element" className="label-element">
          <span className="content-name">{label}</span>
        </label>
      )}
      {endIcon && <span className="end-icon-container">{endIcon}</span>}
    </div>
  );
};
export default Input;
