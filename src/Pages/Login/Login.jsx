import React from 'react';
import './Login.css'
import image from '../../assets/bgc3.jpg'
import { FaCross } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Login = () => {
          return (
                    <div className="wrapper mx-auto" >
                 
                    <span className="">  </span>
                  <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                      <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" name="" id="" required />
                        <label for="Email">Email</label>
                      </div>
                      <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" name="" id="" required />
                        <label for="password">Password</label>
                      </div>
                      <div className="remember-forgat">
                              <label for=""><input type="checkbox" name="" id=""/>remember me</label>
                              <a href="#">Forgat Password</a>
          
                      </div>
                      <button type="submit" className="btn text-white">LogIn</button>
                      <div className="login-register">
                              <p> Don't have an account?<a href="#" className="register-link"> <Link to='/register'>Register</Link> </a></p>
                      </div>
                    </form>
                  </div>
                </div>
          );
};

export default Login;