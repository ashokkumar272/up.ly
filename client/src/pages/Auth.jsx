import React, { useState } from 'react';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Auth Form (full width on mobile, 50% on larger screens) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 order-2 md:order-1 min-h-screen md:min-h-0">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-md">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Welcome to Up.ly</h2>
            <p className="text-gray-600 mt-2">Sign in to continue to your account</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center order-1 md:order-2">
        <div className="text-white text-center p-4 md:p-8">
          <svg
            className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-6 opacity-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            ></path>
          </svg>
          <h3 className="text-2xl md:text-3xl font-bold opacity-90">Up.ly Platform</h3>
          <p className="mt-4 text-base md:text-lg opacity-75">A modern solution for your business needs</p>
        </div>
      </div>
    </div>
  );
}

export default Auth;