import React, { useState } from 'react';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login validation
    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      // Add your login logic here
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600">Use your credentials to login</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(!!e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <div className="text-center text-gray-600">
            Don&apos;t have an account?{' '}
            <a href="#signup" className="text-blue-600 hover:text-blue-500">
              Sign Up
            </a>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button className="flex items-center space-x-2 bg-white rounded-md shadow-sm p-2">
              <FcGoogle className="h-6 w-6" />
              <span className="text-sm text-gray-600">Continue with Google</span>
            </button>
            <button className="flex items-center space-x-2 bg-white rounded-md shadow-sm p-2">
              <FaFacebook className="h-6 w-6 text-blue-600" />
              <span className="text-sm text-gray-600">Continue with Facebook</span>
            </button>
            <button className="flex items-center space-x-2 bg-white rounded-md shadow-sm p-2">
              <FaGithub className="h-6 w-6" />
              <span className="text-sm text-gray-600">Continue with GitHub</span>
            </button>
          </div>

          <div className="mt-6 text-center text-gray-600">
            <a href="#" className="text-sm">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}