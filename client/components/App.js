import React, {Component} from "react";
import {Provider, connect} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
//import any sub-components
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
import Students from './Students';
import Home from './Home';
import NavBar from './NavBar';
import EditCampus from './EditCampus';
import EditStudent from './EditStudent';
import {getCampuses} from '../store/campuses';
import {getStudents} from '../store/students';


class App extends Component {
	
	componentDidMount(){
		this.props.start();
	}
	
	render(){
			
			return(
				<Router>
					<div>
						<Route component = {NavBar} />
						<Switch>
							<Route component = {Home} path='/' exact/>
							<Route component = {Students} path='/students' exact/>
							<Route component = {Campuses} path='/campuses' exact />
							<Route component = {AddStudent} path='/students/add' exact/>
							<Route component = {AddCampus} path='/campuses/add' exact/>
							<Route component = {SingleCampus} path='/campuses/:id' exact/>
							<Route component = {SingleStudent} path='/students/:id' exact/>
							<Route component = {EditCampus} path='/campuses/edit/:id' exact/>
							<Route component = {EditStudent} path='/students/edit/:id' exact/>
						</Switch>
					</div>
				</Router>
			);
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		start: () => {
			dispatch(getCampuses()),
			dispatch(getStudents())
		}	
	}
}
const mapStateToProps = (state) => {
	return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
