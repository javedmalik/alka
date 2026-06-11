"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import alkaCards from "@/app/content/home.alkaCards";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Target,
  Award,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";


const MotionLink = motion(Link);

function toneBg(tone) {
  switch (tone) {
    case "danger":
      return "var(--danger)";
    case "accent":
      return "var(--alka2)";
    case "gold":
      return "var(--alka3)";
    case "success":
      return "var(--alka4)";
    case "primary":
    default:
      return "var(--alka1)";
  }
}

function toneSoft(tone) {
  const bg = toneBg(tone);
  return `color-mix(in oklab, ${bg}, white 10%)`;
}

function getIcon(tone) {
  switch (tone) {
    case "danger":
      return <Heart className="h-4 w-4" />;
    case "accent":
      return <Zap className="h-4 w-4" />;
    case "gold":
      return <Award className="h-4 w-4" />;
    case "success":
      return <Target className="h-4 w-4" />;
    default:
      return <Star className="h-4 w-4" />;
  }
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function AlkaCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Parallax effect for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    //   className="relative z-30 overflow-visible bg-gradient-to-b from-[var(--surface)] to-[var(--surface-2)] pt-16 pb-0 sm:pt-20 sm:pb-0"
    className="relative z-30 pt-16 pb-0 sm:pt-20 sm:pb-0"
    >
    
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {/* Gradient orbs with parallax */}
        <motion.div
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full blur-3xl"
         
        />

        <motion.div
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full blur-3xl"
          
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--text) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            opacity: 0.02,
          }}
        />
      </div>

     
      <div className="container-page max-w-[1600px] relative z-20">
       
        <div
          className="relative z-30 
          -mt-30          /* mobile */
          xs:-mt-16       /* small phones */
          sm:-mt-20       /* tablets */
          md:-mt-24       /* small laptops */
          lg:-mt-32       /* large laptops */
          xl:-mt-40       /* desktops */
          2xl:-mt-44      /* large desktops */
        "
        >
          {/* Cards grid */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
            {alkaCards.items.map((c, idx) => {
              const bg = toneBg(c.tone);
              const softBg = toneSoft(c.tone);
              const isHovered = hoveredIndex === idx;

              return (
                <motion.div
                  key={c.key}
                  variants={fadeInUp}
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border shadow-lg sm:shadow-xl"
                  style={{
                    borderColor: isHovered ? bg : "var(--border)",
                    background: "var(--surface)",
                    boxShadow: isHovered
                      ? `0 20px 40px -15px ${bg}`
                      : "0 10px 30px -12px rgba(0,0,0,0.25)",
                    transition:
                      "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  }}
                >
                  {/* Solid background overlay */}
                  <div
                    className="absolute inset-0 bg-[var(--surface)]"
                    style={{ zIndex: -1 }}
                  />

                  {/* Animated top accent */}
                  <motion.div
                    className="absolute left-0 top-0 w-full"
                    initial={{ height: 3 }}
                    animate={{ height: isHovered ? 5 : 3 }}
                    style={{ background: bg }}
                  />

                  {/* Corner glow - adjusted for mobile */}
                  <motion.div
                    className="pointer-events-none absolute -right-12 sm:-right-16 -top-12 sm:-top-16 h-32 sm:h-48 w-32 sm:w-48 rounded-full blur-2xl sm:blur-3xl"
                    style={{ background: bg }}
                    animate={{
                      opacity: isHovered ? 0.2 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating particles - disabled on mobile for performance */}
                  <AnimatePresence>
                    {isHovered && window.innerWidth > 640 && (
                      <>
                        {[...Array(2)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                            animate={{
                              opacity: [0, 0.3, 0],
                              scale: [0, 0.8, 0],
                              x: [0, (i - 1) * 30],
                              y: [0, -30 - i * 15],
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="absolute h-1.5 w-1.5 rounded-full"
                            style={{ background: bg, left: "50%", top: "50%" }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  {/* Content wrapper */}
                  <div className="relative p-4 sm:p-7 bg-[var(--surface)] flex flex-col h-full">
                    {/* Number + icon bubble */}
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <motion.div
                        animate={
                          isHovered
                            ? {
                                rotate: [0, -5, 5, 0],
                                scale: [1, 1.05, 1],
                              }
                            : {}
                        }
                        transition={{ duration: 0.4 }}
                        className="inline-flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${softBg} 0%, ${bg} 100%)`,
                          border: "1px solid rgba(255,255,255,0.2)",
                          color: "white",
                        }}
                      >
                        <span className="relative z-10 text-xs sm:text-sm font-extrabold">
                          {/* {String(idx + 1).padStart(2, "0")} */}
                           {"ALKA"[idx] ?? String(idx + 1)}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={
                            isHovered
                              ? { opacity: 0.15, scale: 1 }
                              : { opacity: 0, scale: 0 }
                          }
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      <motion.div
                        animate={
                          isHovered
                            ? { scale: 1.03, y: -1 }
                            : { scale: 1, y: 0 }
                        }
                        className="rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold backdrop-blur-sm flex items-center gap-1"
                        style={{
                          background: "rgba(var(--surface-2-rgb), 0.9)",
                          border: "1px solid var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {getIcon(c.tone)}
                        {/* {c.title} */}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 pt-2 sm:mt-5 font-serif text-xl sm:text-lg leading-tight text-[var(--text)]">
                      {c.title}
                    </h3>

                    {/* Animated divider */}
                    <motion.div
                      className="mt-3 sm:mt-4 h-0.5 sm:h-1 rounded-full"
                      style={{ background: bg }}
                      animate={
                        isHovered ? { width: "60px" } : { width: "40px" }
                      }
                      transition={{ duration: 0.3 }}
                    />

                    {/* Description - shorter on mobile */}
                    <p
                      className="mt-3 sm:mt-4 text-xs sm:text-sm text-justify leading-relaxed line-clamp-3 sm:line-clamp-none"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {c.desc}
                    </p>

                 
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 sm:h-1"
                    style={{ background: bg }}
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA - responsive margin */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 sm:mt-8 md:mt-10 text-center"
        >
          <MotionLink
            href="/gallery"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-lg group"
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
              color: "white",
              boxShadow: "0 8px 20px -8px var(--accent)",
            }}
          >
            <span>Explore All Initiatives</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.div>
          </MotionLink>
        </motion.div>

      
      </div>
    </motion.section>
  );
}