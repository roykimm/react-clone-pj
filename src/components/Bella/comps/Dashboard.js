import React, { useContext , useEffect} from 'react'
import { Redirect , BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import { MyContext } from '../App';
import Header from './Header';
import Work from './Work';
import Memo from './Memo';

const Dashboard = () => {

    const { rootUrl, isAuthenticated } = useContext(MyContext);

    useEffect(() => {
        console.log(rootUrl)
    })

    if(isAuthenticated){
        return (
            <div>
                <Header /> 
                <Router>
                    <Switch>
                        <Route path={rootUrl + '/dashbaord/memo'} component={Memo} />
                    </Switch>
                </Router>
            </div>
        )
    } else {
        return <Redirect to={rootUrl + "/login"} />
    }
    
}

export default Dashboard
