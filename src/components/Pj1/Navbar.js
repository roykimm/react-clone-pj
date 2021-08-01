import React from 'react'
import woman1 from '../../images/woman1.png';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bellas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Browse
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Web Development</a></li>
                                <li><a className="dropdown-item" href="#">Desgin</a></li>
                                <li><a className="dropdown-item" href="#">Mobile App</a></li>
                                <li><a className="dropdown-item" href="#">IT Software</a></li>
                                <li><a className="dropdown-item" href="#">marketing</a></li>
                                <li><a className="dropdown-item" href="#">Music</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Landings
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-header">LANDINGS</a></li>
                                <li><a className="dropdown-item" href="#">Course</a></li>
                                <li><a className="dropdown-item" href="#">Lead Course</a></li>
                                <li><a className="dropdown-item" href="#">Request Access<a className="dropdown-btn-new">New</a></a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Course Single</a></li>
                                <li><a className="dropdown-item" href="#">Course Single v2</a></li>
                                <li><a className="dropdown-item" href="#">Course Resume</a></li>
                                <li><a className="dropdown-item" href="#">Course Category</a></li>
                                <li><a className="dropdown-item" href="#">Course Chekout</a></li>
                                <li><a className="dropdown-item" href="#">Course List/Grid</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Blog</a></li>
                                <li><a className="dropdown-item" href="#">About</a></li>
                                <li><a className="dropdown-item" href="#">Help Center<a className="dropdown-btn-pro">Pro</a></a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accounts
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-header">Accounts</a></li>
                                <li><a className="dropdown-item" href="#">Instructor</a></li>
                                <li><a className="dropdown-item" href="#">Students</a></li>
                                <li><a className="dropdown-item" href="#">Admin</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign in</a></li>
                                <li><a className="dropdown-item" href="#">Sign up</a></li>
                                <li><a className="dropdown-item" href="#">Notification</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search Course" aria-label="Search Course" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </li>
                    </ul>
                    <button className="btn btn-custom-round position-relative">
                        <FontAwesomeIcon icon={faBell} style={{ color: "grey" }} /> 
                        <span class="position-absolute top-3 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </button>
                    <button className="btn btn-custom-round-img position-relative">
                        <img className="small-round-img" src={woman1} alt="avatar" />
                        <span class="position-absolute top-3 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
