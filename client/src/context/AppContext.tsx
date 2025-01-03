import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext({});

const AppContextProvider = (props: any) => {

    const navigate = useNavigate();

  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  //removebg
  const removebg = async (image: any) => {
    try {
        setImage(image);
        console.log(image);
        navigate("/result");
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    backendUrl,
    image,
    setImage,
    removebg,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
