import React, {Component} from "react";
import {connect} from 'react-redux';
import {AddAStudent} from '../store/students';

class AddStudent extends Component {
    constructor(){
        super();
        this.state = {};
        this.onInputChange = this.onInputChange.bind(this);
        this.Create = this.Create.bind(this);
    }

   onInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }   

    Create(firstName, lastName, email, GPA) {
        const {AddAStudent} = this.props;
        AddAStudent(firstName, lastName, email, GPA);
    }  

   render(){
       const {onInputChange, Create} = this;
       const {firstName, lastName, email, GPA} = this.state;
        return  (
            <div id='form'>
                <div id='form_row'>
                    <label>Student First Name:</label>
                    <input type='text' name= 'firstName' value={firstName} onChange={onInputChange}/>
                </div>
                <div id='form_row'>
                    <label>Student Last Name:</label>
                    <input type='text' name= 'lastName' value={lastName} onChange={onInputChange}/>
                </div>
                <div id='form_row'>
                    <label>Student Email Address:</label>
                    <input type='text' name= 'email' value={email} onChange={onInputChange}/>
                </div>
                <div id='form_row'>
                    <label>Student GPA:</label>
                    <input type='text' name= 'GPA' value={GPA} onChange={onInputChange}/>
                </div>
                <div id='form_row'>
                    <button onClick={()=>Create(firstName,lastName, email, GPA)}>Add Student</button>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, {history})=> {
    return{
        AddAStudent: (firstName, lastName, email, GPA) => {
            dispatch(AddAStudent(firstName, lastName, email, GPA, history));
        }
    }
}
export default connect(null, mapDispatchToProps)(AddStudent)