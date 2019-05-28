import React, {Component} from 'react';
import './../css/StartPage.css';
import startLogo from './startlogo.png';

class StartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {login, password} = this.state;
        fetch('http://localhost:9091/appliers', {
                method: 'POST',
                body: JSON.stringify({
                    login,
                    password,
                })
            }
        );
        if (login === "jools") {
             window.location = "/admin"
         }
    }

    componentDidMount() {

    }

    render() {
        function applyToOpenWay() {
            window.location = "/appliers"
        }
        function applyToOpenWay() {
            window.location = "/appliers"
        }



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

                    <input type="submit" name="buttonLogin" className="input"
                           value="Войти как администратор"/>
                </form>
                <button type="button" onClick={applyToOpenWay} className="buttonNewApplier">Заполнить заявку</button>
            </div>
        );
    }
}

export default StartPage;