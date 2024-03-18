import React, { useState } from "react";
import axios from "axios";
import { userContext } from "./myContext";
const UserProvider = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [filterGallery, setFilterGallery] = useState([]);

  const handleLoad = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/me`,
        {
          withCredentials: true,
        }
      );
      console.log("user", data);
      setUser(data?.user);
      setAuthenticate(data?.success);
    } catch (error) {
      console.log(error);
    }
  };
  const loLogOut = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/logout`,
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        console.log("logout", data);
        setUser(null);
        setGallery([]);
        setAuthenticate(false);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFetchGallery = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/pic/gallery`,
        {
          withCredentials: true,
        }
      );
      console.log("gallery", data);
      setGallery(data?.gallery);
    } catch (error) {
      console.log(error);
    }
  };
  const addImage = async (formdata) => {
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/pic/galleryadd`,
        formdata,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("gallery", data);
      setGallery([...gallery, data?.gallery]);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };
  const deletePic = async (id) => {
    setLoader(true);
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_KEY}/pic/gallerydelete/${id}`,
        {
          withCredentials: true,
        }
      );
      setLoader(false);
      setIsUpload(!isUpload);
      console.log("deleteGallery", data);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };
  return (
    <userContext.Provider
      value={{
        handleLoad,
        setAuthenticate,
        authenticate,
        loLogOut,
        user,
        setUser,
        setIsLogin,
        isLogin,
        handleFetchGallery,
        gallery,
        addImage,
        loader,
        deletePic,
        isUpload,
        setGallery,
        setFilterGallery,
        filterGallery,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
