

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AddItemDialog.css";

const AddItemDialog = ({ onClose }) => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [damagePcs, setDamagePcs] = useState(0);
  const [cutPanelShortage, setCutPanelShortage] = useState(0);
  const [goodPcs, setGoodPcs] = useState(0);

  useEffect(() => {
    // Fetch items from the database
    axios.get("http://localhost:3000/api/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const currentItem = items[currentIndex];
      const goodPcs = currentItem?.Qty - damagePcs - cutPanelShortage;
      setGoodPcs(goodPcs);
    }
  }, [currentIndex, damagePcs, cutPanelShortage, items]);

  const handleDamagePcsChange = (e) => {
    const damage = parseInt(e.target.value) || 0;
    setDamagePcs(damage);
  };

  const handleCutPanelShortageChange = (e) => {
    const shortage = parseInt(e.target.value) || 0;
    setCutPanelShortage(shortage);
  };

  const handleSave = () => {

    const goodPcs = currentItem.Qty - damagePcs - cutPanelShortage;

  const newItem = {
    bno: currentItem.bno,
    SO: currentItem.SO,
    Style: currentItem.Style,
    Style_Name: currentItem.Style_Name,
    Cut_No: currentItem.Cut_No,
    Colour: currentItem.Colour,
    Size: currentItem.Size,
    BQty: currentItem.Qty,
    Plant: currentItem.Plant,
    Line: currentItem.Line,
    Damage_Pcs: damagePcs,
    Cut_Panel_Shortage: cutPanelShortage,
    Good_Pcs: goodPcs,
  };

  axios
    .post("http://localhost:3000/api/additem", newItem)
    .then((response) => {
      console.log("Item added successfully:", response.data);
      alert("Item added successfully!");
      onClose(); 
    })
    .catch((error) => {
      console.error("Error adding item:", error);
      alert("Failed to add item. Please try again.");
    });

    // Move to the next item
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setDamagePcs(0); 
      setCutPanelShortage(0);
    } else {
      alert("No more items to display!");
    }
  };

  const currentItem = items[currentIndex];

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2>Add Item</h2>
        <table className="dialog-table">
          
          <tbody>
          {
            currentItem && (
              <><tr key={currentItem.Id}>
                    <th>BNo</th>
                    <td>{currentItem.bno}</td>
                  </tr><tr>
                      <th>SO</th>
                      <td>{currentItem.SO}</td>
                    </tr><tr>
                      <th>Style</th>
                      <td>{currentItem.Style}</td>
                    </tr><tr>
                      <th>Style Name</th>
                      <td>{currentItem.Style_Name}</td>
                    </tr><tr>
                      <th>Cut No</th>
                      <td>{currentItem.Cut_No}</td>
                    </tr><tr>
                      <th>Colour</th>
                      <td>{currentItem.Colour}</td>
                    </tr><tr>
                      <th>Size</th>
                      <td>{currentItem.Size}</td>
                    </tr><tr>
                      <th>BQty</th>
                      <td>{currentItem.Qty}</td>
                    </tr><tr>
                      <th>Plant</th>
                      <td>
                        <button className="btn btn btn-info">{currentItem.Plant}</button>
                      </td>
                    </tr><tr>
                      <th>Line</th>
                      <td>
                        <button className="btn btn-sm btn-secondary">{currentItem.Line}</button>
                      </td>
                    </tr><tr>
                      <th>Damage Pcs</th>
                      <td>
                        <input
                          type="number"
                          className="form-control form-control-sm bg-white text-black border-secondary"
                          value={damagePcs}
                          onChange={handleDamagePcsChange} />
                      </td>
                    </tr><tr>
                      <th>Cut Panel Shortage</th>
                      <td>
                        <input
                          type="number"
                          className="form-control form-control-sm bg-white text-black border-secondary"
                          value={cutPanelShortage}
                          onChange={handleCutPanelShortageChange} />
                      </td>

                    </tr><tr>
                      <th>Good Pcs</th>
                      <td>{goodPcs >= 0 ? goodPcs : 0}</td>
                    </tr></>
            )
           }
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



