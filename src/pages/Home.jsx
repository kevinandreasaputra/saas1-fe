import React from "react";
import { Link } from "react-router-dom";

import { useServices } from "../hooks/useServices";
import ServiceCard from "../components/features/ServiceCard";

export default function Home() {
  const { services, loading } = useServices();
  const popularServices = services.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col gap-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto lg:mx-0 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Trusted by 50k+ Homeowners
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-text-main dark:text-white tracking-tight">
                Expert Home Services at{" "}
                <span className="text-primary relative inline-block">
                  Your Doorstep
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-30"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-text-sub dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Professional cleaning, repairs, and wellness services trusted by
                thousands. Book vetted professionals instantly.
              </p>
              <div className="mt-4 w-full max-w-lg mx-auto lg:mx-0 p-2 bg-white dark:bg-surface-dark rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-2">
                <div className="flex items-center flex-1 px-3 w-full">
                  <span className="material-symbols-outlined text-text-sub">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full h-12 border-none focus:ring-0 bg-transparent text-text-main dark:text-white placeholder-text-sub text-base focus:outline-none ml-2"
                  />
                </div>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 h-12 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Find Service
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-4 text-sm text-text-sub dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-lg">
                    check_circle
                  </span>
                  <span>Vetted Pros</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-lg">
                    check_circle
                  </span>
                  <span>Insured Work</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-lg">
                    check_circle
                  </span>
                  <span>Upfront Pricing</span>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] w-full flex items-center justify-center hidden lg:flex">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white dark:border-surface-dark md:h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8iXg6lcFnnslHz4c0kVXEoUflnmU7spo9Yj2zkU5JoXbPFCd2QMkcNOsgAbD2e8KmpOUpUks1hwTXh5xiKk-iGQlv223tTb06GTeDNdRxIiyuUiDPZBLoy27grqvlkoKYVPu3nPEfPrZNZzhlJsPLqbwiT-T4KDJH3Tns4cQmPZZHYEf2qDGh9I_IG87QDHBoKIaES_wcGePg4aEwzCeYnZ1UCXvtcgx8BNgSoYuNcUiBjvT3z-dk-dzHfOhmOuq1RHkgS_CfV9w"
                  alt="Modern clean bright living room"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <span className="material-symbols-outlined">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main dark:text-white">
                        Satisfaction Guaranteed
                      </p>
                      <p className="text-xs text-text-sub">
                        If you're not happy, we'll make it right.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-surface-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-text-main dark:text-white tracking-tight mb-3">
                Popular Services
              </h2>
              <p className="text-text-sub dark:text-gray-400 max-w-xl">
                Everything you need to keep your home running smoothly. Book in
                just a few clicks.
              </p>
            </div>
            <Link
              to="/services"
              className="hidden md:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
            >
              View All Services{" "}
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.length > 0 ? (
              popularServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            ) : (
              <div className="col-span-3 text-center py-10 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <p className="text-gray-500">
                  Loading services or using offline mode...
                </p>
              </div>
            )}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/services">
              <button className="w-full py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl text-primary font-bold shadow-sm">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-primary dark:bg-primary-dark/50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="px-4 py-2">
              <div className="text-4xl font-bold mb-1">4.8/5</div>
              <p className="text-primary-100 dark:text-gray-300 text-sm font-medium">
                Average Customer Rating
              </p>
            </div>
            <div className="px-4 py-2">
              <div className="text-4xl font-bold mb-1">100%</div>
              <p className="text-primary-100 dark:text-gray-300 text-sm font-medium">
                Satisfaction Guarantee
              </p>
            </div>
            <div className="px-4 py-2">
              <div className="text-4xl font-bold mb-1">24/7</div>
              <p className="text-primary-100 dark:text-gray-300 text-sm font-medium">
                Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
