import React, {Component} from "react";
import {connect} from 'react-redux';
import {getStudent} from '../store/singleStudent';
import {Link} from 'react-router-dom';


class SingleStudent extends Component {

    componentDidMount(){
        try {
            this.props.loadStudent(this.props.match.params.id);
        }
        catch(err)
        {
            console.log(err);
        }
    }


    render(){
        const {singleStudent} = this.props;
        
        return  (
            <div>
                <div id = 'all_items'>
                    <div id='student_info_single'>
                        <div id='student_container'>
                            <div className='student_info_a_single'>
                                <img id='single_img' src={singleStudent.imageURL}/>
                            </div>
                            <div className='student_info_b_single'>
                                <h2>{singleStudent.firstName + ' ' + singleStudent.lastName}</h2>
                                <p>GPA: {singleStudent.GPA}</p>
                                <div className='buttons_div2'>
                                <Link to={`/students/edit/${singleStudent.id}`}>
                                    <button>edit</button>
                                </Link>
                                    <button id='delete'>delete</button>
                                </div>
                            </div>
                        </div>
                                        
                    </div>
                </div>
            </div>
        ) 
        
    }


}

const mapStateToProps = (state)=> {
    return state
    
}

const mapDispatchToProps = (dispatch)=> {
    return{
        loadStudent: (id)=> dispatch(getStudent(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)