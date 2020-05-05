import React, { useState, useEffect } from 'react';
import './App.css';
import Users from './components/Users/Users';
import AddUser from './components/addUsers/addUser';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App(props) {
  const [sessionId, setSessionId] = useState(null)
  const [userGit, setUserGit] = useState("");

  useEffect(() => {
    let sessionid = sessionStorage.getItem("sessionId")
    let expire = sessionStorage.getItem("expire")
    console.log(sessionid);
    if (!sessionid) {
      setSessionId(null)
    }
    else {
      if (parseInt(expire) < Date.now())
        setSessionId(null)
      else
        setSessionId({ sessionid: sessionid, expire: expire });
    }

  }, [])


  const authHandler = (event) => {
    event.preventDefault()
    const username = event.target[0].value;
    console.log(username)
    axios.post('http://localhost:5000/session')
      .then(res => {
        console.log(res.data)
        setSessionId(res.data);
        sessionStorage.setItem("sessionId", res.data.sessionid)
        sessionStorage.setItem("expire", res.data.expire)
        props.history.push('/')
      })
    axios.get('http://localhost:5000/github/' + username)
      .then(response => {
        console.log(response.data)
        setUserGit("user git is: " + response.data);
      })
  }



  let route = (<Switch>
    <Route exact path='/' component={() => <Users sessionId={sessionId.sessionid} />} />
    <Route path='/addusers' component={() => <AddUser sessionId={sessionId.sessionid} />} />
    <Route path='/login' component={() => <Login login={authHandler} />} />
  </Switch>)


  if (sessionId == null) {

    route = (<Switch>
      <Route path='/login' component={() => <Login login={authHandler} />} />
      <Redirect to="/login" />
    </Switch>)

  }
  return (
    <div>
      <div>
      <div className ="link">
            <span><Link to="/">Users</Link></span>
            <span><Link to="/addusers">Add Users</Link></span>
            <span><Link to ='/login'>Login</Link></span>
            <span><a href="http://localhost:5000/aboutus">About Us</a></span>
      </div>
    </div>
      <div className="usergit">{userGit}</div>
      {route}
    </div>)
}

export default withRouter(App);
