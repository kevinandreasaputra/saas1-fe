import React from "react";
import { Link } from "react-router-dom";

import api from "../api/axios";
import ServiceCard from "../components/features/ServiceCard";
import { useState, useEffect } from "react";

const STATIC_SERVICES = [
  {
    id: "static-1",
    name: "AC Cleaning (Offline)",
    description: "Deep cleaning and maintenance for split AC units.",
    price: 75000,
    image_url:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "static-2",
    name: "House Cleaning (Offline)",
    description: "Professional home cleaning service for all rooms.",
    price: 150000,
    image_url:
      "https://images.unsplash.com/photo-1581578731117-104f2a417954?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "static-3",
    name: "Plumbing Repair (Offline)",
    description: "Fix leaks, unclog drains, and pipe maintenance.",
    price: 200000,
    image_url:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchTopServices = async () => {
      try {
        const response = await api.get("/services");
        if (response.data.status === "success") {
          setServices(response.data.data.slice(0, 3));
        } else {
          throw new Error("API Error");
        }
      } catch (error) {
        console.warn("API Error, using fallback data:", error);
        setServices(STATIC_SERVICES);
      }
    };
    fetchTopServices();
  }, []);

  return (
    <div className="flex flex-col gap-12">
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
                </span>
              </h1>
              <p className="text-lg text-text-sub dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Professional cleaning, repairs, and wellness services trusted by
                thousands. Book vetted professionals instantly.
              </p>

              <div className="mt-4 w-full max-w-lg mx-auto lg:mx-0 p-2 bg-white dark:bg-surface-dark rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-2">
                <Link
                  to="/services"
                  className="w-full flex items-center justify-center px-8 h-12 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-orange-500/20"
                >
                  Find Service Now
                </Link>
              </div>
            </div>
            <div className="relative lg:h-[600px] w-full flex items-center justify-center hidden lg:flex">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white dark:border-surface-dark md:h-[500px]">
                <img
                  src="https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSkisg2rHNoVh_rURI5HCAqxmkP2N7p-LkigXRO__af8JtMmr4sojMfT5GPWqBUciad7ECMdTK-FTBHphQBofcEzYObpsEh7RaGCsa0XMo5WbhLjfpfC3M_izvXunvqR6pJkcFXMas53lSSXhBo4DNVgVHXHimt9y1VBP427lHr22SKiVQrmq3buGimukxulo1Dpjo98bx6SZXYExDkqh833YZqof3OI3fdXJDAXd1kWqIjSAwlnIUGfbly9bfez1_FjyLaxGC7TMsXUKvicWtdK3D9pZmFeR3gt-sTEgUrVozZBNHjfcYYk0HgUfxAw_LBxWxVkv9AdAZF19Gw_OF0Tm-MYXrRp2Ih5JfV-_tJAQnANRtn0MUG2XpGS5UFxe9i93uy_2FcX9U-1c2RfnobA3QP1Reuyu-2VZoLL6mDBobvLyeFyo4UIo7Urk-GbmdyKDw32K-68duDcaIFAE4w936za4-2W9OcAljXu-NPoVpBvosuxIb7j1XWxO3JhyVW_O33btBPvy5GzxfLsXLfzx1dLW5FokNym9w-Df_nLjfN9TMoeGlKMGUXPGb0XBl0-ncCP_KQ_CCeZykbwwGlnJTXCjMLD5qoGNfMw-7CV7NnA6nrfVdnEG9O42xYRZvsC-5e_MlUfqxIYypUhU38dhjV04NgjlUkU36abqVoL1rnIq3SbbB5QXAG_zclb1XhR1EV6Nd5gLqppl02Jwo0vg3a9uG4UTkhOXLro_qHwEPfNOKgu-l0MweAo22gHrCBKq0tD6sx3P3qqOAT8xRf8AVUJMsDYKaOXh4qOmCp7YxZpfG1EjV9KnS-7JPmMOJMSXJ7jpY5lVuKpR_tTqr2U1Bbl487-he3CHTbsLQQD7tOBAu7ZGSeXe6SVLyt8L4ZJwghyhYBxegtNi1WrhDdlHCU2GtUApzIEcvq3xAbTKh78BQPiLCijpoQpn2t8q9x1stck7K83-GC07m2Q9Xy-6Dd7egxtMG1MMsShu-W_iqlSo9oftlr9etfh9II0kOLAWOLz2AyBNs_Rd5TWKKUkSqP_wP9U1VGAlInoEpxJSgmcc_5JWA71pSrlZoGvMDQel6xBix_UnlKuwuYIWg_JFPjpmx_SYX-MV3vB_jIm2-MIVsM_-UilYozusBfbK6FuPriYHtUXplYs3KfKC_GYTAYcTMVfZvQCmuFYkECLBb5AcF1iFn4=s1024-rj"
                  alt="Home Services Hero"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-text-main dark:text-white tracking-tight mb-3">
                Popular Services
              </h2>
              <p className="text-text-sub dark:text-gray-400 max-w-xl">
                Everything you need to keep your home running smoothly.
              </p>
            </div>
            <Link
              to="/services"
              className="text-primary font-bold hover:gap-2 transition-all flex items-center gap-1"
            >
              View All Services{" "}
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.length > 0 ? (
              services.map((service) => (
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
        </div>
      </section>
    </div>
  );
}
