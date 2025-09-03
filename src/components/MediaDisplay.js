import React from 'react';

const MediaDisplay = ({ src, alt }) => {
  // Check if the source URL ends with '.webm'
  const isVideo = src.endsWith('.webm');

  if (isVideo) {
    return (
      <video autoPlay loop muted playsInline className="card-image">
        <source src={src} type="video/webm"></source>
    </video>
    );
  }

  // If it's not a video, assume it's an image
  return <img src={src} alt={alt} className='card-image' />;
};

export default MediaDisplay;