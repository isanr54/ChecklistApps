import React , {Component, Fragment} from 'react'
import Post from '../../../component/Post/Post'
import './BlogPost.css'
import axios from 'axios'
import API from '../../../services/index';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost:{
            userId: 1,
            id:1,
            title:'',
            body:''
        },
        isUpdate:false
    }

    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        // .then((result) => {
        //     this.setState({
        //         post:result.data
        //     })
        // })
    }

    postDataAPI = () => {
         API.postNewsBlog(this.state.formBlogPost).then((res) =>{
            this.getPostAPI();
            this.setState({
                formBlogPost:{
                    userId: 1,
                    id:1,
                    title:'',
                    body:''
                },
            })
        })
    }

    putDataAPI = () => {
        API.putNewsBlog(this.state.formBlogPost,this.state.formBlogPost.id).then((res) =>{
            this.getPostAPI();
            this.setState({
                formBlogPost:{
                    userId: 1,
                    id:1,
                    title:'',
                    body:''
                },
            })
        })
    }

    handleRemove = (data) => {
        API.deleteNewsBlog(data).then(res=>{
            this.getPostAPI();
        })
    }

    handleFormChange = (event) => {
        let formBlogPostInit = {...this.state.formBlogPost};
        let timestamp = new Date().getTime(); 
        if(!this.state.isUpdate){
            formBlogPostInit['id'] = timestamp;
        }
        formBlogPostInit[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostInit
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost:data,
            isUpdate:true
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataAPI()
        }else{
            this.postDataAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post:json
        //     })
        // })

        this.getPostAPI();
    }

    render(){
        return(
           <Fragment>
               <p className="section-title">Blog Post</p>
               <div className="form-add-post">
                   <label htmlFor="title">Title</label>
                   <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} value={this.state.formBlogPost.title}/>
                   <label htmlFor="body">Blog Content</label>
                   <textarea name="body" id="body" cols="30" rows="10" placeholder="add desc" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                   <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
               </div>
               {
                   this.state.post.map(post=>{
                       return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                   })
               }
           </Fragment>
        )
    }
}

export default BlogPost;