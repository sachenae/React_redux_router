import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_SELECTED_POST = 'fetch_selected_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=k1234';


export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(()=>callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchSelectedPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_SELECTED_POST,
        payload: request
    }
}