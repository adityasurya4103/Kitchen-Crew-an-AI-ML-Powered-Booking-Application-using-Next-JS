"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Payment Successful! (Integration pending)");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          💳 Complete Your Payment
        </h1>

        <form onSubmit={handlePayment} className="space-y-5">
          {/* Payment Method */}
          <div className="space-y-2">
            <label className="block text-lg font-semibold">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
            >
              <option value="card">💳 Credit/Debit Card</option>
              <option value="upi">📱 UPI</option>
              <option value="netbanking">🏦 Net Banking</option>
            </select>
          </div>

          {/* Card Details */}
          {paymentMethod === "card" && (
            <>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </>
          )}

          {/* Pay Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
          >
            ✅ Pay Now
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
