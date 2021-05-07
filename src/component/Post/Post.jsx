import React from 'react'

const Post = (props) => {
    return(
        <div className="wrapper">   
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/any" alt=""/>
            </div>
            <div className="container">
                <p className="title" onClick={()=> props.goDetail(props.data.id)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>  
                <button className="btn-update" onClick={()=> props.update(props.data)}>Update</button>
                <button className="btn-submit" onClick={()=> props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;