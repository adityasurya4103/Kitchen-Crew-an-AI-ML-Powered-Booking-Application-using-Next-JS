"use client";

import { useState } from "react";
import { mockChefs } from "@/constants/chefs";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        chefId: "",
        date: "",
        time: "",
        duration: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Booking submitted:\n${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <main className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Book a Chef 🧑‍🍳</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-1">Select Chef:</label>
                    <select
                        name="chefId"
                        value={formData.chefId}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">-- Choose --</option>
                        {mockChefs.map((chef) => (
                            <option key={chef.id} value={chef.id}>
                                {chef.name} ({chef.cuisine})
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1">Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Time:</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Duration (hours):</label>
                    <input
                        type="number"
                        name="duration"
                        min={1}
                        max={12}
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Confirm Booking
                </button>
            </form>
        </main>
    );
}
