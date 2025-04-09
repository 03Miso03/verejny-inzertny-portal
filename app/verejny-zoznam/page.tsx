'use client';
import { useState } from 'react';

export default function ZoznamPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-gray-900 min-h-screen text-white">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-gray-800 p-4 rounded-xl shadow-md transition-transform hover:scale-105"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={`https://picsum.photos/300/200?random=${i}`}
            alt={`Inzerát ${i}`}
            className="rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold">Inzerát {i}</h3>
          <p className="text-sm text-gray-400">Popis ponuky</p>
        </div>
      ))}
    </div>
  );
}