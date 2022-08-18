import React,{useEffect} from 'react'
import '../css/Footer.css'
// import { AiFillPlayCircle } from "react-icons/ai";
import { BsShuffle, BsPlayCircleFill } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { ImLoop2 } from "react-icons/im";
import Grid from '@mui/material/Grid';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useData } from './DataLayer'
import { useState } from 'react';
import SpotifyPlayer from "react-spotify-web-playback";
import { _token } from './Token';
import { player_track } from './Player';
import PauseIcon from '@mui/icons-material/Pause';







let index_tobe=0;
export const getindex=(index_k)=>{
index_tobe=index_k;
}
export const Footer = () => {
  
  const [value, setValue] = React.useState(30);
  const [{user,discover}, dispatch] = useData();
  const[index_to,changedindex]=useState(index_tobe)
  const{playing,changeplaying,isplaying,changeisplaying}=React.useContext(player_track)
  // console.log(isplaying,trackuri)
  const playpause=()=>{
    if(isplaying){
      changeisplaying(false)
    }
    // console.log(isplaying)
    else{
      changeisplaying(true)
    }
  }

  const nxt=()=>{
    if(playing===29){
      changeplaying(0);
    }
    else
    changeplaying((playing+1))
    // console.log("next called")
  
  }
  const prev=()=>{
    if(playing===0)changeplaying(29);
    else
    changeplaying((playing-1))
  }
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
useEffect(() => {
  let down=document.getElementsByClassName('down')[0];
  let up=document.getElementsByClassName('up')[0];
  // changedindex(index_tobe)
  if(value>=50){
    down.classList.add('gray');
    up.classList.remove('gray');
  }
  else{
    up.classList.add('gray');
    down.classList.remove('gray');
  }
  console.log("efgfect called")
}, [value,isplaying,playing])






  return (
    <div className="footer_main">
      <div className="footer_l"> 
      <img src={discover?.tracks?.items[playing].track.album?.images[1].url}  id="side--img" alt="" srcset="" />
      <div id="side_name_div">
      <p className='side_name'>{discover?.tracks?.items[playing].track.name} </p>
      <p className='side_name'>{discover?.tracks?.items[playing].track.album?.artists[0]?.name} </p>
      </div>
      
      
      
      
      </div>
      <div className="footer_m">
        <BsShuffle className='footer_btns' />
        <BiSkipPrevious className='footer_btns' size={40} onClick={prev} />
        {!isplaying?<BsPlayCircleFill className='play_btn' style={{fontSize:'40px',margin:"5px"}} onClick={playpause}/>:<PauseIcon className='play_btn' style={{fontSize:'40px'}} onClick={playpause}/>}
        <BiSkipNext className='footer_btns' size={40} onClick={nxt}/>
        <ImLoop2 className='footer_btns' />
      </div>
      <div className="footer_r">
        <div className="volume_controller">
           <Grid container spacing={2}>
            <Grid item >
              <PlaylistPlayIcon />
            </Grid>
            <Grid item xs>
              <Box sx={{ width: 150 }}>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                  {value==0?<VolumeOffIcon className='down' onClick={playpause}/>:<VolumeDown className='down' onClick={playpause}/>}
                  <Slider aria-label="Volume" value={value} onChange={handleChange} />
                  <VolumeUp className='up'/>
                </Stack>
              </Box>
            </Grid>
          </Grid> 
        </div>
       
      </div>
    </div>
  )
}

export default Footer