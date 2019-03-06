import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'; 

/* React Redux */
import { Provider } from 'react-redux';
import store from './redux/store';

/* Components */
import Details from './components/details';
import Results from './components/results';


const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/results"/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
