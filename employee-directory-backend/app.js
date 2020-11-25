// Load Configs
require("dotenv").config();

// Creating connection with database
const { connectMongodb } = require("./database/connection");
connectMongodb();

//require chalk module to give colors to console text
const chalk = require("chalk"),
  info = chalk.bold.cyan,
  exit = chalk.bold.red;

  // Express application
const express = require("express"),
 cors = require("cors"),
 app = express(),
 bodyParser = require("body-parser"),
 path = require('path');


const port = process.env.PORT ? process.env.PORT : 3000;

// For logging
const morgan = require("morgan");

// middlewares added
app
  .use(morgan(":method :url :status :res[content-length] - :response-time ms"))
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json({ limit: "5mb" }))
  .use('/assets/images', express.static(path.join(__dirname, '/assets/images')))

// Application routes
const employeeRoutes = require("./routes/Employee");
const imageUploadRoutes = require("./routes/ImageUpload");


app.use("/employee", employeeRoutes);

app.use("/", imageUploadRoutes);

// If something broke in application
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({ message: err.message ? err.message : "Something went wrong!"});
});

// if invalid endpoint is called
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server started to listen
const server = app.listen(port, () => {
  console.log(info(`Practice app listening at http://localhost:${port}`));
});

// Close server if got the signal to terminate
process.on("SIGTERM", () => {
  server.close(() => {
    console.log(exit("Process terminated"));
  });
});
