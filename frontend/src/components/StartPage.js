import React, {Component} from 'react';
import './../css/StartPage.css';
import startLogo from './startlogo.png';
import {removePropertiesDeep} from "@babel/types";

class StartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_admin: '',
            login: '',
            password: '',
            role: '',
            data: [],
            errorMsg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.applyToOpenWay = this.applyToOpenWay.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {login, password} = this.state;

        fetch('http://localhost:9091/login',{
            method: 'POST',
            body: JSON.stringify({
                    login,
                    password
                }
            )
        }).then(response => response.json()).then( response => {
            if(response == true){
                this.setState({errorMsg: ''});
                window.location = "/admin"
            }
            else{
                this.setState({errorMsg: 'Wrong login or password!'});
            }
        })
    }

    componentDidMount() {
    }

    applyToOpenWay(event) {
        event.preventDefault();
        window.location = "/appliers"
    }

    render() {
        const {login, password} = this.state;

        return (
            <div>
                <img src={startLogo} className="startLogo" height="150"/>
                <form className="formLogin" onSubmit={this.handleSubmit}>
                    <input className="input" type="text" placeholder="login" name="login"
                           value={login}
                           onChange={this.handleChange}/><br/>
                    <input className="input" type="password" placeholder="password" name="password"
                           value={password}
                           onChange={this.handleChange}/><br/>
                    <div className="errorMsg">{this.state.errorMsg}</div>
                    <input type="submit" name="buttonLogin" className="input btn btn-secondary"
                           value="Войти как администратор"/>
                </form>
                <button type="button" onClick={this.applyToOpenWay} className="buttonNewApplier btn btn-secondary">Заполнить заявку</button>
            </div>
        );
    }
}

export default StartPage;