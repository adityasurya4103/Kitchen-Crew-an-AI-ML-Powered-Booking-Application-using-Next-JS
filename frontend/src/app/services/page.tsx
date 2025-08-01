"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Catering",
    image: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8d70",
  },
  {
    title: "Corporate Events",
    image: "https://images.unsplash.com/photo-1541733862433-327f474b12eb",
  },
  {
    title: "Birthday Parties",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Private Dinners",
    image: "https://images.unsplash.com/photo-1617196039897-3d47e57e6454",
  },
  {
    title: "Festive Events",
    image: "https://images.unsplash.com/photo-1606788075761-666e77e4e3a0",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 py-16 px-8">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-12">
        🎉 Our Catering Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="h-56 w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">{service.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
