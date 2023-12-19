import React, { useRef, useState } from 'react';
import { FaFastForward, FaFastBackward } from 'react-icons/fa';
import { ImNext2 } from 'react-icons/im';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [speed, setSpeed] = useState(1);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoSources = [
    'demo.mp4',
    'demo2.mp4',
    'demo3.mp4',
    'demo4.mp4',
  ];

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

  const playVideo = (index) => {
    setCurrentVideo(index);
    const selectedVideoSrc = videoSources[index];
    videoRef.current.src = selectedVideoSrc;
    videoRef.current.load();
    videoRef.current.play();
  };

  const playNextVideo = () => {
    const nextVideoIndex = (currentVideo + 1) % videoSources.length;
    playVideo(nextVideoIndex);
  };

  return (
    <div className="container">
      <div className="player-container">
        <video ref={videoRef} className="video1" controls>
          <source src={videoSources[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="controls">
          <FaFastBackward className="btn" onClick={() => handleSpeedChange(-0.1)} />
          <input
            type="range"
            id="speedControl"
            min="0.5"
            max="2"
            step="0.1"
            value={speed}
            onChange={handleSliderChange}
          />
          <FaFastForward className="btn" onClick={() => handleSpeedChange(0.1)} />
          <ImNext2 className="btn" onClick={playNextVideo}></ImNext2>
        </div>
        <span>Speed: {speed}x</span>
      </div>

      <div className="additional-content">
        <div className="video-cards">
          {videoSources.map((video, index) => (
            <div key={index} className="video-card" onClick={() => playVideo(index)}>
              <video src={video} type="video/mp4" muted width="100%" height="100%"/>
              <h4>{video}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
