import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassReact(props) {


    return (
        <div>
           
           <div  className="w-100  mt-5" style={{textAlign:'left', marginLeft:'50%'}}>
                                <h6><strong>Already an User? </strong> 
                                    <strong> Then </strong>
                                    <Link to="/login" style={{ textDecoration: 'none', color: '#B429F9' }}><strong>login now!</strong></Link>
                                </h6>
                     </div>

        </div>
    )
}
