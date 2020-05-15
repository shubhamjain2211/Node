const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const routes = require('./App/routes');
const app = express();
const port = 5000;

app.use(bodyParser.json())
app.use(routes);

mongoose.connect("mongodb://localhost:27017/inventorymanagment", {
    useNewUrlParser: "true",
    useUnifiedTopology: "true"

});
mongoose.connection.on("error", err => {
    console.log("err", err)
});
mongoose.connection.on("connected", (err, res) => {
    console.log("Connection Established")
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))