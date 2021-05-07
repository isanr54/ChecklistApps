import React from 'react';
import './YoutubeCom.css';

const YoutubeCom = (props) => {
    return(
        <div className="wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/a6ToiCraDKs/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBVYYio5KGqbOp7COAfkpcZhygp9Q" alt=""/>
            </div>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div> 
    )
}

YoutubeCom.defaultProps = {
    title : 'Youtube',
    desc : 'Description',
}

export default YoutubeCom;