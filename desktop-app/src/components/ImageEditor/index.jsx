import React, { useEffect, useRef } from "react";
import Button from "../Button";
import "./styles.css";
import { useContext, useState } from "react";
import { ImageEditorContext } from "../../contexts/ImageEditorContext";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageEditor = () => {
  const { visible, setVisibility } = useContext(ImageEditorContext);
  const { url, setUrl } = useContext(ImageEditorContext);
  const [grey, setGrey] = useState("");
  const [rotation, setRotation] = useState(0);
  const [crop, setCrop] = useState({
    unit: "px",
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    console.log(completedCrop, crop);
  }, [completedCrop, crop]);

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

    if (completedCrop?.width && completedCrop?.height) {
      const canvas = document.createElement("canvas");
      const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
      const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

      canvas.width = completedCrop.width;
      canvas.height = completedCrop.height;

      const ctx = canvas.getContext("2d");

      console.log("created canvas");
      ctx.drawImage(
        imageRef.current,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );

      canvas.toBlob(
        async (blob) => {
          if (!blob) return;

          const arrayBuffer = await blob.arrayBuffer();

          await window.electronAPI.saveCroppedImage(imagePath, arrayBuffer);
          console.log("done");
        },
        "image/jpeg",
        1
      );
    }
  };

  return visible ? (
    <div className="image-editor flex column align-center justify-center full-height">
      <div className=" main-container black-bg pl rounded-border">
        <div className="flex column align-center">
          <ReactCrop
            crop={crop}
            onChange={(e) => {
              setCrop(e);
            }}
            onComplete={(c) => setCompletedCrop(c)}
          >
            <img
              className={`focused-image ${grey} rotation${rotation}`}
              src={url}
              ref={imageRef}
              alt=""
            />
          </ReactCrop>
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
          {/* <Button className="edit-btn" text="Crop" /> */}
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
