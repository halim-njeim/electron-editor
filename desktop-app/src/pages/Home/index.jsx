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
        <ImageCard imgUrl="src\assets\image.webp" />
        <ImageEditor />
      </ImageEditorContextProvider>
    </div>
  );
};

export default Home;
