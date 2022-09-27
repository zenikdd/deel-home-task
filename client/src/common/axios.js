import defaultAxios from 'axios'

export const axios = defaultAxios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
        'profile_id' : '2',
    },
    withCredentials: false,
});