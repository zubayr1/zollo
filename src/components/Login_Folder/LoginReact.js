import React from 'react'
import { Link } from 'react-router-dom'
import person from '../../images/person.png'

import {  Image,Grid } from 'semantic-ui-react'


export default function LoginReact() {
    return (
        <div>
            
        <div style={{position: 'absolute', zIndex: 1 }}>
        <div style={{textAlign:'left', marginLeft:'24%'}}>

            <p style={{fontSize:'56px'}}><strong>Sign in to </strong></p>
            <div style={{fontSize:'56px'}}><strong>Join or Host <div  style={{display:'inline',  color: '#B429F9' }}>events </div></strong></div>
        </div>
            

            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                <Grid.Column>
                <div  className="w-100  mt-5" style={{textAlign:'left', marginLeft:'50%'}}>
                    <h5><strong>If you don't have an account </strong> </h5>
                    <h5><strong> You can </strong>
                    <Link to="/signup" style={{ textDecoration: 'none', color: '#B429F9' }}><strong>Register here!</strong></Link> </h5>
                </div>
                </Grid.Column>

                <Grid.Column>
                  <Image src={person}  size='huge'/>
                </Grid.Column>
                </Grid.Row>

            </Grid>

            </div>
            
        </div>
    )
}
