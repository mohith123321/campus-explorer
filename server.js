const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // 👈 MUST COME FIRST

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/smart-object-explorer")
  .then(()=>console.log("MongoDB connected"))
  .catch(err=>console.error(err));

const userRoutes = require("./routes/userRoutes");
const experienceRoutes = require("./routes/experienceRoutes");

app.use("/api/users", userRoutes);
app.use("/api/experience", experienceRoutes);

app.listen(5000, ()=>console.log("Server running on port 5000"));
