import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-proj.firebaseio.com/'
});

export default instance;