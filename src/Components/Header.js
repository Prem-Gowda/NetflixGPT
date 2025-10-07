import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  console.log(user);

  
  
 useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, password,displayName,photoURL} = user;
      dispatch(addUser({ uid: uid, email: email, password: password,displayName: displayName, photoURL:photoURL}));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/")
    }
   
  });
     unSubscribe();


 },[])
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
        
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      
        {user && (<div className="flex my-5 ">
          <img className="w-8 h-10 m-1" src={user?.photoURL} alt="icon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>)}
      
    </div>
  );
};

export default Header;
