import React, {Component} from 'react';

class Route extends Component{
    constructor(){
        super();
        this.state = {
            view: ''
        };
    }
    
    componentDidMount(){
        window.addEventListener('hashchange', ()=>{
            this.setState({view: window.location.hash.slice(1)})
        })
        this.setState({view: window.location.hash.slice(1)});
    }

    remder(){
        const HashConnected = this.props.component;
        return (
            <HashConnected {...this.state}/>
        )
    }
}
export default Route;