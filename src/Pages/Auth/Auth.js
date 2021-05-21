import React from 'react'
import Signin from '../../Components/Signin/Signin'
import Signout from '../../Components/Signout/Signout'
import Signup from '../../Components/Signup/Signup'

const Auth = () => {
    return (
        <div>
          <h1>Auth Page</h1>
          <Signup/>
          <Signin/>
          <Signout/>
        </div>
    )
}

export default Auth