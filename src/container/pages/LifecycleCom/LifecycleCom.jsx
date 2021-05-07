import react , {Component, Fragment} from 'react' 
import './LifecycleCom.css'
import {connect} from 'react-redux'
import RootContext from '../../Home/Home'

class LifecycleCom extends Component {
    constructor(props){
        super(props);
        this.state = {   
            count:1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count:2
        //     })
        // },3000)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.group('shouldComponentUpdate')
        console.log('nextState :',nextState);
        console.log('this state :', this.state);
        console.groupEnd();
        if(nextState.count>=4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return(
            <Fragment>
                <h2>Lifecycle Component</h2>
                <hr/>
                <button className='buttons' onClick={this.changeCount}>Component Button {this.state.count} </button>
                <hr />
                <p>Total Order : {this.props.order}</p>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
        order:state.totalOrder
    }
}

export default connect(mapStateToProps)(LifecycleCom);