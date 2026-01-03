import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }

    setLoading(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="w-full max-w-md bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
            <span className="material-symbols-outlined text-2xl">roofing</span>
          </div>
          <h1 className="text-2xl font-bold text-text-main dark:text-white">
            Welcome Back
          </h1>
          <p className="text-text-sub dark:text-gray-400 text-sm">
            Sign in to manage your bookings
          </p>
        </div>
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-500 text-sm rounded-lg border border-red-100">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold text-text-main dark:text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark px-4 focus:border-primary focus:ring-0 transition-colors"
              placeholder="admin@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-text-main dark:text-white mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark px-4 focus:border-primary focus:ring-0 transition-colors"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
