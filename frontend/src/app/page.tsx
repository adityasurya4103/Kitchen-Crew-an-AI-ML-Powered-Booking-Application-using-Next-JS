// // src/app/page.tsx
// export default function Home() {
//   return (
//     <main className="min-h-screen flex items-center justify-center text-3xl font-semibold">
//       Welcome to KitchenCrew 🍳
//     </main>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Floating background circles */}
      <motion.div
        className="absolute w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30 top-20 left-10"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 bottom-20 right-10"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-gray-800 text-center"
      >
        Welcome to <span className="text-orange-500">KitchenCrew 🍳</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 text-lg md:text-2xl text-gray-600 text-center max-w-xl"
      >
        Book world-class chefs for your events, dinners, and special occasions. 
        Experience gourmet like never before!
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="mt-8 flex gap-4"
      >
        <Link
          href="/chefs"
          className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300"
        >
          🍴 Browse Chefs
        </Link>

        <Link
          href="/about"
          className="px-6 py-3 bg-white border-2 border-orange-500 text-orange-500 text-lg font-semibold rounded-xl hover:bg-orange-100 hover:scale-105 transition-transform duration-300"
        >
          ℹ️ Learn More
        </Link>
      </motion.div>

      {/* Animated Chef Image */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
        alt="Chef"
        className="mt-10 w-40 md:w-56 drop-shadow-xl"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

     


      {/* <motion.div
        className="absolute bottom-16 right-16 px-4 py-2 bg-white rounded-full shadow-lg text-sm font-semibold"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🍝 Authentic Recipes
      </motion.div> */}
    </main>
  );
}
