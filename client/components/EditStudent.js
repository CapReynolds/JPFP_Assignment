import React, {Component} from "react";
import {connect} from 'react-redux';
import {EditAStudent} from '../store/students';
import {getStudent} from '../store/singleStudent';
import {Link} from 'react-router-dom';

class EditStudent extends Component {
    constructor(){
        super();
        this.state = {};
        this.onInputChange = this.onInputChange.bind(this);
        this.SaveChanges = this.SaveChanges.bind(this);
    }

    componentDidMount(){
        try{
            this.props.loadStudent(this.props.match.params.id);
            const {singleStudent} = this.props;
            this.setState({
                firstName: singleStudent.firstName,
                lastName: singleStudent.lastName,
                email: singleStudent.email,
                GPA: singleStudent.GPA,
            })
        }
        catch(err)
        {
            console.log(err);
        }
    }

   onInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }   

    SaveChanges(firstName, lastName, email, GPA) {
        const {Edit, singleStudent} = this.props;
        Edit(firstName, lastName, email, GPA, singleStudent.id);
    }  

   render(){
        const {singleStudent} = this.props;
        const {onInputChange, SaveChanges} = this;
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
                    <Link to={`/students/${singleStudent.id}`}> <button onClick={()=>SaveChanges(firstName, lastName, email, GPA)}>Save Campus</button></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    //console.log(state, ' single campus state');
    return state
    
}

const mapDispatchToProps = (dispatch)=> {
    return{
        loadStudent: (id)=> dispatch(getStudent(id)),
        Edit: (firstName, lastName, email, GPA, id) => {
            dispatch(EditAStudent(firstName, lastName, email, GPA, id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)