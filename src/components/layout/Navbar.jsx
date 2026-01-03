import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    ...(isAuthenticated ? [{ name: "My Bookings", path: "/history" }] : []),
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "glass-nav border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 cursor-pointer z-50"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">
                  roofing
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-primary dark:text-white leading-none">
                  HomeServices
                </span>
                <span className="text-[10px] font-medium text-text-secondary uppercase tracking-wider leading-none mt-1">
                  Premium Care
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full border border-gray-200 dark:border-gray-700">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-white dark:bg-gray-700 text-primary shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* CTA Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col items-end mr-2">
                    <span className="text-sm font-bold text-text-main dark:text-white leading-none">
                      {user?.name || "User"}
                    </span>
                    <span className="text-[10px] text-text-secondary">
                      Member
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-all"
                    title="Sign Out"
                  >
                    <span className="material-symbols-outlined text-xl">
                      logout
                    </span>
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center justify-center h-11 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden z-50 p-2 text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-white dark:bg-background-dark shadow-2xl z-40 transform transition-transform duration-300 ease-out md:hidden border-l border-gray-100 dark:border-gray-800 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          {/* Mobile Profile Section */}
          {isAuthenticated && (
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-text-main dark:text-white">
                  {user?.name}
                </h4>
                <p className="text-xs text-text-secondary">{user?.email}</p>
              </div>
            </div>
          )}

          {/* Mobile Links */}
          <div className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between p-4 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-text-main dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`
                }
              >
                {link.name}
                <span className="material-symbols-outlined text-lg opacity-50">
                  arrow_forward_ios
                </span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Footer Actions */}
          <div className="mt-auto flex flex-col gap-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-red-50 text-red-600 font-bold hover:bg-red-100 transition-colors"
              >
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  to="/login"
                  className="w-full h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20"
                >
                  Login / Sign Up
                </Link>
                <button className="w-full h-12 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-bold">
                  Become a Pro
                </button>
              </div>
            )}
            <p className="text-xs text-center text-gray-400 mt-4">
              v1.0.0 • HomeServices App
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
