import axios from "axios";
import {OnlineAPI} from './Config'

const Get = (path) => (data) => {
    const promise = new Promise((resolve , reject) => {
        axios.get(`${OnlineAPI}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Get;