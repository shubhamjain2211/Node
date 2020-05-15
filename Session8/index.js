const express = require('express'); 
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const routes = require('./signup/routes');
const app = express(); 
const port = 5000;

app.use(bodyParser.json())
app.use(routes);

mongoose.connect("mongodb://localhost:27017/signup", {
    useNewUrlParser: "true",
    useUnifiedTopology: "true"

});
mongoose.connection.on("error", err => {
    console.log("err", err)
});
mongoose.connection.on("connected", (err, res) => {
    console.log("Connection Established")
});

// Set EJS as templating engine 
app.set('view engine', 'ejs'); 

app.get('/', (req, res)=>{ 

    res.render('home', {name:'Shubham'}); 
    
    }); 
    
    var server = app.listen(port, function(){ 
        console.log('listining to port ${port}') 
    }); 
    