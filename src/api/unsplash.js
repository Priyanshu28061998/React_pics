import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 5G5mGpPh2Fk8xewv6y9TVX8_Cn4WshgP6EaogWkSor8'
    }
});