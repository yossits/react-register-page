import React, { Component } from 'react'
import '../../App.css';

export default class Username extends Component {
    
    state = {
        color: ''
    }

    userCheck = (event) => {
        if(event.target.value.length > 5 && event.target.value.length < 9){
            this.setState({color: 'green'});
        }
        if(event.target.value.length === 0) {
            this.setState({color: ''});
        }else{
            this.setState({color: 'red'});
        }
        
    }
      
    render() {
        return (
            <div>
                <p className="title">Username (use 6-8 letters)</p>
                <input className="input" style={{backgroundColor: this.state.color}} onChange={this.userCheck} placeholder="Enter a username..." type="text" />
            </div>
        )
    }
}
