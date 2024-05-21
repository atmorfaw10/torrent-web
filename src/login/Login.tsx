import React from "react";
import './Login.css';
import imageOne from "../assets/login/login-1.jpeg";
import imageTwo from "../assets/login/login-2.jpeg";
import imageThree from "../assets/login/login-3.jpeg";
import googleIcon from "../assets/icons/google-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import appleIcon from "../assets/icons/apple-icon.svg";

function Login() {
    return (
        <div className="login-page-container">
            <div className="blue-side">
                <div className="image-container">
                    <div className="row">
                        <img src={imageOne} alt="Male artist performing" className="circle"/>
                        <img src={imageTwo} alt="Female artist performing" className="circle"/>
                    </div>
                    <div className="row">
                        <img src={imageThree} alt="Artist peforming in front of crowd" className="circle"/>
                    </div>
                </div>
                <div>
                    <p id="app-title">Torrent: Your Music <br /> Compnanion</p>
                    <p id="app-description">Enjoy, create, and enjoy music playlists effortlessly </p>
                </div>
            </div>
            <div className="white-side">
                <div className="logo">
                    <p id="app-name">Torrent</p>
                    <p id="app-header-description">Discover new <br/> tracks</p>
                </div>
                <div className="signup-form-container">
                    <div className="signup-header">
                        <h2>Sign up to start <br />streaming</h2>
                    </div>
                    <div className="email-signup">
                        <form>
                            <label>Email address</label> <br />
                            <input 
                                type="text" 
                                id="e-mail" 
                                name="email"
                                placeholder="name@domain.com">
                            </input>
                        </form>
                        <button id="email-signup-bttn">Next</button>
                    </div>
                    <br />
                    <hr className="hr-text" data-content="or"/>
                    <div className="login-options">
                        <button id="google-bttn"><img src={googleIcon} alt="Google Icon" className="icon"/>Sign up with Google</button><br/>
                        <button id="facebook-bttn"><img src={facebookIcon} alt="Facebook Icon" className="facebook-icon"/>Sign up with Facebook</button><br/>
                        <button id="apple-bttn"><img src={appleIcon} alt="Apple Icon" className="icon"/>Sign up with Apple</button><br/>
                    </div>
                    <div className="login-page-redirect">Already have an account? <b><a href="" >Login here</a></b></div>
                </div>
            </div>
        </div>
    )}

export default Login;