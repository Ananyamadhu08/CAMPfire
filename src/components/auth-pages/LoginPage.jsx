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
  const { userDB, setAuthenticated } = useAuth();

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
              className="input input-white-hover input-black-focus text-slate-900"
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
              className="input input-white-hover input-black-focus text-slate-900"
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

          <button
            className="px-8 py-2 text-lg bg-slate-900 rounded text-orange-200 w-full bg-hover-slate-800"
            style={{ border: "none" }}
            onClick={submitHandler}
          >
            login
          </button>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
