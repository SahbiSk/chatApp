//requiring dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
////////swagger dependencies
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerDocument = require("./swagger.json");

//requiring routers
const userRouter = require("./routes/userRoutes");

//adding env variables
const port = process.env.PORT || 5000;
const db = process.env.db;

//instaciating the app object

const app = express();

//swagger
/////////swagger options object
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: "1.0.0",
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//adding middlewares

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());

/////swagger middleware
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//user middlewares
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
