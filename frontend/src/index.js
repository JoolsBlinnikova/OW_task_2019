import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Authorization from './components/Auth';
import Application from './components/Application';
import NotFound from './components/NotFound';
import StartPage from './components/StartPage'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/"
                   render={() => <StartPage/>}
            />
            <Route exact path="/admin"
                   render={() => <Authorization/>}
            />
            <Route exact path="/appliers"
                   render={() => <Application/>}
            />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Отправленное имя: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Имя:
//                     <input className="input_field" type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Отправить" />
//             </form>
//         );
//     }
// }


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Lean more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
