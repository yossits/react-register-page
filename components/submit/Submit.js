import React, { Component } from 'react';
import '../../App.css';



export default class Submit extends Component {
    
    alertme = () => {
        alert('register success');
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
