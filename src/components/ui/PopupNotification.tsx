"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const PopupNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const eventDetails = [
    {
      id: 1,
      day: "5",
      month: "December",
      time: "09:00 am - 05:00 pm",
      location: "Satya Gouri Convention, Sri Balaji Layout, Hal Colony, Gajularamaram Hyderabad",
    },
    {
      id: 2,
      day: "6",
      month: "December",
      time: "09:00 am - 05:00 pm",
      location: "Satya Gouri Convention, Sri Balaji Layout, Hal Colony, Gajularamaram Hyderabad",
    },
    {
      id: 3,
      day: "7",
      month: "December",
      time: "09:00 am - 05:00 pm",
      location: "Satya Gouri Convention, Sri Balaji Layout, Hal Colony, Gajularamaram Hyderabad",
    },
  ];

  useEffect(() => {
    // Show popup on every reload after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Auto close after 10 seconds
    const autoCloseTimer = setTimeout(() => {
      setIsVisible(false);
    }, 11500); // 1.5s delay + 10s display

    return () => {
      clearTimeout(timer);
      clearTimeout(autoCloseTimer);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="backdrop-blur-md bg-black/30 border shadow-xl rounded-3xl p-4 sm:p-6 w-[95%] sm:w-auto sm:max-w-2xl max-h-[90vh] overflow-y-auto"
            style={{
              borderRadius: "28px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              borderColor: "#dc4a26",
            }}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white hover:text-gray-200 z-10"
              aria-label="Close notification"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
            <div className="text-center px-2 sm:px-4">
              
              

              {/* Event Details Section */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-4">Event Schedule</h4>
                <div className="space-y-3">
                  {eventDetails.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="bg-[#dc4a26] rounded-lg p-2 min-w-[60px] text-center">
                            <div className="text-white font-bold text-lg leading-none">
                              {event.day}
                            </div>
                            <div className="text-white text-xs uppercase">
                              {event.month}
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="text-white font-semibold text-sm sm:text-base">
                              Day {event.id}
                            </div>
                            <div className="text-gray-300 text-xs sm:text-sm">
                              {event.time}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-300 text-xs sm:text-sm text-left pl-2">
                        📍 {event.location}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Link
                href="/events"
                className="inline-block text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md hover:opacity-90 transition-all duration-300 uppercase tracking-wider text-sm sm:text-base"
                style={{ backgroundColor: "#dc4a26" }}
              >
                Register Now
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupNotification;