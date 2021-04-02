import React from "react";
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

const NavBar = ({location: {pathname}}) => {
        return  (
            <nav>
                <div id='home'>
                    <Link to = '/' className={pathname === '/' ? 'selected': ''}>Home</Link>
                </div>
                <div id='dir'>
                    <Link to = '/students' className={pathname === '/students' ? 'selected': ''}>Students</Link>
                    <Link to = '/campuses' className={pathname === '/campuses' ? 'selected': ''}>Campuses</Link>
                </div>
            </nav>
        )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(NavBar);