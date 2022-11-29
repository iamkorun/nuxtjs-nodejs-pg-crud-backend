const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const client = require("./config/dbconfig");
const userRoute = require("./routes/users");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", userRoute);

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});

client.connect();
