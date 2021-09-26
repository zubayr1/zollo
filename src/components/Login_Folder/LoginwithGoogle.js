import React, { useState} from 'react'
import { useAuth } from '../../context/AuthContext'
import { useHistory} from 'react-router-dom'
import {Alert} from 'react-bootstrap'
import icon from '../../images/google_icon.png'

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
            

            <div style={{alignSelf:'center', alignItems:'center'}}>
             {error && <Alert variant="danger">{error}</Alert>}
        <div disabled={loading} className="login-provider-button" onClick={onsubmit}>
        <img src={icon} alt="Avatar" style={{border:'1px solid', borderRadius:'5px', padding: '10px'}}/>
        </div>

        </div>
      </div>
            
    )
}
