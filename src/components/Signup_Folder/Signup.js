import React, {useRef, useState} from 'react'
import { Button, Form, Alert} from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import SignupReact from './SignupReact'

import ellipse from '../../images/ellipse.png'
import group from '../../images/group.png'

import logo from '../../images/logo.png'
import 'semantic-ui-css/semantic.min.css'
import {  Menu, Grid, Image, Segment, } from 'semantic-ui-react'


export default function Signup() {
    const emailRef = useRef()
    const passRef = useRef()
    const confpassRef = useRef()

    const {signup} = useAuth()

    const [error, setError] = useState('')

    const [success, setSuccess] = useState('')

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
            setSuccess('Account is created successfully! Wait for screen to reload to login page')
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value)
            setTimeout(() => {  history.push('/login')  }, 1500);
            

        }
        catch (error){
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <div>

        <Menu secondary>
                <Menu.Item   
                />
                <strong><Link to="/login">
                    <Image src={logo}  circular size='mini'/>
                </Link></strong>
            </Menu>

            <div>

            <div style={{position: 'absolute', zIndex: -1, left:'0px', bottom:'0px' }}>

            <Image src={group}  size='big' />                    

            </div>

           



                <div style={{height: '80vh', marginLeft: '5%', marginRight: '5%'}} >
                    <Segment vertical textAlign='center' style={{top:'25%'}} >

            <Grid  >
            <Grid.Row columns={2}>
            <Grid.Column >
            <div style={{position: 'absolute', zIndex: -1, right:'40%', bottom:'20%'}}>

            <Image src={ellipse}  size='large' />                    

            </div>

                <SignupReact/>
            </Grid.Column>

            <Grid.Column>

                <div style={{marginLeft:'20%', marginRight: '20%'}}>

                    
                            {success && <Alert variant="success">{success}</Alert>}

                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit} size='sm'>
                                <div className="w-100  mt-4">
                                <Form.Group id="email">
                                    <Form.Control type="email" placeholder="Enter email"  required ref={emailRef} style={{backgroundColor:'rgba(180, 41, 249, 0.07)', height:'40px'}}></Form.Control>
                                </Form.Group>
                                </div>
                            
                                <div className="w-100  mt-4">
                                <Form.Group id="password">
                                    <Form.Control type="password" placeholder="Password" required ref={passRef} style={{backgroundColor:'rgba(180, 41, 249, 0.07)', height:'40px'}}></Form.Control>
                                </Form.Group>
                                </div>

                                <div className="w-100  mt-4">
                                <Form.Group id="password">
                                    <Form.Control type="password" placeholder="Confirm Password" required ref={confpassRef} style={{backgroundColor:'rgba(180, 41, 249, 0.07)', height:'40px'}}></Form.Control>
                                </Form.Group>
                                </div>


                            


                                <div className="w-100  mt-5">
                                <Button disabled={loading} className="w-100" type="submit" style={{backgroundColor:'#B429F9', boxShadow:'0 8px 16px 0 #f1defa, 0 6px 20px 0 #e5bbfa', height:'50px'}}>Sign Up</Button>
                                </div>
                            </Form>

                                
                            
                    
                

                        </div>

                        </Grid.Column>
                        </Grid.Row>

                        </Grid>
                        </Segment>
                        </div>




                        </div>




            
            
        </div>
    )
}
