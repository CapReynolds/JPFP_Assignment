import React from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


const Campuses = (props) => {
    const {campuses} = props;
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
                    campuses != undefined ?
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
                                        <p>({campus.student != null ? campus.students.length : '0'}) students</p>
                                        <div id='button_div'>
                                            <button>edit</button>
                                            <button>delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                        );
                    }) : <div><h1>empty</h1></div>
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
export default connect(mapStateToProps)(Campuses)