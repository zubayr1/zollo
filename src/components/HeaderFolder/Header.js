import React, { useState }  from 'react'
import { Grid, Button,  } from 'semantic-ui-react'
import logo from '../../images/logo.png'
import notificationicon from '../../images/notificationicon.png'
import chaticon from '../../images/chaticon.png'
import usericon from '../../images/usericon.png'

export default function Header() {


    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    return (
        <div style={{marginLeft: '1%', marginRight: '5%'}}>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                <Grid.Column>
                
                <div style={{marginRight: '65%'}}>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column floated='right'>
                        <img src={logo} style={{height:'40px'}} alt="logo"/>
                    </Grid.Column>


                    <Grid.Column floated='left' >

                    <form onSubmit={handleSubmit}>
                        
                        <input style={{backgroundColor:'#F3F3F3', height:'35px', width:'400px',borderWidth:'0px', paddingLeft:'20px', color:'#A5A5A5', outline:'none', borderRadius:'10px',}}
                        placeholder='Search for location, event and more...'
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </form>




                    </Grid.Column>
                    </Grid.Row>                
                </Grid>
                </div>

                </Grid.Column>


                <Grid.Column>
                    
                    <div style={{marginLeft: '50%'}}>
                        <Grid divided='vertically'>
                            <Grid.Row columns={4}>
                            <Grid.Column width='8'>
                            <Button style={{backgroundColor:'#B429F9', boxShadow:'0 8px 16px 0 #f1defa, 0 6px 20px 0 #e5bbfa', height:'35px', width:'120px',color:'#FFFFFF', borderRadius:'20px'}}> <div style={{display:'inline',}}>+</div> Post</Button>

                            </Grid.Column>


                            <Grid.Column width='2' floated='right'>

                            <img src={notificationicon} style={{height:'30px'}} alt="logo"/>

                            </Grid.Column>



                             <Grid.Column width='2' floated='right'>

                             <img src={chaticon} style={{height:'30px'}} alt="logo"/>

                            </Grid.Column>



                            <Grid.Column width='4' floated='right'>

                            <img src={usericon} style={{height:'35px', borderRadius:'50%'}} alt="usericon" />

                                </Grid.Column>


                            </Grid.Row>                
                        </Grid>
                    </div>            



                </Grid.Column>
                </Grid.Row>

               
            </Grid>
        </div>
    )
}
