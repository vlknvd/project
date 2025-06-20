import React from "react";

const Button = ({ textBtn, className }) => {
  return <button className={`button ${className}`}>{textBtn}</button>;
};

export default Button;
