import React from "react";

export const Columns = props => (
  <div className={`columns ${props.addClass}`}>
    {props.children}
  </div>
);