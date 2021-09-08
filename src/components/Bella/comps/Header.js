import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../App';

const Header = () => {

    const { rootUrl, isAuthenticated , user } = useContext(MyContext);

    const authLinks = (
        <div className="text-center">
            <span classNamae="text mr-5 text-align-center">
                {user ? `안녕하세요 ${user.username} 님` : '' } 
            </span>
            <button className="btn btn-danger btn-sm text-light">
                로그아웃
            </button>
        </div>
    );

    const guestLinks = (
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
        </ul>
    )


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">GOBELLA WORKSPACE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href={rootUrl + "/"}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={rootUrl + "/memo"}>Memo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={rootUrl + "/todo"}>Todo</a>
                    </li>
                </ul>
                <div className="auth-link-container">
                    <div className="auth-link">
                    { isAuthenticated ? authLinks : guestLinks }
                    </div>
                </div>
                </div>
            </div>
            </nav>
       
    )
}

export default Header
;
{/* 
<div className="header-container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="#">GOBELLA's WORKSPACE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse header-right" id="navbarSupportedContent">
                        { isAuthenticated ? authLinks : guestLinks }
                    </div>
            </nav>
        </div> */}