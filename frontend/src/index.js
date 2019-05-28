import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Info from './components/Info';
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
                   render={() => <Info/>}
            />
            <Route exact path="/appliers"
                   render={() => <Application/>}
            />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
