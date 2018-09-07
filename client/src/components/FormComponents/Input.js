import React from "react";

export const Input = props => (
  <div>
    {props.label && (
      <label className="label">{props.label}</label>
    )}
    {props.icon ? (
      <div className="control has-icons-left">
        <input
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
        <span className="icon is-small is-left">
          <i className={props.icon}></i>
        </span>
      </div>
    ) : (
        <div className="control">
          <input
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            className="input"
            type="text"
            placeholder={props.placeholder}
          />
        </div>
      )}
    {!props.valid &&
      <p className="help is-danger">{props.invalidText}</p>
    }
  </div>
);