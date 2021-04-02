import React, {Component} from "react"
import {connect} from 'react-redux';
import {getCampus} from '../store/singleCampus';
//import store from '../store/store';

class SingleCampus extends Component {
    componentDidMount(){
        try{
            this.props.loadCampus(this.props.match.params.id);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    render(){
        const {singleCampus} = this.props;
       
        return  singleCampus != undefined ? (
            <div>
                <div id = 'all_items'>
                    {
                        <div id='campus_info_single'>
                            <div id='campus_container'>
                                <div className='campus_info_a_single'>
                                    <img id='single_img' src={singleCampus.imageURL}/>
                                </div>
                                <div className='campus_info_b_single'>
                                    <h2>{singleCampus.name}</h2>
                                    <p>{singleCampus.description}</p>
                                </div>
                            </div>
                            <div id='campus_container2'>
                                <div id='address_info'>
                                    <small>{singleCampus.address}</small>
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
                        singleCampus.students != undefined ? 
                        singleCampus.students.map(student =>{
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
        ) : <div><h1>nothing here</h1></div> 
       /* return (<div><h1>hey</h1></div>) */
    }
}

const mapStateToProps = (state)=> {
    //console.log(state, ' single campus state');
    return state
    
}

const mapDispatchToProps = (dispatch)=> {
    return{
        loadCampus: (id)=> dispatch(getCampus(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)