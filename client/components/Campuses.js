import React from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {DeleteACampus} from '../store/campuses';

const Campuses = (props) => {
    const {campuses, DeleteCampus} = props;
    
    return  (
        <div>
            <div id='page_title'>
                <h1>All Campuses</h1>
                <div id='button_div'>
                    <Link to={`/campuses/add`}>
                        <button>Add Campus</button>
                    </Link>
                </div>
            </div>
            <div id = 'all_items'>
                {
                    campuses != undefined && campuses.length != 0 ?
                    campuses.map(campus =>{
                        return (
                            <div id='campus_info'>
                                <div id='campus_container'>
                                    <div className='campus_info_a'>
                                        <img src={campus.imageURL}/>
                                    </div>
                                    <div className='campus_info_b'>
                                        <Link to={`/campuses/${campus.id}`}>
                                            <h5>{campus.name}</h5>
                                        </Link>
                                        <p>({campus.students != null ? campus.students.length : '0'}) students</p>
                                        <div id='buttons_div'>
                                            <button id='delete' onClick={()=> DeleteCampus(campus.id)}>delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                        );
                    }) : <div><h2>There are no campuses</h2></div>
                } 
            </div>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return{
        campuses: state.campuses
    }
}
const mapDispatchToProps = (dispatch)=> {
    return{
        DeleteCampus: (id) => {
            dispatch(DeleteACampus(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Campuses)