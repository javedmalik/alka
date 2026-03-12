// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// import navbarLinks from "@/app/content/nav.links";
// import logo from "@/app/content/logo";
// import { useTheme } from "@/app/components/common/ThemeProvider";

// function cx(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();
//   const { theme, toggleTheme } = useTheme();

//   // Close menu on route change
//   useEffect(() => setOpen(false), [pathname]);

//   // Prevent scroll when mobile menu open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => (document.body.style.overflow = "");
//   }, [open]);

//   const links = useMemo(() => navbarLinks ?? [], []);

//   return (
//     <header className="sticky top-0 z-50">
//       <div className="border-b" style={{ borderColor: "var(--border)" }}>
//         <nav
//           className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
//           aria-label="Primary"
//         >
//           <div className="flex h-16 items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt || "ALKA"}
//                 width={48}
//                 height={48}
//                 priority
//                 className="h-12 w-12 rounded-xl object-contain"
//               />
//               <div className="hidden sm:block">
//                 <div className="font-serif text-lg leading-tight">ALKA</div>
//                 <div className="text-xs opacity-70" style={{ color: "var(--text-muted)" }}>
//                   NGO • Care • Support
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop nav */}
//             <div className="hidden items-center gap-2 md:flex">
//               <ul className="flex items-center gap-1">
//                 {links.map((res, index) => {
//                   const active = pathname === res.link;
//                   return (
//                     <li key={index}>
//                       <Link
//                         href={res.link}
//                         className={cx(
//                           "rounded-xl px-3 py-2 text-sm font-semibold transition",
//                           active
//                             ? "text-white"
//                             : "hover:bg-black/5"
//                         )}
//                         style={
//                           active
//                             ? { background: "var(--primary)" }
//                             : { color: "var(--navbar-text)" }
//                         }
//                       >
//                         {res.name}
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>

//               {/* Theme toggle */}
//               <button
//                 type="button"
//                 onClick={toggleTheme}
//                 className="btn-ghost h-10 px-4 text-sm"
//                 aria-label="Toggle theme"
//                 title="Toggle theme"
//               >
//                 {theme === "dark" ? "Light" : "Dark"}
//               </button>

//               {/* Donate CTA */}
//               <Link href="/donation" className="btn-accent h-10 px-4 text-sm">
//                 Donate
//               </Link>
//             </div>

//             {/* Mobile controls */}
//             <div className="flex items-center gap-2 md:hidden">
//               <button
//                 type="button"
//                 onClick={toggleTheme}
//                 className="btn-ghost h-10 px-3 text-sm"
//                 aria-label="Toggle theme"
//               >
//                 {theme === "dark" ? "☀️" : "🌙"}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setOpen((v) => !v)}
//                 className="btn-ghost h-10 px-3"
//                 aria-label="Toggle menu"
//                 aria-expanded={open}
//               >
//                 <span className="sr-only">Menu</span>
//                 <div className="flex flex-col gap-1.5">
//                   <span
//                     className={cx(
//                       "h-0.5 w-6 transition",
//                       open ? "translate-y-2 rotate-45" : ""
//                     )}
//                     style={{ background: "var(--text)" }}
//                   />
//                   <span
//                     className={cx("h-0.5 w-6 transition", open ? "opacity-0" : "")}
//                     style={{ background: "var(--text)" }}
//                   />
//                   <span
//                     className={cx(
//                       "h-0.5 w-6 transition",
//                       open ? "-translate-y-2 -rotate-45" : ""
//                     )}
//                     style={{ background: "var(--text)" }}
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden">
//           <div
//             className="fixed inset-0 z-40 bg-black/50"
//             onClick={() => setOpen(false)}
//             aria-hidden="true"
//           />
//           <div
//             className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm p-4 shadow-2xl"
//             style={{ background: "var(--surface)", borderLeft: "1px solid var(--border)" }}
//           >
//             <div className="flex items-center justify-between">
//               <div className="font-serif text-xl">Menu</div>
//               <button
//                 className="btn-ghost h-10 px-3"
//                 onClick={() => setOpen(false)}
//                 aria-label="Close menu"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="mt-4 space-y-2">
//               {links.map((res, index) => {
//                 const active = pathname === res.link;
//                 return (
//                   <Link
//                     key={index}
//                     href={res.link}
//                     className={cx(
//                       "block rounded-xl px-4 py-3 text-base font-semibold transition",
//                       active ? "text-white" : "hover:bg-black/5"
//                     )}
//                     style={active ? { background: "var(--primary)" } : undefined}
//                   >
//                     {res.name}
//                   </Link>
//                 );
//               })}

//               <div className="pt-3">
//                 <Link href="/donation" className="btn-accent w-full">
//                   Donate
//                 </Link>
//               </div>
//             </div>

//             <div className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
//               Theme: <span className="font-semibold">{theme}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// import navbarLinks from "@/app/content/nav.links";
// import logo from "@/app/content/logo";
// import { useTheme } from "@/app/components/common/ThemeProvider";

// function cx(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const pathname = usePathname();
//   const { theme, toggleTheme } = useTheme();

//   const links = useMemo(() => navbarLinks ?? [], []);

//   // Close menu on route change
//   useEffect(() => setOpen(false), [pathname]);

//   // Prevent scroll when mobile menu open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => (document.body.style.overflow = "");
//   }, [open]);

//   // Add "scrolled" state for nicer sticky header
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50">
//       {/* glassy backdrop */}
//       <div
//         className={cx(
//           "border-b backdrop-blur supports-[backdrop-filter]:bg-white/65",
//           scrolled ? "shadow-sm" : ""
//         )}
//         style={{
//           borderColor: "var(--border)",
//           background: scrolled
//             ? "color-mix(in oklab, var(--surface), transparent 10%)"
//             : "color-mix(in oklab, var(--surface), transparent 28%)",
//         }}
//       >
//         <nav
//           className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
//           aria-label="Primary"
//         >
//           <div className="flex h-16 items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="group flex items-center gap-3">
//               <div className="relative">
//                 <div
//                   className="absolute -inset-1 rounded-2xl opacity-0 blur-md transition group-hover:opacity-30"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, var(--primary) 0%, var(--accent) 55%, var(--gold) 100%)",
//                   }}
//                 />
//                 <Image
//                   src={logo.src}
//                   alt={logo.alt || "ALKA"}
//                   width={48}
//                   height={48}
//                   priority
//                   className="relative h-12 w-12 rounded-2xl object-contain"
//                   style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
//                 />
//               </div>

//               <div className="hidden sm:block">
//                 <div className="font-serif text-lg leading-tight">ALKA</div>
//                 <div className="text-xs" style={{ color: "var(--text-muted)" }}>
//                   Aware • Learn • Know • Apply
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop nav */}
//             <div className="hidden items-center gap-3 md:flex">
//               {/* pill nav */}
//               <div
//                 className="flex items-center rounded-2xl border p-1"
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
//               >
//                 <ul className="flex items-center gap-1">
//                   {links.map((res, index) => {
//                     const active =
//                       pathname === res.link ||
//                       (res.link !== "/" && pathname?.startsWith(res.link));

//                     return (
//                       <li key={index}>
//                         <Link
//                           href={res.link}
//                           className={cx(
//                             "inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold transition",
//                             active ? "text-white" : "hover:bg-black/5"
//                           )}
//                           style={
//                             active
//                               ? {
//                                   background:
//                                     "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
//                                 }
//                               : { color: "var(--text)" }
//                           }
//                         >
//                           {res.name}
//                         </Link>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>

//               {/* Theme toggle */}
//               <button
//                 type="button"
//                 onClick={toggleTheme}
//                 className="inline-flex h-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
//                 aria-label="Toggle theme"
//                 title="Toggle theme"
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)", color: "var(--text)" }}
//               >
//                 {theme === "dark" ? "☀️" : "🌙"}
//               </button>

//               {/* Donate CTA */}
//               <Link
//                 href="/donation"
//                 className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md active:opacity-90"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, var(--accent) 0%, var(--danger) 100%)",
//                 }}
//               >
//                 Donate
//               </Link>
//             </div>

//             {/* Mobile controls */}
//             <div className="flex items-center gap-2 md:hidden">
//               <button
//                 type="button"
//                 onClick={toggleTheme}
//                 className="inline-flex h-10 items-center justify-center rounded-xl border px-3 text-sm transition"
//                 aria-label="Toggle theme"
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)", color: "var(--text)" }}
//               >
//                 {theme === "dark" ? "☀️" : "🌙"}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setOpen((v) => !v)}
//                 className="inline-flex h-10 items-center justify-center rounded-xl border px-3 transition"
//                 aria-label="Toggle menu"
//                 aria-expanded={open}
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
//               >
//                 <span className="sr-only">Menu</span>
//                 <div className="flex flex-col gap-1.5">
//                   <span
//                     className={cx("h-0.5 w-6 transition", open ? "translate-y-2 rotate-45" : "")}
//                     style={{ background: "var(--text)" }}
//                   />
//                   <span
//                     className={cx("h-0.5 w-6 transition", open ? "opacity-0" : "")}
//                     style={{ background: "var(--text)" }}
//                   />
//                   <span
//                     className={cx("h-0.5 w-6 transition", open ? "-translate-y-2 -rotate-45" : "")}
//                     style={{ background: "var(--text)" }}
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden">
//           <div
//             className="fixed inset-0 z-40 bg-black/50"
//             onClick={() => setOpen(false)}
//             aria-hidden="true"
//           />

//           <div
//             className="fixed right-0 top-0 z-50 h-full w-[90%] max-w-sm overflow-y-auto p-4 shadow-2xl"
//             style={{ background: "var(--surface)", borderLeft: "1px solid var(--border)" }}
//           >
//             <div className="flex items-center justify-between">
//               <div className="font-serif text-xl">Menu</div>
//               <button
//                 className="inline-flex h-10 items-center justify-center rounded-xl border px-3"
//                 onClick={() => setOpen(false)}
//                 aria-label="Close menu"
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="mt-4 space-y-2">
//               {links.map((res, index) => {
//                 const active =
//                   pathname === res.link ||
//                   (res.link !== "/" && pathname?.startsWith(res.link));

//                 return (
//                   <Link
//                     key={index}
//                     href={res.link}
//                     className={cx(
//                       "block rounded-2xl px-4 py-3 text-base font-semibold transition",
//                       active ? "text-white" : "hover:bg-black/5"
//                     )}
//                     style={
//                       active
//                         ? {
//                             background:
//                               "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
//                           }
//                         : { color: "var(--text)" }
//                     }
//                   >
//                     {res.name}
//                   </Link>
//                 );
//               })}

//               <div className="pt-3">
//                 <Link
//                   href="/donation"
//                   className="inline-flex h-11 w-full items-center justify-center rounded-2xl text-sm font-semibold text-white"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, var(--accent) 0%, var(--danger) 100%)",
//                   }}
//                 >
//                   Donate
//                 </Link>
//               </div>
//             </div>

//             <div className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
//               Theme: <span className="font-semibold">{theme}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// import navbarLinks from "@/app/content/nav.links";
// import logo from "@/app/content/logo";
// import { useTheme } from "@/app/components/common/ThemeProvider";

// function cx(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// function isActive(pathname, href) {
//   if (!pathname || !href) return false;
//   if (href === "/") return pathname === "/";
//   return pathname === href || pathname.startsWith(href + "/");
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const pathname = usePathname();
//   const { theme, toggleTheme } = useTheme();
//   const links = useMemo(() => navbarLinks ?? [], []);

//   useEffect(() => setOpen(false), [pathname]);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => (document.body.style.overflow = "");
//   }, [open]);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50">
//       <div
//         className={cx("border-b", scrolled ? "backdrop-blur shadow-sm" : "")}
//         style={{
//           borderColor: "var(--border)",
//           background: scrolled
//             ? "color-mix(in oklab, var(--surface), transparent 12%)"
//             : "color-mix(in oklab, var(--surface), transparent 24%)",
//         }}
//       >
//         <nav
//           className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
//           aria-label="Primary"
//         >
//           <div className="relative flex h-16 items-center">
//             {/* Left: Logo */}
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt || "ALKA"}
//                 width={44}
//                 height={44}
//                 priority
//                 className="h-11 w-11 rounded-2xl object-contain"
//                 style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
//               />
//               <div className="hidden sm:block">
//                 <div className="font-serif text-lg leading-tight">ALKA</div>
//                 <div className="text-xs" style={{ color: "var(--text-muted)" }}>
//                   Aware • Learn • Know • Apply
//                 </div>
//               </div>
//             </Link>

//             {/* Center: Nav links */}
//             <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2">
//               <ul className="flex items-center gap-1">
//                 {links.map((l, i) => {
//                   const active = isActive(pathname, l.link);
//                   return (
//                     <li key={i} className="relative">
//                       <Link
//                         href={l.link}
//                         className={cx(
//                           "relative inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold transition",
//                           active ? "" : "hover:bg-black/5"
//                         )}
//                         style={{ color: "var(--text)" }}
//                       >
//                         {l.name}

//                         {/* active underline pill */}
//                         <span
//                           className={cx(
//                             "absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full transition",
//                             active ? "opacity-100" : "opacity-0"
//                           )}
//                           style={{ background: "var(--accent)" }}
//                         />
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>

//             {/* Right: controls */}
//             <div className="ml-auto hidden items-center gap-2 md:flex">
//               <button
//                 type="button"
//                 onClick={toggleTheme}
//                 className="inline-flex h-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
//                 aria-label="Toggle theme"
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)", color: "var(--text)" }}
//               >
//                 {theme === "dark" ? "☀️" : "🌙"}
//               </button>

//               <Link
//                 href="/donation"
//                 className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md active:opacity-90"
//                 style={{ background: "var(--accent)" }}
//               >
//                 Donate
//               </Link>
//             </div>

//             {/* Mobile: controls */}
//             <div className="ml-auto flex items-center gap-2 md:hidden">
//               <button
//                 type="button"
//                 onClick={toggleTheme}
//                 className="inline-flex h-10 items-center justify-center rounded-xl border px-3"
//                 aria-label="Toggle theme"
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)", color: "var(--text)" }}
//               >
//                 {theme === "dark" ? "☀️" : "🌙"}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setOpen(true)}
//                 className="inline-flex h-10 items-center justify-center rounded-xl border px-3"
//                 aria-label="Open menu"
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
//               >
//                 <span className="sr-only">Menu</span>
//                 <div className="flex flex-col gap-1.5">
//                   <span className="h-0.5 w-6" style={{ background: "var(--text)" }} />
//                   <span className="h-0.5 w-6" style={{ background: "var(--text)" }} />
//                   <span className="h-0.5 w-6" style={{ background: "var(--text)" }} />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile sheet (bottom) */}
//       {open && (
//         <div className="md:hidden">
//           <div
//             className="fixed inset-0 z-40 bg-black/50"
//             onClick={() => setOpen(false)}
//             aria-hidden="true"
//           />
//           <div
//             className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl border p-4 shadow-2xl"
//             style={{ background: "var(--surface)", borderColor: "var(--border)" }}
//           >
//             <div className="mx-auto h-1.5 w-12 rounded-full" style={{ background: "rgba(0,0,0,0.18)" }} />

//             <div className="mt-4 flex items-center justify-between">
//               <div className="font-serif text-xl">Menu</div>
//               <button
//                 className="inline-flex h-10 items-center justify-center rounded-xl border px-3"
//                 onClick={() => setOpen(false)}
//                 aria-label="Close menu"
//                 style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="mt-4 grid gap-2">
//               {links.map((l, i) => {
//                 const active = isActive(pathname, l.link);
//                 return (
//                   <Link
//                     key={i}
//                     href={l.link}
//                     className={cx(
//                       "rounded-2xl px-4 py-3 text-base font-semibold transition",
//                       active ? "text-white" : "hover:bg-black/5"
//                     )}
//                     style={active ? { background: "var(--primary)" } : { color: "var(--text)" }}
//                   >
//                     {l.name}
//                   </Link>
//                 );
//               })}

//               <Link
//                 href="/donation"
//                 className="mt-2 inline-flex h-11 items-center justify-center rounded-2xl text-sm font-semibold text-white"
//                 style={{ background: "var(--accent)" }}
//               >
//                 Donate
//               </Link>
//             </div>

//             <div className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
//               Theme: <span className="font-semibold">{theme}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import navbarLinks from "@/app/content/nav.links";
import { logo } from "@/app/content/logo";
import { useTheme } from "@/app/components/common/ThemeProvider";
import { logo2 } from "@/app/content/logo";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function isActive(pathname, href) {
  if (!pathname || !href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const links = useMemo(() => navbarLinks ?? [], []);

  const heroRoutes = ["/", "/aboutus", "/gallery", "/donation", "/contactus"];
  const isHeroPage = heroRoutes.includes(pathname);
  const heroMode = isHeroPage && !scrolled;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation variants
  const menuVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.3
      }
    },
    exit: { 
      y: "100%", 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <header
      className={cx(
        "top-1 z-50",
        isHeroPage ? "absolute left-0 right-0" : "sticky",
      )}
    >
      <div
        className={cx(
          "border-b transition",
          scrolled ? "backdrop-blur shadow-sm" : "",
        )}
        style={{
          borderColor: heroMode ? "transparent" : "var(--border)",
          background: heroMode
            ? "transparent"
            : "color-mix(in oklab, var(--surface), transparent 12%)",
        }}
      >
        <nav
          className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <div className="relative flex h-16 items-center">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo2.src}
                alt={logo.alt || "ALKA"}
                width={100}
                height={100}
                priority
                className="h-11 w-11 sm:h-16 sm:w-16 rounded-full overflow-hidden border-2 border-white shadow-xl object-contain"
                style={{
                  background: "var(--surface-2)",
                  border: heroMode
                    ? "1px solid rgba(255,255,255,0.18)"
                    : "1px solid var(--border)",
                }}
              />
              <div className="hidden sm:block">
                <div
                  className={cx(
                    "font-serif text-2xl leading-tight",
                    heroMode ? "text-white" : "",
                  )}
                >
                  ALKA
                </div>
                <div
                  className="text-xs"
                  style={{
                    color: heroMode
                      ? "rgba(255,255,255,0.75)"
                      : "var(--text-muted)",
                  }}
                >
                  Aware • Learn • Know • Apply
                </div>
              </div>
            </Link>

            {/* Center: Nav links */}
            <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2">
              <ul className="flex items-center gap-1">
                {links.map((l, i) => {
                  const active = isActive(pathname, l.link);
                  return (
                    <li key={i} className="relative">
                      <Link
                        href={l.link}
                        className={cx(
                          "relative inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold transition",
                          active
                            ? "text-white"
                            : heroMode
                              ? "hover:bg-white/10"
                              : "hover:bg-black/5",
                        )}
                        style={{
                          color: active
                            ? "white"
                            : heroMode
                              ? "rgba(255,255,255,0.92)"
                              : "var(--text)",
                          background: active
                            ? "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)"
                            : "transparent",
                        }}
                      >
                        {l.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: controls */}
            <div className="ml-auto hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                aria-label="Toggle theme"
                style={{
                  borderColor: heroMode
                    ? "rgba(255,255,255,0.22)"
                    : "var(--border)",
                  background: heroMode
                    ? "rgba(255,255,255,0.10)"
                    : "var(--surface-2)",
                  color: heroMode ? "rgba(255,255,255,0.92)" : "var(--text)",
                }}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>

              <Link
                href="/donation"
                className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md active:opacity-90"
                style={{
                  background: heroMode
                    ? "rgba(255,255,255,0.18)"
                    : "var(--accent)",
                  border: heroMode
                    ? "1px solid rgba(255,255,255,0.25)"
                    : "none",
                }}
              >
                Donate
              </Link>
            </div>

            {/* Mobile: controls */}
            <div className="ml-auto flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-10 items-center justify-center rounded-xl border px-3"
                aria-label="Toggle theme"
                style={{
                  borderColor: heroMode
                    ? "rgba(255,255,255,0.22)"
                    : "var(--border)",
                  background: heroMode
                    ? "rgba(255,255,255,0.10)"
                    : "var(--surface-2)",
                  color: heroMode ? "rgba(255,255,255,0.92)" : "var(--text)",
                }}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex h-10 items-center justify-center rounded-xl border px-3 relative"
                aria-label="Open menu"
                style={{
                  borderColor: heroMode
                    ? "rgba(255,255,255,0.22)"
                    : "var(--border)",
                  background: heroMode
                    ? "rgba(255,255,255,0.10)"
                    : "var(--surface-2)",
                }}
              >
                <span className="sr-only">Menu</span>
                <div className="flex flex-col gap-1.5">
                  <span
                    className="h-0.5 w-6 transition-all duration-300"
                    style={{ background: heroMode ? "white" : "var(--text)" }}
                  />
                  <span
                    className="h-0.5 w-6 transition-all duration-300"
                    style={{ background: heroMode ? "white" : "var(--text)" }}
                  />
                  <span
                    className="h-0.5 w-6 transition-all duration-300"
                    style={{ background: heroMode ? "white" : "var(--text)" }}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Stylish Mobile Sheet */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl border shadow-2xl overflow-hidden"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* Decorative header with gradient */}
              <div className="relative h-2 w-full bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--gold)]" />
              
              {/* Pull handle */}
              <div className="flex justify-center pt-4">
                <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--accent)]/50 to-[var(--primary)]/50" />
              </div>

              {/* Header with logo and close */}
              <div className="flex items-center justify-between px-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full blur opacity-30" />
                    <Image
                      src={logo2.src}
                      alt={logo.alt || "ALKA"}
                      width={40}
                      height={40}
                      className="relative h-10 w-10 rounded-full border-2 border-white shadow-lg object-contain"
                      style={{ background: "var(--surface-2)" }}
                    />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold" style={{ color: "var(--text)" }}>
                      ALKA
                    </div>
                    <div className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                      Aware • Learn • Know • Apply
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-2)",
                  }}
                >
                  <span className="text-lg" style={{ color: "var(--text)" }}>✕</span>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 px-4">
                <div className="text-xs font-semibold uppercase tracking-wider px-2 mb-2" style={{ color: "var(--text-muted)" }}>
                  Menu
                </div>
                <div className="space-y-1">
                  {links.map((l, i) => {
                    const active = isActive(pathname, l.link);
                    return (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={l.link}
                          className={cx(
                            "flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-semibold transition-all",
                            active ? "text-white" : "hover:bg-black/5"
                          )}
                          style={
                            active
                              ? { 
                                  background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                                  boxShadow: "0 8px 20px -8px var(--accent)"
                                }
                              : { color: "var(--text)" }
                          }
                          onClick={() => setOpen(false)}
                        >
                          {active && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-2 w-2 rounded-full bg-white"
                            />
                          )}
                          <span className={active ? "flex-1" : "flex-1"}>{l.name}</span>
                          <span className="text-xs opacity-50" style={{ color: active ? "white" : "var(--text-muted)" }}>
                            →
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 px-4">
                <div className="text-xs font-semibold uppercase tracking-wider px-2 mb-2" style={{ color: "var(--text-muted)" }}>
                  Quick Actions
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button
                      onClick={toggleTheme}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition-all hover:bg-black/5"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--surface-2)",
                        color: "var(--text)",
                      }}
                    >
                      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link
                      href="/donation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-all hover:opacity-90"
                      style={{
                        background: "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
                        boxShadow: "0 8px 20px -8px var(--accent)",
                      }}
                      onClick={() => setOpen(false)}
                    >
                      <span>Donate</span>
                      <span>❤️</span>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Social/Footer */}
              <div className="mt-8 px-4 pb-6">
                <div className="flex items-center justify-center gap-4">
                  {["Facebook", "Instagram", "Twitter"].map((social, i) => (
                    <motion.a
                      key={social}
                      href="#"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="text-xs font-medium transition-colors hover:text-[var(--accent)]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
                <div className="mt-4 text-center text-[10px]" style={{ color: "var(--text-muted)" }}>
                  © 2024 ALKA. All rights reserved.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}