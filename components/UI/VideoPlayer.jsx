import { useEffect, useRef } from 'react';
import videojs from 'video.js';

const VideoPlayer = ({ cloudinaryVideoUrl }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const videoPlayer = videojs(videoRef.current, {});

    videoPlayer.src({ type: 'video/mp4', src: cloudinaryVideoUrl });

    playerRef.current = videoPlayer;

    return () => {
      if (playerRef.current) playerRef.current.dispose();
    };
  }, [cloudinaryVideoUrl]);

  return (
    <>
      <video ref={videoRef} />
    </>
  );
};

export default VideoPlayer;
