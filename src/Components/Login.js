import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../Utils/ValidData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    console.log(password.current.value);
    const message = validateData(
      email.current.value,
      password.current.value
      //name.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };
  const toogleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="relative w-full h-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d44b8e7c-e52b-45bc-9568-7d009f91c9ee/web/IN-en-20250929-TRIFECTA-perspective_82a31bf9-6c15-4866-9ba4-fed503316d1d_small.jpg"
        alt="background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-70 p-8 rounded-lg w-80"
        >
          <h2 className="text-white text-2xl font-bold mb-6">
            {signInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!signInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
          />

          <p className="text-red-600 font-bold py-2">{errorMessage}</p>

          <button
            onClick={handleButtonClick}
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded font-semibold"
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white py-4 cursor-pointer"
            onClick={toogleSignInForm}
          >
            {signInForm
              ? "New to Netflix? Sign In Now"
              : "Already Registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
