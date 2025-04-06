import { createContext } from "react";
import { useState } from "react";

export const ImageEditorContext = createContext();

const ImageEditorContextProvider = ({ children }) => {
  const [visible, setVisibility] = useState(false);

  return (
    <ImageEditorContext.Provider value={{ visible, setVisibility }}>
      {children}
    </ImageEditorContext.Provider>
  );
};

export default ImageEditorContextProvider;
