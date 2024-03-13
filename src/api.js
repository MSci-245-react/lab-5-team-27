import axios from 'axios';
const client = axios.create({
baseURL: 'https://api.outsidein.dev/VIiKwsmulYgdXQ4u5pq00vXm80VNLDeC',
});


const api = {
    async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
    },

};
export default api;