import React, { useState, useEffect } from 'react'
import '../css/SongInfo.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { getindex } from './Footer'
import { player_track } from './Player';


function SongInfo({ Sname, index }) {
  const [ishover, changeLogo] = useState(false)
  const [isliked, changeliked] = useState(false)
  const [isremoved, changeremove] = useState(false)
  const [todisplay, setdisplay] = useState(0);
  const { playing , changeplaying,isplaying,changeisplaying} = React.useContext(player_track)


  const changeindex = () => {
   changeplaying(index)
  //  if(isplaying){
  //  changeisplaying(false)
  // }
   if(!isplaying){
    changeisplaying(true)
   }
    // console.log("helo")

  }

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  useEffect(() => {
    let remove_icon = document.getElementsByClassName('remove_icon')[index];
    if (!isremoved) {
      remove_icon.classList.remove('gray');
      console.log(index, " ", isremoved)
    }
    else {
      remove_icon.classList.add('gray');
    }
  }, [isremoved])

  return (
    <div className='songinfo--main' onMouseOver={() => { changeLogo(true) }} onMouseOut={() => { changeLogo(false) }}>
      {ishover? <button className='index_btn' onClick={changeindex}><PlayArrowIcon className='playbtn' /></button> : <button className='index_btn'>{index + 1}</button>}
      <div className="song_info">
        <img src={Sname.album?.images[1].url} className="artist--img" alt="" style={{ height: '16', width: '16' }} />
        <h3 className='song_name'>{Sname.name}</h3>
        <h6 className='artist_name'>{Sname.album?.artists[0]?.name}</h6>
      </div>
      <div className="album_name text_center">{Sname.album.name}</div>
      <div className="duration text_center">{millisToMinutesAndSeconds(Sname.duration_ms)}</div>
      <div className="like_remove_btn text_center">
        {!isliked ? (<FavoriteBorderIcon className='white text_center' onClick={() => { changeliked(true) }} />) : (<FavoriteIcon className='white' onClick={() => { changeliked(false) }} />)}
        <RemoveCircleOutlineIcon className='white remove_icon text_center' onClick={() => { changeremove(prevstate => !prevstate) }} />
      </div>

    </div >

  )
}

export default SongInfo
// export { todisplay}

