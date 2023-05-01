import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
          return (
                    <div className="register mx-auto" >
                 
                    <span className="">  </span>
                  <div className="form-box login">
                    <h2 className='text-success'>Register</h2>
                    <form action="#">
                      <div className="input-box">
                        <span className="icon"><ion-icon name="name"></ion-icon></span>
                        <input type="name" name="" id="" required />
                        <label for="name">Name</label>
                      </div>
                      <div className="input-box">
                        <span className="icon"><ion-icon name="photoUrl"></ion-icon></span>
                        <input type="photoUrl" name="" id="" required />
                        <label for="photoUrl">Photo URL</label>
                      </div>
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
                      <Button type="submit" className="btn text-white">LogIn</Button>
                      <div className="login-register">
                              <p> Don't have an account?<a href="#" className="register-link"> <Link to='/login'>Login</Link> </a></p>
                      </div>
                    </form>
                  </div>
                </div>
          );
};

export default Register;