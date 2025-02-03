import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://m2-api-1.onrender.com/task',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
