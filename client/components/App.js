import React, {Component} from "react"
//import any sub-components
import Campuses from './Campuses';
import Students from './Students';
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
		console.log(allCampuses);
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
	
		//console.log(allCampuses);
		
	}

	render(){
		const {campusLoading} = this.state;
		//console.log(campuses);
		if(campusLoading){
			return 'loading'
		}
		else {
			return(
				<div>
					<NavBar />
					<Campuses />
				</div>
			);
		}
	}
}
