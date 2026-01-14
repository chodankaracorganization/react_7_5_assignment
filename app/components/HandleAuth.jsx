"use client";

import React, { useEffect } from "react";
import { login } from "../redux/slices/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function HandleAuth() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleLogin() {
    dispatch(login());
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/application");
    }
  }, [isLoggedIn, router]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Home Page</h1>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium
                 hover:bg-blue-700 transition-colors duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default HandleAuth;
