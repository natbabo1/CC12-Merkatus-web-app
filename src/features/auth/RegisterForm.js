import React from "react";

function RegisterForm() {
  return (
    <div>
      <div className="max-w-sm mx-auto">
        <h1 className="text-center mt-10 mb-5 text-vivid-orange">Register</h1>
        <hr className="border-1 border-mermaid-net mt-2 mb-2" />
        <div className="relative">
          <input
            type="text"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-10 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Username
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Password
          </label>
          <i className="fa-regular fa-eye absolute top-1/2 -translate-y-1/2 right-0 mr-3 cursor-pointer"></i>
        </div>
        <div className="relative">
          <input
            type="password"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Confirm Password
          </label>
          <i className="fa-regular fa-eye absolute top-1/2 -translate-y-1/2 right-0 mr-3 cursor-pointer"></i>
        </div>
        <div className="relative">
          <input
            type="email"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Email
          </label>
        </div>
        <button
          type="button"
          className="w-full focus:outline-none text-white bg-vivid-orange hover:bg-mermaid-net focus:ring-2 focus:ring-vivid-orange font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5 mb-2 "
        >
          Create an account
        </button>
        <h2 className="text-center text-mermaid-net mt-2 mb-2">OR</h2>
        <button
          type="button"
          className="w-full focus:outline-none text-white  border  bg-blue-900  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2 mb-2 "
        >
          <i className="fa-brands fa-facebook mr-2" />
          Continue with Facebook
        </button>
        <button
          type="button"
          className="w-full focus:outline-none text-white  border  bg-red-700  font-medium rounded-lg text-sm px-5 py-2.5 mr-2  mb-2 "
        >
          <i className="fa-brands fa-google mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
