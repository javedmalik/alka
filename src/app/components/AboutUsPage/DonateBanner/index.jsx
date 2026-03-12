"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import donateBanner from "@/app/content/donate.banner";
import { Play, X } from "lucide-react";

export default function DonateBanner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [isPlaying]);

  return (
    <section className="section -mt-22">
      <div className="container-page max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Image / Video Card */}
          <div
            className="relative overflow-hidden rounded-3xl shadow-lg"
            style={{ background: "var(--surface)" }}
          >
            <div className="relative h-[220px] sm:h-[260px] md:h-[290px]">
              {!isPlaying ? (
                <>
                  <Image
                    src={donateBanner.image}
                    alt={donateBanner.imageAlt}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-black/10" />

                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play video"
                    className="group absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full shadow-md transition hover:scale-105 active:scale-95"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, var(--success), white 10%) 0%, var(--success) 100%)",
                    }}
                  >
                    <Play className="h-5 w-5 text-white" fill="white" />
                  </button>
                </>
              ) : (
                <div className="absolute inset-0">
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    src={donateBanner.videoHref}
                    controls
                    playsInline
                    muted
                    autoPlay
                  />

                  <button
                    type="button"
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                      }
                      setIsPlaying(false);
                    }}
                    aria-label="Close video"
                    className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/75"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Text Block */}
          <div className="mt-10 text-center">
            <div
              className="text-[10px] font-extrabold tracking-[0.26em]"
              style={{ color: "var(--text-muted)" }}
            >
              {donateBanner.kicker}
            </div>

            <h2
              className="mx-auto py-5 max-w-full font-serif text-2xl font-extrabold leading-tight sm:text-3xl"
              style={{ color: "var(--text)" }}
            >
              {donateBanner.title}
            </h2>

            <p
              className="mx-auto mt-3 max-w-full text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--text-muted)" }}
            >
              {donateBanner.description}
            </p>

            <div className="mt-6">
              <a
                href={donateBanner.buttonHref}
                className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
                }}
              >
                {donateBanner.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
