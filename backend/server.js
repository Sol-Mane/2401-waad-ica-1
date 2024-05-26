require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/db");
const cookieParser = require("cookie-parser");
const booksController = require("./controller/booksController");
const userController = require("./controller/userController");

const corsOptions = {
  origin: "https://waad.durendal.xyz",
  credentials: true,
};

async function startServer() {
  try {
    // Start and test the database connection
    await db.pool.connect();
    console.log("Database connected successfully");

    // Register Middlewares
    app.use(cors(corsOptions));
    // app.use(cookieParser());
    app.use(express.json());

    // Register Controllers
    app.use("/books", booksController);
    app.use("/auth", userController);

    // Start the Express server
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port %s", process.env.PORT);
    });
  } catch (err) {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  }
}

startServer();
