import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgFullScreen from "lightgallery/plugins/fullscreen";
import { useState } from "react";
import { userContext } from "../context/myContext";
import { useContext } from "react";
import { PrivateRoute } from "../routes/PrivateRoute";
export const Gallery = () => {
  const { gallery, loader } = useContext(userContext);
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="m-2">
      {loader && <PrivateRoute />}
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgFullScreen, lgAutoPlay]}
      >
        {gallery?.map((g, i) => (
          <a href={g?.pic?.url}>
            <img alt={g?.name} src={g?.pic?.url} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};
