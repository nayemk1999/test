import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './FormStyle.css'
import avatar from '../../image/avatar.svg';
import firebase from "firebase/app";
import "firebase/auth";
import { initializeLoginFramework } from './LoginManager';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const profileData = {
        name: name,
        email: email,
        password: password,
        photo: 'https://i.ibb.co/7CzR0Dg/users.jpg'
    }
    const loading = toast.loading('Adding...Please wait!');

    const signupForm = (e) => {
        initializeLoginFramework()
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                profileFetch()
                history.push('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    const profileFetch = () => {
        const url = 'http://localhost:5000/profile-data'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(profileData)
        })
            .then(res => {
                if (res) {
                    toast.dismiss(loading);
                    // reset();
                    return swal(`Successfully Sign Up!`, `${name} Welcome`, "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
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
                    <div className="form">
                        <img class="avatar" src={avatar} alt="" />
                        <h2>Welcome</h2>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Full Name</h5>
                                <input onChange={(e) => setName(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="text" />
                            </div>
                        </div>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="email" />
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
                        <div class="input-div">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>

                        </div>
                        <div class='login-a'>
                            <Link className="a" to="/login">Login</Link>
                        </div>
                        <input onClick={signupForm} type="submit" class="login-btn" value="Sign Up" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;