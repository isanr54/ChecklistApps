import axios from "axios";
import {OnlineAPI} from './Config'

const Delete = (path) => (data) => {
    const promise = new Promise((resolve , reject) => {
        axios.delete(`${OnlineAPI}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Delete;