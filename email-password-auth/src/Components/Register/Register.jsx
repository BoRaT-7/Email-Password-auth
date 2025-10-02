import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/firebase.init';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log("User Created:", result.user);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div>
      <h3 className="text-4xl text-center mt-5 pb-5">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="hero bg-base-200">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label font-bold">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" required />

                <label className="label font-bold">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" required />

                <div><a className="link link-hover">Forgot password?</a></div>

                <button type="submit" className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
