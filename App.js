const mysql2 = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const answerRoutes = require("./routes/answerRoute");
const authMiddleware = require("./middleware/authMiddleware");
const app = express();

const port = 5500;

app.use(bodyparser.json()); //body json format
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//db connection credentials
const dbConnection = require("./db/dbconfig");

//   //testing the backend
app.get("/", (req, res) => {
  res.send("welcome");
});

// creating tables middleware install
const installRoutes = require("./routes/installRoute");
app.use("/", installRoutes);

//user route middleware
const userRoutes = require("./routes/userRoute");
app.use("/api/users", userRoutes);

//question route middleware
const questionRoutes = require("./routes/questionRoute");
app.use("/api", authMiddleware, questionRoutes);

//Answer route middleware
app.use("/api", authMiddleware, answerRoutes);

// Try to connect to the database, and only start the app if successful
async function start() {
  try {
    // Attempt to get a connection from the connection pool
    const result = await dbConnection.getConnection();

    // Success message with host name (indicating Hostinger MySQL connection)
    console.log("Database connection established");
    console.log("Connected to Hostinger MySQL database!");

    // Release the connection back to the pool
    result.release();
  } catch (error) {
    // Error handling: If the connection fails, show the error message
    console.log("Failed to connect to the database:", error.message);
  }
}

// Call the start function to check DB connection
start();

// Now, start the Express app, only if the DB connection is successful
app.listen(port, (error) => {
  if (error) {
    console.log("Error starting the server:", error.message);
  } else {
    console.log(`Server is listening on port :${port}`);
  }
});
