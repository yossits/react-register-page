import React, { Component } from 'react';
import '../../App.css';

export default class Password extends Component {
    
    state = {
        color: ''
    }
    
    passwordCheck = (event) => {
        if(event.target.value.length === 0) {
            this.setState({color: ''});
        }
        if(event.target.value.length > 7) {
            this.setState({color: 'red'});
        }else{
            this.setState({color: 'green'});
        }
    }
    
    render() {
        return (
            <div>
                <p className="title">Password (up to 7 characters)</p>
                <input className="input" style={{backgroundColor: this.state.color}} onChange={this.passwordCheck} placeholder="Enter your password..." type="text"/>
            </div>
        )
    }
}
