import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Dahsboard_react() {

    const { currentuser} = useAuth()

    return (
        <div>
            Dashboard <br/>
            New User? <Link to="/signup">Sign Up</Link> <br/>

            Already have an Account? <Link to="/login">Log In</Link>

            {currentuser.email}
            
        </div>
    )
}
