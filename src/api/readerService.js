import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export default {
  postUrlHtmlPreview(url, parserId = "1") {
    return axios.post(`${BASE_URL}/url/extract?contentType=html`, { url, parserId });
  },

  postUrlTextPreview(url, parserId = "1") {
    return axios.post(`${BASE_URL}/url/extract?contentType=text`, { url, parserId });
  },

  getParsers() {
    return axios.get(`${BASE_URL}/parsers`);
  }
}