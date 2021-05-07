import React, { Fragment ,Component} from 'react';
import './Home.css';
import Checklist from '../pages/Checklist/Checklist';

class Home extends Component {
    render(){
        return(
            <Fragment>
                <Checklist/>
            </Fragment>
        )
    }
}

export default Home;