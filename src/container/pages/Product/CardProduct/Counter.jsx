import React, { Component } from 'react';
import {connect} from 'react-redux'
import ActionType from '../../../../redux/reducer/globalActionType';
import RootContext from '../../../Home/Home'

class Counter extends Component{
    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }

    // handleMinus = () => {
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order - 1
    //         },() => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }else{
    //         alert('Tidak boleh kurang dari 0')
    //     }

    // }

    render(){
        return(
            <div className="buy">
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                <input type="text" name="" id="" value={this.props.order}/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
           
        )
    }
}
                  
const mapStateToProps = (state) => {
    return{
        order:state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handlePlus: () => dispatch({type:ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type:ActionType.MINUS_ORDER}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter) 
// export default Counter