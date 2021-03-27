import React, {Component} from "react"
import store from '../store/store';

class Campuses extends Component {
    constructor(props){
        super(props);
        
        console.log(props);
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                campuses: store.getState().campuses
            });
        })
    }
    render(){
        return(
            <h1>Some Stuff</h1>
        )
    }
}

export default Campuses