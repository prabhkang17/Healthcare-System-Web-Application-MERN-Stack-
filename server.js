const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://healthcare-system-taupe.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

