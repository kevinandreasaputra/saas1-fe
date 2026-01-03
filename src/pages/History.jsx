import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function History() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/my-orders");
        if (response.data.status === "success") {
          setOrders(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch orders full info:", error);
        console.error("Response Data:", error.response?.data);
        console.error("Response Status:", error.response?.status);
        if (error.response?.status === 401) {
          // Optional: Auto logout if 401
          // localStorage.removeItem('token');
          // window.location.href = '/login';
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading)
    return <div className="p-10 text-center">Loading history...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-2xl">history</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-text-main dark:text-white">
            Booking History
          </h1>
          <p className="text-text-sub text-sm">
            Track your service status here.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-surface-dark rounded-2xl border border-border-color shadow-sm overflow-hidden">
        {orders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-background-light dark:bg-background-dark/50 text-text-sub uppercase text-xs font-bold tracking-wider border-b border-border-color">
                <tr>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-background-light dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold text-text-main dark:text-white">
                        {order.service_name}
                      </div>
                      <div className="text-xs text-text-sub">
                        Ref: #{order.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-main dark:text-gray-300">
                      {order.booking_date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold capitalize
                                        ${
                                          order.status === "pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : order.status === "completed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-100 text-gray-700"
                                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-primary">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(order.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-10 text-center text-text-sub">
            No bookings found.{" "}
            <a
              href="/services"
              className="text-primary font-bold hover:underline"
            >
              Book a service now!
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
