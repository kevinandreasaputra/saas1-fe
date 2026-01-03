import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Booking() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [selectedDay, setSelectedDay] = useState(""); 
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState(
    "Jl. Sudirman No. 45, Jakarta (Default)"
  );
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  const timeSlots = [
    { value: "08:00 - 10:00", label: "08:00 - 10:00", period: "Morning" },
    { value: "10:00 - 12:00", label: "10:00 - 12:00", period: "Morning" },
    { value: "13:00 - 15:00", label: "13:00 - 15:00", period: "Afternoon" },
    { value: "15:00 - 17:00", label: "15:00 - 17:00", period: "Afternoon" },
  ];

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await api.get("/services");
        if (response.data.status === "success") {
          const found = response.data.data.find((s) => s.id == id);
          setService(found);
        }
      } catch (error) {
        console.error("Failed to load service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  const daysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    const offset = newDate.getTimezoneOffset();
    const cleanDate = new Date(newDate.getTime() - offset * 60 * 1000);
    setSelectedDay(cleanDate.toISOString().split("T")[0]);
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(selectedDate);
    const startDay = firstDayOfMonth(selectedDate);
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-full"></div>);
    }

    for (let i = 1; i <= totalDays; i++) {
      const currentCheckDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        i
      );
      const offset = currentCheckDate.getTimezoneOffset();
      const checkStr = new Date(currentCheckDate.getTime() - offset * 60 * 1000)
        .toISOString()
        .split("T")[0];

      const isSelected = selectedDay === checkStr;

      days.push(
        <button
          key={i}
          onClick={() => handleDateClick(i)}
          className={`h-10 w-full flex items-center justify-center rounded-full text-sm font-medium transition-all ${
            isSelected
              ? "bg-primary text-white shadow-md shadow-primary/20 font-bold"
              : "text-text-main dark:text-gray-300 hover:bg-background-light dark:hover:bg-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  const handleBooking = async () => {
    if (!selectedDay || !timeSlot || !address) {
      alert("Please complete all required fields (Date, Time, Address)!");
      return;
    }

    setSubmitting(true);
    try {
      const cleanTime = timeSlot.split(" - ")[0];
      const payload = {
        user_id: user.id,
        service_id: service.id,
        booking_date: `${selectedDay} ${cleanTime}:00`,
      };

      const response = await api.post("/booking", payload);

      if (response.data.status === "success" || response.status === 201) {
        setBookingId(response.data.booking_id || "INV-" + Date.now());
        setShowSuccessModal(true);
      } else {
        alert("Booking failed: " + (response.data.message || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while booking.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className="p-20 text-center font-bold text-gray-500">
        Loading booking details...
      </div>
    );
  if (!service)
    return (
      <div className="p-20 text-center font-bold text-red-500">
        Service not found!
      </div>
    );

  const imageUrl =
    service.image_url && service.image_url.startsWith("http")
      ? service.image_url
      : `http://localhost:8000/${service.image_url}`;

  return (
    <div className="relative font-display text-text-main">
      <main className="w-full max-w-[1280px] mx-auto px-4 py-6 md:px-8 lg:px-12 xl:px-20 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
          <div className="flex flex-col flex-1 w-full gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2 text-sm font-medium text-text-secondary">
                <Link to="/services" className="text-primary hover:underline">
                  Services
                </Link>
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
                <span className="text-primary">{service.name}</span>
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
                <span className="text-text-main">Booking</span>
              </div>
              <h1 className="text-3xl font-bold text-text-main dark:text-white tracking-tight">
                Complete your booking
              </h1>
              <p className="text-text-secondary mt-1">
                Select your preferred date and time for the service.
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-border-color shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                  <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">
                    1
                  </span>
                  Selected Service
                </h3>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="material-symbols-outlined text-text-secondary">
                    cleaning_services
                  </span>
                </div>
                <input
                  className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-background-dark border border-border-color dark:border-gray-700 rounded-xl text-text-main dark:text-white font-medium cursor-not-allowed opacity-80"
                  disabled
                  type="text"
                  value={service.name}
                />
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-border-color shadow-sm">
              <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">
                  2
                </span>
                Date & Time
              </h3>
              <div className="flex flex-col xl:flex-row gap-8">
                <div className="flex-1 min-w-[300px]">
                  <div className="flex items-center justify-between mb-4 px-2">
                    <button
                      onClick={handlePrevMonth}
                      className="p-1 hover:bg-background-light dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <span className="material-symbols-outlined text-text-main dark:text-white">
                        chevron_left
                      </span>
                    </button>
                    <p className="text-text-main dark:text-white text-base font-bold">
                      {selectedDate.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <button
                      onClick={handleNextMonth}
                      className="p-1 hover:bg-background-light dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <span className="material-symbols-outlined text-text-main dark:text-white">
                        chevron_right
                      </span>
                    </button>
                  </div>
                  <div className="grid grid-cols-7 text-center mb-2">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold text-text-secondary uppercase tracking-wider py-2"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-y-2 gap-x-1">
                    {renderCalendar()}
                  </div>
                </div>
                <div className="hidden xl:block w-px bg-border-color my-4"></div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-text-main dark:text-white mb-4">
                    Available Slots
                  </h4>
                  <div className="flex flex-col gap-3">
                    {timeSlots.map((slot) => (
                      <label
                        key={slot.value}
                        className={`group relative flex cursor-pointer items-center justify-between rounded-xl border p-4 shadow-sm hover:border-primary/50 transition-all ${
                          timeSlot === slot.value
                            ? "border-2 border-primary bg-primary/5"
                            : "border-border-color dark:border-gray-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex size-5 items-center justify-center rounded-full border ${
                              timeSlot === slot.value
                                ? "border-primary"
                                : "border-text-secondary"
                            }`}
                          >
                            <div
                              className={`size-2.5 rounded-full bg-primary transition-opacity ${
                                timeSlot === slot.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-text-main dark:text-white">
                            {slot.label}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-md ${
                            slot.period === "Morning"
                              ? "text-primary bg-primary/10"
                              : "text-text-secondary bg-background-light dark:bg-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {slot.period}
                        </span>
                        <input
                          className="invisible absolute"
                          name="time_slot"
                          type="radio"
                          value={slot.value}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          checked={timeSlot === slot.value}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-border-color shadow-sm">
              <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">
                  3
                </span>
                Your Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-text-main dark:text-white">
                    Full Name
                  </span>
                  <input
                    className="w-full h-12 rounded-xl border border-border-color dark:border-gray-700 bg-white dark:bg-background-dark px-4 text-text-main dark:text-white focus:border-primary focus:ring-0"
                    type="text"
                    value={user?.name || ""}
                    disabled
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-text-main dark:text-white">
                    Email
                  </span>
                  <input
                    className="w-full h-12 rounded-xl border border-border-color dark:border-gray-700 bg-white dark:bg-background-dark px-4 text-text-main dark:text-white focus:border-primary focus:ring-0"
                    type="email"
                    value={user?.email || ""}
                    disabled
                  />
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium text-text-main dark:text-white">
                    Service Address
                  </span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute top-3.5 left-4 text-text-secondary">
                      location_on
                    </span>
                    <input
                      className="w-full h-12 rounded-xl border border-border-color dark:border-gray-700 bg-white dark:bg-background-dark pl-12 pr-4 text-text-main dark:text-white focus:border-primary focus:ring-0"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium text-text-main dark:text-white">
                    Notes for Cleaner (Optional)
                  </span>
                  <textarea
                    className="w-full rounded-xl border border-border-color dark:border-gray-700 bg-white dark:bg-background-dark p-4 text-text-main dark:text-white focus:border-primary focus:ring-0 placeholder:text-text-secondary"
                    placeholder="Gate code, specific instructions, etc..."
                    rows="3"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="md:hidden flex items-center justify-center gap-2 text-text-secondary bg-white dark:bg-surface-dark p-3 rounded-xl border border-border-color dark:border-gray-700">
              <span className="material-symbols-outlined text-green-600">
                verified_user
              </span>
              <span className="text-xs font-medium">
                100% Satisfaction Guaranteed
              </span>
            </div>
          </div>
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="sticky top-28 flex flex-col gap-6">
              <div className="bg-white dark:bg-surface-dark rounded-2xl border border-border-color dark:border-gray-700 shadow-lg overflow-hidden">
                <div className="p-5 border-b border-border-color dark:border-gray-700 bg-background-light dark:bg-background-dark/50">
                  <h3 className="text-lg font-bold text-text-main dark:text-white">
                    Order Summary
                  </h3>
                </div>
                <div className="p-5 flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div
                      className="size-16 rounded-lg bg-cover bg-center shrink-0 border border-border-color dark:border-gray-700"
                      style={{ backgroundImage: `url('${imageUrl}')` }}
                    ></div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-text-main dark:text-white text-sm">
                        {service.name}
                      </h4>
                      <p className="text-xs text-text-secondary mt-1">
                        Standard Package
                      </p>
                      <p className="text-xs font-medium text-primary mt-1">
                        1 Unit
                      </p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <span className="font-semibold text-text-main dark:text-white text-sm">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(service.price)}
                      </span>
                    </div>
                  </div>
                  <div className="h-px w-full bg-border-color dark:bg-gray-700 border-dashed"></div>
                  <div className="flex flex-col gap-2 bg-background-light dark:bg-background-dark p-3 rounded-lg border border-border-color dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        calendar_today
                      </span>
                      <span className="text-xs font-medium text-text-main dark:text-white">
                        {selectedDay || "Select Date"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        schedule
                      </span>
                      <span className="text-xs font-medium text-text-main dark:text-white">
                        {timeSlot || "Select Time"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary">Subtotal</span>
                      <span className="font-medium text-text-main dark:text-white">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(service.price)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary">Service Fee</span>
                      <span className="font-medium text-text-main dark:text-white">
                        Rp 5.000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary font-medium">Discount</span>
                      <span className="font-medium text-primary">-Rp 0</span>
                    </div>
                  </div>
                  <div className="h-px w-full bg-border-color dark:bg-gray-700"></div>
                  <div className="flex justify-between items-end">
                    <span className="text-base font-bold text-text-main dark:text-white">
                      Total Price
                    </span>
                    <span className="text-2xl font-extrabold text-text-main dark:text-white tracking-tight">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(Number(service.price) + 5000)}
                    </span>
                  </div>
                  <button
                    onClick={handleBooking}
                    disabled={submitting}
                    className="w-full rounded-xl bg-accent-coral hover:bg-accent-coral-hover text-white h-12 text-base font-bold shadow-lg shadow-accent-coral/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Processing..." : "Confirm Booking"}
                  </button>
                  <p className="text-xs text-center text-text-secondary">
                    By confirming, you agree to our{" "}
                    <a className="underline hover:text-primary" href="#">
                      Terms of Service
                    </a>
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center gap-2 text-text-secondary bg-white dark:bg-surface-dark p-3 rounded-xl border border-border-color dark:border-gray-700">
                <span className="material-symbols-outlined text-green-600 text-[20px]">
                  verified_user
                </span>
                <span className="text-xs font-medium">
                  100% Satisfaction Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 max-w-md w-full shadow-2xl relative flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
            <div className="size-20 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center mb-6">
              <div className="size-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-200 dark:shadow-none">
                <span className="material-symbols-outlined text-3xl font-bold">
                  check
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-text-main dark:text-white mb-2">
              Booking Successful!
            </h2>
            <p className="text-text-secondary mb-8">
              Your professional has been scheduled. Checks your history for
              updates.
            </p>
            <div className="w-full bg-background-light dark:bg-background-dark rounded-xl p-4 mb-8 border border-border-color dark:border-gray-700">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-text-secondary uppercase font-bold tracking-wider">
                  Booking ID
                </span>
                <span className="text-sm font-mono font-bold text-text-main dark:text-white">
                  #{bookingId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-text-secondary uppercase font-bold tracking-wider">
                  Status
                </span>
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-md">
                  Pending
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate("/history")}
              className="w-full rounded-xl bg-primary hover:bg-primary-dark text-white h-12 text-sm font-bold shadow-lg shadow-primary/20 transition-all"
            >
              Go to My Bookings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
