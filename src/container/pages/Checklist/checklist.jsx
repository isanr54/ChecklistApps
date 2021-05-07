import react, { Component } from 'react'

class Checklist extends Component{
    render(){
        return(
            <div className="ChecklistBody">
                <div className="checklist-list">
                    <label htmlFor="checkbox">CheckBox</label>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                </div>
            </div>
        )
    }
}

export default Checklist;