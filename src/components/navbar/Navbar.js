// import React, { useState } from "react";
// import AddItemDialog from "../AddItemDialog/AddItemDialog";
// import "./Navbar.css";
// import QRCodeScanner from "../QrCodeScanner/QrCodeScanner";

// const Navbar = () => {
//   const [openDialog, setOpenDialog] = useState(false);

//   const handleAddClick = () => {
//     setOpenDialog(true);
//   };

//   const handleDialogClose = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <div className="navbar">
//     <h1>BTS Inventory</h1>
//     <div className="navbar-buttons">
//       <button onClick={handleAddClick} className="btn add-btn">
//         Add
//       </button>
//       <button className="btn scan-btn">Scan QR Code</button>
//     </div>
//     {openDialog && <AddItemDialog onClose={handleDialogClose} />}
//   </div>

//   );
// };

// export default Navbar;



import React, { useState } from "react";
import QRCodeScanner from "../QrCodeScanner/QrCodeScanner";
import AddItemDialog from "../AddItemDialog/AddItemDialog";
import "./Navbar.css";

const Navbar = () => {
  const [openScanner, setOpenScanner] = useState(false); // Control QR Scanner visibility
  const [openDialog, setOpenDialog] = useState(false); // Control AddItemDialog visibility
  const [bNumber, setBNumber] = useState(null); // Store the scanned bNumber

  const handleAddClick = () => {
    setOpenScanner(true); // Open QR Scanner when Add is clicked
  };

  const handleScannerClose = () => {
    setOpenScanner(false); // Close QR Scanner
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close AddItemDialog
  };

  const handleScanComplete = (scannedBNumber) => {
    setBNumber(scannedBNumber); // Set the scanned bNumber
    setOpenScanner(false); // Close QR Scanner
    setOpenDialog(true); // Open AddItemDialog
  };

  return (
    <div className="navbar">
      <h1>BTS Inventory</h1>
      <div className="navbar-buttons">
        <button onClick={handleAddClick} className=" add-btn">
          Add
        </button>
        <button className="scan-btn">Scan QR Code</button>
      </div>

      {/* Show QRCodeScanner */}
      {openScanner && <QRCodeScanner onScanComplete={handleScanComplete} onClose={handleScannerClose} />}

      {/* Show AddItemDialog with scanned bNumber */}
      {openDialog && <AddItemDialog onClose={handleDialogClose} bNumber={bNumber} />}
    </div>
  );
};
  
export default Navbar;
