import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export default {
  postUrlPreview(url) {
    return axios.post(`${BASE_URL}/parse`, { url });
  }
}