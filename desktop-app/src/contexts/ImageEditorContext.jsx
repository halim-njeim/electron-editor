import { createContext } from "react";
import { useState } from "react";

export const ImageEditorContext = createContext();

const ImageEditorContextProvider = ({ children }) => {
  const [visible, setVisibility] = useState(false);
  const [url, setUrl] = useState();

  return (
    <ImageEditorContext.Provider
      value={{ visible, setVisibility, url, setUrl }}
    >
      {children}
    </ImageEditorContext.Provider>
  );
};

export default ImageEditorContextProvider;
