import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

  const [user, setUser] = useState(null)

  const provider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user)
        setUser(result.user)
      })
      .catch((error) => {
        console.log("Error", error)
        setUser(null)
      })
  }
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      console.log("Sign Out Successful")
      setUser(null)
    })
    .catch((error) => {
      console.log("Error", error)
    })
  }
  return (
    <div>
      {/* <button className="flex items-center px-4 rounded-md py-2 bg-slate-100 m-4 hover:bg-slate-200 " onClick={handleGoogleSignIn}> <FcGoogle className="text-lg mr-2" /> Login with Google</button>
      <button className="btn" onClick={handleSignOut}>Sign Out</button> */}

      {
        user ? 
        <button className="btn" onClick={handleSignOut}>Sign Out</button>
        :
        <button className="flex items-center px-4 rounded-md py-2 bg-slate-100 m-4 hover:bg-slate-200 " onClick={handleGoogleSignIn}> <FcGoogle className="text-lg mr-2" /> Login with Google</button>
      }

      <div>
        {
          user && <div>
            <h4>Name: {user.displayName} </h4>
            <p>Email: {user.email} </p>
            <img src={user.photoURL} alt="Profile Photo" />
          </div>
        }
      </div>
    </div>
  );
};

export default Login;