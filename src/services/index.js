import axios from "axios";
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

const postList = (data) => Post('posts',false,data);

const putList = (data, id) => Put(`posts/${id}`,false,data);

const getList = Get('posts?_sort=id&_order=desc');

const deleteList = (id) => Delete(`posts/${id}`);

const API = {
    postList,
    putList,
    getList,
    deleteList
}

export default API;