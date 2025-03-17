import React, { useState } from 'react'

function Auth() {
  
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gradient-to-br">
      {/* Auth Form (full width on mobile, 50% on larger screens) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 order-2 md:order-1">
        <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Welcome to Up.ly</h2>
            <p className="text-gray-600 mt-2">Sign in to continue to your account</p>
          </div>
          
          <form className="form-control gap-5 flex flex-col gap-1">
            <div>
              <label className="label">
                <span className="label-text font-medium text-gray-700">Email</span>
              </label>
              <input 
                type="text" 
                placeholder="Username" 
                className="input input-bordered h-8 w-full bg-gray-100 focus:bg-white transition-colors duration-200" 
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-medium text-gray-700">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered h-8 w-full bg-gray-100 focus:bg-white transition-colors duration-200" 
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-2 sm:gap-0">
              <label className="cursor-pointer flex items-center">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm mr-2" />
                <span className="label-text text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4 w-full text-white">Login</button>
          </form>
        </div>
      </div>
      
      {/* Right side - Hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center order-1 md:order-2">
        <div className="text-white text-center p-4 md:p-8 opacity-80">
          <svg className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-6 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
          </svg>
          <h3 className="text-2xl md:text-3xl font-bold opacity-90">Up.ly Platform</h3>
          <p className="mt-2 md:mt-4 text-base md:text-lg opacity-75">A modern solution for your business needs</p>
        </div>
      </div>
    </div>
  )
}

export default Auth