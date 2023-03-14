import React from 'react'
import '../css/login.css'
import {loginUrl} from './Token'

export default function Login(){
    return (
    <div className="login">
        <img src="https://images.indianexpress.com/2021/08/Spotify.jpg"/>
        <a href={loginUrl}> Log in</a>
    </div>
    )
}
