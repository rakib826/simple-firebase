import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    signInWithPopup(auth,provider)
    .then((result)=>{
      console.log(result)
    })
    .catch((error)=>{
      console.log("Error",error)
    })
  }
  return (
    <div>
      <button className="flex items-center px-4 rounded-md py-2 bg-slate-100 m-4 hover:bg-slate-200 " onClick={handleGoogleSignIn}> <FcGoogle className="text-lg mr-2" /> Login with Google</button>
    </div>
  );
};

export default Login;