import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { useToast } from "../../hooks/useToast";

const intialLoginState = {
  email: "",
  password: "",
};

function LoginPage() {
  const [userData, setUserData] = useState(intialLoginState);
  const { userDB, setUserDB, setAuthenticated } = useAuth();

  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = () => {
    const foundUser = userDB.find(
      (i) => i.email === userData.email && i.password === userData.password
    );
    if (foundUser) {
      showToast("Login Successful", "success");
      setAuthenticated(true);
      localStorage.setItem("authenticated", true);
    }

    if (!foundUser) showToast("Invalid Login", "error");
  };

  const loginWithTestCredentials = () => {
    const loginCredentials = {
      email: "john@gmail.com",
      password: "password",
    };

    const signupCredentials = {
      firstName: "john",
      lastName: "doe",
      email: "john@gmail.com",
      password: "password",
    };

    const foundUser = userDB.find(
      (i) =>
        i.email === loginCredentials.email &&
        i.password === loginCredentials.password
    );

    if (foundUser) {
      showToast("Login Successful", "success");
      setAuthenticated(true);
      localStorage.setItem("authenticated", true);
    }

    if (!foundUser) {
      setUserDB([...userDB, signupCredentials]);
      localStorage.setItem("usersInfo", JSON.stringify(userDB));

      showToast("Login Successful", "success");
      setAuthenticated(true);
      localStorage.setItem("authenticated", true);
    }
  };

  return (
    <main className="h-screen flex justify-center  align-items-center bg-slate-900">
      <div>
        <div className="h=96 w-96 p-10 shadow-2xl rounded-2xl bg-orange-500">
          <h3 className="text-3xl font-normal text-center text-slate-900 mb-12">
            Login
          </h3>

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
              htmlFor="email"
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
              to="/signup"
              className="text-underline text-slate-900 text-hover-orange-200"
            >
              Sign Up
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <button
              className="px-8 py-2 text-lg bg-slate-900 rounded text-orange-200 w-full bg-hover-slate-800 cursor-pointer"
              style={{ border: "none" }}
              onClick={() => loginWithTestCredentials()}
            >
              login with test credentials
            </button>

            <button
              className="px-8 py-2 text-lg bg-slate-900 rounded text-orange-200 w-full bg-hover-slate-800 cursor-pointer"
              style={{ border: "none" }}
              onClick={() => submitHandler()}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
