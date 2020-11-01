import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burguer-43323.firebaseio.com/'
});

export default instance;