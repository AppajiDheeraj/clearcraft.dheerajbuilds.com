"use client";

import Image from "next/image";

export function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Loading website">
      <div className="brand">
        <Image src="/favicon.svg" alt="" width={24} height={24} priority />
        <span>Dheeraj Builds</span>
      </div>
      <div className="preloader-media">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-label="Dheeraj Builds loading animation"
          width={1920}
          height={1080}
          onEnded={(event) =>
            event.currentTarget
              .closest(".preloader")
              ?.classList.add("preloader--leaving")
          }
        >
          <source src="/preloader.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
