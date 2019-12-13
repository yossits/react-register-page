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
    
    validUser = () => this.setState({isUserNameValid: true});
    validPass = () => this.setState({isPasswordValid: true});
    validEmail = () => this.setState({isEmailValid: true});
    validAge = () => this.setState({isAgeValid: true});
    



    render() {
        return (
            <div className="reg-page">
                <h1 style={{textAlign: "center"}}>Register page</h1>
                <Username callBack={this.validUser} />
                <Password callBack={this.validPass} />
                <Email callBack={this.validEmail} />
                <Age callBack={this.validAge} />
                <Submit 
                    validUser = {this.state.isUserNameValid}
                    validPass = {this.state.isPasswordValid}
                    validEmail = {this.state.isEmailValid}
                    validAge = {this.state.isAgeValid} 
                />
            </div>
        )
    }
}
