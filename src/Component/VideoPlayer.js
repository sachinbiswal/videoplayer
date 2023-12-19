import React, { useRef, useState } from 'react';
import { FaFastForward } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [speed, setSpeed] = useState(1);

  const handleSpeedChange = (amount) => {
    const newSpeed = clamp(parseFloat(speed + amount).toFixed(1), 0.5, 2);
    setSpeed(newSpeed);
    videoRef.current.playbackRate = newSpeed;
  };

  const handleSliderChange = (event) => {
    const newSpeed = parseFloat(event.target.value).toFixed(1);
    setSpeed(newSpeed);
    videoRef.current.playbackRate = newSpeed;
  };


  return (
    <div className="player-container">
      <video ref={videoRef} className='video1' controls>
        <source src="demo.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      <div className="controls">
        <FaFastBackward className='btn' onClick={() => handleSpeedChange(-0.1)}></FaFastBackward>
        <input
          type="range"
          id="speedControl"
          min="0.5"
          max="2"
          step="0.1"
          value={speed}
          onChange={handleSliderChange}
        />
        <FaFastForward className='btn'  onClick={() => handleSpeedChange(0.1)}></FaFastForward>
      </div>
      <span>Speed: {speed}x</span>
    </div>
  );
};

export default VideoPlayer;
