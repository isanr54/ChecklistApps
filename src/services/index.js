import axios from "axios";
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

const postList = (data) => Post('item',data);

const putList = (data, id) => Put(`item/${id}`,data);

const getList = Get('checklist');

const deleteList = (id) => Delete(`item/${id}`);

const API = {
    postList,
    putList,
    getList,
    deleteList
}

export default API;