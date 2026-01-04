const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",       
  database: "book_app"
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("MySQL Connected");

  db.query(
    `CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`
  , (err) => {
    if (err) console.error('Failed to ensure messages table:', err);
  });
});

const USERNAME = "admin";
const PASSWORD = "mohamad";


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "mohamad") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post("/books", (req, res) => {
  const { title, author, price, image } = req.body;

  db.query(
    "INSERT INTO books (title, author, price, image) VALUES (?, ?, ?, ?)",
    [title, author, price, image],
    () => res.json({ success: true })
  );
});

app.delete("/books/:id", (req, res) => {
  db.query(
    "DELETE FROM books WHERE id = ?",
    [req.params.id],
    () => res.json({ success: true })
  );
});

app.post("/messages", (req, res) => {
  const { name, email, message } = req.body;
  db.query(
    "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
    [name, email, message],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      res.json({ success: true, id: result.insertId });
    }
  );
});

app.get("/messages", (req, res) => {
  db.query("SELECT * FROM messages ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.delete("/messages/:id", (req, res) => {
  db.query(
    "DELETE FROM messages WHERE id = ?",
    [req.params.id],
    () => res.json({ success: true })
  );
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
