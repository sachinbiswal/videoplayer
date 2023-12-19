import React from 'react';

const VideoCard = ({ src, onClick }) => {
  return (
    <div className="video-card" onClick={onClick}>
      <video src={src} width="100%" height="100%" controls>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCard;
