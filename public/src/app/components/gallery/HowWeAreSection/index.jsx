"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import information from "@/app/content/info";
import howWeAreContent from "@/app/content/about.howWeAre";
import {
  Quote,
  Sparkles,
  Flame,
  Lightbulb,
  HeartHandshake,
  ChevronRight,
  Star,
  Award,
  Target,
  Compass,
  Eye,
  Zap,
  Gem,
} from "lucide-react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function HowWeAreSection() {
  const trustees = useMemo(() => information.companyTrustee || [], []);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Only use the first trustee
  const firstTrustee = trustees[0] || {};
  const firstTrusteeText = howWeAreContent.trustees[0] || {};

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
      // style={{
      //   background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)"
      // }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 border border-[var(--accent)]/20 rounded-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-20 w-48 h-48 border border-[var(--primary)]/20 rounded-full"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--accent)]/5 to-[var(--primary)]/5 blur-3xl"
        />

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--text) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container-page max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Header with decorative elements */}
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          

          <motion.h2
            variants={fadeInUp}
            className="mt-6 font-serif text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            <span className="block" style={{ color: "var(--text)" }}>{howWeAreContent.title}</span>
            <span className="block mt-2 text-2xl sm:text-2xl lg:text-2xl font-light" style={{ color: "var(--text-muted)" }}>
              {howWeAreContent.subtitle}
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--gold)]"
          />
        </motion.div>

        {/* Main content - Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Profile Card with Creative Design */}
          <motion.div 
            variants={fadeInLeft}
            className="lg:col-span-7"
          >
            <div className="relative group">
              {/* Background card with depth */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--gold)] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                style={{
                  background: "rgba(var(--surface-rgb), 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(var(--accent-rgb), 0.2)",
                }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(90deg, var(--accent), var(--primary), var(--gold), var(--accent))",
                    backgroundSize: "300% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                />
                
                {/* Inner content */}
                <div className="relative m-[2px] rounded-3xl overflow-hidden" style={{ background: "var(--surface)" }}>
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-br-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--primary)]/20 to-transparent rounded-tl-3xl" />
                  
                  <div className="relative p-8 lg:p-10">
                    {/* Profile header with creative layout */}
                    <div className="flex flex-col md:flex-row items-start gap-8 mb-2">
                      {/* Image with artistic frame */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--gold)] rounded-2xl blur-lg opacity-70 animate-pulse" />
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 overflow-hidden rounded-2xl shadow-2xl">
                          {firstTrustee.image ? (
                            <Image
                              src={firstTrustee.image}
                              alt={firstTrustee.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-102"
                              sizes="176px"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 flex items-center justify-center">
                              <span className="text-4xl font-bold text-[var(--accent)]">{initials(firstTrustee.name)}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Floating badges */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] flex items-center justify-center shadow-xl"
                        >
                          <Award className="h-5 w-5 text-white" />
                        </motion.div>
                        
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4, type: "spring" }}
                          className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] flex items-center justify-center shadow-xl"
                        >
                          <Star className="h-4 w-4 text-white fill-white" />
                        </motion.div>
                      </div>

                      {/* Name and role with gradient */}
                      <div className="flex-1">
                        <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-3" style={{ background: "rgba(var(--accent-rgb), 0.1)", color: "var(--accent)" }}>
                          LEADERSHIP
                        </div>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                          <span className="block" style={{ color: "var(--text)" }}>{firstTrustee.name}</span>
                          <span className="block mt-1 text-lg sm:text-xl font-medium" style={{ color: "var(--text-muted)" }}>
                            {firstTrustee.role || "Trustee"}
                          </span>
                        </h3>
                        
                      
                      </div>
                    </div>

                    {/* About section with creative quote styling */}
                    <div className="relative mb-1">
                      {/* <Quote className="absolute -left-2 -top-2 h-12 w-12" style={{ color: "var(--accent)", opacity: 0.2 }} /> */}
                      <div
                        className="relative p-6 rounded-2xl"
                        style={{
                          background: "linear-gradient(135deg, rgba(var(--surface-2-rgb), 0.7), rgba(var(--surface-rgb), 0.9))",
                          border: "1px solid rgba(var(--accent-rgb), 0.2)",
                        }}
                      >
                        <p className="text-xs font-bold leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          {howWeAreContent.trusteeText1}  {howWeAreContent.trusteeText2}
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          •{howWeAreContent.trusteeText3} <br/>
                          •{howWeAreContent.trusteeText4} <br/>
                          •{howWeAreContent.trusteeText5} <br/>
                          •{howWeAreContent.trusteeText6} <br/>
                        </p>
                        <p></p>
                        <p className="text-xs font-bold leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          {howWeAreContent.trusteeText7} <br/>
                     
                        </p>
                        <p><br/></p>
                         <p className="text-xs font-bold text-justify leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        ✨ {howWeAreContent.trusteeText8} <br/>
                     
                        </p>
                        
                      </div>
                    </div>

                    {/* Message card with enhanced design */}
                    <div
                      className="relative overflow-hidden rounded-2xl p-6"
                      style={{
                        background: "linear-gradient(135deg, rgba(var(--primary-rgb), 0.05), rgba(var(--accent-rgb), 0.05))",
                        border: "1px solid rgba(var(--accent-rgb), 0.2)",
                      }}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--accent)]/20 to-transparent rounded-bl-3xl" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent rounded-tr-3xl" />
                      
                      <div className="flex items-start gap-4 relative">
                        <div
                          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, var(--primary), var(--accent))",
                          }}
                        >
                          <HeartHandshake className="h-7 w-7 text-white" />
                        </div>
                        
                        <div>
                          <div className="text-sm font-extrabold mb-1" style={{ color: "var(--text)" }}>
                            Message to the community
                          </div>
                          <p className="text-base italic text-justify"  style={{ color: "var(--text-muted)" }}>
                            "{howWeAreContent.trusteeText9}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Creative Cards Grid */}
          <motion.div 
            variants={fadeInRight}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-1 gap-6 h-full">
              {/* Motivation Card - Creative Design */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div
                  className="relative overflow-hidden rounded-2xl p-6 shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, var(--surface), var(--surface-2))",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--accent)]/10 to-transparent rounded-bl-3xl" />
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-xl blur opacity-50" />
                      <div
                        className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, var(--accent), var(--primary))",
                        }}
                      >
                        <Flame className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>Motivation</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 fill-[var(--accent)] text-[var(--accent)]" />
                        <Star className="h-3 w-3 fill-[var(--accent)] text-[var(--accent)]" />
                        <Star className="h-3 w-3 fill-[var(--accent)] text-[var(--accent)]" />
                        <Star className="h-3 w-3 fill-[var(--accent)] text-[var(--accent)]" />
                        <Star className="h-3 w-3 fill-[var(--accent)] text-[var(--accent)]" />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {firstTrusteeText.motivation}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-end">
                    <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>Driving force</span>
                  </div>
                </div>
              </div>

              {/* Inspiration Card - Split Design */}
              <div className="relative group">
                <div
                  className="overflow-hidden rounded-2xl shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, var(--surface-2), var(--surface))",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="grid grid-cols-3 gap-0">
                    <div
                      className="col-span-1 p-4 flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      }}
                    >
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <div className="col-span-2 p-4">
                      <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>Inspiration</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {firstTrusteeText.inspiration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Card - Full Width with Gradient Border */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--gold)] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div
                  className="relative overflow-hidden rounded-2xl p-6 shadow-xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, var(--gold), var(--accent))",
                      }}
                    >
                      <HeartHandshake className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>Vision for ALKA</h3>
                  </div>
                  
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {firstTrusteeText.thought}
                  </p>
                  
                  <div className="mt-4 flex justify-end">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]" />
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--gold)]" />
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--accent)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute left-10 bottom-20 w-20 h-20 border border-[var(--accent)]/20 rounded-full -z-5" />
        <div className="absolute right-10 top-40 w-32 h-32 border border-[var(--primary)]/20 rounded-lg rotate-12 -z-5" />
      </div>
    </motion.section>
  );
}