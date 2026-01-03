import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 
export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full glass-nav border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">
                roofing
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight text-primary dark:text-white">
              HomeServices
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors"
            >
              Services
            </Link>
            {isAuthenticated && (
              <Link
                to="/history"
                className="text-sm font-semibold text-text-main hover:text-primary transition-colors"
              >
                History
              </Link>
            )}
            <Link
              to="/about"
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-text-main hidden sm:block">
                  Hi, {user?.name || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center px-4 h-10 bg-red-50 text-red-500 hover:bg-red-100 text-sm font-bold rounded-xl transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button className="hidden sm:flex text-sm font-bold text-text-main hover:text-primary transition-colors">
                  Become a Pro
                </button>
                <Link
                  to="/login"
                  className="flex items-center justify-center h-11 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-primary/20"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
