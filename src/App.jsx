import React, { useEffect, useReducer, useState } from 'react'
import { _token } from './components/Token';
import Login from './components/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { Player } from './components/Player'
import { useData } from './components/DataLayer';

const spotify = new SpotifyWebApi();
function App() {
    // const [_token, setToken] = useState("");
    const [{ user,token }, dispatch] = useData();
    useEffect(() => {
        if (_token) {
            dispatch({
                type:'SET_TOKEN',
                token:_token,
            })

            spotify.getMe().then((user) => { // getMe return a fucntion we parse it nad push it in itialstate array user object usinf useReducer 
                dispatch({
                    type: 'SET_USER',
                    user: user,
                })
                // console.log(user); 
            });
            spotify.setAccessToken(_token);// giving access token to spotify api here is ur key to allow us to twerk btw api and jsx

            // spotify.getMe().then((user) => {console.log(":person", user)});
        }
        window.location.hash = "";
        // console.log("we have token:->", token);
    }, [])
    console.log(token); 
    console.log(user);
    return (
        <div>
            {

                _token ? (<Player />) : (<Login />)


            }


        </div>
    )
}

export default App