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
                <br>
                </br>
                <label>
                Student First Name:
                
                <input type='text' name= 'firstName' value={firstName} onChange={onInputChange}/>
                </label>
                
                <label>
                Student Last Name:
                
                <input type='text' name= 'lastName' value={lastName} onChange={onInputChange}/>
                </label>
                
                <label>
                Student Email:
                
                <input type='text' name= 'email' value={email} onChange={onInputChange}/>
                </label>
                <label>
                Student GPA:
                
                <input type='text' name= 'GPA' value={GPA} onChange={onInputChange}/>
                </label>
                
               
                <button onClick={()=>Create(firstName,lastName, email, GPA)}>Add Student</button>
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