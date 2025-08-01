"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function UserLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`👤 User Logged In: ${formData.email}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-100 to-orange-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
          👤 User Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
          >
            🔑 Login as User
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
