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

export const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="m-2">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgFullScreen, lgAutoPlay]}
      >
        <a href="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg">
          <img
            alt="img1"
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          />
        </a>
        <a href="https://burst.shopifycdn.com/photos/fog-on-dark-waters-edge.jpg?width=1000&format=pjpg&exif=0&iptc=0">
          <img
            alt="img2"
            src="https://burst.shopifycdn.com/photos/fog-on-dark-waters-edge.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          />
        </a>
      </LightGallery>
    </div>
  );
};
