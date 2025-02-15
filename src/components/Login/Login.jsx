import { useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';

const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState({ google: false, github: false });
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email/password authentication logic here
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignIn = () => {
    setLoading(prev => ({ ...prev, google: true }));
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((error) => {
        console.error("Error", error);
        setUser(null);
      })
      .finally(() => setLoading(prev => ({ ...prev, google: false })));
  };

  const handleGithubSignIn = () => {
    setLoading(prev => ({ ...prev, github: true }));
    signInWithPopup(auth, githubProvider)
      .then((result) => setUser(result.user))
      .catch((error) => {
        console.error("Error", error);
        setUser(null);
      })
      .finally(() => setLoading(prev => ({ ...prev, github: false })));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Error", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        {!user ? (
          <div className="space-y-6">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-800"
              >
                Welcome Back
              </motion.h2>
              <p className="text-gray-500 mt-2">Please sign in to continue</p>
            </div>

            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition duration-200"
              >
                Sign In
              </motion.button>
            </motion.form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGoogleSignIn}
                disabled={loading.google}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition duration-200"
              >
                {loading.google ? (
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FcGoogle className="text-2xl" />
                    <span className="text-gray-700 font-medium">Continue with Google</span>
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGithubSignIn}
                disabled={loading.github}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 rounded-lg bg-[#24292e] border border-gray-300 hover:bg-[#2f363d] transition duration-200"
              >
                {loading.github ? (
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FaGithub className="text-2xl text-white" />
                    <span className="text-white font-medium">Continue with GitHub</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-full h-full rounded-full object-cover border-4 border-purple-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{user.displayName}</h3>
              <p className="text-gray-500 mt-1">{user.email}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSignOut}
              className="w-full px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-200"
            >
              Sign Out
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Login;