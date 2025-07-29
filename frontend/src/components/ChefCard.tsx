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

export default function ChefCard({ chef }: ChefProps) {
    return (
        <div className="border rounded-2xl overflow-hidden shadow-md bg-white">
            <img src={chef.image} alt={chef.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{chef.name}</h2>
                <p className="text-sm text-gray-600">{chef.cuisine} | {chef.location}</p>
                <p className="mt-2 text-sm">⭐ {chef.rating} | ₹{chef.pricePerHour}/hr</p>
            </div>
        </div>
    );
}
