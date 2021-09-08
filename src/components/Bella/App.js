import React, { Fragment , useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './comps/Dashboard';
import Register from './comps/Register';
import Login from './comps/Login';
import Header from './comps/Header';
import Memo from './comps/Memo';
import './App.css';


export const MyContext = React.createContext();

const App = () => {

    const [ isAuthenticated, setAuthenticated] = useState(false);
    const [ rootUrl, setRootUrl] = useState();
    const [ host , setHost ] = useState();
    const [ user, setUser ] = useState({});
    
    useEffect(() => {
        setRootUrl('/bella');
        setHost("http://localhost:8000");
    },[])

    useEffect(() => {
        console.log("isAuthenticated : " + isAuthenticated);
    }, [isAuthenticated])

    const login = () => {
        setAuthenticated(true);
    }

    return (
        <MyContext.Provider value={{host, rootUrl, isAuthenticated, setAuthenticated, user, setUser}}>
            <Router>
                <Switch>
                    <Route exact path={rootUrl + '/'} component={Dashboard} />
                    <Route path={rootUrl + '/register'} component={Register} />
                    <Route path={rootUrl + '/login'} component={Login} />
                    <Route path={rootUrl + '/dashboard'} component={Dashboard} />
                </Switch>
            </Router>
        </MyContext.Provider>
    )
}

export default App
