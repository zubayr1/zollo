import React, { useState }  from 'react'
import { Grid, Button, GridRow, GridColumn, Dropdown } from 'semantic-ui-react'
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
        const userid = currentuser.uid
        if(value===1)
        {
            history.push('/'+userid)
        }
        if(value===7)
        {
            handlelogout()
        }
    }

    const trigger = (
        <span>
          <img src={usericon} style={{height:'35px', borderRadius:'50%'}} alt="usericon" />
        </span>
      )


    const options = [
    {
        key: 'user',
        text: (
        <span>
            Signed in as {currentuser.uid}
        </span>
        ),
        
    },
    { key: 'profile', text: 'Your Profile', value: 1},
    { key: 'stars', text: 'Your Stars', value: 2 },
    { key: 'explore', text: 'Explore' , value: 3},
    { key: 'integrations', text: 'Integrations', value: 4 },
    { key: 'help', text: 'Help', value: 5 },
    { key: 'settings', text: 'Settings', value: 6 },
    { key: 'sign-out', text: 'Sign Out', value: 7},
    ]


    return (
        <div style={{marginLeft: '0%', marginRight: '1%'}}>


            <Grid>
                <Grid.Row columns={2} verticalAlign="middle">

                    <GridColumn width={4}>

                        <Grid>

                            <GridRow columns={2} verticalAlign="middle">

                                <GridColumn>
                                <Link to="/">
                                    <img src={logo} style={{height:'40px'}} alt="logo"/>
                                </Link>

                                </GridColumn>


                                <GridColumn>

                                    <form onSubmit={handleSubmit}>
                                        
                                        <input style={{backgroundColor:'#F3F3F3', height:'40px', width:'400px',borderWidth:'0px', paddingLeft:'20px', color:'#A5A5A5', outline:'none', borderRadius:'20px',}}
                                        placeholder= "Search for location, event and more..."
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        />
                                    </form>

                                </GridColumn>



                            </GridRow>


                        </Grid>

                    </GridColumn>




                    <GridColumn width={4} floated='right'>

                        <Grid>

                            <GridRow columns={4} verticalAlign="middle">

                                <GridColumn width={8}>
                                    <Button style={{backgroundColor:'#B429F9', boxShadow:'0 8px 16px 0 #f1defa, 0 6px 20px 0 #e5bbfa', height:'40px', width:'120px',color:'#FFFFFF', borderRadius:'20px'}}> <div style={{display:'inline',}}>+</div> Post</Button>


                                </GridColumn>



                                <GridColumn width={2}>
                                    <img src={notificationicon} style={{height:'30px'}} alt="notification"/>

                                </GridColumn>


                                <GridColumn width={2}>
                                    <img src={chaticon} style={{height:'30px', display:'inline-block'}} alt="chat"/>


                                </GridColumn>



                                <GridColumn width={4} floated='right'>
                                    
                                    <Dropdown trigger={trigger} options={options} pointing='top right' onChange={handledropdown} />


                                </GridColumn>



                            </GridRow>
                        </Grid>



                    </GridColumn>



                </Grid.Row>


            
            </Grid>




        </div>
    )
}
