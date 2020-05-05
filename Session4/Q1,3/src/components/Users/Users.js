import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './users.module.css';
import { withRouter } from 'react-router-dom';
const Users = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/' + props.sessionId)
            .then(Response => {
                if (typeof (Response.data) == "string") {
                    setUsers([])
                    alert("Session Expired")
                    props.history.push('/login')
                }
                setUsers(Response.data);
            })
    }, [])
    const deleteButton = (timestamp) => {
        axios.delete('http://localhost:5000/' + timestamp )
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
    }
    const userslist = users.map((eachusers) => {
        return (
            <tr key={eachusers.createdAt}>
                <td>{eachusers.firstname}</td>
                <td>{eachusers.lastname}</td>
                <td><button onClick={() => deleteButton(eachusers.createdAt)} className={classes.removebtn}>X</button></td>
            </tr>
        )
    })
    return (
        <div>
            <div className={classes.users}>
                <h1>All Users</h1>
                <div>
                    <table className={classes.usersTable}>
                        <thead>
                            <tr><th>FirstName</th>
                                <th>LastName</th></tr>
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
export default withRouter(Users);