import React from 'react'
const Authendpoint="https://accounts.spotify.com/authorize";
const redirect_uri="http://localhost:3001/";
const client_id="049e1e2d11bd456c8a1da406a3b0c1a0";
const scope=[
"user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",
"streaming",
"user-read-email",
"user-read-private",
"user-read-playback-state ",
"user-modify-playback-state "
]
export const loginUrl=`${Authendpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;
const hash =window.location.hash;
  let _token=window.localStorage.getItem("token");
  if(!_token && hash){
    _token=hash.substring(1).split("&").find(ele=>ele.startsWith("access_token")).split("=")[1];
  }
  export {_token};
  // console.log(token);
