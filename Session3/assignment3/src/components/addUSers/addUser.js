import React from 'react'
import axios from 'axios'
import classes from './addUser.module.css'
import {withRouter} from 'react-router-dom'

const AddUser = (props) => {

    const addUser = (event) => {
         const newuser = {
            firstname : event.target[0].value,
            lastname : event.target[1].value,
         }
        axios.post('http://localhost:5000/adduser' ,newuser)
        .then(Response => {
              props.history.push('/')
        })
    }
    return (<div className = {classes.holder}>
        <form onSubmit = {addUser} className ={classes.form}>
            <h1>Add User</h1>
            <input placeholder="Enter Firstname" type="text" />
            <input placeholder="Enter Lastname" type="text" />
            <button>Add</button>
        </form>
            </div>)
}
export default withRouter(AddUser);