import React from 'react';

import videoBG from '../video/videoBG.mp4';

const VideoComponent = () => {
    return (
        <video playsInline autoPlay muted loop className="video-bg">
          <source src={videoBG} type="video/mp4"></source>
        </video>
    )
}

export default VideoComponent;
