import React from "react";
import Button from "../Button";
import "./styles.css";
import { useContext } from "react";
import { ImageEditorContext } from "../../contexts/ImageEditorContext";

const ImageEditor = () => {
  const { visible, setVisibility } = useContext(ImageEditorContext);
  const { url, setUrl } = useContext(ImageEditorContext);

  return visible ? (
    <div className="image-editor flex column align-center justify-center full-height">
      <div className=" main-container black-bg pl rounded-border">
        <div className="flex column align-center">
          <img className="focused-image" src={url} alt="" />
        </div>
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
              setUrl("");
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
