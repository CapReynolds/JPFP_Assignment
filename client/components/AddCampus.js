
import React, {Component} from "react";
import {connect} from 'react-redux';
import {AddACampus} from '../store/campuses';

class AddCampus extends Component {
    constructor(){
        super();
        this.state = {};
        this.onInputChange = this.onInputChange.bind(this);
        this.Create = this.Create.bind(this);
    }
 
   
   onInputChange(ev) {
    ev.preventDefault()
        this.setState({[ev.target.name]: ev.target.value});
    }   

    Create(name, address) {
        const {callAddCampus} = this.props;
        callAddCampus(name, address);
    }  

   render(){
       const {onInputChange, Create} = this;
       const {name, address} = this.state;
    return  (
        <div id='form'>
                <br>
                </br>
                <label>
                Campus Name:
                
                <input type='text' name= 'name' value={name} onChange={onInputChange}/>
                </label>
                
                <label>
                Campus Address:
                
                <input type='text' name= 'address' value={address} onChange={onInputChange} />
                </label>
                
               
                <button onClick={() => Create(name, address)}>Add A Campus</button>
        </div>
    );
    }
}


const mapDispatchToProps = (dispatch, {history})=> {
    return{
        callAddCampus: (name, address) => {
            dispatch(AddACampus(name, address, history));
        }
    }
}
export default connect(null, mapDispatchToProps)(AddCampus)