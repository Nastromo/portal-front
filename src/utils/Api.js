import axios from 'axios';

let url = `https://mywellcom.us`;
if (window.location.href.includes(`localhost`)) {
    url = `http://localhost:4000`;
}


export default axios.create({
    baseURL: url,
    headers: {'x-auth': `Bearer ${localStorage.getItem('emprToken')}`}
});