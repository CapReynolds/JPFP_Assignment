import React, {Component} from "react"
import store from '../store/store';
import {Link} from 'react-router-dom';

class Campuses extends Component {
    constructor(){
        super();
        this.state = {
            campuses: store.getState().campuses
        };
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
    //Assignments/jpfp/assets/placeholder_img.jpeg
    render(){
        const {campuses} = this.state;
        //console.log(campuses);
        return  (
            <div id = 'all_items'>
                {
                    campuses.map(campus =>{
                        return (
                            <div id='campus_info'>
                                <div id='campus_container'>
                                    <div className='campus_info_a'>
                                        <img src={campus.imageURL}/>
                                    </div>
                                    <div className='campus_info_b'>
                                        <Link to={`/campuses/${campus.id}`}>
                                            <h5>{campus.name}</h5>
                                        </Link>
                                        <p>other stuff</p>
                                    </div>
                                </div>
                            </div>                           
                        );
                    })
                }
                <h1>In Campus Component</h1>
            </div>
        )
    }
}

export default Campuses