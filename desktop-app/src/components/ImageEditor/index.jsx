import React from "react";
import Button from "../Button";
import "./styles.css";
import { useContext } from "react";
import { ImageEditorContext } from "../../contexts/ImageEditorContext";

const ImageEditor = () => {
  const { visible, setVisibility } = useContext(ImageEditorContext);
  const imgUrl = "src/assets/image.webp";

  return visible ? (
    <div className="image-editor flex column align-center justify-center full-height">
      <div className="main-container black-bg pl rounded-border">
        <img className="focused-image" src={imgUrl} alt="" />
        <div className="flex column align-center">
          <Button className="edit-btn" text="Rotate" />
          <Button className="edit-btn" text="B & A" />
          <Button className="edit-btn" text="Crop" />
        </div>
        <footer className="flex space-between">
          <Button
            text="Cancel"
            onClick={() => {
              setVisibility(!visible);
            }}
          />
          <Button text="Save" />
        </footer>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ImageEditor;
