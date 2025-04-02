"use client";

import {
  addUserByAdmin,
  deleteDocument,
  getDataOne,
  updateDocument,
} from "@/firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import PortalNav from "../components/portalNav";
import { RootState } from "../store/reducers";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");
  const router = useRouter();
  const currentUser = useSelector((state: RootState) => state.userSlice);

  useEffect(() => {
    if (!currentUser || currentUser?.role === "User") {
      toast.error("Access denied. Only administrators can view this page");
      router.push("/portal");
    }

    getUsers();
  }, [currentUser, router]);

  const searchUsers = () => {
    const filtered: User[] = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredUsers(filtered);
  };

  const getUsers = async () => {
    const usersData = await getDataOne(
      "clients",
      "companyId",
      currentUser.companyId ?? "",
    );

    const usersArray = usersData.map(
      (user: any) =>
        ({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }) as User,
    );

    setFilteredUsers(usersArray);
    setUsers(usersArray);
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      role: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    // Role validation
    if (!formData.role) {
      errors.role = "Role is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleAddUser = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsDialogOpen(false);
      setLoading(true);
      // Create authentication user

      // Add your registration logic here
      addUserByAdmin(
        currentUser.companyId ?? "",
        formData.name,
        formData.email,
        currentUser.companyName ?? "",
        currentUser.orgType ?? "",
        currentUser.country ?? "",
        formData.role,
      )
        .then((v) => {
          if (v == null) {
            toast.error("Email with that email already exists");
          } else {
            toast.success("You have successfully added a user");
            getUsers();
          }
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
  const handleEditClick = (user: User) => {
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    setSelectedUserId(user.id);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    await updateDocument("clients", selectedUserId, {
      name: formData.name.trim(),
      email: formData.email.toLowerCase(),
      role: formData.role,
    });

    getUsers();
    setIsDialogOpen(false);
    setIsEditing(false);
    setFormData({ name: "", email: "", role: "" });
  };

  const handleDelete = async (userId: string) => {
    await deleteDocument("clients", userId);
    getUsers();
  };

  return (
    <PortalNav>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen ">
          <div className="bg-white p-8 rounded-lg shadow-2xl shadow-blue-700/50 w-full max-w-md">
            <Skeleton />
            <Skeleton count={5} />
            <Skeleton />
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="container mx-auto p-6">
          <div className="mb-6 flex justify-between items-center gap-4">
            <h1 className="text-2xl font-bold">Users</h1>
            <p></p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <input
              type="search"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchUsers();
                }
              }}
              className="w-full sm:w-4/5 px-3 py-2 border rounded-md"
              required
            />
            <button
              onClick={() => setIsDialogOpen(true)}
              type="submit"
              className="w-full sm:w-1/5 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add User
            </button>
          </div>

          {isDialogOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">
                  {isEditing ? "Update User" : "Add New User"}
                </h2>
                <form
                  className="space-y-4"
                  onSubmit={isEditing ? handleUpdate : handleAddUser}
                >
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Role
                    </label>
                    <select
                      className="w-full px-3 py-2 border rounded-md"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsDialogOpen(false)}
                      className="px-4 py-2 border rounded-md hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      {isEditing ? "Update User" : "Add User"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className="overflow-x-auto">
            <div className="bg-white rounded-lg shadow min-w-[750px]">
              <div className="grid grid-cols-4 gap-4 p-4 font-semibold border-b">
                <div>Name</div>
                <div>Email</div>
                <div>Role</div>
                <div>Actions</div>
              </div>
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="grid grid-cols-4 gap-4 p-4 border-b hover:bg-gray-50"
                >
                  <div className="truncate">{user.name}</div>
                  <div className="truncate">{user.email}</div>
                  <div>{user.role}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(user)}
                      type="button"
                      className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 sm:w-auto w-full"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      type="button"
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 sm:w-auto w-full"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ToastContainer />
        </div>
      )}
    </PortalNav>
  );
}
