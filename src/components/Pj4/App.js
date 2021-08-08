import React , { Fragment, Component } from 'react'
import Header from './Header';
import Dashboard from './Dashboard';

import {Provider} from 'react-redux';
import store from './store'; 


import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './Alerts';

// Alert Options
const alertOptions = { 
    timeout : 3000,
    position : 'top center'
}

export class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>   
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

export default App
