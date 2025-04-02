"use client";

import { auth } from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logout } from "../store/user/userSlice";

export default function PortalNav({ children }: any) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      // Clear any cookies if needed
      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="bg-white text-black">
      <Head>
        <title>Lexania</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="flex flex-row justify-between items-center p-4 backdrop-blur-sm bg-white/30 shadow shadow-blue-700/50">
          <Link href="/">
            <div className="text-2xl font-bold text-black uppercase">
              Lexania
            </div>
          </Link>

          <button onClick={toggleDrawer} className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
        {isDrawerOpen && (
          <div
            className={`fixed z-10 inset-y-0 right-0 w-64 bg-white shadow-lg p-4 transition duration-700 ease-in-out ${
              isDrawerOpen
                ? "transform translate-x-0 duration-4000 ease-in-out"
                : "transform translate-x-full duration-1000 ease-in-out"
            }`}
          >
            <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-4">
              <button onClick={toggleDrawer} className="text-gray-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="text-2xl font-bold text-black uppercase mb-4 text-start">
                Lexania
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/chat">
                  <p className="nav-link-container text-gray-700 hover:text-gray-900">
                    ChatRoom
                  </p>
                </Link>
                <Link href="/portal">
                  <p className="nav-link-container text-gray-700 hover:text-gray-900">
                    Legal Assistant
                  </p>
                </Link>
                <Link href="/users">
                  <p className="nav-link-container text-gray-700 hover:text-gray-900">
                    Manage Users
                  </p>
                </Link>
                <Link href="/coming">
                  <p className="nav-link-container text-gray-700 hover:text-gray-900">
                    Manage Files
                  </p>
                </Link>
                <Link href="/coming">
                  <p className="nav-link-container text-gray-700 hover:text-gray-900">
                    Manage Cases
                  </p>
                </Link>
                <Link href="/coming">
                  <p className="nav-link-container text-gray-700 hover:text-gray-900">
                    Manage Billing
                  </p>
                </Link>
                <button onClick={handleLogout} className="text-left">
                  <p className="nav-link-container text-gray-700 hover:text-gray-900 text-align0">
                    Logout
                  </p>
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1 p-4 md:p-16 overflow-y-auto">{children}</main>

      <ToastContainer />
    </div>
  );
}
