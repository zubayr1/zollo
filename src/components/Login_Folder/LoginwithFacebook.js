import React, { useState} from 'react'
import { useAuth } from '../../context/AuthContext'
import { useHistory} from 'react-router-dom'
import {Alert} from 'react-bootstrap'


export default function LoginwithFacebook() {

    const {facebooklogin} = useAuth()

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const history = useHistory()


    async function onsubmit(e)
    {
        e.preventDefault()
        

        try{
            setError('')
            setLoading(true)
            await facebooklogin()

            history.push('/')

        }
        catch (error){
            setError(error.message)
        }
        setLoading(false)
    }


    return (
        <div>
           {error && <Alert variant="danger">{error}</Alert>}  
        <button disabled={loading} className="login-provider-button" onClick={onsubmit}>
        <div className="w-100" style={{maxWidth: '400px'}}>
        <img src="https://www.gokarmacafe.com/wp-content/uploads/2018/08/log-in-with-facebook-button.png" alt="google icon" height='60' />
        </div>
       </button>
      </div>
            
    )
}
