import { signOut } from "firebase/auth";
import {auth } from "../utils/firebase"
import { navigate, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

const Header = () => {

    const user = useSelector((store) => store.userReducer.user)
    
    const navigate = useNavigate()
   function handleSignOut() {
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => {
        console.log(`error: ${error}`);
        navigate("/error")
    })
    }

  return (
    <div className="w-full absolute z-10 px-14 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
     {user && <div className="flex p-3">
        <img
          className="h-12 w-12"
          src="https://occ-0-1492-1007.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUSntF8sS3XaxlL4kbgMzXhSHilR2oaXKyypWY_hXouAnTxBxaOigBfg-IX5z8rXMp4XyRdumCARSopncAJ3KG2eC7dwaI0.png?r=64f"
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
