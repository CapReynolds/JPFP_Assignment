import React from "react"
//import any sub-components
import axios from 'axios';

export default class App extends React.Component {
	//constructor to initialize state
	//any lifecycle methods
	//any custom methods
	//render
	constructor(){
		super();
		this.state = {
			students: [],
			campuses: []
		};
	}

	async componentDidMount(){
		const allCampuses = (await axios.get('/api/campuses')).data;
		//console.log(allCampuses);
		this.setState({
			campuses: allCampuses
		})
	}

	render(){
		const {campuses} = this.state;
		//console.log(campuses);
		return(
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}
