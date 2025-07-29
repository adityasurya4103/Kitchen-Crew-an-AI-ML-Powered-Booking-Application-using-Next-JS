// src/app/chefs/page.tsx

import ChefCard from "@/components/ChefCard";
import { mockChefs } from "@/constants/chefs";

export default function ChefsPage() {
    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">Available Chefs 👨‍🍳</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {mockChefs.map((chef) => (
                    <ChefCard key={chef.id} chef={chef} />
                ))}
            </div>
        </main>
    );
}
