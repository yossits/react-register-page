import React, { Component } from 'react'
import '../../App.css';

export default class Age extends Component {
    
    state = {
        color: ''
    }


    ageCheck = (event) => {
        if (event.target.value > 0 ) {
            this.setState({color: 'green'});
            this.props.callBack();
        }
        else if(event.target.value.length === 0) {
            this.setState({color: ''});
        }else{
            this.setState({color: 'red'});
        }
    }
    
    render() {
        return (
            <div>
                <p className="title">Age</p>
                <input 
                    className="input" 
                    style={{backgroundColor: this.state.color}} 
                    onChange={this.ageCheck} 
                    placeholder="Enter your age..." 
                    type="text"
                />
            </div>
        )
    }
}
