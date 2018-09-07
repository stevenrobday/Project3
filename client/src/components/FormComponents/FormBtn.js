import React from "react";

export const FormBtn = props => (
  <div className="control">
    <button
      className={`button ${props.color}`}
      {...props}
    >
      {props.children}
    </button>
  </div>
);