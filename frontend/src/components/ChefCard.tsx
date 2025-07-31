// src/components/ChefCard.tsx

interface ChefProps {
    chef: {
        id: string;
        name: string;
        cuisine: string;
        rating: number;
        pricePerHour: number;
        location: string;
        image: string;
    };
}

import Link from "next/link";

export default function ChefCard({ chef }: ChefProps) {
    return (
        <Link href={`/chefs/${chef.id}`}>
            <div className="cursor-pointer border rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition">
                <img src={chef.image} alt={chef.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{chef.name}</h2>
                    <p className="text-sm text-gray-600">{chef.cuisine} | {chef.location}</p>
                    <p className="mt-2 text-sm">⭐ {chef.rating} | ₹{chef.pricePerHour}/hr</p>
                </div>
            </div>
        </Link>
    );
}
