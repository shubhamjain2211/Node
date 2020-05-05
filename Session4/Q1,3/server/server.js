const express = require('express');
const bodyParser = require('body-parser');
const { userData } = require('./data');
const session = require('express-session');
const cors = require('cors');
const axios = require('axios');
const port = 5000;
const sessions = [];
const data = userData.map((o, i) => {
    return { ...o, TimeStamp: Date.now() + i }
});
const addTimeStamp = (req, res, next) => {
    req.body.TimeStamp = Date.now();
    next();
}
const getindex = (time) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].TimeStamp == time) {
            return i;
        }
    }
}
const app = express();
app.use(session({ secret: "abc", saveUninitialized: true, resave: true, cookie: { maxAge: (60000 * 5) } }))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/aboutus', express.static(__dirname + "/aboutus"))

const sessionHandler = (req, res, next) => {
    const sessionid = req.params.id;
    for (i in sessions) {
        if (sessions[i].sessionid == sessionid) {
            if (sessions[i].expire < Date.now())
                req.valid = false;
            else { req.valid = true; }
            next();
        }
    }
    req.valid = false;
    next();
}
app.get('/session', (req, res) => {
    console.log(req.session)

    let sess = req.session;
    res.send(sess);
})
app.post('/session', (req, res) => {

    const sessionObj = {
        sessionid: req.sessionID,
        expire: Date.now() + (60000)
    }
    sessions.push(sessionObj);
    console.log(sessions);

    res.send(sessionObj);

})
app.get('/:id', sessionHandler, (req, res) => {
    if (req.valid) {
        res.send(data)
    }
    else {
        res.send("the session has been expired")
    }
})
app.delete('/:TimeStamp', (req, res) => {
    const TimeStamp = req.params.TimeStamp
    const index = getindex(parseInt(TimeStamp));
    data.splice(index, 1);
    res.send(data);
})
app.post('/adduser/:id', sessionHandler, addTimeStamp, (req, res) => {
    if (req.valid == true) {
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            TimeStamp: req.body.TimeStamp
        }
        data.push(user);
        console.log(data);
        res.send("true");
    }
    else 
    res.send("false");
})
app.get('/aboutus', (req, res) => {
    res.send("About Us page not found");
})
app.get('/github/:username' , (req , res) => {
    axios.get('https://api.github.com/users/'+req.params.username)
    .then(response => {
            console.log(response)
            res.send(response.data.html_url);
    })
    .catch(err => res.send("Not Found"));
})
app.listen(port, () => {
    console.log("Running at http://localhost:5000");
})