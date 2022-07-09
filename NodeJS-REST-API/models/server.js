const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
const feedRoutes = require("../routes/feed");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
  }

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
}
