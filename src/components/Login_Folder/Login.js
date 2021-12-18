import React, {useRef, useState} from 'react'
import { Button, Form, Alert} from 'react-bootstrap'
import { Link , useHistory} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LoginReact from './LoginReact'
import LoginwithGoogle from './LoginwithGoogle'

import ellipse from '../../images/ellipse.png'
import group from '../../images/group.png'

import logo from '../../images/logo.png'
import {  Divider } from 'semantic-ui-react'
import LoginwithFacebook from './LoginwithFacebook'
import 'semantic-ui-css/semantic.min.css'
import {  Menu, Grid, Image, Segment, Header } from 'semantic-ui-react'


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

             <Menu secondary>
                <Menu.Item   
                />
                <strong><Link to="/login">
                    <Image src={logo}  circular size='mini'/>
                </Link></strong>
            </Menu>

            <div style={{position: 'absolute', zIndex: -1, left:'0px', bottom:'0px' }}>

            <Image src={group}  size='big' />                    

            </div>

           

       

                <div style={{height: '80vh', marginLeft: '5%', marginRight: '5%'}} >
                    <Segment vertical textAlign='center' style={{top:'25%'}} >

            <Grid  >
            <Grid.Row columns={2}>
            <Grid.Column >
            <div style={{position: 'absolute', zIndex: -1, right:'40%', bottom:'45%'}}>

            <Image src={ellipse}  size='large' />                    

            </div>

                <LoginReact/>
            </Grid.Column>

            <Grid.Column>

                <div style={{marginLeft:'20%', marginRight: '20%'}}>
    
                    

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

                                <div className="w-100  mt-4" style={{textAlign:'right'}}>
                                <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#A4A4A4' }}>
                                   <h5> Forgot Password? </h5></Link>
                            </div>


                                <div className="w-100  mt-5">
                                <Button disabled={loading} className="w-100" type="submit" style={{backgroundColor:'#B429F9', boxShadow:'0 8px 16px 0 #f1defa, 0 6px 20px 0 #e5bbfa', height:'50px'}}><h5>Sign In</h5></Button>
                                </div>
                            </Form>

                                
                            
                            


                    <div style={{marginTop:'10%'}} >
                        

                    <Divider horizontal>
                                <Header as='h4'>
                                <div style={{color:'#454343'}}>
                                    or login with
                                </div>
                                </Header>
                    </Divider>

                    
                    <div style={{marginLeft:'25%', marginRight: '25%', marginTop:'5%'}}>
                    
                    <div style={{display:'grid', gridTemplateColumns:'auto auto'}}>
                        <div ><LoginwithGoogle/>
                        </div>

                        <div ><LoginwithFacebook/>
                        </div>
                        
                    </div>

                    </div>

                </div>
                

            </div>

            </Grid.Column>
            </Grid.Row>
            
        </Grid>
        </Segment>
        </div>

        


        </div>
            
        
    )
}
