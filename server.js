const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
PORT = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bts",
});

// API to fetch data from the cut_out table
app.get("/api/items", (req, res) => {
  const sql = "SELECT * FROM cut_out";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});




app.get("/api/fg", (req, res) => {
  const sql = "SELECT * FROM fg";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// API to add an item to the `fg` table
app.post("/api/additem", (req, res) => {
  const {
    bno,
    SO,
    Style,
    Style_Name,
    Cut_No,
    Colour,
    Size,
    BQty,
    Plant,
    Line,
    Damage_Pcs,
    Cut_Panel_Shortage,
    Good_Pcs,
  } = req.body;

  const sql = `
    INSERT INTO fg (
      bno, SO, Style, Style_Name, Cut_No, Colour, Size, BQty,
      Plant, Line, Damage_Pcs, Cut_Panel_Shortage, Good_Pcs,
      DateTime, User, Year, Month, Subtraction
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), '', YEAR(CURRENT_DATE), MONTH(CURRENT_DATE), 0)
  `;

  const values = [
    bno,
    SO,
    Style,
    Style_Name,
    Cut_No,
    Colour,
    Size,
    BQty,
    Plant,
    Line,
    Damage_Pcs,
    Cut_Panel_Shortage,
    Good_Pcs,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Failed to add item" });
    } else {
      res.status(201).json({ message: "Item added successfully", data: result });
    }
  });
});

app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));