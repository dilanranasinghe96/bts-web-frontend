import React, { useState } from "react";
import AddItemDialog from "../AddItemDialog/AddItemDialog";
import "./Navbar.css";

const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="navbar">
    <h1>BTS Inventory</h1>
    <div className="navbar-buttons">
      <button onClick={handleAddClick} className="btn add-btn">
        Add
      </button>
      <button className="btn scan-btn">Scan QR Code</button>
    </div>
    {openDialog && <AddItemDialog onClose={handleDialogClose} />}
  </div>

  );
};

export default Navbar;
