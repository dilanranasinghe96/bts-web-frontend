// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./AddItemDialog.css";

// const AddItemDialog = ({ onClose }) => {
//   const [item, setItem] = useState(null);  // single item state
//   const [damagePcs, setDamagePcs] = useState(0);
//   const [cutPanelShortage, setCutPanelShortage] = useState(0);
//   const [goodPcs, setGoodPcs] = useState(0);

//   const bNumber = 200;  // Assign bno

//   // Fetch username from local storage
//   const username = localStorage.getItem('username');

//   useEffect(() => {
//     // Fetch item details based on bNumber (bno)
//     axios.get(`http://localhost:3000/api/items/cut-out/${bNumber}`)
//       .then((response) => {
//         setItem(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching item details:", error);
//       });
//   }, [bNumber]);

//   useEffect(() => {
//     if (item) {
//       const goodPcs = item.Qty - damagePcs - cutPanelShortage;
//       setGoodPcs(goodPcs);
//     }
//   }, [item, damagePcs, cutPanelShortage]);

//   const handleDamagePcsChange = (e) => {
//     const damage = parseInt(e.target.value) || 0;
//     setDamagePcs(damage);
//   };

//   const handleCutPanelShortageChange = (e) => {
//     const shortage = parseInt(e.target.value) || 0;
//     setCutPanelShortage(shortage);
//   };

//   const handleSave = () => {
//     const goodPcs = item.Qty - damagePcs - cutPanelShortage;

//     const newItem = {
//       bno: item.bno,
//       SO: item.SO,
//       Style: item.Style,
//       Style_Name: item.Style_Name,
//       Cut_No: item.Cut_No,
//       Colour: item.Colour,
//       Size: item.Size,
//       BQty: item.Qty,
//       Plant: item.Plant,
//       Line: item.Line,
//       Damage_Pcs: damagePcs,
//       Cut_Panel_Shortage: cutPanelShortage,
//       Good_Pcs: goodPcs,
//       User: username
//     };

//     axios.post("http://localhost:3000/api/items/addItem", newItem)
//       .then((response) => {
//         console.log("Item added successfully:", response.data);
//         alert("Item added successfully!");
//         onClose();
//       })
//       .catch((error) => {
//         console.error("Error adding item:", error);
//         alert("Failed to add item. Please try again.");
//       });
//   };

//   return (
//     <div className="dialog-overlay">
//       <div className="dialog-content">
//         <h2>Add Item</h2>
//         {username && <h2>Welcome, {username}!</h2>}
//         <table className="dialog-table">
//           <tbody>
//             {item && (
//               <>
//                 <tr key={item.Id}>
//                   <th>BNo</th>
//                   <td>{item.bno}</td>
//                 </tr>
//                 <tr>
//                   <th>SO</th>
//                   <td>{item.SO}</td>
//                 </tr>
//                 <tr>
//                   <th>Style</th>
//                   <td>{item.Style}</td>
//                 </tr>
//                 <tr>
//                   <th>Style Name</th>
//                   <td>{item.Style_Name}</td>
//                 </tr>
//                 <tr>
//                   <th>Cut No</th>
//                   <td>{item.Cut_No}</td>
//                 </tr>
//                 <tr>
//                   <th>Colour</th>
//                   <td>{item.Colour}</td>
//                 </tr>
//                 <tr>
//                   <th>Size</th>
//                   <td>{item.Size}</td>
//                 </tr>
//                 <tr>
//                   <th>BQty</th>
//                   <td>{item.Qty}</td>
//                 </tr>
//                 <tr>
//                   <th>Plant</th>
//                   <td>
//                     <button className="btn btn-info">{item.Plant}</button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Line</th>
//                   <td>
//                     <button className="btn btn-sm btn-secondary">{item.Line}</button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Damage Pcs</th>
//                   <td>
//                     <input
//                       type="number"
//                       className="form-control form-control-sm bg-white text-black border-secondary"
//                       value={damagePcs}
//                       onChange={handleDamagePcsChange}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Cut Panel Shortage</th>
//                   <td>
//                     <input
//                       type="number"
//                       className="form-control form-control-sm bg-white text-black border-secondary"
//                       value={cutPanelShortage}
//                       onChange={handleCutPanelShortageChange}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Good Pcs</th>
//                   <td>{goodPcs >= 0 ? goodPcs : 0}</td>
//                 </tr>
//               </>
//             )}
//           </tbody>
//         </table>
//         <div className="dialog-actions">
//           <button className="btn save-btn" onClick={handleSave}>
//             Save
//           </button>
//           <button className="btn close-btn" onClick={onClose}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddItemDialog;



import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AddItemDialog.css";

const AddItemDialog = ({ onClose, bNumber }) => {
  const [item, setItem] = useState(null);  // single item state
  const [damagePcs, setDamagePcs] = useState(0);
  const [cutPanelShortage, setCutPanelShortage] = useState(0);
  const [goodPcs, setGoodPcs] = useState(0);

  // Fetch username from local storage
  const username = localStorage.getItem('username');
  

  useEffect(() => {
    // Fetch item details based on bNumber (bno)
    if (bNumber) {
      axios.get(`http://localhost:3000/api/items/cut-out/${bNumber}`)
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          console.error("Error fetching item details:", error);
        });
    }
  }, [bNumber]);

  useEffect(() => {
    if (item) {
      const goodPcs = item.Qty - damagePcs - cutPanelShortage;
      setGoodPcs(goodPcs);
    }
  }, [item, damagePcs, cutPanelShortage]);

  const handleDamagePcsChange = (e) => {
    const damage = parseInt(e.target.value) || 0;
    setDamagePcs(damage);
  };

  const handleCutPanelShortageChange = (e) => {
    const shortage = parseInt(e.target.value) || 0;
    setCutPanelShortage(shortage);
  };

  const handleSave = () => {
    if (!item) {
      alert("Item data is not available. Please try again.");
      return;
    }
    const goodPcs = item.Qty - damagePcs - cutPanelShortage;

    const newItem = {
      bno: item.bno,
      SO: item.SO,
      Style: item.Style,
      Style_Name: item.Style_Name,
      Cut_No: item.Cut_No,
      Colour: item.Colour,
      Size: item.Size,
      BQty: item.Qty ,
      Plant: item.Plant,
      Line: item.Line,
      Damage_Pcs: damagePcs,
      Cut_Panel_Shortage: cutPanelShortage,
      Good_Pcs: goodPcs,
      User: username
    };

    axios.post("http://localhost:3000/api/items/addItem", newItem)
      .then((response) => {
        console.log("Item added successfully:", response.data);
        alert("Item added successfully!");
        onClose();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
        alert("Failed to add item. Please try again.");
      });
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2>Add Item</h2>
        {username && <h2>Welcome, {username}!</h2>}
        <h2>Scanned BNumber: {bNumber}</h2>
        <table className="dialog-table">
          <tbody>
            {item && (
              <>
                <tr key={item.Id}>
                  <th>BNo</th>
                  <td>{item.bno}</td>
                </tr>
                <tr>
                  <th>SO</th>
                  <td>{item.SO}</td>
                </tr>
                <tr>
                  <th>Style</th>
                  <td>{item.Style}</td>
                </tr>
                <tr>
                  <th>Style Name</th>
                  <td>{item.Style_Name}</td>
                </tr>
                <tr>
                  <th>Cut No</th>
                  <td>{item.Cut_No}</td>
                </tr>
                <tr>
                  <th>Colour</th>
                  <td>{item.Colour}</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>{item.Size}</td>
                </tr>
                <tr>
                  <th>BQty</th>
                  <td>{item.Qty}</td>
                </tr>
                <tr>
                  <th>Plant</th>
                  <td>
                    <button className="btn btn-info">{item.Plant}</button>
                  </td>
                </tr>
                <tr>
                  <th>Line</th>
                  <td>
                    <button className="btn btn-sm btn-secondary">{item.Line}</button>
                  </td>
                </tr>
                <tr>
                  <th>Damage Pcs</th>
                  <td>
                    <input
                      type="number"
                      className="form-control form-control-sm bg-white text-black border-secondary"
                      value={damagePcs}
                      onChange={handleDamagePcsChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Cut Panel Shortage</th>
                  <td>
                    <input
                      type="number"
                      className="form-control form-control-sm bg-white text-black border-secondary"
                      value={cutPanelShortage}
                      onChange={handleCutPanelShortageChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Good Pcs</th>
                  <td>{goodPcs >= 0 ? goodPcs : 0}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <div className="dialog-actions">
          <button className="btn save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="btn close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemDialog;
