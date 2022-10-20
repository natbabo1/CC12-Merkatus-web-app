import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function RegisterForm() {
  const { register } = useAuth();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await register(input);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="w-full">
        <h1 className="mt-10 mb-5 text-center text-vivid-orange text-2xl">
          Register
        </h1>
        <hr className="border-1 border-mermaid-net mt-2 mb-2" />
        <div className="relative">
          <input
            type="text"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-10 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
            id="firstName"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="firstName"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Firstname
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
            id="lastName"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="lastName"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Lastname
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
            id="email"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
            id="phoneNumber"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="phoneNumber"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Phonenumber
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
            id="password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Password
          </label>
          <i className="fa-regular fa-eye absolute top-1/2 -translate-y-1/2 right-0 mr-3 cursor-pointer text-tin-color"></i>
        </div>
        <div className="relative">
          <input
            type="password"
            className="block px-2.5 pb-2.5 pt-4 w-full mt-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
            placeholder=" "
            id="confirmPassword"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="confirmPassword"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Confirm Password
          </label>
          <i className="fa-regular fa-eye absolute top-1/2 -translate-y-1/2 right-0 mr-3 cursor-pointer text-tin-color"></i>
        </div>

        <button
          type="submit"
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
    </form>
  );
}

export default RegisterForm;
