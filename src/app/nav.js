 
import React from 'react'
import {NavLink} from 'react-router-dom'
export default class NavBar extends React.Component{
    render(){
        return(
            <div>
            <NavLink exact to='/'>Jsdemoa</NavLink> |&nbsp;
            <NavLink to='/jsdemob'>Jsdemob</NavLink> |&nbsp;
            <NavLink to='/jsdemoc'>Jsdemoc</NavLink>
        </div>
        )
    }
}