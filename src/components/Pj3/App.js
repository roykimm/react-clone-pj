import React , { useState , useEffect } from 'react'
import ShowProducts from './ShowProducts';
import AddProduct from './AddProduct';
import ProductDetail from './ProductDetail';
import UpdateProduct from './UpdateProduct';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

const App = () => {
    const rootURL = "/pj3";

    return (
        <div className="App">
            <Router>
                <NavBarMenu rootURL={rootURL}/>
                <Switch>
                    <Route exact path={rootURL + "/"} component={ShowProducts} />
                    <Route exact path={rootURL + "/addproduct"} component={AddProduct} />
                    <Route exact path={rootURL + "/:id/"} component={ProductDetail} />
                    <Route exact path={rootURL + "/:id/update"} component={UpdateProduct} />
                </Switch>    
            </Router>
        </div>
    )
}

export default App
