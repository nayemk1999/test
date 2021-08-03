import React, { useContext, useState } from 'react';
import './FormStyle.css'
import avatar from '../../image/avatar.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { fetchProfile, handleGoogleSignIn, initializeLoginFramework, setJWTToken, setUserInfo, signInWithEmailAndPassword } from './LoginManager';
import swal from 'sweetalert';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setLoggedInUser } = useContext(UserContext);

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const login = () => {
        initializeLoginFramework()
        signInWithEmailAndPassword(email, password)
            .then(res => { 
                handleResponse(res)
                // const url = 'https://toprak-real.herokuapp.com/profile?email=' + res.email
                // fetch(url)
                //     .then(res => res.json())
                //     .then(data => {
                //         
                //     })
                // setJWTToken();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }

    const googleLogin = () => {
        initializeLoginFramework()
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                alert(errorMessage)
                console.log(errorCode, email, errorMessage);
            });
    }

    const handleResponse = (res) => {
        setLoggedInUser(res);
        setJWTToken();
        setUserInfo(res)
        history.replace(from);
        toast.success('Successfully Logged In!');
        
    }

    const handleFocus = (e) => {
        let parent = e.target.parentNode.parentNode;
        parent.classList.add('focus')
    }

    const handleBlur = (e) => {
        let value = e.target.value;
        let parent = e.target.parentNode.parentNode;
        if (value == "") {
            parent.classList.remove('focus')
        }
    }

    return (
        <div className='login-content'>
            <div class="login-container-body">
                <div class="login-container container">
                    <div className='form'>
                        <img class="avatar" src={avatar} alt="" />
                        <h2>Welcome</h2>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>UserName/Email</h5>
                                <input onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="text" />
                            </div>
                        </div>
                        <div class="input-div two">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input onChange={(e) => setPassword(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="password" />
                            </div>
                        </div>
                        <div class='forget-signup'>
                            <Link className="a" to="/">Forget Password</Link>
                            <Link className="a" to="/register-form">Sign Up</Link>
                        </div>
                        <input onClick={login} type="submit" class="login-btn" value="Login" />
                        <button onClick={googleLogin} class="login-btn" value="">Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;