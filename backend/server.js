require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

async function startServer() {
  try {
    // Test the database connection
    await db.pool.connect();
    console.log("Database connected successfully");

    // Register Middlewares
    app.use(express.json());

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
