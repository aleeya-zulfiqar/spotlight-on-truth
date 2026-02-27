import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!form.name || !form.email || !form.password) {
      return setMsg("All fields are required.");
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/api/auth/signup`, form, {
        withCredentials: true,
      });

      if (res.data.success) {
        setMsg("Account created successfully. You can now log in.");
      } else {
        setMsg(res.data.message || "Signup failed.");
      }
    } catch (err) {
      const backendError =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Signup failed.";

      setMsg(backendError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#C33838] px-6 pt-10 pb-18">
      <div className="bg-white shadow-xl shadow-white/10 rounded-2xl p-10 w-full max-w-md relative border-8 solid border-[#FFDB4C]">
        <h1 className="text-3xl font-extrabold text-center text-[#C33838] mb-6">
          Create Your Account
        </h1>

        {msg && (
          <p
            className={`mb-4 text-center text-sm ${
              msg.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C33838] outline-none"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C33838] outline-none"
              placeholder="email@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C33838] outline-none"
              placeholder="Min 6 characters"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C33838] hover:bg-[#a62d2d] transition text-white font-semibold py-3 rounded-lg shadow-md"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#C33838] font-semibold hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </section>
  );
}
