import { AxiosResponse } from "axios";

const axios = require('axios').default;


export const startRecording = async() : Promise<string> => {
  try {
    const response = await axios.get('http://localhost:8080/record/start')
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Couldn\'t start recording');
    }
  } catch(error: any) {
    return '';
  }
};

