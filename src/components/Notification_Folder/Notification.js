import React from 'react'
import Header from '../HeaderFolder/Header'
import no_notif_icon from '../../images/no_notif_icon.png'
import { Grid, } from 'semantic-ui-react'

export default function Notification() {

    const notif = 
        <div>
            <img src={no_notif_icon} style={{height:'35px'}} alt="nonotification"/>
            <div className="mt-3">
                <h2 style={{color:'#A4A4A4'}}>No notifications</h2>
            </div>
            <div className="mt-3">
                <h5 style={{color:'#A4A4A4'}}>Looks like you do not have any notifications at the moment</h5>
            </div>
                        
        </div>

    return (
        <div>
            <Header/>
            <div style={{marginTop:'4%', marginLeft:'5%', marginRight:'5%'}}>

            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column floated='left' width={3}>
                        <h3 style={{textAlign:'left', color:'#685B6F', position:'absolute'}}>
                            <strong>Notifications
                                </strong>
                        </h3>
                    </Grid.Column>

                    <Grid.Column floated='right' width={3}>
                        <h5 style={{color:'#A5A5A5'}}>
                            Clear All
                        </h5>
                    </Grid.Column>
                </Grid.Row>

                
            </Grid>
               
                <div
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    >
                    {notif}
                </div>

                
            </div>
            
        </div>
    )
}
