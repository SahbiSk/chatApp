//requiring dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
//requiring routers
const userRouter = require("./routes/userRoutes");

//adding env variables
const port = process.env.PORT || 5000;
const db = process.env.db;

//instaciating the app object

const app = express();

//adding middlewares

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/user", userRouter);

//connecting to db then starting the server

mongoose
  .connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`server started on port ${port} `))
  )
  .catch((e) => console.log(e.message));
