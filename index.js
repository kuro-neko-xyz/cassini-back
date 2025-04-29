const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/feed", (_, res) => {
  res.send(Math.random().toString());
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  connection.connect();
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  connection.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    } else if (results.length > 0) {
      console.log(`User logged in: ${username}`);
      res.status(200).send({ message: "Login successful" });
    } else {
      console.log(`Invalid login attempt for user: ${username}`);
      res.status(401).send({ message: "Invalid username or password" });
    }
  });
  connection.end();
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  connection.connect();
  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  connection.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    } else {
      console.log(`User registered: ${username}`);
      res.status(201).send({ message: "User registered successfully" });
    }
  });
  connection.end();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
