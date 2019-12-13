import React, { Component } from 'react';
import Submit from '../submit/Submit.js';
import Username from '../Username/Username.js';
import Password from '../Password/Password.js';
import Email from '../Email/Email.js';
import Age from '../Age/Age.js';
import '../../App.css';



export default class RegPage extends Component {
    
    
    
    render() {
        return (
            <div className="reg-page">
                <h1 style={{textAlign: "center"}}>Register page</h1>
                <Username/>
                <Password/>
                <Email/>
                <Age/>
                <Submit/>
            </div>
        )
    }
}
