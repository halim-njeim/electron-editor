import React, { useContext, useEffect } from "react";
import "./styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ className }) => {
  const [pendingImage, setPendingImage] = useState();

  const uploadImage = async () => {
    const arrayBuffer = await pendingImage.arrayBuffer();
    const response = await window.electronAPI.saveImage(
      pendingImage.name,
      arrayBuffer
    );
    console.log(pendingImage.name);
    console.log(response);

    if (response) {
      window.location.reload();
    }
  };

  return (
    <header className={`flex space-between pl black-bg  ${className}`}>
      <h1 className="mont-font">Welcome</h1>
      <div className="btn-container flex space-between">
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={(event) => {
            setPendingImage(event.target.files[0]);
          }}
        />
        <Button
          text="Upload"
          onClick={() => {
            uploadImage();
          }}
        />
        <Link to="/chat">
          <Button text="Chat"></Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
