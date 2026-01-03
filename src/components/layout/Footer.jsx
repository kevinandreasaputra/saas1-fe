import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-lg">
                  roofing
                </span>
              </div>
              <span className="text-xl font-bold text-text-main dark:text-white">
                HomeServices
              </span>
            </div>
            <p className="text-text-sub dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              The most trusted marketplace for home services. We connect you
              with verified professionals for all your household needs.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-sub hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                href="#"
                className="text-text-sub hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </a>
              <a
                href="#"
                className="text-text-sub hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-main dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-text-sub dark:text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main dark:text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-text-sub dark:text-gray-400">
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  AC Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Massage
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Plumbing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main dark:text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-text-sub dark:text-gray-400">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-sub dark:text-gray-500">
          <p>© 2023 HomeServices Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              English (US)
            </a>
            <a href="#" className="hover:text-primary">
              IDR (Rp)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
