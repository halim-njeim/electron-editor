import React from "react";
import "./styles.css";

const LabelInput = ({ labelText, placeHolder, type }) => {
  return (
    <div className="flex column space-between label-input mont-font">
      <label className="label">{labelText}</label>
      <input
        type={type}
        name=""
        id=""
        placeholder={placeHolder}
        className="rounded-border"
      />
    </div>
  );
};

export default LabelInput;
