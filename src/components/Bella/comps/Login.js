import React, { useState, useContext } from 'react'
import { Redirect , Link } from 'react-router-dom'
import { MyContext } from '../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const Login = () => {

    const [ userInfo , setUserInfo ] = useState({});    // username, password

    const { rootUrl, isAuthenticated, setAuthenticated , host, user, setUser} = useContext(MyContext);

    const onChange = e => setUserInfo({...userInfo,  [e.target.name] : e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        const username = userInfo.username;
        const password = userInfo.password;
        console.log(username, password)
        if(!username){
            alert('아이디를 입력해주세요.');
            return false;
        }

        if(!password) {
            alert('패스워드를 입력해주세요.');
            return false;
        }
        // Headers
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // Request Body
        const body = JSON.stringify(userInfo);
        console.log(body)
        axios.post(host + '/accounts/api/auth/login', body,config)
            .then(res => {
                console.log(res.data.user.username)
                setAuthenticated(true);
                setUser({username : res.data.user.username})
                return <Redirect to={rootUrl + "/dashboard"} />
            }).catch(err => {
                alert(err);
            })
    }

    if(isAuthenticated){
        return <Redirect to={rootUrl + '/'} />;
    } 

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-header">
                    <div className="brand">
                        <div className="d-flex align-items-center">
                            <span className="logo">BellaAdmin</span>
                        </div>
                        <small>REACT, BOOTSTRAP, DJANGO 페이지</small>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faLock} className="lock-icon" /> 
                    </div>
                </div>
                <div className="login-body">
                    <div className="login-content">
                        <form onSubmit={onSubmit} autoComplete="new-password">
                            <div className="form-floating mb-20px">
                                <input 
                                    type="text" 
                                    className="form-control fs-13px h-45px" 
                                    id="username" 
                                    placeholder="ID를 입력해주세요." 
                                    autoComplete='new-password'
                                    name="username"
                                    onChange={onChange}
                                    value={userInfo.username}
                                />
                                <label htmlFor="username" className="d-flex align-items-center py-0">username</label>
                            </div>
                            <div className="form-floating mb-20px">
                                <input 
                                    type="password" 
                                    className="form-control fs-13px h-45px" 
                                    id="password" placeholder="PASSWORD를 입력해주세요." 
                                    name="password"
                                    onChange={onChange}
                                    value={userInfo.password}
                                />
                                <label htmlFor="password" className="d-flex align-items-center py-0">password</label>
                            </div>
                            <div className="login-buttons mb-20px">
                                <button type="submit" className="btn btn-primary btn-lg h-45px d-block w-100">로그인</button>
                            </div>
                            <p className="text text-white">
                                회원이 아니세요?
                                <Link to={rootUrl + "/Register"}>Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login


{/* <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <h2 className="text-center">Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">UserName</label>
                        <input type="text" 
                            className="form-control"
                            name="username"
                            onChange={onChange}
                            value={userInfo.username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">password</label>
                        <input type="password" 
                            className="form-control"
                            name="password"
                            onChange={onChange}
                            value={userInfo.password}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </div>
                    <p>
                        Don't have an account?
                        <Link to={rootUrl + "/Register"}>Register</Link>
                    </p>
                </form>
            </div>
        </div> */}