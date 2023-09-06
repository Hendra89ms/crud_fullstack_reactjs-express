import axios from 'axios'

const URL = 'http://localhost:5000/users'

export const getAllData = async () => {
    const resp = await axios.get(`${URL}`);
    return resp;
}

// export const createData = (data) => {
//     const resp = axios.post(`${URL}`, data)
//     return resp;
// }