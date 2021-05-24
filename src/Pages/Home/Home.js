import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {handleLoader } from "../../Redux/siteMode/siteModeActions"
const Home = ({handleLoader}) => {
    useEffect(() => {
        handleLoader(false)
    }, [])
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/auth">
                <button>Authentication</button>
            </Link>
        </div>
    )
}

var actions = {
    handleLoader
}
export default connect(null,actions)(Home)
