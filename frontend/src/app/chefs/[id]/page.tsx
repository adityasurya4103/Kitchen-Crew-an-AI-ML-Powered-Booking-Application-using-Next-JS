import { mockChefs } from "@/constants/chefs";
import { notFound } from "next/navigation";

interface Props {
    params: { id: string };
}

export default function ChefDetailPage({ params }: Props) {
    const chef = mockChefs.find((c) => c.id === params.id);

    if (!chef) return notFound();

    return (
        <main className="p-6">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
                <img src={chef.image} alt={chef.name} className="w-full h-60 object-cover" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold">{chef.name}</h1>
                    <p className="text-gray-600 mt-2">{chef.cuisine} cuisine • {chef.location}</p>
                    <p className="mt-4">⭐ Rating: {chef.rating}</p>
                    <p className="mt-2">💰 Price per hour: ₹{chef.pricePerHour}</p>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">About</h2>
                        <p>
                            {chef.name} is an experienced chef specializing in {chef.cuisine} cuisine.
                            Available for home cooking and events. Known for hygiene, taste, and punctuality.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
