import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './users.module.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(Response => {
                setUsers(Response.data);
            })
    }, [])
    const deleteButton = (timestamp) => {
        axios.delete('http://localhost:5000/' + timestamp )
        .then(response => {
            setUsers(response.data);
        })
    }
    const userslist = users.map((user) => {
        return (
            <tr key = {user.createdAt}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td><button onClick = {() => deleteButton(user.createdAt)} className = {classes.removebtn}>X</button></td>
            </tr>
        )
    })
    return (
        <div>    
            <div className={classes.users}>
                <div>  
                    <table className={classes.usersTable}>
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {userslist}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Users;