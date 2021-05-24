import { CircularProgress } from '@material-ui/core'
import React from 'react'

const Loader = () => {
    return (
        <CircularProgress style={{position: "fixed", top: "47.5%", left: "47.5%"}}/>
    )
}

export default Loader
