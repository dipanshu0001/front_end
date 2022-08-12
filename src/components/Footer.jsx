import React from 'react'
import '../css/Footer.css'
// import { AiFillPlayCircle } from "react-icons/ai";
import { BsShuffle,BsPlayCircleFill} from "react-icons/bs";
import { BiSkipPrevious,BiSkipNext} from "react-icons/bi";
import { ImLoop2 } from "react-icons/im";






export const Footer=()=> {
  return (
    <div className="footer_main">
      <div className="footer_l"> <h1>here music name will display</h1></div>
      <div className="footer_m">
        <BsShuffle className='footer_btns' />
        <BiSkipPrevious className='footer_btns' size={40}/>
        <BsPlayCircleFill className='play_btn'size={40}/>
        <BiSkipNext className='footer_btns' size={40}/>
        <ImLoop2 className='footer_btns'/>

        </div>
      <div className="footer_r"><h1>here vvolumne and queue will be their</h1></div>
    </div>
  )
}

export default Footer