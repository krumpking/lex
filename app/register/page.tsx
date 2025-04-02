"use client";

import { signUpWithEmail } from "@/firebase/auth";
import { addUser } from "@/firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WelcomeNav from "../components/welcomeNav";
import { login } from "../store/user/userSlice";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    orgType: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasUpperCase) return "Password must contain an uppercase letter";
    if (!hasLowerCase) return "Password must contain a lowercase letter";
    if (!hasNumbers) return "Password must contain a number";
    if (!hasSpecialChar) return "Password must contain a special character";
    if (password.length < 8)
      return "Password must be at least 8 characters long";
    return "";
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const passwordValidationError = validatePassword(formData.password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      // Create authentication user
      const authUser = await signUpWithEmail(formData.email, formData.password);

      if (!authUser) {
        return;
      }

      // Add your registration logic here
      addUser(
        authUser.uid,
        formData.name,
        formData.email,
        formData.companyName,
        formData.orgType,
        formData.country,
        "Admin",
      )
        .then((v) => {
          console.log(v);
          if (!v) {
            toast.error("Failed to add user, contact support");
            router.push("/login");
            return;
          }

          // Dispatch user data to Redux store
          dispatch(
            login({
              companyId: v.companyId,
              name: formData.name,
              email: formData.email,
              companyName: v.companyName,
              orgType: v.orgType,
              country: v.country,
              role: v.role,
            }),
          );

          // Navigate to portal page after successful registration
          router.push("/portal");

          toast.success("You have successfully registered!");
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.message);
          console.error(err);
          setLoading(false);
        });
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WelcomeNav>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow shadow-blue-700/50 w-full max-w-md">
            <Skeleton />
            <Skeleton count={5} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="bg-white p-8 rounded-lg shadow shadow-blue-700/50 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
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
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Organization Type</label>
                <select
                  name="orgType"
                  value={formData.orgType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select a organization type</option>
                  <option value="Law Firm">Law Firm</option>
                  <option value="Inhouse Corporate Council">
                    Inhouse Corporate Council
                  </option>
                  <option value="Courts and Tribunals">
                    Courts and Tribunals
                  </option>
                  <option value="Government">Government</option>

                  {/* Add more countries as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select a country</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>

                  {/* Add more countries as needed */}
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </WelcomeNav>
  );
}
