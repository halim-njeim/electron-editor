import React from "react";
import Button from "../Button";
import "./styles.css";
import { useContext, useState } from "react";
import { ImageEditorContext } from "../../contexts/ImageEditorContext";

const ImageEditor = () => {
  const { visible, setVisibility } = useContext(ImageEditorContext);
  const { url, setUrl } = useContext(ImageEditorContext);
  const [grey, setGrey] = useState("");
  const [rotation, setRotation] = useState(0);

  const applyChanges = async () => {
    const imagePath = decodeURI(url.replace("file://", ""));
    if (grey === "grey") {
      await window.electronAPI.applyGreyscale(imagePath);
      console.log(imagePath);

      setGrey("");
    }

    if (rotation > 0) {
      await window.electronAPI.rotateImage(imagePath, rotation);
      setRotation(0);
    }
  };

  return visible ? (
    <div className="image-editor flex column align-center justify-center full-height">
      <div className=" main-container black-bg pl rounded-border">
        <div className="flex column align-center">
          <img
            className={`focused-image ${grey} rotation${rotation}`}
            src={url}
            alt=""
          />
        </div>
        <div className="flex column align-center">
          <Button
            className="edit-btn"
            text="Rotate"
            onClick={() => {
              setRotation((rotation + 90) % 360);
              console.log(rotation);
            }}
          />
          <Button
            className="edit-btn"
            text="B & A"
            onClick={() => {
              setGrey("grey");
            }}
          />
          <Button className="edit-btn" text="Crop" />
        </div>
        <footer className="flex space-between">
          <Button
            text="Cancel"
            onClick={() => {
              setVisibility(!visible);
              setGrey("");
              setUrl("");
              setRotation(0);
            }}
          />
          <Button
            text="Save"
            onClick={() => {
              applyChanges();
              setVisibility(!visible);
              // window.location.reload();
            }}
          />
        </footer>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ImageEditor;
