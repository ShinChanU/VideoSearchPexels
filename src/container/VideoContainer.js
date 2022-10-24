import React, { useState } from 'react';
import { getVideosKeywords } from 'lib/video';
import Video from 'components/Video';

const VideoContainer = () => {
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState([]);

  const getVideoData = async (e, keyword) => {
    e.preventDefault();
    setLoading(true);
    let videos = await getVideosKeywords(keyword);
    if (videos) {
      setVideoData(videos);
    }
    setLoading(false);
  };

  return (
    <Video
      loading={loading}
      getVideoData={getVideoData}
      videoData={videoData}
      setVideoData={setVideoData}
    />
  );
};

export default VideoContainer;
