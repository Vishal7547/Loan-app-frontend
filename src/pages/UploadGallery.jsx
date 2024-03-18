import React, { useState, useContext } from "react";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import useModal from "../hooks/useModel";
import PicView from "../model/PicView";
import { userContext } from "../context/myContext";

const UploadGallery = () => {
  const { open, handleOpen, handleClose } = useModal();
  const [imgModel, setImgModel] = useState(null);
  const { addImage, gallery, loader, deletePic, setGallery } =
    useContext(userContext);
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [filterGallery, setFilterGallery] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("name", name);
    await addImage(formData);
    setImageFile("");
    setName("");
  };

  const handleSearch = (e) => {
    const data = e.target.value;
    const galleryItem = gallery.filter((g) =>
      g?.name?.toLowerCase().includes(data.toLowerCase())
    );
    setFilterGallery(galleryItem);
    console.log(galleryItem);
  };
  let pic = filterGallery.length > 0 ? filterGallery : gallery;
  const handleDelete = async (id) => {
    await deletePic(id);
    pic = gallery;
  };
  console.log("filterGallery", filterGallery);
  return (
    <div className="uploadGallery">
      <form className="row" onSubmit={handleSubmit}>
        <div className="child">
          <div className="row mt-2">
            <input
              className="form-control me-2"
              type="file"
              placeholder="upload"
              onChange={(e) => setImageFile(e.target.files[0])}
              required
            />
          </div>
          <div className="row my-2">
            <input
              className="form-control me-2"
              type="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <button className="btn btn-success w-25">
              {loader ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
      <div className="galleryData">
        <div>
          <div className="row my-2 w-50">
            <form>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                onChange={handleSearch}
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
            {pic.length > 0 ? (
              pic?.map((g, i) => (
                <tr key={g._id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img
                      alt={g?.name}
                      src={g?.pic?.url}
                      height="40"
                      width="40"
                      className="rounded"
                    />
                  </td>
                  <td>{g?.name}</td>
                  <td>
                    {loader ? (
                      <div className="spinner-border" role="status">
                        <span
                          style={{ height: "20px", width: "20px" }}
                          className="visually-hidden"
                        >
                          Loading...
                        </span>
                      </div>
                    ) : (
                      <>
                        <span
                          className="crudIcon"
                          onClick={() => handleDelete(g?._id)}
                        >
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
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <h5>Please upload images</h5>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PicView handleClose={handleClose} open={open} imgModel={imgModel} />
    </div>
  );
};

export default UploadGallery;
