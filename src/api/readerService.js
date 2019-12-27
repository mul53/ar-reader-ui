import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export default {
  async postUrlPreview(url) {
    try {
      const { 
        text, 
        formatted_text 
      } = await axios.post(`${BASE_URL}/parse`, { url });
      
      return { text, formatted_text };
    } catch (e) {
      console.log(e)
    }
  }
}