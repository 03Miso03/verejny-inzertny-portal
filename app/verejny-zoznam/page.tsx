'use client'
import React, { useState } from "react";

const listings = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Inzerentka ${i + 1}, ${20 + (i % 10)}`,
  location: ["Bratislava", "Košice", "Žilina"][i % 3],
  image: `https://picsum.photos/300/200?random=${i + 10}`,
  imageAlt: `https://picsum.photos/300/200?random=${i + 40}`,
  online: i % 2 === 0,
}));

export default function Listings() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-gray-900 min-h-screen text-white">
      <style>{`
        .flip-container { perspective: 1000px; }
        .flip-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.6s; }
        .flip-inner.flipped { transform: rotateY(180deg); }
        .flip-front, .flip-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; }
        .flip-back { transform: rotateY(180deg); }
      `}</style>
      {listings.map((listing) => (
        <div
          key={listing.id}
          onMouseEnter={() => setHovered(listing.id)}
          onMouseLeave={() => setHovered(null)}
          className="rounded-xl overflow-hidden bg-black/40 backdrop-blur text-white border border-gray-700 shadow-md hover:shadow-lg transition"
        >
          <div className="relative">
            {listing.online && (
              <div className="absolute top-0 left-0 bg-green-500 text-xs text-white px-2 py-1 rounded-br-xl font-bold animate-pulse">
                ONLINE CHAT
              </div>
            )}
            <div className="w-full h-72 flip-container">
              <div className={`flip-inner ${hovered === listing.id ? "flipped" : ""}`}>
                <img src={listing.image} alt={listing.name} className="flip-front object-cover w-full h-full" />
                <img src={listing.imageAlt} alt={listing.name} className="flip-back object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="p-3">
            <h2 className="text-lg font-semibold">{listing.name}</h2>
            <p className="text-sm text-gray-300">{listing.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}