import React from "react";
import "./styles.css";

const Button = ({ onClick, text, className }) => {
  return (
    <button
      className={`cta rounded-border mont-font ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
