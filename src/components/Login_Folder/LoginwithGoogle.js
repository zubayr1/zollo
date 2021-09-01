import React, { useState} from 'react'
import { useAuth } from '../../context/AuthContext'
import { useHistory} from 'react-router-dom'
import {Alert} from 'react-bootstrap'

export default function LoginwithGoogle() {
    const {googlelogin} = useAuth()

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function onsubmit(e)
    {
        e.preventDefault()
        

        try{
            setError('')
            setLoading(true)
            await googlelogin()

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
        <img src="https://www.drupal.org/files/issues/2020-01-26/google_logo.png" alt="google icon" height='60' />
        </div>
       </button>
      </div>
            
    )
}
