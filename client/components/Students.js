import React, {Component} from "react"
import store from '../store/store';

class Students extends Component {
    constructor(){
        super();
        this.state = {
            students: store.getState().students
        }
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
                                        <h5>{student.firstName + ' ' + student.lastName  }</h5>
                                        <p>Campus Name</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                <h1>In Student Component</h1>
            </div>
        )
    }
}

export default Students