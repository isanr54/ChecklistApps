import react, { Component } from 'react'

const Check = (props) => {
    return(
            <div className="ChecklistBody">
                <div className="checklist-title">
                    <h2>Checklist APP</h2>
                </div>
                <div className="checklist-list">
                    <label htmlFor="checkbox" onClick={props.update(props.data.id)}>{this.props.data}</label>
                    <input type="checkbox" name="checkbox" id="checkbox" onClick={()=>props.check(props.data.id)}/>
                    <p onclick={props.delete(props.data.id)}>x</p>
                </div>
            </div>
    )
}

export default Check;