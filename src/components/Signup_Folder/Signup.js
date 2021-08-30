import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import {  useHistory } from 'react-router-dom'
import SignupReact from './SignupReact'


export default function Signup() {
    const emailRef = useRef()
    const passRef = useRef()
    const confpassRef = useRef()

    const {signup} = useAuth()

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function handleSubmit(e)
    {
        e.preventDefault()
        if(passRef.current.value !== confpassRef.current.value)
        {
            return setError('Passwords do not match!') 
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value)
            history.push('/login')

        }
        catch (error){
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>

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

                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" required ref={confpassRef}></Form.Control>
                        </Form.Group>

                        <br/>

                        <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>                

            </Card>
           <SignupReact/>
            
        </div>
    )
}
