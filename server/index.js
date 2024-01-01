import express from "express";
import "./database/db.js";
const app = express();
import { User } from "./models/User.js";
import cors from "cors";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

// Api
app.post("/api/new", async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    name,
    email,
    password,
  });
});

app.listen(3000, () => {
  console.log("Server is Working at http://localhost:3000");
});
