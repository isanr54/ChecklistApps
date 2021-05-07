import axios from "axios";
import {RootPath , OnlineAPI} from './Config'

const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${OnlineAPI}/${path}`,data).then((result)=>{ 
                resolve(result.data);
            },(err) => {
                reject(err)
        })
    })
    return promise;
}

export default Put;