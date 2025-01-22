import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TableDisplay.css";

const TableDisplay = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="table-container">
      <h2>Cut-Out Table Data</h2>
      <table className="cutout-table">
        <thead>
          <tr>
            <th>BNo</th>
            <th>SO</th>
            <th>Style</th>
            <th>Style Name</th>
            <th>Cut No</th>
            <th>Colour</th>
            <th>Size</th>
            <th>BQty</th>
            <th>Plant</th>
            <th>Line</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.Id}>
                <td>{item.bno}</td>
                <td>{item.SO}</td>
                <td>{item.Style}</td>
                <td>{item.Style_Name}</td>
                <td>{item.Cut_No}</td>
                <td>{item.Colour}</td>
                <td>{item.Size}</td>
                <td>{item.Qty}</td>
                <td>{item.Plant}</td>
                <td>{item.Line}</td>
                <td>{item.Date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;
