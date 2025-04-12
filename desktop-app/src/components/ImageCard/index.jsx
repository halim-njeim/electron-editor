import React, { useContext, useState } from "react";
import "./styles.css";
import { ImageEditorContext } from "../../contexts/ImageEditorContext";

const ImageCard = ({ imgUrl, className }) => {
  const { visible, setVisibility } = useContext(ImageEditorContext);
  const { setUrl } = useContext(ImageEditorContext);

  return (
    <div className={`image-card mont-font rounded-border pl tm ${className}`}>
      <div
        className="img-wrapper"
        onClick={() => {
          setVisibility(!visible);
          setUrl(imgUrl);
        }}
      >
        <img className="image rounded-border" src={imgUrl} alt="" />
      </div>
      <footer>
        <p>Id: </p>
        <p>Description: </p>
      </footer>
    </div>
  );
};

export default ImageCard;
