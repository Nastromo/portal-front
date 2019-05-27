import axios from 'axios';

let url = `http://192.168.20.204:4000`;
if (window.location.href.includes(`localhost`)) {
    url = `http://localhost:4000`;
}


export default axios.create({
    baseURL: url,
    headers: {'x-auth': `Bearer ${localStorage.getItem('emprToken')}`}
});