import axios from 'axios';

const BASE_URL = 'https://api.pexels.com/videos/search';
const KEY = process.env.REACT_APP_PEXELS_KEY;

export const getVideosKeywords = async (keyword) => {
  try {
    const res = await axios.get(`${BASE_URL}?query=${keyword}`, {
      headers: {
        Authorization: KEY,
      },
    });
    if (res.status === 200) {
      return res.data.videos;
    }
  } catch (e) {
    console.log(e);
  }
};
