import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const [signUpFormData, setSignUpFormData] = useState({
        name: '',
        su_email: '',
        su_password: '',
    });
    const { name, su_email, su_password } = signUpFormData;
    const [signInFormData, setSignInFormData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = signInFormData;
    const [signUpErrors, setSignUpErrors] = useState({});
    const [signInErrors, setSignInErrors] = useState({});
    const navigate = useNavigate();

    const onChangeSignUp = (e) => {
        setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
        setSignUpErrors({ ...signUpErrors, [e.target.name]: '' });
    }

    const onChangeSignIn = (e) => {
        setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });
        setSignInErrors({ ...signInErrors, [e.target.name]: '' });
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const validateUsername = (username) => {
        const re = /^\S*$/;
        return re.test(username);
    }

    const onSubmitSignUp = async (e) => {
        e.preventDefault();
        const errors = {};
        if (!validateUsername(name)) {
            errors.name = "Username should not contain spaces.";
        }
        if (!validateEmail(su_email)) {
            errors.su_email = "Please enter a valid email address.";
        }
        setSignUpErrors(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }
        try {
            const res = await api.post('/api/auth/register', signUpFormData);
            console.log(res.data);
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    }

    const onSubmitSignIn = async (e) => {
        e.preventDefault();
        const errors = {};
        if (!validateUsername(username)) {
            errors.username = "Username should not contain spaces.";
        }
        setSignInErrors(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }
        try {
            const res = await api.post('/api/auth/login', signInFormData);
            localStorage.setItem('token', res.data.token);
            navigate(`/${username}/profile`);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    }

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    }

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    }

    return (
        <div className="login">
            <div className={`container-login ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container-login">
                <div className="form-container sign-up-container" id="signup-container-login">
                    <form id="signup-form-login" name='signup' onSubmit={onSubmitSignUp}>
                        <h1 id="signup-title-login">Create Account</h1>
                        <input 
                            className="text-black" 
                            name="name" 
                            type="text" 
                            onChange={onChangeSignUp} 
                            value={name} 
                            placeholder="Username" 
                            id="signup-name-login" 
                            required 
                        />
                        {signUpErrors.name && <p className="text-red-500 text-xs mt-1">{signUpErrors.name}</p>}
                        <input 
                            className="text-black" 
                            name="su_email"  
                            onChange={onChangeSignUp} 
                            value={su_email} 
                            placeholder="Email" 
                            id="signup-email-login" 
                            required 
                        />
                        {signUpErrors.su_email && <p className="text-red-500 text-xs mt-1">{signUpErrors.su_email}</p>}
                        <input 
                            className="text-black" 
                            name="su_password" 
                            type="password" 
                            onChange={onChangeSignUp} 
                            value={su_password} 
                            placeholder="Password" 
                            id="signup-password-login" 
                            required 
                        />
                        <button type="submit" id="signup-button-login">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container" id="signin-container-login">
                    <form id="signin-form-login" name='signin-form' onSubmit={onSubmitSignIn}>
                        <h1 id="signin-title-login" className='text-black'>Sign in</h1>
                        <input 
                            className='text-black' 
                            name='username' 
                            type="text" 
                            onChange={onChangeSignIn} 
                            value={username} 
                            placeholder="Username" 
                            id="signin-email-login" 
                            required 
                        />
                        {signInErrors.username && <p className="text-red-500 text-xs mt-1">{signInErrors.username}</p>}
                        <input 
                            className='text-black' 
                            name='password' 
                            type="password" 
                            onChange={onChangeSignIn} 
                            value={password} 
                            placeholder="Password" 
                            id="signin-password-login" 
                            required 
                        />
                        <button type="submit" id="signin-button-login">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container" id="overlay-container-login">
                    <div className="overlay" id="overlay-login">
                        <div className="overlay-panel overlay-left" id="overlay-left-login">
                            <h1 id="overlay-left-title-login">Welcome Back!</h1>
                            <p id="overlay-left-description-login">To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="overlay-signin-button-login" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right" id="overlay-right-login">
                            <h1 id="overlay-right-title-login">Hello, Friend!</h1>
                            <p id="overlay-right-description-login">Enter your personal details and start journey with us</p>
                            <button className="ghost" id="overlay-signup-button-login" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
