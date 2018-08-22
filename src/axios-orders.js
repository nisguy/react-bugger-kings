import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-kings.firebaseio.com/'
});

export default instance;