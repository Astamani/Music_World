"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const MusicTestimonalCards = () => {
    return (
        <div className="h-[45rem]  antialiased bg-white dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Here our Harmony:Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8xl">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
}

let testimonials = [
    {
        "quote": "This website has an incredible music collection! I've discovered countless new favorites that inspire me every day.",
        "name": "John Doe",
        "title": "Music Enthusiast"
    },
    {
        "quote": "The user experience is unparalleled. Navigating through the vast library of music feels like an adventure in itself.",
        "name": "Jane Smith",
        "title": "Music Blogger"
    },
    {
        "quote": "The recommendations are always spot on! I've found so many new artists who push the boundaries of music.",
        "name": "Bob Johnson",
        "title": "DJ"
    },
    {
        "quote": "This platform is a haven for both casual listeners and hardcore music aficionados. It's a source of endless inspiration.",
        "name": "Alice Williams",
        "title": "Music Critic"
    },
    {
        "quote": "The streaming quality is top-notch, and the range of genres available is simply astounding. It's a game-changer for music lovers.",
        "name": "Michael Brown",
        "title": "Music Producer"
    },
    {
        "quote": "The personalized playlists are incredible! It's like having a DJ who knows exactly what I need to hear to stay motivated and energized.",
        "name": "Emily Davis",
        "title": "College Student"
    }
]

