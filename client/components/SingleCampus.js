import React, {Component} from "react"
import store from '../store/store';

class SingleCampus extends Component {
    constructor(props){
        super(props);
        
        //console.log(props);
        const {match: {params: {id}}} = props; //pull the campus id from props

        const campusArr = store.getState().campuses;
        //console.log(campusArr);
        const campusID = campusArr.findIndex((cmps) => cmps.id === parseInt(id));

        const campus = campusArr[campusID];
        //console.log(campus);

        this.state = {
            campus: campus 
            ? {
                ...campus, 
                campusID,
            } : null
        };
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    componentDidMount(){
        
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                campuses: store.getState().campuses
            });
        })
    }
    render(){
        const {campus} = this.state;
        console.log(campus);
        return  (
            <div>
                <div id = 'all_items'>
                    {
                        <div id='campus_info_single'>
                            <div id='campus_container'>
                                <div className='campus_info_a_single'>
                                    <img id='single_img' src={campus.imageURL}/>
                                </div>
                                <div className='campus_info_b_single'>
                                    <h2>{campus.name}</h2>
                                    <p>{campus.description}</p>
                                </div>
                            </div>
                            <div id='campus_container2'>
                                <div id='address_info'>
                                    <small>{campus.location}</small>
                                </div>
                                <div id='buttons_div'>
                                    <button>edit</button>
                                    <button>delete</button>
                                </div>
                            </div>
                        </div>                     
                    }
                </div>
                <div>
                    <h1>Students on Campus</h1>
                    <div id='student-list'>
                    {
                        campus.students.length != 0 ? 
                        campus.students.map(student =>{
                            return (
                                <div id = 'student-item' key={student.id}>         
                                    <div id ='student-info'>
                                        <div id='student_a'><img src={student.imageURL}/></div>  
                                        <div id='student_b'>
                                            <div id= 'title'><h4>{student.firstName + ' ' + student.lastName}</h4></div>
                                            <div id='button_div'><button>delete</button></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : <p>There are no students</p>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleCampus