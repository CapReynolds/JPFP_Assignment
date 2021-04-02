import React, {Component} from "react"
//import store from '../store/store';
import store from '../store/index';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

const Students = (props) => {
    const {students} = props;
    //console.log(students);
    return  (
        <div>
            <div id='page_title'>
                <h1>All Students</h1>
                <div id='button_div'>
                    <Link to={`/students/add`}>
                        <button>Add Students</button>
                    </Link>
                </div>
            </div>
            <div id = 'all_items'>
                {
                    students != undefined ?
                    students.map(student =>{
                        return (
                            <div id='campus_info'>
                                <div id='campus_container'>
                                    <div className='campus_info_a'>
                                        <img src={student.imageURL}/>
                                    </div>
                                    <div className='campus_info_b'>
                                        <Link to={`/students/${student.id}`}>
                                            <h5>{student.firstName + ' ' + student.lastName  }</h5>
                                        </Link>
                                        {student.campus != null ?
                                            <Link to={`/campuses/${student.campus.id}`}>
                                                <h5>{student.campus.name}</h5>
                                            </Link>
                                            : <br></br>
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    }) : <div><h1>nothing</h1></div>
                } 
            </div>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return{
        students: state.students
    }
}
export default connect(mapStateToProps)(Students)