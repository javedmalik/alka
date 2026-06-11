"use client";

import React from "react";
import Image from "next/image";
import { aboutBanner } from "@/app/content/aboutus.banner";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutIntroCollage() {
  const heroImg = aboutBanner?.collage?.[0];
  const smallImg = aboutBanner?.collage?.[1];
  const heading1 =
    aboutBanner?.intro?.heading?.slice(0, 15) || "Learning Today";
  const heading2 =
    aboutBanner?.intro?.heading?.slice(16, 33) || "Leading Tomorrow";

  return (
    <section className="relative overflow-hidden">
      <div className="container-page max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-14 lg:py-16">
        {/* TOP ROW */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            {/* Big Title with small round image */}
            <div className="flex items-start gap-4">
              <h2
                className="mt-4 font-extrabold tracking-tight leading-[0.95] flex-1"
                style={{ color: "var(--text)" }}
              >
                <span className="block text-5xl sm:text-6xl lg:text-7xl">
                  {heading1}
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl py-5 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
                  {heading2}
                </span>
              </h2>

              
              
            </div>

            <p
              className="mt-6 max-w-full text-[15px] text-justify sm:text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {aboutBanner?.intro?.text || "About us"}
            </p>

            <p
              className="pt-6 max-w-full text-[15px] sm:text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {aboutBanner?.intro?.text2 || "About us"}
            </p>

            <p
              className="pt-6 mx-auto max-w-4xl text-center text-[16px] sm:text-2xl leading-relaxed font-bold italic"
              style={{ color: "var(--text)" }}
            >
              {aboutBanner?.intro?.text3 || "About us"}
            </p>
            <p
              className="pt-6 max-w-full text-[15px] sm:text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {aboutBanner?.intro?.text4 || "About us"}
            </p>

          </div>
          

          {/* RIGHT: SINGLE CIRCLE IMAGE */}
          <div className="lg:col-span-4">
            <div className="relative flex justify-center lg:justify-end">
              {/* circular ring with text feel */}
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
                {/* Outer text ring */}
                <div className="absolute -inset-8 flex items-center justify-center pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <path
                        id="circleTextPath"
                        d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                        fill="none"
                      />
                    </defs>
                    <text
                      fill="currentColor"
                      fontSize="10"
                      fontWeight="600"
                      letterSpacing="1.5"
                    >
                      <textPath href="#circleTextPath" startOffset="0%">
                        <tspan fill="var(--accent)">LEARNING TODAY </tspan>
                        <tspan fill="var(--text-muted)">• </tspan>
                        <tspan fill="var(--primary)">LEADING TOMORROW </tspan>
                        <tspan fill="var(--text-muted)">• </tspan>
                        <tspan fill="var(--accent)">LEARNING TODAY </tspan>
                        <tspan fill="var(--text-muted)">• </tspan>
                        <tspan fill="var(--primary)">LEADING TOMORROW </tspan>
                      </textPath>
                    </text>
                  </svg>
                </div>

                
                <div className="absolute inset-6 overflow-hidden rounded-full">
                  {heroImg?.src && (
                    <Image
                      src={heroImg.src}
                      alt={heroImg.alt || "ALKA"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 340px, 380px"
                      priority
                    />
                  )}

                  {/* soft gloss */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.18), transparent 50%)",
                    }}
                  />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] opacity-60 blur-md" />
                <div className="absolute -right-2 -bottom-2 h-4 w-4 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--accent)] opacity-60 blur-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-center">
          {/* Bottom-left small image */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              {/* Multiple small images */}
              <div className="flex items-center -space-x-3">
                {(aboutBanner?.collage || []).slice(1, 5).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-14 w-14 overflow-hidden rounded-full"
                    style={{
                      border: "2px solid var(--surface)",
                      boxShadow: "0 10px 22px rgba(0,0,0,0.10)",
                      background: "var(--surface)",
                      zIndex: 10 - idx,
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || `ALKA ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ))}
              </div>

              {/* Text */}
              <div>
                <div
                  className="text-lg font-extrabold"
                  style={{ color: "var(--text)" }}
                >
                  {aboutBanner?.intro?.statValue || "10,000+"}
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {aboutBanner?.intro?.statLabel || "People impacted"}
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Features */}
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="text-sm font-bold"
                style={{ color: "var(--text)" }}
              >
                {aboutBanner?.intro?.points?.[0]?.title}
              </div>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {aboutBanner?.intro?.points?.[0]?.text}
              </p>
            </div>
          </div>

          {/* Right: Our story + arrow button */}
          <div className="lg:col-span-4">
            <div className="flex items-stretch gap-4">
              <div
                className="flex-1 rounded-2xl p-5"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="text-sm font-bold"
                  style={{ color: "var(--text)" }}
                >
                  {aboutBanner?.intro?.rightTitle || "Our story"}
                </div>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {aboutBanner?.intro?.rightText ||
                    "Purpose-led learning that transforms perspective and strengthens communities."}
                </p>
              </div>
              <Link
                href="/gallery"
                className="h-auto w-14 rounded-2xl grid place-items-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
                  color: "white",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
                }}
                aria-label="Explore"
              >
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
