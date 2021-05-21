import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { signup,googleSignin } from "../../Redux/auth/authAction";

const Signup = ({signup,googleSignin}) => {

    var [fullName, setFullName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");

    var handleFormSubmit = (e) => {
        e.preventDefault()
        var cred = {
            fullName,email,password
        }
        signup(cred)

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value = {fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="full name"/>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type = "submit">Submit</button>
            </form>
            <br/>
            <button onClick={googleSignin}>SignIn With Google</button>
        </div>
    )
}

var actions = {
    signup,
    googleSignin
}
export default connect(null,actions)(Signup)
