import React, { Component } from 'react'
import '../../App.css';

export default class Age extends Component {
    render() {
        return (
            <div>
                <p className="title">Age</p>
                <input className="input" placeholder="Enter your age..." type="text"/>
            </div>
        )
    }
}
