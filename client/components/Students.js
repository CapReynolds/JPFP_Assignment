import React, {Component} from "react"
import store from '../store/store';
import {Link} from 'react-router-dom';

class Students extends Component {
    constructor(){
        super();
        this.state = {
            students: store.getState().students
        }
        //console.log(store.getState());
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                students: store.getState().students
            });
        })
    }
    render(){
        const {students} = this.state;
        //console.log(students);
        return  (
            <div>
            <div id='page_title'>
                <h1>All Students</h1>
                <div id='button_div'>
                    <button>Add Students</button>
                </div>
            </div>
            <div id = 'all_items'>
                {
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
                                        <Link to={`/campuses/${student.campus.id}`}>
                                            <h5>{student.campus.name}</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            </div>
        )
    }
}

export default Students