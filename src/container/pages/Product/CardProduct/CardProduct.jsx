import React, { Component, Fragment } from 'react'
import Counter from './Counter'

class CardProduct extends Component {
    render(){
        return(
            <Fragment>
                <div className="body">
                    <div className="title-product">
                        <p className="title">Ayam Goreng</p>
                    </div>
                </div>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default CardProduct;