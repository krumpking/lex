"use client";

import { signInWithEmail } from "@/firebase/auth";
import { getDataOne } from "@/firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WelcomeNav from "../components/welcomeNav";
import { login } from "../store/user/userSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await signInWithEmail(formData.email, formData.password);

      if (!user) {
        return;
      }

      const userData = await getDataOne("clients", "email", formData.email);
      console.log("userData", userData[0]);
      if (userData !== null) {
        dispatch(
          login({
            companyId: userData[0].companyId,
            email: userData[0].email,
            name: userData[0].name,
            companyName: userData[0].companyName,
            country: userData[0].country,
            role: userData[0].role,
            orgType: userData[0].orgType,
          }),
        );
        router.push("/portal");
      } else {
        console.log("User not found");
        toast.error("User not found");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WelcomeNav>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen ">
          <div className="bg-white p-8 rounded-lg shadow-2xl shadow-blue-700/50 w-full max-w-md">
            <Skeleton />
            <Skeleton count={5} />
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="bg-white p-8 rounded-lg shadow-2xl shadow-blue-700/50 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
          </div>
          <ToastContainer />
        </div>
      )}
    </WelcomeNav>
  );
}
