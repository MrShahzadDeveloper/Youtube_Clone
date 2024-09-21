import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API, // Correct way to access the env variable
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchApi = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}` , options)

    return data;
}

