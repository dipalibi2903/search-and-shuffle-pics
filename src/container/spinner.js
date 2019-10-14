import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer" style={props.style}>
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

export default Spinner;

Spinner.defaultProps = {
  message: "Loading...."
};
