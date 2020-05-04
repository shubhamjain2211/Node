import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Users from './components/Users/Users';
import AddUser from './components/addUSers/addUser';
import { Switch, Route } from 'react-router-dom';

function App() {

  const route = (<Switch>
    <Route exact path='/' component={Users} />
    <Route path='/addusers' component={AddUser} />
  </Switch>)

  return (
    <div>
      <div className ="link">
            <span><Link to="/">User List</Link></span>
            <span><Link to="/addusers">Add User</Link></span>
            <span><a href="http://localhost:5000/aboutus">About Us</a></span>
      </div>
      {route}
    </div>)
}

export default App;
