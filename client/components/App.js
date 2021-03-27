import React, {Component} from "react";
import {HashRouter as Router, Route, Link} from 'react-router-dom';
//import any sub-components
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import Students from './Students';
//import Route from './Route';
import NavBar from './NavBar';
import axios from 'axios';
import store from '../store/store';

export default class App extends Component {
	//constructor to initialize state
	//any lifecycle methods
	//any custom methods
	//render
	constructor(){
		super();
		this.state = {...store.getState()};
	}

	async componentDidMount(){
		const allCampuses = (await axios.get('/api/campuses')).data;
		const allStudents = (await axios.get('/api/students')).data;
		//console.log(allCampuses);
		store.subscribe(()=> {
			this.setState(store.getState());
		});

		store.dispatch({
			type: 'LOAD_CAMPUSES',
			campuses: allCampuses
		})

		store.dispatch({
			type: 'CAMPUSES_LOADED',
			campuses: allCampuses
		})
		
		store.dispatch({
			type: 'LOAD_STUDENTS',
			students: allStudents
		})

		store.dispatch({
			type: 'STUDENTS_LOADED',
			students: allStudents
		})

		//console.log(allCampuses);
		
	}

	render(){
		const {campusLoading, studentLoading} = this.state;
		//console.log(campuses);
		if(campusLoading && studentLoading){
			return 'loading'
		}
		else {
			return(
				<Router>
					<div>
						<Route component = {NavBar} />
						<Route component = {Students} path='/students' exact/>
						<Route component = {Campuses} path='/campuses' exact/>
						<Route component = {SingleCampus} path='/campuses/:id' />
					</div>
				</Router>
			);
		}
	}
}
