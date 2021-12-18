import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {

    const {currentuser} = useAuth()
    return (
        <Route {...rest}
        render={props=> {
            return currentuser ? <Component {...props}/> : 
            <Redirect to="/login"/>
        }}
        >
            
        </Route>
    )
}
