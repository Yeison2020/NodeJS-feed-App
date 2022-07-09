const express = require("express");
const bodyParser = require("body-parser");
// Initializing instaces of My dependancies

const app = express();
// Middleware to parse the data
app.use(bodyParser.json());

//  Importing routes into App Js

const feedRoutes = require("./routes/feed");

// Solving CORS setting Headers PLEASE THIS IS SO IMPORTANT

app.use((req, res, next) => {
  // This allow my server to receive request from all different domains or local Host
  res.setHeader("Access-Controll-Allow-Origin", "*");

  // This allow my server to receive thos method only
  res.setHeader(
    "Acess-controll-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  // Those are the Header type from the Client and Authorization allowing the server to set content type: Content-Type : "application/json"
  res.setHeader("Access-Controll-Allow-Header", "Content-Type, Authorization");
  next();
});

//

app.use("/feed", feedRoutes);

app.listen(8080);
