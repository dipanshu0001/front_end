import React, { useEffect, useReducer, useState } from 'react'
import { _token } from './components/Token';
import Login from './components/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { Player } from './components/Player'
import { useData } from './components/DataLayer';

const spotify = new SpotifyWebApi();
function App() {
    // const [_token, setToken] = useState("");
    const [{ user, token, playlist,discover }, dispatch] = useData();
    useEffect(() => {
        spotify.setAccessToken(_token);
        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token,
            })
            spotify.getMe().then((user) => { // getMe return a fucntion we parse it nad push it in itialstate array user object usinf useReducer 
                dispatch({
                    type: 'SET_USER',
                    user: user,
                })
            });
            // spotify.Audio
            // giving access token to spotify api here is ur key to allow us to twerk btw api and jsx
            spotify.getUserPlaylists().then((playList) => {
                dispatch({
                    type: "SET_PLAYLIST",
                    playList: playList,
                })
            })
            // let h=user.id;
            spotify.getPlaylist('37i9dQZEVXcLl7e6daA35K').then(response=>{
                dispatch({
                    type:"SET_DISCOVERY",
                    discover:response

                })
            })

            // spotify.getMe().then((user) => {console.log(":person", user)});
        }
       
        // console.log("we have token:->", token);
    },[_token])
    window.location.hash = "";
    // console.log(token); 
    // console.log("user",user.id);
    // console.log("user",user.id);
    // console.log("discover->",discover);
    // console.log(playlist);
    return (
        <div>
            {

                _token ? (<Player />) : (<Login />)


            }


        </div>
    )
}

export default App