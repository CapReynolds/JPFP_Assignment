import React, {Component} from "react";
import {connect} from 'react-redux';
import {EditACampus} from '../store/campuses';
import {getCampus} from '../store/singleCampus';
import {Link} from 'react-router-dom';
import {UnregisterAStudent} from '../store/students';

class EditCampus extends Component {
    constructor(props){
        super(props);
        this.state = {
            students: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.SaveChanges = this.SaveChanges.bind(this);
        this.Unregister = this.Unregister.bind(this);
    }

    componentDidMount(){
        try{
            this.props.loadCampus(this.props.match.params.id);
            
            const {campus} = this.props;
            this.setState({
                name: campus.name,
                address: campus.address,
                students: campus.students.length,
                campus: campus
            })
        }
        catch(err)
        {
            console.log(err);
        }
    }

   onInputChange(event) {
       const {students} = props;
        this.setState({
            [event.target.name]: event.target.value,
            students: students.length
        });
    }   

    SaveChanges(name, address) {
        const {Edit} = this.props;
        const {campus} = this.state;
        Edit(name, address, campus.id);
    }  

    Unregister(student, school) {
        const {CallUnregister} = this.props;
        CallUnregister(student, school);
    }  

   render(){
        const {campus} = this.props;
        const {onInputChange, SaveChanges, Unregister} = this;
        const {name, address, students} = this.state;
        return  (
            <div>
                <div id='form'>
                    <div id='form_row'>
                        <label>Campus Name:</label>
                        <input type='text' name= 'name' value={name} onChange={onInputChange}/>
                    </div>
                    <div id='form_row'>
                        <label>Campus Address:</label>
                        <input type='text' name= 'address' value={address} onChange={onInputChange} />
                    </div>
                    <div id='form_row'>
                    <Link to={`/campuses/${campus.id}`}> <button onClick={()=>SaveChanges(name, address)}>Save Campus</button></Link>
                    </div>
                </div>
                <div>
                    <h1>Students on Campus</h1>
                
                    {campus.students !== null && campus.students !== undefined ? 
                        campus.students.map(student =>{
                            return (
                                <div id = 'student-item' key={student.id}>       
                                    <div id ='student-info'>
                                        <div id='student_a'><img src={student.imageURL}/></div>  
                                        <div id='student_b'>
                                            <div id= 'title'><h4>{student.firstName + ' ' + student.lastName}</h4></div>
                                            <div id='button_div'><button id='delete' onClick={()=> Unregister(student, campus)} >Unregister</button></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) 
                        : <div><p>There are no students</p></div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        campus: state.singleCampus
    }
    
}

const mapDispatchToProps = (dispatch)=> {
    return{
        loadCampus: (id)=> dispatch(getCampus(id)),
        Edit: (name, address, id) => {
            dispatch(EditACampus(name, address, id));
        },
        CallUnregister: (student, singleCampus) => {
            dispatch(UnregisterAStudent(student, singleCampus)),
            dispatch(getCampus(singleCampus.id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditCampus)