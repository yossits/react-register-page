import React, { Component } from 'react';
import '../../App.css';



export default class Submit extends Component {
    
    alertMe = () => {
        if(this.props.validUser && this.props.validPass && this.props.validEmail && this.props.validAge){
            alert('register success');
        }
        else {
            alert('Please fill in the fields correctly');
        }
    }

    render() {
        return (
            <div>
                <button 
                    className="button" 
                    onClick={this.alertMe}
                >submit
                </button>
            </div>
        )
    }
}