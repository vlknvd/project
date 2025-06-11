import React from "react";

const Button = ({ textBtn, className }) => {
  return (
    <button className={`button ${className} button--lg`}>{textBtn}</button>
  );
};

export default Button;
