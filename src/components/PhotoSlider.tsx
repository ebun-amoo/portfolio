"use client";

import { useEffect, useRef } from "react";
import { about } from "@/content/data";

const NORMAL_RATE = 2;
const SLOW_RATE = 0.5;
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
    if (!trackRef.current) return;

    const distance = trackRef.current.scrollWidth / 2;
    const duration = distance / SPEED;

    trackRef.current.style.setProperty(
      "--marquee-duration",
      `${duration}s`
    );
  }, [photos]);

  if (photos.length === 0) return null;

  const paddedSet = Array.from(
    { length: SET_REPEATS },
    () => photos
  ).flat();

  const track = [...paddedSet, ...paddedSet];

  return (
    <div
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden"
      role="region"
      aria-label="Photo gallery"
      onMouseEnter={() => setRate(SLOW_RATE)}
      onMouseLeave={() => setRate(NORMAL_RATE)}
    >
      <div
        ref={trackRef}
        className="marquee-track flex w-max gap-4"
      >
        {track.map((photo, i) =>
          photo.type === "video" ? (
            <video
              key={`${photo.src}-${i}`}
              src={photo.src}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden={i >= photos.length}
              className="h-64 sm:h-80 md:h-96 w-auto flex-shrink-0 rounded-2xl object-cover bg-accent-dark/20"
            />
          ) : (
            <img
              key={`${photo.src}-${i}`}
              src={photo.src}
              alt={photo.alt}
              aria-hidden={i >= photos.length}
              className="h-64 sm:h-80 md:h-96 w-auto flex-shrink-0 rounded-2xl object-cover bg-accent-dark/20"
            />
          )
        )}
      </div>
    </div>
  );
}