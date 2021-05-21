import React from 'react'
import { connect } from 'react-redux'
import { signout } from "../../Redux/auth/authAction";

const Signout = ({signout}) => {
    return (
        <div>
            <button onClick={signout}>SIGNOUT</button>
        </div>
    )
}
var actions = {
    signout
}
export default connect(null,actions)(Signout)
