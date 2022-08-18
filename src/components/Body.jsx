import React, { useState } from 'react'
import '../css/Body.css'
import { useData } from './DataLayer'
import SongInfo from './SongInfo'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Body = () => {
  const [{user,discover}, dispatch] = useData();
  console.log("DISCOVER->>>>", discover);  

// console.log(discover.images[0].url)

  return (
    <>
    <div id="body--main" style={{backgroundColor:'black'}}>
      <div id="discover_div">
        {/* <div id="img"><img src={discover.images[0].url}></img></div> */}
        <div id="texts">
        <p id="type_heading">{discover.type}</p>
        <p id="large_heading">{discover.name}</p>
        <p id="description_heading">{discover.description}</p>
        </div>
      </div>

      <div id="heading_songs">
        <p>#</p>
        <p id="title_heading">TITLE</p>
        <p id="album_heading">ALBUM</p>
        <p><AccessTimeIcon/></p>
        <p id="album_heading">FAVOURTE/Remove</p>
      </div>

      {
        discover?.tracks?.items.map((songs,index) => {
          return <SongInfo Sname={songs.track} key={index} index={index}/>
        })
      }
    </div>
    <hr /> 
    </>
  )
}

// console.log(songs.track.artists[0].name)
            // <img src={songs.track.album.images[0].url}/>
            // console.log(songs.track.album.images[0].url)
            
            // console.log(songs.track.artists[0].name)
            // console.log(songs.track.name)  
            // <SongInfo Sname={index}/>
            // console.log(index)
            
            // <a href={songs.track.album.images[0].url} style={{color:'black'}}>HELOO</a>
                  {/* <h1>{discover.description} </h1>  */}
      {/* <SongInfo Sname ="hello" /> */}
      {/* <h1>{(discover.discover.tracks)} </h1>  */}
      {/* {console.log(typeof(discover.discover.tracks.items[1]))} */}
      {/* <img src={discover.discover.images[0].url}/>  */}
      {/* <h1>{discover.discover.tracks.items[0].track.names}</h1> */}
      
