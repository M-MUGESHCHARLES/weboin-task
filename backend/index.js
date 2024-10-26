const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: 'GET,POST,DELETE'
};

const app = express();
const Port = 4201;
const Routes = require('./controller/StudentsRoutes');

//-------------------------------- middleware
app.use(cors(corsOptions));
app.use(express.json());

//-------------------------------- Environment Variables Configuration
dotenv.config();
const Password = process.env.MongoDB_Password;

//-------------------------------- DataBase setup
mongoose
  .connect(
    `mongodb+srv://Weboin-Task:${Password}@cluster0.ve43p.mongodb.net/Students`  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

//-------------------------------- API 
app.get("/", (req, res) => {
    res.send("Hello User ! , Express App is running...");
});

app.use('/',Routes );

//-------------------------------- Listen to the port
app.listen(Port, ()=> {
    console.log(`Server is running on port ${Port}`);
});

