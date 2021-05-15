require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

// DB Connection
const dbConnection = require("./config/db");

// Middlewares
// Body Parser
app.use(express.json());

// Connecting DB
dbConnection();

// Routes
app.use("/api/todo", require("./routes/todo"));

// Serving Static assets in Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Setting up Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, (err) => {
  if (err) console.log(`Problem occured while staring server!`);
  else console.log(`Server Started and Listening to Port: ${PORT}`);
});
