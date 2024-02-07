import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()

  const handleButtonClick = (e) => {
    const enterName = name.current ? name.current.value : "No Name";
    const msg = checkValidData(
      enterName,
      email.current.value,
      password.current.value 
    );
    setErrorMessage(msg);
if(msg) return
   
if(showSignUpForm) {

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    ).then((userCredentials) => {
        const user = userCredentials.user
        updateProfile(user, {
          displayName: name.current.value,
        }).then(() => {
          
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

    
        })

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        setErrorMessage(`Error ${errorCode}: ${errorMessage}`);
    })
} else {
    signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value
      ).then((userCredentials) => {
          const user = userCredentials
      

      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message
          setErrorMessage(`Error ${errorCode}: ${errorMessage}`);
          
      })
}
    

  };

  const name = useRef(null);
const email = useRef(null);
  const password = useRef(null);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="netflix-background"
        ></img>
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="mt-36 mx-auto right-0 left-0 w-3/12 absolute p-12 bg-black text-white opacity-90 rounded-lg"
      >
        <h1 className="font-bold text-3xl ">
          {showSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {showSignUpForm ? (
          <input
            ref={name}
            type="name"
            placeholder="Enter name"
            className="p-4 my-4 w-full bg-gray-800 opacity-100 rounded-lg"
          />
        ) : (
          <></>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter email"
          className="p-4 my-4 w-full bg-gray-800 opacity-100 rounded-lg"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 mx-auto w-full bg-gray-800 opacity-100 rounded-lg"
        />
        <p className="text-red-500 font-bold px-2 text-lg">{errorMessage}</p>
        <button
          className="m-2 p-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
