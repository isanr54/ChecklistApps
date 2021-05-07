import react, { Component, Fragment } from 'react';
import YoutubeCom from '../../../component/YoutubeCom/YoutubeCom';

class YoutubeCompPage extends Component {
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YoutubeCom
                    time='1:12'
                    title='Tutorial ReactJS - 1'
                    desc='10 Hari Yang Lalu'
                />
                <YoutubeCom
                    time='1:12'
                    title='Tutorial ReactJS - 2'
                    desc='8 Hari Yang Lalu'
                />
                <YoutubeCom
                    time='1:12'
                    title='Tutorial ReactJS - 3'
                    desc='3 Hari Yang Lalu'
                />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;