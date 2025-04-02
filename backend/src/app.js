const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routers/usersRoutes")
const postsRoutes = require("./routers/postsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", usersRoutes);
app.use("/api", postsRoutes);

module.exports = app;