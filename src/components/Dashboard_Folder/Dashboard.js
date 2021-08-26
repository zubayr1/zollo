import React from 'react'
import { Button } from 'react-bootstrap'
import {  useHistory } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

import DashboardReact from './DashboardReact'

export default function Dashboard() {

    const { logout} = useAuth()

    const history = useHistory()


    async function handlelogout()
    {
        await logout()
        history.push('/login')
    }

    return (
        <div>
            <DashboardReact />

            <div className="w-100 text-center mt-2">
                    <Button variant='link' onClick={handlelogout}>Log Out</Button>
            </div>

        </div>
    )
}
