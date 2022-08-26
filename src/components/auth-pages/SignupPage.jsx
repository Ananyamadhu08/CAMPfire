import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { useToast } from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";

const initialSignupState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function SignupPage() {
  const [userData, setUserData] = useState(initialSignupState);
  const { userDB, setUserDB } = useAuth();

  const { showToast } = useToast();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = () => {
    const foundUser = userDB.find((i) => i.email === userData.email);

    if (foundUser) {
      showToast("oops the user already exists", "error");
    }

    if (!foundUser) {
      showToast("signup successful", "success");
      setUserDB([...userDB, userData]);
      localStorage.setItem("usersInfo", JSON.stringify(userDB));
      navigate("/");
    }
  };

  // const signupWithTestCredentials = () => {
  //   setUserData({
  //     firstName: "john",
  //     lastName: "doe",
  //     email: "john@gmail.com",
  //     password: "password",
  //   });

  //   submitHandler();
  // };

  const signupWithTestCredentials = () => {
    const signupCredentials = {
      firstName: "john",
      lastName: "doe",
      email: "john@gmail.com",
      password: "password",
    };

    const foundUser = userDB.find((i) => i.email === signupCredentials.email);

    if (foundUser) {
      showToast("oops the user already exists", "error");
    }

    if (!foundUser) {
      showToast("signup successful", "success");
      setUserDB([...userDB, signupCredentials]);
      localStorage.setItem("usersInfo", JSON.stringify(userDB));
      navigate("/");
    }
  };

  return (
    <main className="h-screen flex justify-center  align-items-center bg-slate-900">
      <div>
        <div className="h=96 w-96 p-10 shadow-2xl rounded-2xl bg-orange-500">
          <h3 className="text-3xl font-normal text-center text-slate-900 mb-12">
            Signup
          </h3>

          <div className="input-container mb-7">
            <input
              name="firstName"
              type="text"
              id="first name"
              className="input input-white-hover input-black-focus text-white text-lg"
              autoComplete="off"
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="firstName"
              className="input-label text-slate-900 bg-orange-500"
            >
              First Name
            </label>
          </div>

          <div className="input-container mb-7">
            <input
              name="lastName"
              type="text"
              id="last name"
              className="input input-white-hover input-black-focus text-white text-lg"
              autoComplete="off"
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="lastName"
              className="input-label text-slate-900 bg-orange-500"
            >
              Last Name
            </label>
          </div>

          <div className="input-container mb-7">
            <input
              name="email"
              type="text"
              id="email"
              className="input input-white-hover input-black-focus text-white text-lg"
              autoComplete="off"
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className="input-label text-slate-900 bg-orange-500"
            >
              Email
            </label>
          </div>

          <div className="input-container mb-7 text-orange-500">
            <input
              name="password"
              type="password"
              id="password"
              className="input input-white-hover input-black-focus text-white text-lg"
              autoComplete="off"
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="input-label text-slate-900 bg-orange-500"
            >
              Password
            </label>
          </div>

          <div className="flex justify-between mb-10">
            <Link
              to=""
              className="text-underline text-slate-900 text-hover-orange-200"
            >
              Forgot Password
            </Link>
            <Link
              to="/"
              className="text-underline text-slate-900 text-hover-orange-200"
            >
              Login
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <button
              className="px-8 py-2 text-lg bg-slate-900 rounded text-orange-200 w-full bg-hover-slate-800"
              style={{ border: "none" }}
              onClick={() => signupWithTestCredentials()}
            >
              signup with test credentials
            </button>

            <button
              className="px-8 py-2 text-lg bg-slate-900 rounded text-orange-200 w-full bg-hover-slate-800"
              style={{ border: "none" }}
              onClick={() => submitHandler()}
            >
              signup
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignupPage;
