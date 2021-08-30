import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import { Link , useHistory} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LoginReact from './LoginReact'


export default function Login() {
    const emailRef = useRef()
    const passRef = useRef()

    const {login} = useAuth()

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const history = useHistory()


    async function handleSubmit(e)
    {
        e.preventDefault()
        

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passRef.current.value)

            history.push('/')

        }
        catch (error){
            if(error.message==='The password is invalid or the user does not have a password.' || error.message==='There is no user record corresponding to this identifier. The user may have been deleted.')
                setError('No entry with the mail and password is found')
            else
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required ref={emailRef}></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passRef}></Form.Control>
                        </Form.Group>

                        <br/>                      

                        <Button disabled={loading} className="w-100" type="submit">Login</Button>
                    </Form>

                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>                

            </Card>
            
            <LoginReact/>
            
        </div>
    )
}
