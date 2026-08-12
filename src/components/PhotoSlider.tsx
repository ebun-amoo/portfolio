"use client";

import { useEffect, useRef } from "react";
import { about } from "@/content/data";

const NORMAL_RATE = 1;
const SLOW_RATE = 0.25;
const SET_REPEATS = 4;
const SPEED = 80;

export default function PhotoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const photos = about.photos;

  const setRate = (rate: number) => {
    trackRef.current?.getAnimations().forEach((animation) => {
      animation.playbackRate = rate;
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const recalculate = () => {
      const distance = track.scrollWidth / 2;
      const duration = distance / SPEED;
      track.style.setProperty("--marquee-duration", `${duration}s`);
    };

    recalculate();

    const observer = new ResizeObserver(recalculate);
    observer.observe(track);

    return () => observer.disconnect();
  }, [photos]);

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
      <div ref={trackRef} className="marquee-track flex w-max gap-4">
        {track.map((photo, i) => {
          const isRealInstance = i < photos.length;
          return photo.type === "video" ? (
            <video
              key={`${photo.src}-${i}`}
              src={isRealInstance ? photo.src : undefined}
              // poster={photo.poster} no video file for now
              autoPlay={isRealInstance}
              muted
              loop
              playsInline
              preload={isRealInstance ? "auto" : "none"}
              aria-hidden={!isRealInstance}
              className="h-64 sm:h-80 md:h-96 w-auto flex-shrink-0 rounded-2xl object-cover bg-sage/25"
            />
          ) : (
            <img
              key={`${photo.src}-${i}`}
              src={photo.src}
              alt={photo.alt}
              aria-hidden={!isRealInstance}
              className="h-64 sm:h-80 md:h-96 w-auto flex-shrink-0 rounded-2xl object-cover bg-sage/25 border border-line"
            />
          );
        })}
      </div>
    </div>
  );
}
