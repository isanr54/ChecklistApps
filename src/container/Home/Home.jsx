import React, { Fragment ,Component, createContext} from 'react';
import LifecycleCom from '../pages/LifecycleCom/LifecycleCom';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import Product from '../pages/Product/Product';
import {BrowserRouter as Router , Route , Link, BrowserRouter} from 'react-router-dom';
import './Home.css';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import Hooks from '../pages/Hooks/hooks';
import Checklist from '../pages/Checklist/checklist';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
    state = {
        showComponent:true,
        totalOrder:0,
    }

    dispatch = (action) => {
        if(action.type === 'PLUS_ORDER'){
            return this.state ({
                totalOrder : this.state.totalOrder + 1
            })
        }
        if(action.type === 'MINUS_ORDER'){
            return this.state ({
                totalOrder : this.state.totalOrder - 1
            })
        }
    }

    render(){
        return(
            <Fragment>
                <Checklist/>
            </Fragment>
        )
    }
}

export default Home;