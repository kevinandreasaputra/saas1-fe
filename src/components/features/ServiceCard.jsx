import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  let imageUrl = "https://placehold.co/600x400?text=Service";
  if (service.image_url) {
    if (service.image_url.startsWith("http")) {
      imageUrl = service.image_url;
    } else {
      imageUrl = `http://localhost/saas1/${service.image_url}`;
    }
  }

  return (
    <div className="group flex flex-col bg-background-light dark:bg-[#253333] rounded-2xl overflow-hidden border border-border-color shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        {service.name.toLowerCase().includes("ac") && (
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur text-text-main dark:text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            Best Seller
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <div className="flex items-center gap-1 text-accent-yellow text-sm font-bold">
            <span className="material-symbols-outlined text-base fill-current">
              star
            </span>
            4.9
          </div>
        </div>
        <p className="text-text-sub text-sm mb-6 line-clamp-2 flex-1">
          {service.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-color">
          <div className="flex flex-col">
            <span className="text-xs text-text-sub uppercase tracking-wider font-semibold">
              Starts from
            </span>
            <span className="text-lg font-bold text-primary">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(service.price)}
            </span>
          </div>
          <Link
            to={`/booking/${service.id}`}
            className="px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
