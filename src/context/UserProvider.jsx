import React, { useState } from "react";
import axios from "axios";
import { userContext } from "./myContext";
const UserProvider = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleLoad = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/me`,
        {
          withCredentials: true,
        }
      );
      console.log("kar diya", data);
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
        setAuthenticate(false);
        return data;
      }
    } catch (error) {
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
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
