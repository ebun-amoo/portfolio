"use client";

import { useRef } from "react";
import { about } from "@/content/data";

const NORMAL_RATE = 1;
const SLOW_RATE = 0.5;
const SET_REPEATS = 4;

export default function PhotoSlider() {
  const photos = about.photos;
  const trackRef = useRef<HTMLDivElement>(null);

  const setRate = (rate: number) => {
    trackRef.current?.getAnimations().forEach((anim) => {
      anim.playbackRate = rate;
    });
  };

  if (photos.length === 0) return null;

  const paddedSet = Array.from({ length: SET_REPEATS }, () => photos).flat();
  const track = [...paddedSet, ...paddedSet];

  return (
    <div
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden"
      role="region"
      aria-label="Photo gallery"
      onMouseEnter={() => setRate(SLOW_RATE)}
      onMouseLeave={() => setRate(NORMAL_RATE)}
    >
      <div ref={trackRef} className="marquee-track flex gap-4">
        {track.map((photo, i) => (
          <img
            key={`${photo.src}-${i}`}
            src={photo.src}
            alt={photo.alt}
            aria-hidden={i >= photos.length}
            className="h-64 sm:h-80 md:h-96 w-auto flex-shrink-0 rounded-2xl object-cover bg-accent-dark/20"
          />
        ))}
      </div>
    </div>
  );
}