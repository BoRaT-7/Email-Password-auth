import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { Eye, EyeOff } from 'lucide-react';

const Singup = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.cheakbox;
    console.log(email, password,terms);

    setErrorMessage('');
    setSuccess(false);
    

    if (password.length < 6) {
      setErrorMessage('Password should be 6 characters or longer');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log('ERROR', error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-5xl font-bold text-center mb-5">Sign Up</h1>
          <fieldset className="fieldset">
        
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full pr-12" 
                placeholder="Password"
                required
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

      
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}


            <fieldset className="">
  <label className="label">
    <input type="checkbox" name='terms'  className="checkbox" />
    Accept Our Tearm And Condition
  </label>
</fieldset>

          
            <button className="btn btn-neutral mt-4 w-full">Sign Up</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Singup;
