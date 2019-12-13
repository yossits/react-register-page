import React, { Component } from 'react'
import '../../App.css';

export default class Email extends Component {
    
    state = {
        color: ''
    }
    emailCheck = (event) => {
        if(event.target.value.indexOf('@') === 3) {
            this.setState({color: 'green'});
            this.props.callBack();
        }else{
            this.setState({color: ''});
        }
    }
    
    
    render() {
        return (
            <div>
                <p className="title">Email (@ in the fourth place)</p>
                <input className="input" style={{backgroundColor: this.state.color}} onChange={this.emailCheck} placeholder="Enter your email address..." type="text"/>
            </div>
        )
    }
}
