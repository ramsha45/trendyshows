import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../../Firebase/Firebase'

const Home = () => {
    console.log(auth)
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/auth">
                <button>Authentication</button>
            </Link>
        </div>
    )
}

export default Home
