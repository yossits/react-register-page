import React, { Component } from 'react';
import '../../App.css';



export default class Submit extends Component {
    
    alertme = () => {
        if(this.props.validPass && this.props.validPass && this.props.validEmail && this.props.validAge){
            alert('register success');
        }
        else {
            alert('Please fill in the fields correctly');
        }
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.alertme}>submit
                </button>
            </div>
        )
    }
}
// alert('register success');