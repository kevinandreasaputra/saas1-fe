import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Booking() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  // State Data Service & Form
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await api.get("/services");
        if (response.data.status === "success") {
          const found = response.data.data.find((s) => s.id == id);
          setService(found);
          setAddress("Jl. Sudirman No. 45, Jakarta (Default)");
        }
      } catch (error) {
        console.error("Failed to load service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  const handleBooking = async () => {
    if (!date || !timeSlot || !address) {
      alert("Please complete all fields!");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        user_id: user.id,
        service_id: service.id,
        booking_date: date,
      };

      const response = await api.post("/booking", payload);

      if (response.data.status === "success") {
        alert("Booking Berhasil! Cek history kamu.");
        navigate("/history");
      } else {
        alert("Booking gagal: " + response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat booking.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!service)
    return <div className="p-10 text-center">Service not found!</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
        <div className="flex flex-col flex-1 w-full gap-8">
          <div>
            <h1 className="text-3xl font-bold text-text-main dark:text-white">
              Complete your booking
            </h1>
            <p className="text-text-sub mt-1">
              Select your preferred date and time.
            </p>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-border-color shadow-sm">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">
              1. Selected Service
            </h3>
            <div className="p-4 bg-background-light dark:bg-background-dark rounded-xl border border-border-color font-medium text-text-main dark:text-white">
              {service.name} -{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(service.price)}
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-border-color shadow-sm">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">
              2. Date & Time
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 dark:text-white">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full h-12 rounded-xl border border-gray-300 px-4"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 dark:text-white">
                  Time Slot
                </label>
                <select
                  className="w-full h-12 rounded-xl border border-gray-300 px-4"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option value="">Select Time</option>
                  <option value="08:00">08:00 - 10:00 (Morning)</option>
                  <option value="10:00">10:00 - 12:00 (Morning)</option>
                  <option value="13:00">13:00 - 15:00 (Afternoon)</option>
                  <option value="15:00">15:00 - 17:00 (Afternoon)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-border-color shadow-sm">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">
              3. Your Data
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 dark:text-white">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full h-12 rounded-xl border border-gray-300 px-4"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 dark:text-white">
                  Notes (Optional)
                </label>
                <textarea
                  className="w-full rounded-xl border border-gray-300 p-4"
                  rows="3"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Gate code, specific instructions..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[380px] shrink-0 sticky top-24">
          <div className="bg-white dark:bg-surface-dark rounded-2xl border border-border-color shadow-lg overflow-hidden">
            <div className="p-5 bg-background-light dark:bg-background-dark/50 border-b border-border-color">
              <h3 className="text-lg font-bold text-text-main dark:text-white">
                Order Summary
              </h3>
            </div>
            <div className="p-5 flex flex-col gap-6">
              <div className="flex justify-between items-center text-sm dark:text-gray-300">
                <span>Service Price</span>
                <span className="font-bold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(service.price)}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm dark:text-gray-300">
                <span>Service Fee</span>
                <span className="font-bold">Rp 0</span>
              </div>
              <div className="h-px bg-border-color"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg dark:text-white">Total</span>
                <span className="font-extrabold text-xl text-primary">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(service.price)}
                </span>
              </div>

              <button
                onClick={handleBooking}
                disabled={submitting}
                className="w-full h-12 bg-accent hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all disabled:opacity-50"
              >
                {submitting ? "Processing..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
