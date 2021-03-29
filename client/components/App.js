import React, {Component} from "react";
import {HashRouter as Router, Route} from 'react-router-dom';
//import any sub-components
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Students from './Students';
//import Route from './Route';
import NavBar from './NavBar';
import axios from 'axios';
import store from '../store/store';
const LOAD_STUDENTS = 'LOAD_STUDENTS'; //action type
const LOAD_CAMPUSES = 'LOAD_CAMPUSES'; //action type
const STUDENTS_LOADED = 'STUDENTS_LOADED'; //action type
const CAMPUSES_LOADED = 'CAMPUSES_LOADED'; //action type
const INSERT_STUDENT = 'INSERT_STUDENT'; //action type

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
		//const {LOAD_STUDENTS, LOAD_CAMPUSES, STUDENTS_LOADED, CAMPUSES_LOADED } = store;
		const allCampuses = (await axios.get('/api/campuses')).data;
		const allStudents = (await axios.get('/api/students')).data;
		//console.log(allCampuses);
		store.subscribe(()=> {
			this.setState(store.getState());
		});

		store.dispatch({
			type: LOAD_CAMPUSES,
			campuses: allCampuses
		})

		store.dispatch({
			type: CAMPUSES_LOADED,
			campuses: allCampuses
		})
		
		store.dispatch({
			type: LOAD_STUDENTS,
			students: allStudents
		})

		store.dispatch({
			type: STUDENTS_LOADED,
			students: allStudents
		})
/*
		store.dispatch({
			type: INSERT_STUDENT,
			student
		})
		//console.log(allCampuses);
		*/
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
						<Route component = {SingleStudent} path='/students/:id' />
					</div>
				</Router>
			);
		}
	}
}
