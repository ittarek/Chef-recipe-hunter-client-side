import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);


//   register function
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="register mx-auto">
      <span className=""> </span>
      <div className="reg-box login">
        <h2 className="text-success text-center">Register</h2>
        <form onSubmit={handleRegister} action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="name"></ion-icon>
            </span>
            <input type="name" name="name" id="" required />
            <label for="name">Name</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="photoUrl"></ion-icon>
            </span>
            <input type="photoUrl" name="photoUrl" id="" required />
            <label for="photoUrl">Photo URL</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
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
            <Link href="#">Forgat Password</Link>
          </div>
          <Button
            variant="btn-success"
            type="submit"
            className="reg-btn text-white"
          >
            Register
          </Button>
          <div className="login-register">
            <p>
              {" "}
              Don't have an account?
            
                <Link to="/login">Login</Link>{" "}
           
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
