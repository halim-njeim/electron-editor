import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import ImageCard from "../../components/ImageCard";
import ImageEditor from "../../components/ImageEditor";
import ImageEditorContextProvider from "../../contexts/ImageEditorContext";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const imageList = [];
      setLoading(true);
      try {
        const UrlList = await window.electronAPI.getImages();
        for (let imageUrl = 0; imageUrl < UrlList.length; imageUrl++) {
          const name = await window.electronAPI.getFileName(UrlList[imageUrl]);
          const nameWithoutExt = name.replace(/\.[^/.]+$/, "");
          imageList.push({
            url: UrlList[imageUrl],
            name: nameWithoutExt,
          });
        }
        console.log(images);
        console.log(UrlList);

        setImages(imageList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <ImageEditorContextProvider>
        <NavBar />
        <div className="flex wrap">
          {images.map(({ url, name }, index) => (
            <ImageCard
              key={index}
              imgUrl={url}
              number={index}
              description={name}
            />
          ))}
        </div>
        <ImageEditor />
      </ImageEditorContextProvider>
    </div>
  );
};

export default Home;
