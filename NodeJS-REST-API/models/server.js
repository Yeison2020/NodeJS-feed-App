const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
const bodyParser = require("body-parser");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.postPath = "/feed/posts";

    // Connecting and calling methods
    this.connectarDB();
    this.middlewares();
    this.routes();
    this.parserBody();
  }

  // Calling meethods

  // Here I create my function and connected my database
  connectarDB = async () => {
    await dbConnection();
  };

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.postPath, require("../routes/feed"));
  }

  parserBody() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server is running on port: ", this.port);
    });
  }
}

module.exports = Server;
