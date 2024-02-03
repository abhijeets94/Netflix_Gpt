import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="netflix-background"
        ></img>
      </div>
      <form className="mt-36 mx-auto right-0 left-0 w-3/12 absolute p-12 bg-black text-white opacity-90 rounded-lg">
        <h1 className="font-bold text-3xl ">
          {showSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {showSignUpForm ? (
          <input
            type="name"
            placeholder="Enter name"
            className="p-4 my-4 w-full bg-gray-800 opacity-100 rounded-lg"
          />
        ) : (
          <></>
        )}
        <input
          type="email"
          placeholder="Enter email"
          className="p-4 my-4 w-full bg-gray-800 opacity-100 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 mx-auto w-full bg-gray-800 opacity-100 rounded-lg"
        />
        <button className="m-2 p-4 bg-red-700 w-full rounded-lg">
          {showSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4">
          {showSignUpForm ? "Already registered?" : "New to netflix?"}{" "}
          <span
            className="font-bold cursor-pointer hover:underline"
            onClick={() => {
              setShowSignUpForm(!showSignUpForm);
            }}
          >
            {" "}
            {showSignUpForm ? "Sign in" : "Sign up now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
