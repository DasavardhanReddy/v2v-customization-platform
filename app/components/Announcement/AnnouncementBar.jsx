"use client";

import { useState, useEffect} from "react";
import announcements from "./announcement";

export default function AnnouncementBar() {

    const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
    const currentOffer = announcements[currentAnnouncement];
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentAnnouncement(function (previous) {
            return (previous + 1) % announcements.length;
        });
    }, 3000);
    const timeout = setTimeout(()=>{
        setIsAnimating(true);
    },2000);

    return () => {

        clearInterval(interval);
        clearTimeout(timeout);

    };
}, []);

    return (
        <section className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700">
    <div className="mx-auto flex h-72 max-w-7xl items-center justify-between px-6">
        {/* Announcement */}
        <div>
            <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
                {announcements[currentAnnouncement].title}
            </span>
            <p className="mt-3 text-sm text-slate-400">
                {isAnimating ? "Animating" : "Idle"}
            </p>
        </div>
        {/* Vehicle Image*/}
        <div className="relative h-64 w-[500px]">
            <Image
                src={announcements[currentAnnouncement].image}
                alt={announcements[currentAnnouncement].title}
                fill
                className="object-contain"
            />
        </div> 

        {/* Counter */}
        <span className="text-sm text-slate-400">
            {currentAnnouncement + 1} / {announcements.length}
        </span>

    </div>

</section>
    );
    
}