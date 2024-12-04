import axios from 'axios';


const api = axios.create({  
  baseURL: 'https://example.com/api',  
});  
  
export const getPatients = async () => {  
  const response = await api.get('/patients');  
  return response.data;  
};  
  
export const getPhysicians = async () => {  
  const response = await api.get('/physicians');  
  return response.data;  
};
