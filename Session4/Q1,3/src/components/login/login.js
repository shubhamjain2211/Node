import React from 'react';
import classes from './login.module.css';
const login = (props) => {


    return (<div className={classes.main}>
        <form onSubmit={props.login} className={classes.form}>
            <h1>Login</h1>
            <input placeholder="Github Username" type="text" />
            <button>Login</button>
        </form>
    </div>)
}


export default login;