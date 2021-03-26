import React, {Component} from "react"
import store from '../store/store';

class Students extends Component {
    constructor(props){
        super(props);

        const initialState = store.getState();

        this.state = initialState;
    }

    componentDidMount(){
        const {students} = this.state;
    }
    render(){
        return  (
            <div>
                <h1>In Students Component</h1>
            </div>
        )
    }
}

export default Students