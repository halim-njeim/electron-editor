import React from "react";
import NavBar from "../../components/NavBar";
import ImageCard from "../../components/ImageCard";
import ImageEditor from "../../components/ImageEditor";
import ImageEditorContextProvider from "../../contexts/ImageEditorContext";

const Home = () => {
  return (
    <div>
      <ImageEditorContextProvider>
        <NavBar />
        <div className="flex">
          <ImageCard imgUrl="src\assets\image.webp" />
          <ImageCard imgUrl="src\assets\figma1.png" />
        </div>
        <ImageEditor />
      </ImageEditorContextProvider>
    </div>
  );
};

export default Home;
