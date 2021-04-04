import React from "react";
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

const Home = (props) => {
    //console.log(props);
    const {campuses, students} = props;
        return  (
            <div>
                    <div id='welcome'>
                       <div>
                        <h1>Welcome!</h1>
                        <h3>There are are currently ({campuses.length}) campuses to view, with a total of ({students.length}) students.</h3>
                   </div>
                         </div>
                
            </div>
        )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Home);