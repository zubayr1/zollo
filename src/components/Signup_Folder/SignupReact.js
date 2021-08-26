import React from 'react'
import { Link } from 'react-router-dom'

export default function SignupReact() {
    return (
        <div>
             <div className="w-100 text-center mt-2">
                    Already have an Account? <Link to="/login">Log In</Link>
            </div>
            
        </div>
    )
}
