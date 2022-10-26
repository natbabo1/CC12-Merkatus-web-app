import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useModal } from "../../contexts/ModalContext";
import { useLoading } from "../../contexts/LoadingContext";

function RegisterForm() {
  const { closeModal } = useModal();
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const initialValues = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: ""
  };
  const [input, setInput] = useState(initialValues);
  const [inputError, setInputError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regName = /^[a-zA-Z]+$/;
    if (!values.firstName) {
      errors.firstName = "Firstname is required!";
    } else if (!regName.test(values.firstName)) {
      errors.firstName = "Firstname is invalid!";
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required!";
    } else if (!regName.test(values.lastName)) {
      errors.lastName = "lastName is invalid!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phonenumber is required!";
    } else if (values.phoneNumber.length < 10) {
      errors.phoneNumber = "Mobile is invalid format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "ConfirmPassword is required!";
    } else if (values.password != values.confirmPassword) {
      errors.confirmPassword = "Password and ConfirmPassword does not match";
    }
    return errors;
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    startLoading();
    setInputError({});
    const errorsN = validate(input);
    if (Object.keys(errorsN).length > 0) {
      setInputError(errorsN);
      return;
    }

    try {
      await register(input);
      toast.success("Success Register");
      closeModal();
    } catch (err) {
      if (err.response?.data?.message === "email must be unique") {
        setInputError({ email: "email already used" });
      }
      if (err.response?.data?.message === "phone_number must be unique") {
        setInputError((prev) => ({
          ...prev,
          phoneNumber: "Phonenumber already used"
        }));
      }
      if (err.response?.data?.message === "Mobile is invalid format") {
        setInputError((prev) => ({
          ...prev,
          phoneNumber: "Mobile is invalid format"
        }));
      }
    } finally {
      stopLoading();
    }

    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(inputError);
    if (Object.keys(inputError).length === 0 && isSubmit) {
      console.log(input);
    }
  }, [inputError]);

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
        <span className="text-red-600">{inputError.firstName}</span>
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
        <span className="text-red-600">{inputError.lastName}</span>
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
        <span className="text-red-600">{inputError.email}</span>
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
        <span className="text-red-600">{inputError.phoneNumber}</span>
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
        <span className="text-red-600">{inputError.password}</span>
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
        <span className="text-red-600">{inputError.confirmPassword}</span>
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
