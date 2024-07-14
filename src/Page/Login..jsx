import React, { useState } from 'react';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import api from '../utils/api';


const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const [SignUpFormdata, setSignUpFormdata] = useState({
        name: '',
        su_email: '',
        su_password: '',
    });

    const { name, su_email, su_password } = SignUpFormdata;

    const [SignInFormdata, setSignInFormdata] = useState({
        email: '',
        password: '',
    });

    const { email, password } = SignInFormdata;

    const Onchange_SU = (e) => {
        setSignUpFormdata({ ...SignUpFormdata, [e.target.name]: e.target.value });
    }

    const Onchange_SI = (e) => {
        setSignInFormdata({ ...SignInFormdata, [e.target.name]: e.target.value });
    }

    const Onsubmit_SU = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/api/auth/register', SignUpFormdata);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    }

    const Onsubmit_SI = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/api/auth/login', SignInFormdata);
            localStorage.setItem('token', res.data.token);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    }

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className='flex justify-center my-14'>
            <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container-login">
                <div className="form-container sign-up-container" id="signup-container-login">
                    <form id="signup-form-login" name='signup-form' onSubmit={Onsubmit_SU}>
                        <h1 id="signup-title-login" className='text-black'>Create Account</h1>
                        <div className="social-container" id="signup-social-container-login">
                            <a href="#" className="social" id="signup-facebook-login"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social" id="signup-google-login"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social" id="signup-linkedin-login"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span id="signup-or-login" className='text-black'>or use your email for registration</span>
                        <input className='text-black' type="text" name='name' onChange={Onchange_SU} value={name} placeholder="Name" id="signup-name-login" />
                        <input className='text-black' type="email" name='su_email' onChange={Onchange_SU} value={su_email} placeholder="Email" id="signup-email-login" />
                        <input className='text-black' type="password" name='su_password' onChange={Onchange_SU} value={su_password} placeholder="Password" id="signup-password-login" />
                        <button type="submit" id="signup-button-login">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container" id="signin-container-login">
                    <form id="signin-form-login" name='signin-form' onSubmit={Onsubmit_SI}>
                        <h1 id="signin-title-login" className='text-black'>Sign in</h1>
                        <div className="social-container" id="signin-social-container-login">
                            <a href="#" className="social" id="signin-facebook-login"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social" id="signin-google-login"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social" id="signin-linkedin-login"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span id="signin-or-login" className='text-black'>or use your account</span>
                        <input className='text-black' name='email' type="email" onChange={Onchange_SI} value={email} placeholder="Email" id="signin-email-login" />
                        <input className='text-black' name='password' type="password" onChange={Onchange_SI} value={password} placeholder="Password" id="signin-password-login" />
                        <a href="#" id="signin-forgot-password-login" className='text-H'>Forgot your password?</a>
                        <button type="submit" id="signin-button-login">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container" id="overlay-container-login">
                    <div className="overlay" id="overlay-login">
                        <div className="overlay-panel overlay-left" id="overlay-left-login">
                            <h1 id="overlay-left-title-login">Welcome Back!</h1>
                            <p id="overlay-left-description-login" >To keep connected with us please login with your personal info</p>
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
