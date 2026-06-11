"use client";

import React, { useMemo, useState } from "react";
import content from "@/app/content/about.visionMission";
import { Eye, Target, CheckCircle2, Sparkles } from "lucide-react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function toneStyles(tone) {
  if (tone === "accent") {
    return {
      pillActive: "text-white shadow-sm",
      pillActiveStyle: {
        background:
          "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
      },
      accentStyle: { background: "var(--accent)" },
      ring: "ring-black/10",
    };
  }
  if (tone === "gold") {
    return {
      pillActive: "text-white shadow-sm",
      pillActiveStyle: {
        background:
          "linear-gradient(135deg, var(--gold) 0%, var(--accent) 100%)",
      },
      accentStyle: { background: "var(--gold)" },
      ring: "ring-black/10",
    };
  }
  // primary default
  return {
    pillActive: "text-white shadow-sm",
    pillActiveStyle: {
      background:
        "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
    },
    accentStyle: { background: "var(--primary)" },
    ring: "ring-black/10",
  };
}

export default function VisionMissionSection() {
  const blocks = content?.blocks || [];

  // Find vision and mission blocks
  const visionBlock = blocks.find((b) => b.title === "Our Vision") || {};
  const missionBlock = blocks.find((b) => b.title === "Our Mission") || {};

  return (
    <section className="section py-16 sm:py-20">
      <div className="container-page max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold mb-4"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface-2)",
              color: "var(--text)",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            About ALKA
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-4xl mb-3"
            style={{ color: "var(--text)" }}
          >
            Our Vision & Mission
          </h2>

          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--primary), var(--accent))",
            }}
          />
        </div>

        {/* Vision & Mission Cards - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <div
            className="relative h-full overflow-hidden rounded-3xl p-8 lg:p-10 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--primary-rgb), 0.05), rgba(var(--surface-rgb), 0.8))",
              border: "1px solid var(--border)",
            }}
          >
            {/* Decorative top accent */}
            <div
              className="absolute left-0 top-0 h-1.5 w-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--primary), var(--accent))",
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="grid h-14 w-14 place-items-center rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary), var(--accent))",
                  }}
                >
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3
                  className="font-serif text-2xl sm:text-3xl"
                  style={{ color: "var(--text)" }}
                >
                  Our Vision
                </h3>
              </div>

              <div className="space-y-4 flex-1">
               

                <p
                  className="text-base text-justify leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  <RichText text={visionBlock.content4} />
                </p>

                <br/>

                {visionBlock.content4 && (
                  <p
                    className="text-base text-justify leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <RichText text={visionBlock.content2} />
                  </p>
                )}
              </div>

              {/* Quote/Impact Badge */}
              {visionBlock.quote && (
                <div className="mt-auto pt-6">
                  <div
                    className="h-px w-full mb-4"
                    style={{ background: "var(--border)" }}
                  />
                  <div
                    className="flex items-start gap-3 rounded-2xl p-4"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Sparkles
                      className="h-4 w-4 mt-0.5"
                      style={{ color: "var(--primary)" }}
                    />
                    <p
                      className="text-sm italic font-bold leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <RichText text={visionBlock.quote} />
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="relative h-full overflow-hidden rounded-3xl p-8 lg:p-10 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--accent-rgb), 0.05), rgba(var(--surface-rgb), 0.8))",
              border: "1px solid var(--border)",
            }}
          >
            {/* Decorative top accent */}
            <div
              className="absolute left-0 top-0 h-1.5 w-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), var(--primary))",
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="grid h-14 w-14 place-items-center rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--primary))",
                  }}
                >
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3
                  className="font-serif text-2xl sm:text-3xl"
                  style={{ color: "var(--text)" }}
                >
                  Our Mission
                </h3>
              </div>

              <div className="space-y-4 flex-1">
                {missionBlock.content1 && (
                  <p
                    className="text-base text-justify leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <RichText text={missionBlock.content1} />
                  </p>
                )}

               
              </div>

             
              {/* Impact Badge */}
              {missionBlock.quote && (
                <div className="mt-auto pt-6">
                  <div
                    className="h-px w-full mb-4"
                    style={{ background: "var(--border)" }}
                  />
                  <div
                    className="rounded-2xl p-4"
                 
                     style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="h-4 w-4 mt-0.5"
                        style={{ color: "var(--accent)" }}
                      />
                      <p
                        className="text-sm italic font-bold leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <RichText text={missionBlock.quote} />
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );

  function RichText({ text }) {
    if (!text) return null;

   
    const parts = String(text).split(/(<b>.*?<\/b>)/g);

    return (
      <>
        {parts.map((part, i) => {
          const match = part.match(/^<b>(.*?)<\/b>$/);
          if (match) {
            return (
              <strong key={i} style={{ color: "var(--text)" }}>
                {match[1]}
              </strong>
            );
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </>
    );
  }
}
