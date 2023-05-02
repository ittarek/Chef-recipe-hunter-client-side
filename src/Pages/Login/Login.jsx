import React, { useContext } from "react";
import "./Login.css";
import image from "../../assets/bgc3.jpg";
import {
  FaCross,
  FaGithub,
  FaGithubAlt,
  FaGithubSquare,
  FaGoogle,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { createLogin, googleLogin, githubLogin } = useContext(AuthContext);

  //   login function
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    //      login with email/password
    createLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });

    //     login with Google
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
// login with GitHub
  const handleGithubLogin = () => {
          githubLogin()
          .then(result =>{
                    const loggedUser = result.user;
                    console.log(loggedUser);
          })
          .catch(error =>{
                    console.log(error.message);
          })
  };
  return (
    <div className="wrapper mx-auto">
      <span className=""> </span>
      <div className="form-box login">
        <h2>Login</h2>
        <Form onSubmit={handleLogin} action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="email"></ion-icon>
            </span>
            <input type="email" name="email" id="" required />
            <label for="Email">Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" name="password" id="" required />
            <label for="password">Password</label>
          </div>
          <div className="remember-forgat">
            <label for="">
              <input type="checkbox" name="" id="" />
              remember me
            </label>
            <Link className="text-white" href="#">
              Forgat Password
            </Link>
          </div>
          <Button type="submit" className="log-btn text-white">
            LogIn
          </Button>

          <Button
            onClick={handleGoogleLogin}
            className="log-btn text-white mt-2 mb-2 btn-outline-info btn-info"
          >
            {" "}
            <span className="me-3">
              <FaGoogle></FaGoogle>{" "}
            </span>{" "}
            Login With Google
          </Button>
          <Button onClick={handleGithubLogin} className="log-btn text-white">
            {" "}
            <span className="me-3">
              {" "}
              <FaGithub></FaGithub>{" "}
            </span>{" "}
            Login With GitHub
          </Button>
          <div className="login-register text-white">
            <p>
              {" "}
              Don't have an account?
              <Link href="#" className="register-link">
                {" "}
                <Link to="/register">Register</Link>{" "}
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
