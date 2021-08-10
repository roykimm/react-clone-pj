import React , { Fragment, Component } from 'react'
import Header from './Header';
import Dashboard from './Dashboard';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store'; 


import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './Alerts';
import { loadUser } from './actions/auth';

// Alert Options
const alertOptions = { 
    timeout : 3000,
    position : 'top center'
}

export class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>

                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />    
                                    <Route exact path="/register" component={Register} />    
                                    <Route exact path="/login" component={Login} />    
                                </Switch>
                            </div>   
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

export default App
