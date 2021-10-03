import React from 'react'
import Header from '../HeaderFolder/Header'
import { useAuth } from '../../context/AuthContext'

export default function Dahsboard_react() {

    const { currentuser} = useAuth()

    return (
        <div>
            <Header/>

            {currentuser.uid}
            
        </div>
    )
}
