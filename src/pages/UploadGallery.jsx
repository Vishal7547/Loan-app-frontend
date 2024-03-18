import React, { useState } from "react";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import useModal from "../hooks/useModel";
import PicView from "../model/PicView";
const UploadGallery = () => {
  const { open, handleOpen, handleClose } = useModal();
  const [imgModel, setImgModel] = useState(null);
  return (
    <div className="uploadGallery">
      <div className="child">
        <div className="row mt-2">
          <input
            className="form-control me-2"
            type="file"
            placeholder="upload"
          />
        </div>
        <div className="row my-2">
          <input className="form-control me-2" type="name" placeholder="Name" />
        </div>
        <div className="row">
          <button className="btn btn-success w-25">Submit</button>
        </div>
      </div>
      <div className="galleryData">
        <div>
          <div className="row my-2 w-50">
            <form>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Img</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((g, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                    alt="img1"
                    height="40"
                    width="40"
                    className="rounded"
                  />
                </td>
                <td>@mdo</td>
                <td>
                  <span>
                    <MdEdit fontSize={25} />
                  </span>
                  <span className="crudIcon">
                    <MdOutlineDelete fontSize={25} />
                  </span>
                  <span
                    onClick={() => {
                      setImgModel(g);
                      handleOpen();
                    }}
                  >
                    <GrFormView fontSize={30} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PicView handleClose={handleClose} open={open} imgModel={imgModel} />
    </div>
  );
};

export default UploadGallery;
