import axios from "axios";
import {OnlineAPI} from './Config'

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${OnlineAPI}/${path}`,data).then((result)=>{ 
                resolve(result.data);
            },(err) => {
                reject(err)
        })
    })
    return promise;
}

export default Post;