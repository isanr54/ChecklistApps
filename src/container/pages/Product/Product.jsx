import React, { Component, Fragment } from 'react'
import CardProduct from './CardProduct/CardProduct'
import {connect} from 'react-redux'

class Product extends Component {
    // state = {
    //     order:4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment> 
                <div className="header">
                    <h2>Product</h2>
                    <hr />
                    <div className="count">
                        <p className="counter">{this.props.order}</p>
                    </div>
                </div>
                <CardProduct/>
            </Fragment>
        )
    }
}


const mapStateToProps = state => {
    return{
        order:state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);