import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AppContextType {
  backendUrl: string;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  resultImage: string | null;
  setResultImage: React.Dispatch<React.SetStateAction<string | null>>;
  removebg: (image: File) => Promise<void>;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

const AppContextProvider = (props: any) => {
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const [image, setImage] = useState<File | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;


  //removebg
  const removebg = async (image: any) => {
    try {
      setImage(image);
      navigate("/result");
      
      const token = await getToken();
      const formData = new FormData();
      formData.append("image", image);
      console.log(backendUrl);
      const { data } = await axios.post(
        `${backendUrl}/api/image/remove-bg`,
        formData,
        { headers: {token} }
      );
      // console.log(token);
      // console.log(data);
      
      if (data) {
        // console.log(data.resultImage);
        setResultImage(data.resultImage);
        // console.log("insidedata after seting result image");
      }
    } catch (error) {
      console.log(error);
      console.log(error + "error");
    }
  };

  const value: AppContextType = {
    backendUrl,
    image,
    setImage,
    removebg,
    resultImage,
    setResultImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
