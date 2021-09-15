import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginReact() {
    return (
        <div>
            <p style={{fontSize:'56px'}}><strong>Sign in to </strong></p>
            <p style={{fontSize:'56px'}}><strong>Join or Host events </strong></p>

            <div style={{textAlign:'left', marginLeft:'20%'}}>
            <p><strong>If you don't have an account </strong> </p>
            <strong> You can </strong>
            <Link to="/signup" style={{ textDecoration: 'none', color: '#B429F9' }}><strong>Register here!</strong></Link>
            </div>
            
        </div>
    )
}
