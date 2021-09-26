import React, {useRef, useState} from 'react'
import { Button, Form, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import ForgotPassReact from './ForgotPassReact'
import { Segment, } from 'semantic-ui-react'


export default function ForgotPassword() {
    const emailRef = useRef()

    const {resetPassword} = useAuth()

    const [message, setMessage] = useState('')

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)



    async function handleSubmit(e)
    {
        e.preventDefault()
        

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)

            setMessage('Check your inbox for further instructions')


        }
        catch (error){
            setError("Failed to reset password")
        }
        setLoading(false)
    }

    return (
        <div style={{height: '80vh', marginLeft: '35%', marginRight: '35%'}} >
            
            <Segment vertical textAlign='center' style={{top:'25%'}} >
           
                    <h2 className="text-center mb-4" style={{ textDecoration: 'none', color: '#B429F9' }}>Reset Password</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">

                            <Form.Control type="email"  placeholder="Enter email" required ref={emailRef} style={{backgroundColor:'rgba(180, 41, 249, 0.07)', height:'40px'}}></Form.Control>
                        </Form.Group>

                      
                        <br/>                      

                        <Button disabled={loading} className="w-100" type="submit" style={{backgroundColor:'#B429F9', boxShadow:'0 8px 16px 0 #f1defa, 0 6px 20px 0 #e5bbfa', height:'50px'}}>Reset Now</Button>
                    </Form>

                    <div style={{textAlign:'right'}}>
                    <ForgotPassReact/>
                        
                    </div>

                    

            </Segment>
            
        </div>
    )
}
