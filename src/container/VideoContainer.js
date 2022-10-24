import React, { useState } from 'react';
import Video from 'components/Video';
import axios from 'axios';

const VideoContainer = () => {
  const [loading, setLoading] = useState(false);
  const [broadcastData, setBroadcastData] = useState(null);

  const getSportsData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/football/nowMatch');
      if (res.data) {
        setBroadcastData(res.data.data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <Video
      getSportsData={getSportsData}
      loading={loading}
      broadcastData={broadcastData}
    />
  );
};

export default VideoContainer;
