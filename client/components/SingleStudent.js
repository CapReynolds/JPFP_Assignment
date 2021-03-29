import React, {Component} from "react"
import store from '../store/store';
import axios from 'axios';
//const LOAD_STUDENTS = 'LOAD_STUDENTS'; //action type
const STUDENTS_LOADED = 'STUDENTS_LOADED'; //action type
const INSERT_STUDENT = 'INSERT_STUDENT'; //action type

class SingleStudent extends Component {
    constructor(props){
        super(props);
        
        console.log(props);
        const {match: {params: {id}}} = props; //pull the students id from props

        const studentArr = store.getState().students;
        //console.log(studentArr);
        const studentID = studentArr.findIndex((stdnt) => stdnt.id === parseInt(id));

        const student = studentArr[studentID];
        //console.log(`heres the student ${student}`)
        this.state = {
            student: 
            {
                ...student, 
                studentID,
             }
        };
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    componentDidMount(){
        const {student} = this.state;
        //console.log('in did mount');
        
        if(student.studentID === -1){
            try{
                this.getStudent();
            }
            catch(err){
                console.log(err);
            }
        }
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                students: store.getState().students
            });
        })
    }

    async getStudent(){
        console.log('getting student');
        const {match: {params: {id}}} = this.props; 
        const currentStudent = (await axios.get(`/api/students/${id}`)).data
        const studentIndex = store.getState().students.findIndex((stdnt) => stdnt.id === parseInt(id));
        
        //console.log(studentIndex);
        //const currentStudent = allStudents[studentIndex];
/*
        store.dispatch({
			type: INSERT_STUDENT,
			student:
		}) */
        /*
		store.dispatch({
			type: STUDENTS_LOADED,
			students: {...students,}
		})*/

        this.setState({
            student: {
                ...currentStudent,
                studentIndex
            }
        })
    }

    render(){
        const {student} = this.state;
        //console.log(student);
        return  (
            <div>
                <div id = 'all_items'>
                    <div id='student_info_single'>
                        <div id='student_container'>
                            <div className='student_info_a_single'>
                                <img id='single_img' src={student.imageURL}/>
                            </div>
                            <div className='student_info_b_single'>
                                <h2>{student.firstName + ' ' + student.lastName}</h2>
                                <p>GPA: {student.GPA}</p>
                                <div id='buttons_div'>
                                    <button>edit</button>
                                    <button>delete</button>
                                </div>
                            </div>
                        </div>
                                        
                    </div>
                </div>
            </div>
        )
    }


}

export default SingleStudent;