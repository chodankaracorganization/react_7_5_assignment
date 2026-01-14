"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { logout } from "../redux/slices/authenticationSlice";

export default function ApplicationPage() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Application Page
        </h1>

        <button
          onClick={handleLogout}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium
                 hover:bg-blue-700 transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
