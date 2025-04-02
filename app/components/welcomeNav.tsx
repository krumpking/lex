"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function WelcomeNav({ children }: any) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-white text-black">
      <Head>
        <title>Lexania</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="p-4">
        <nav className="flex flex-row justify-between items-center p-4 backdrop-blur-sm bg-white/30 rounded-2xl shadow shadow-blue-700/50">
          <Link href="/">
            <div className="text-2xl font-bold text-black uppercase">
              Lexania
            </div>
          </Link>
          <div className="hidden lg:flex gap-4 items-center">
            <Link href="/">
              <p className="text-gray-700 hover:text-gray-900">Home</p>
            </Link>
            <Link href="/founders">
              <p className="text-gray-700 hover:text-gray-900">Our Team</p>
            </Link>
            <Link href="/product">
              <p className="text-gray-700 hover:text-gray-900">Product</p>
            </Link>
            <Link href="/demo">
              <p className="text-gray-700 hover:text-gray-900">Demo</p>
            </Link>
            <Link href="/prompt">
              <p className="text-gray-700 hover:text-gray-900">
                Prompts Library
              </p>
            </Link>
            <Link href="/login">
              <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
                Register
              </button>
            </Link>
          </div>
          <div className="lg:hidden">
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
          </div>
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
              <nav className="flex flex-col  gap-4">
                <Link href="/">
                  <p className="text-gray-700 hover:text-gray-900">Home</p>
                </Link>
                <Link href="/founders">
                  <p className="text-gray-700 hover:text-gray-900">Our Team</p>
                </Link>
                <Link href="/product">
                  <p className="text-gray-700 hover:text-gray-900">Product</p>
                </Link>
                <Link href="/demo">
                  <p className="text-gray-700 hover:text-gray-900">Demo</p>
                </Link>
                <Link href="/prompt">
                  <p className="text-gray-700 hover:text-gray-900">
                    Prompts Library
                  </p>
                </Link>
                <Link href="/login">
                  <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
                    Login
                  </button>
                </Link>
                <Link href="/register ß">
                  <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
                    Register
                  </button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1 p-4 md:p-16 overflow-y-auto">{children}</main>

      <footer className="bg-gray-100 mt-auto py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold text-black mb-4">Lexania</div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Shortcuts</h3>
            <Link href="/story">
              <p className="text-gray-700 hover:text-gray-900 mb-2">Home</p>
            </Link>
            <Link href="/founders">
              <p className="text-gray-700 hover:text-gray-900 mb-2">
                Meet the founders
              </p>
            </Link>
            <Link href="/product">
              <p className="text-gray-700 hover:text-gray-900 mb-2">Product</p>
            </Link>
            <Link href="/demo">
              <p className="text-gray-700 hover:text-gray-900 mb-2">
                Demo our Legal Assistant
              </p>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
                Get Early Access
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <Link href="/privacy-policy">
              <p className="text-gray-700 hover:text-gray-900 mb-2">
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-and-conditions">
              <p className="text-gray-700 hover:text-gray-900 mb-2">
                Terms and Conditions
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">
              Sign up for free to subscribe
            </h3>
            {/* <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border rounded-md mb-4"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubscribe}
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
              >
                {isLoading ? "Adding Email..." : "Subscribe"}
              </button> */}
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Lexania</p>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}
