"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const images = [
  "/images/civil-1.png",
  "/images/civil-2.png",
  "/images/civil-3.png",
  "/images/civil-4.png",
  "/images/civil-5.png",
];

export default function CivilSlideshow() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex h-full min-w-0 flex-col rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-lg font-bold text-primary">Civil Projects</h2>
      <p className="mt-1 text-xs text-slate-600">
        Road markings and safety walkways delivered with precision.
      </p>
      <div className="relative mt-3 min-h-0 flex-1 overflow-hidden rounded-lg bg-slate-50">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/85 p-1 text-primary shadow-sm transition hover:bg-white hover:text-secondary"
        >
          <FaChevronLeft className="text-xs" aria-hidden />
        </button>
        <div className="min-w-0">
          <img
            key={images[current]}
            src={images[current]}
            alt={`Civil project ${current + 1} of ${images.length}`}
            className="mx-auto block h-auto w-full max-w-full object-contain"
          />
        </div>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/85 p-1 text-primary shadow-sm transition hover:bg-white hover:text-secondary"
        >
          <FaChevronRight className="text-xs" aria-hidden />
        </button>
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === current ? "bg-secondary" : "bg-slate-300"}`}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

