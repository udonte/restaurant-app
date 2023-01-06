import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import {meal} from '../../constants'

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false); //state management for video
  const vidRef = React.useRef(); //allows sets ref.current to the video object

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)  
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
 }
  return(
  <div className='app__video'>
    <video
      src={meal}
      ref={vidRef} //attaches a reference to the video object
      type="video/mp4"
      loop
      controls={false}
      />
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {playVideo ? <BsPauseFill color='#fff' fontSize={30}/>
          : <BsFillPlayFill color='#fff' fontSize={30} />}
          
        </div>
      </div>
  </div>
)};

export default Intro;
