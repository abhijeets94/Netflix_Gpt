import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth } from "../utils/firebase"
import { navigate, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";

const Header = () => {

    const user = useSelector((store) => store.user.user)
    const gptSearchToggle = useSelector((store) => store.gpt.showGptSearch)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
   function handleSignOut() {
    signOut(auth).then(() => {
    }).catch((error) => {
        console.log(`error: ${error}`);
        navigate("/error")
    })
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            navigate("/browse")
          } else {
            dispatch(removeUser());
            navigate("/")
    
          }
        });

        return () => unsubscribe();
      }, []);

      function handleGPTSearchClick() {
        dispatch(toggleGptSearchView())
      }

  return (
    <div className="w-full absolute z-10 px-14 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      ></img>


     {user && <div className="flex p-3">
          <button className={"text-white " + (gptSearchToggle ? " bg-purple-800 w-40 " :" bg-gray-700 w-40 " )  + " h-11 m-5 rounded-md"} onClick={handleGPTSearchClick}>GPT Search</button>
        <img
          className="h-12 w-12 m-5"
          src={USER_AVATAR}
          alt="profile"
          ></img>
        <button className="font-bold text-white hover:underline hover:text-yellow-50 transition-all" onClick={ handleSignOut}>
          Sign out
        <span>, {user.displayName}</span>
        </button>
      </div>}
    </div>
  );
};

export default Header;
