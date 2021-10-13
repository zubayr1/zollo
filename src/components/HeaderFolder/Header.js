import React, { useState,  }  from 'react'
import { Grid, Button, GridRow, GridColumn, Dropdown, Icon } from 'semantic-ui-react'
import logo from '../../images/logo.png'
import notificationicon from '../../images/notificationicon.png'
import chaticon from '../../images/chaticon.png'
import usericon from '../../images/usericon.png'
import { Link , } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

import {  useHistory } from 'react-router-dom'


export default function Header() {

    const { currentuser} = useAuth()
    const [name, setName] = useState("");

    const { logout} = useAuth()

    const history = useHistory()


    let userid = ''

    try{
        userid = currentuser.uid
    }
    catch{
        history.push('/login')
    }
    


    async function handlelogout()
    {
        await logout()
        history.push('/login')
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    const handledropdown = (evt, {value}) =>
    {
        
        if(value===1)
        {
            history.push('/'+userid)
        }
        if(value===6)
        {
            handlelogout()
        }
    }

    const trigger = (
        <span>
          <img src={usericon} style={{height:'35px', borderRadius:'50%'}} alt="usericon" />
        </span>
      )

    
    const triggersmaller = (
        <span>
          <img src={usericon} style={{height:'30px', borderRadius:'50%'}} alt="usericon" />
        </span>
      )



    const options = [
    {
        key: 'user',
        text: (
        <span>
            Signed in as {userid}
        </span>
        ),
        
    },
    { key: 'profile', text: 'Your Profile', value: 1},
    { key: 'stars', text: 'Your Events', value: 2 },
    { key: 'businesses', text: 'Your Business', value: 3 },
    { key: 'help', text: 'Help & Support', value: 4 },
    { key: 'settings', text: 'Settings & Privacy', value: 5},
    { key: 'sign-out', text: 'Sign Out', value: 6},
    ]


    return (
        <div style={{marginLeft: '0%', marginRight: '1%'}}>


            <Grid>
                <Grid.Row columns={2} verticalAlign="middle" only='computer'>

                    <GridColumn tablet={3} computer={4}>

                        <Grid>

                            <GridRow columns={2} verticalAlign="middle">

                                <GridColumn  computer={8} widescreen={6} largeScreen={6}>
                                <Link to="/">
                                    <img src={logo} style={{height:'40px'}} alt="logo"/>
                                </Link>

                                </GridColumn>


                                <GridColumn  computer={6} widescreen={8} largeScreen={8}>

                                    <form onSubmit={handleSubmit}>
                                        
                                        <input style={{backgroundColor:'#F3F3F3', height:'40px', width:'400px',borderWidth:'0px', paddingLeft:'20px', color:'#A5A5A5', outline:'none', borderRadius:'20px',}}
                                        placeholder= "Search for locations, events and places..."
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        />
                                    </form>

                                </GridColumn>



                            </GridRow>


                        </Grid>

                    </GridColumn>




                    <GridColumn   computer={6}  widescreen={4} largeScreen={4} floated='right'>

                        <Grid>

                            <GridRow columns={4} verticalAlign="middle">

                                <GridColumn  computer={6} widescreen={6} largeScreen={8}>
                                    <Button animated style={{backgroundColor:'#B429F9', boxShadow:'0 8px 16px 0 #f1defa, 0 6px 20px 0 #e5bbfa', height:'40px', width:'120px',color:'#FFFFFF', borderRadius:'20px'}}>
                                        <Button.Content visible>+ Post</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>


                                </GridColumn>



                                <GridColumn computer={2} widescreen={2} largeScreen={3} floated='right'>
                                    <img src={notificationicon} style={{height:'25px'}} alt="notification"/>

                                </GridColumn>


                                <GridColumn  computer={2} widescreen={2} largeScreen={3} floated='right'>
                                    <img src={chaticon} style={{height:'25px', display:'inline-block'}} alt="chat"/>


                                </GridColumn>



                                <GridColumn  computer={2} widescreen={4} largeScreen={2} floated='right'>
                                    
                                    <Dropdown trigger={trigger} options={options} pointing='top right' onChange={handledropdown} />


                                </GridColumn>



                            </GridRow>
                        </Grid>



                    </GridColumn>



                </Grid.Row>






                <Grid.Row columns={2} verticalAlign="middle" only='tablet'>

                    <GridColumn tablet={3} computer={4}>

                        <Grid>

                            <GridRow columns={2} verticalAlign="middle">

                                <GridColumn tablet={12} >
                                <Link to="/">
                                    <img src={logo} style={{height:'30px'}} alt="logo"/>
                                </Link>

                                </GridColumn>


                                <GridColumn  tablet={2} >

                                    <form onSubmit={handleSubmit}>
                                        
                                        <input style={{backgroundColor:'#F3F3F3', height:'30px', width:'240px',borderWidth:'0px', paddingLeft:'20px', color:'#A5A5A5', outline:'none', borderRadius:'20px',}}
                                        placeholder= "Search here..."
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        />
                                    </form>

                                </GridColumn>



                            </GridRow>


                        </Grid>

                    </GridColumn>




                    <GridColumn  tablet={6}  floated='right'>

                        <Grid>

                            <GridRow columns={4} verticalAlign="middle">

                                <GridColumn tablet={4} >
                                    <Button size='small' style={{backgroundColor:'#B429F9', boxShadow:'0 8px 16px 0 #f1defa, 0 6px 20px 0 #e5bbfa', width:'80px',color:'#FFFFFF', borderRadius:'20px'}}>Post</Button>


                                </GridColumn>



                                <GridColumn tablet={3}  floated='right'>
                                    <img src={notificationicon} style={{height:'25px'}} alt="notification"/>

                                </GridColumn>


                                <GridColumn  tablet={3}  floated='right'>
                                    <img src={chaticon} style={{height:'25px', display:'inline-block'}} alt="chat"/>


                                </GridColumn>



                                <GridColumn  tablet={2} floated='right'>
                                    
                                    <Dropdown trigger={triggersmaller} options={options} pointing='top right' onChange={handledropdown} />


                                </GridColumn>



                            </GridRow>
                        </Grid>



                    </GridColumn>



                </Grid.Row>







                <Grid.Row columns={2} verticalAlign="middle" only='mobile'>

                    <GridColumn mobile={5}>

                        <Grid>

                            <GridRow columns={2} verticalAlign="middle">

                                <GridColumn mobile={10} >
                                <Link to="/">
                                    <img src={logo} style={{height:'30px'}} alt="logo"/>
                                </Link>

                                </GridColumn>


                                <GridColumn  mobile={1} floated='left'>

                                    <form onSubmit={handleSubmit}>
                                        
                                        <input style={{backgroundColor:'#F3F3F3', height:'30px', width:'140px',borderWidth:'0px', paddingLeft:'20px', color:'#A5A5A5', outline:'none', borderRadius:'20px',}}
                                        placeholder= "Search ..."
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        />
                                    </form>

                                </GridColumn>



                            </GridRow>


                        </Grid>

                    </GridColumn>




                    <GridColumn  mobile={7}  floated='right'>

                        <Grid>

                            <GridRow columns={4} verticalAlign="middle">

                                <GridColumn mobile={4} textAlign="center">
                                    <Button size='mini' style={{backgroundColor:'#B429F9', boxShadow:'0 8px 16px 0 #f1defa, 0 6px 20px 0 #e5bbfa',  width:'50px',color:'#FFFFFF', borderRadius:'20px', textAlign: "center"}}>+</Button>


                                </GridColumn>



                                <GridColumn mobile={3}  floated='right'>
                                    <img src={notificationicon} style={{height:'25px'}} alt="notification"/>

                                </GridColumn>


                                <GridColumn  mobile={3}  floated='right'>
                                    <img src={chaticon} style={{height:'25px', display:'inline-block'}} alt="chat"/>


                                </GridColumn>



                                <GridColumn  mobile={3}  floated='right'>
                                    
                                    <Dropdown trigger={triggersmaller} options={options} pointing='top right' onChange={handledropdown} />


                                </GridColumn>



                            </GridRow>
                        </Grid>



                    </GridColumn>



                    </Grid.Row>








            
            </Grid>




        </div>
    )
}
