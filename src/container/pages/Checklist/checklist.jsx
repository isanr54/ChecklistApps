import react, { Component, Fragment } from 'react'
import Check from './Check'
import API from '../../../services/index'


class Checklist extends Component{
    state = {
        check:[],
        checklistName:{
            "checklistId": 0,
            "itemName": ""
        }
    }

    getAPI = () => {
        API.getList().then(result => {
            this.setState({
                check: result
            })
            console.log(result)
        })
    }

    postDataAPI = () => {
        API.postList(this.state.checklistName).then((res) =>{
           this.getList();
           this.setState({
               checklistName:{
                "checklistId": 0,
                "itemName": ""
               },
           })
       })
   }

   putDataAPI = () => {
    API.putNewsBlog(this.state.checklistName,this.state.checklistName.checklistId).then((res) =>{
        this.getList();
        this.setState({
             checklistName:{
                "checklistId": 0,
                "itemName": ""
                },
            })
        })
    }

    handleDelete = (data) => {
        API.deleteList(data).then(res=>{
            this.getPostAPI();
        })
    }

    handleCheck = () => {
        this.setState({
            checklistName:data
        })
    }

    handleUpdate = () => {
        this.setState({
            checklistName:data
        })
    }

    componentDidMount(){
        this.getAPI();
    }

    render(){
        return(
            <Fragment>
                <div className="checklist-title">
                    <h2>Checklist APP</h2>
                    <div className="checkNew">
                        <input type="text" name="check" id="check" placeholder="Tambah List Baru" />
                        <button>Tambah</button>
                    </div>
                </div>
                {
                   this.state.check.map(check=>{
                       return <Check data={check} check={this.handleCheck} update={this.handleUpdate} delete={this.handleDelete}/>
                   })
                }
            </Fragment>
        )
    }
}

export default Checklist;