import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./BasicModal.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};


const BasicModal = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="addBtn" onClick={handleOpen}>
        Add
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <div className="form">
            <input type="text" placeholder="First name" className="textInputs" />
            <input type="text" placeholder="Last name" className="textInputs" />
            <input type="text" placeholder="CIN" className="textInputs" />
            <input type="text" placeholder="Role" className="textInputs" />
            <input type="date" placeholder="Date" />
            <input type="file" placeholder="ImageUrl"  className="textInputs" />
          <div className="modalButtons" >
            <Button className="modalBtn" onClick={handleClose}>Add</Button>
            <Button className="modalBtn" onClick={handleClose}>Cancel</Button>
          </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal