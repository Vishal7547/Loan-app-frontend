import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import UploadGallery from "./pages/UploadGallery";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { PrivateAuth } from "./routes/PrivateAuth";
import { PrivateRoute } from "./routes/PrivateRoute";
import { userContext } from "./context/myContext";
const App = () => {
  const { handleLoad, handleFetchGallery, isUpload } = useContext(userContext);
  useEffect(() => {
    const loadData = async () => {
      await handleLoad();
    };
    loadData();
  }, []);
  useEffect(() => {
    const loadData = async () => {
      await handleFetchGallery();
    };
    loadData();
  }, [isUpload]);
  return (
    <div>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};
const AppRoute = () => {
  const { pathname } = useLocation();
  const pathsWithoutHeader = ["/gallery", "/upload"];
  const shouldShowHeader = pathsWithoutHeader.includes(pathname);

  return (
    <>
      {shouldShowHeader && <Navbar />}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/gallery" element={<Home />} />
          <Route path="/upload" element={<UploadGallery />} />
        </Route>

        <Route element={<PrivateAuth />}>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
