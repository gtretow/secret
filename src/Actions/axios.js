import axios from 'axios';
import { useSelector } from 'react-redux';


export const getUserPosts = async () => {
    const {username} = useSelector(state => state.user);
    const response = await axios.get('https://dev.codeleap.co.uk/careers/');
    console.log('response', response)
    const userPosts = response.data.username == username;
    return userPosts.data;
  };

export const createPost = async () => {
    const response = await axios.post('https://dev.codeleap.co.uk/careers/');
    return response.data;
  };

export const editPost = async (itemId, data) => {
    const response = await axios.patch(`https://dev.codeleap.co.uk/careers/${itemId}/`, data);
    return response.data;
  };
  
export const deletePost = async (itemId) => {
    const response = await axios.delete(`https://dev.codeleap.co.uk/careers/${itemId}/`);
    return response.data;
  };