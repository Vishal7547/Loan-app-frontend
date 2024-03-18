import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  border: "none",
  outline: "none",
  padding: 5,
  transition: "transform 0.3s ease-in-out",
};
const PicView = ({ open, handleClose, imgModel }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="row useModelParent m-0 p-0 g-0">
            <span onClick={handleClose}>X</span>
            <img alt={imgModel?.name} src={imgModel?.pic?.url} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PicView;
