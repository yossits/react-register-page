import React, { Component } from 'react';
import Submit from '../submit/Submit.js';
import Username from '../Username/Username.js';
import Password from '../Password/Password.js';
import Email from '../Email/Email.js';
import Age from '../Age/Age.js';
import '../../App.css';



export default class RegPage extends Component {
    
    state = {
        isUserNameValid: false,
        isPasswordValid: false,
        isEmailValid: false,
        isAgeValid: false
    }
    
    // when the child invoke the callback function its update the state
    validUser = () => this.setState({isUserNameValid: true});
    validPass = () => this.setState({isPasswordValid: true});
    validEmail = () => this.setState({isEmailValid: true});
    validAge = () => this.setState({isAgeValid: true});
    



    render() {
        return (
            <div className="reg-page">
                <h1 style={{textAlign: "center"}}>Register page</h1>
                {/* send callback function to childs */}
                <Username callBack={this.validUser} />
                <Password callBack={this.validPass} />
                <Email callBack={this.validEmail} />
                <Age callBack={this.validAge} />
                <Submit
                    //send props from Parent(RegPage) to child(Submit)
                    validUser = {this.state.isUserNameValid}
                    validPass = {this.state.isPasswordValid}
                    validEmail = {this.state.isEmailValid}
                    validAge = {this.state.isAgeValid} 
                />
            </div>
        )
    }
}
