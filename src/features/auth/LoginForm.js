import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useModal } from "../../contexts/ModalContext";
import RegisterForm from "../../features/auth/RegisterForm";

function LoginForm() {
  const { openFormModal, closeModal } = useModal();
  const { login } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmitForm}>
      <h1 className="mt-10 mb-5 text-center text-vivid-orange text-2xl">
        Sign in
      </h1>
      <hr className="border-1 border-mermaid-net mt-2 mb-2" />
      <div className="relative">
        <input
          type="text"
          className="block px-2.5 pb-2.5 pt-4 w-full mt-10 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
          placeholder=" "
          id="email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
        <label
          htmlFor="username"
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Email
        </label>
      </div>

      <div className="relative mt-4">
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
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10  origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 "
        >
          Password
        </label>
        <i className="fa-regular fa-eye absolute top-1/2 -translate-y-1/2 right-0 mr-3 cursor-pointer text-tin-color"></i>
      </div>
      <h6 className="mt-5 text-right text-mermaid-net cursor-pointer">
        Lost your password?
      </h6>
      <button
        type="submit"
        className="w-full focus:outline-none text-white bg-vivid-orange hover:bg-mermaid-net focus:ring-2 focus:ring-vivid-orange font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5 mb-2 "
      >
        Sign in
      </button>
      <button
        type="button"
        className="w-full focus:outline-none text-vivid-orange  border border-vivid-orange bg-white hover:text-white hover:bg-mermaid-net  focus:ring-2 focus:ring-vivid-orange font-medium rounded-lg text-sm px-5 py-2.5 mr-2  mb-2 "
        onClick={() => openFormModal(<RegisterForm />)}
      >
        Create an account
      </button>

      <button
        type="button"
        className="w-full focus:outline-none text-white  border  bg-blue-900  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5 mb-2  "
      >
        <i className="fa-brands fa-facebook mr-5" />
        Continue with Facebook
      </button>
      <button
        type="button"
        className="w-full focus:outline-none text-white  border  bg-red-700  font-medium rounded-lg text-sm px-5 py-2.5 mr-2  mb-2 "
      >
        <i className="fa-brands fa-google mr-5" />
        Continue with Google
      </button>
    </form>
  );
}

export default LoginForm;
