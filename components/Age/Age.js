import React, { Component } from 'react'
import '../../App.css';

export default class Age extends Component {
    
    
    
    
    ageCheck = (event) => {
        if (event.target.value > 0 ) {
            this.props.callBack();
        }
    }
    
    
    
    render() {
        return (
            <div>
                <p className="title">Age</p>
                <input className="input" onChange={this.ageCheck} placeholder="Enter your age..." type="text"/>
            </div>
        )
    }
}
