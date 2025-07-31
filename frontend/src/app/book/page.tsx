// "use client";

// import { useState } from "react";
// import { mockChefs } from "@/constants/chefs";

// export default function BookingPage() {
//     const [formData, setFormData] = useState({
//         chefId: "",
//         date: "",
//         time: "",
//         duration: 1,
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         alert(`Booking submitted:\n${JSON.stringify(formData, null, 2)}`);
//     };

//     return (
//         <main className="p-6 max-w-xl mx-auto">
//             <h1 className="text-3xl font-bold mb-6">Book a Chef 🧑‍🍳</h1>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//                 <div>
//                     <label className="block mb-1">Select Chef:</label>
//                     <select
//                         name="chefId"
//                         value={formData.chefId}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     >
//                         <option value="">-- Choose --</option>
//                         {mockChefs.map((chef) => (
//                             <option key={chef.id} value={chef.id}>
//                                 {chef.name} ({chef.cuisine})
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <label className="block mb-1">Date:</label>
//                     <input
//                         type="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label className="block mb-1">Time:</label>
//                     <input
//                         type="time"
//                         name="time"
//                         value={formData.time}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label className="block mb-1">Duration (hours):</label>
//                     <input
//                         type="number"
//                         name="duration"
//                         min={1}
//                         max={12}
//                         value={formData.duration}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Confirm Booking
//                 </button>
//             </form>
//         </main>
//     );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockChefs } from "@/constants/chefs";
import { Calendar, Clock, Users, Utensils } from "lucide-react";

const foodImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1604908177522-f74c0a22e76d",
  "https://images.unsplash.com/photo-1516684669134-de6cec06f1df",
  "https://images.unsplash.com/photo-1543353071-873f17a7a088",
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    chefId: "",
    date: "",
    time: "",
    duration: 1,
    mealType: "Lunch",
    guests: 2,
    instructions: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % foodImages.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 flex flex-col md:flex-row font-[Poppins]">
      
      {/* LEFT PANEL */}
      <div className="md:w-1/2 w-full bg-white/80 backdrop-blur-lg shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-6 font-[Playfair_Display] text-orange-600">
          🍳 Book Your Chef
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Chef Dropdown */}
          <select
            name="chefId"
            value={formData.chefId}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/70 border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          >
            <option value="">-- Select Chef --</option>
            {mockChefs.map((chef) => (
              <option key={chef.id} value={chef.id}>
                {chef.name} ({chef.cuisine})
              </option>
            ))}
          </select>

          {/* Date */}
          <div className="relative flex items-center gap-2 bg-white/70 p-3 rounded-xl border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400">
            <Calendar className="text-orange-500" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Time */}
          <div className="relative flex items-center gap-2 bg-white/70 p-3 rounded-xl border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400">
            <Clock className="text-orange-500" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Meal Type */}
          <div className="relative flex items-center gap-2 bg-white/70 p-3 rounded-xl border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400">
            <Utensils className="text-orange-500" />
            <select
              name="mealType"
              value={formData.mealType}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
            >
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
          </div>

          {/* Guests */}
          <div className="relative flex items-center gap-2 bg-white/70 p-3 rounded-xl border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400">
            <Users className="text-orange-500" />
            <input
              type="number"
              name="guests"
              min={1}
              max={20}
              value={formData.guests}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              placeholder="Guests"
            />
          </div>

          {/* Instructions */}
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Special Instructions"
            className="w-full p-4 rounded-xl bg-white/70 border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!formData.chefId}
            type="submit"
            className={`py-3 w-full rounded-xl text-lg font-semibold shadow-md transition ${
              formData.chefId
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            ✅ Confirm Booking
          </motion.button>
        </form>
      </div>

      {/* RIGHT PANEL - Carousel */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={foodImages[currentImage]}
            alt="Delicious Dish"
            className="rounded-xl shadow-2xl object-cover w-full h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-10 right-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            🎉 Booking Confirmed!
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
