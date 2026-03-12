// // import Image from "next/image";
// // import Link from "next/link";
// // import overviewContent from "@/app/content/home.overview";

// // export default function Overview() {
// //   return (
// //     <section className="section">
// //       <div className="container-page">
// //         {/* Header */}
// //         <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
// //           {/* Left */}
// //           <div className="lg:col-span-5">
// //             <div
// //               className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold"
// //               style={{
// //                 background: "var(--surface-2)",
// //                 border: "1px solid var(--border)",
// //                 color: "var(--text)",
// //               }}
// //             >
// //               <span
// //                 className="inline-block h-2 w-2 rounded-full"
// //                 style={{ background: "var(--accent)" }}
// //               />
// //               Our Purpose
// //             </div>

// //             <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
// //               {overviewContent.title}
// //             </h2>

// //             <div
// //               className="mt-4 h-1 w-20 rounded-full"
// //               style={{ background: "var(--accent)" }}
// //             />
// //           </div>

// //           {/* Right */}
// //           <div className="lg:col-span-7">
// //             <div className="space-y-4">
// //               {overviewContent.paragraphs.map((p, i) => (
// //                 <p key={i} className="p-muted text-[15px] leading-relaxed sm:text-[17px]">
// //                   {p}
// //                 </p>
// //               ))}
// //             </div>

// //             {/* CTA */}
// //             {overviewContent.cta && (
// //               <div className="mt-8 flex flex-wrap items-center gap-3">
// //                 {overviewContent.cta.primary && (
// //                   <Link href={overviewContent.cta.primary.href} className="btn-primary h-11 px-5">
// //                     {overviewContent.cta.primary.label}
// //                   </Link>
// //                 )}
// //                 {overviewContent.cta.secondary && (
// //                   <Link href={overviewContent.cta.secondary.href} className="btn-ghost h-11 px-5">
// //                     {overviewContent.cta.secondary.label}
// //                   </Link>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Images */}
// //         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
// //           {overviewContent.images.map((src, index) => (
// //             <div
// //               key={index}
// //               className="group relative overflow-hidden rounded-3xl border transition hover:-translate-y-0.5 hover:shadow-lg"
// //               style={{ borderColor: "var(--border)", background: "var(--surface)" }}
// //             >
// //               <Image
// //                 src={src}
// //                 alt={overviewContent.imageAlts?.[index] || `Overview image ${index + 1}`}
// //                 width={1400}
// //                 height={1000}
// //                 className="h-60 w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-72"
// //                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
// //               />

// //               {/* overlay */}
// //               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

// //               {/* bottom caption strip (optional, looks premium) */}
// //               <div className="absolute bottom-0 left-0 right-0 p-4">
// //                 <div
// //                   className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
// //                   style={{
// //                     background: "rgba(0,0,0,0.35)",
// //                     border: "1px solid rgba(255,255,255,0.18)",
// //                   }}
// //                 >
// //                   Learning • Awareness • Purpose
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// //SECOND

// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import overviewContent from "@/app/content/home.overview";
// // import {
// //   ArrowRight,
// //   Sparkles,
// //   Users,
// //   FolderKanban,
// //   Megaphone,
// //   Network,
// //   HeartHandshake,
// //   GraduationCap,
// //   BookOpen,
// //   HandHeart,
// //   PenLine,
// // } from "lucide-react";

// // const statIconMap = {
// //   users: <Users className="h-4 w-4" />,
// //   projects: <FolderKanban className="h-4 w-4" />,
// //   action: <Megaphone className="h-4 w-4" />,
// //   partners: <Network className="h-4 w-4" />,
// // };

// // export default function Overview() {
// //   const stats = overviewContent.stats || [];
// //   const donate = overviewContent.donateBar || {};

// //   const primary = overviewContent.cta?.primary;
// //   const secondary = overviewContent.cta?.secondary;

// //   // Need 4 tiles; if only 2 images exist, reuse them
// //   const imgs = overviewContent.images || [];
// //   const alts = overviewContent.imageAlts || [];
// //   const tags = overviewContent.collageTags || [
// //     "Community",
// //     "Education",
// //     "Awareness",
// //     "Kindness",
// //   ];

// //   const imgAt = (i) => imgs[i] || imgs[i % Math.max(imgs.length, 1)];
// //   const altAt = (i) =>
// //     alts[i] || alts[i % Math.max(alts.length, 1)] || `Overview image ${i + 1}`;
// //   const tagAt = (i) => tags[i] || tags[i % Math.max(tags.length, 1)];

// //   return (
// //     <section
// //       className="section relative overflow-hidden"

// //     >
// //       <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 relative p-10">
// //         {/* ===== Watermark Background (pencil-style icons) ===== */}
// //         <div className="pointer-events-none absolute inset-0 -z-10">
// //           {/* big cap */}
// //           <BookOpen
// //             className="absolute -left-10 top-2 h-20 w-20 rotate-[-12deg]"
// //             style={{ color: "var(--text)", opacity: 0.06 }}
// //           />
// //           {/* book */}
// //           <GraduationCap
// //             className="absolute right-6 top-142 h-20 w-20 rotate-[-5deg]"
// //             style={{ color: "var(--text)", opacity: 0.05 }}
// //           />
// //           {/* charity hand */}
// //           <HandHeart
// //             className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[8deg]"
// //             style={{ color: "var(--text)", opacity: 0.04 }}
// //           />
// //           <PenLine
// //             className="absolute left-1/2 top-2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[18deg]"
// //             style={{ color: "var(--text)", opacity: 0.04 }}
// //           />

// //           {/* subtle dotted sketch line */}
// //           <div
// //             className="absolute bottom-10 left-8 right-8 h-[1px]"
// //             style={{
// //               background:
// //                 "repeating-linear-gradient(to right, rgba(0,0,0,0.10), rgba(0,0,0,0.10) 6px, rgba(0,0,0,0) 6px, rgba(0,0,0,0) 12px)",
// //               opacity: 0.25,
// //             }}
// //           />
// //         </div>

// //         <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
// //           {/* Left */}
// //           <div className="lg:col-span-7">
// //             <div className="flex items-center gap-2">
// //               <div
// //                 className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold"
// //                 style={{
// //                   background: "var(--surface-2)",
// //                   border: "1px solid var(--border)",
// //                   color: "var(--text)",
// //                 }}
// //               >
// //                 <span
// //                   className="inline-block h-2 w-2 rounded-full"
// //                   style={{ background: "var(--accent)" }}
// //                 />
// //                 Our Purpose
// //               </div>

// //               <span
// //                 className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold"
// //                 style={{
// //                   background: "rgba(0,0,0,0.03)",
// //                   border: "1px solid var(--border)",
// //                   color: "var(--text)",
// //                 }}
// //               >
// //                 <Sparkles className="h-3.5 w-3.5" />
// //                 Purpose-led
// //               </span>
// //             </div>

// //             <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
// //               {overviewContent.title}
// //             </h2>

// //             <div className="mt-4 flex items-center gap-3">
// //               <div
// //                 className="h-1.5 w-20 rounded-full"
// //                 style={{ background: "var(--accent)" }}
// //               />
// //               <div
// //                 className="h-1.5 w-10 rounded-full opacity-60"
// //                 style={{ background: "var(--accent)" }}
// //               />
// //             </div>

// //             <p className="p-muted mt-5 max-w-prose text-[15px] text-justify leading-relaxed sm:text-[17px] whitespace-pre-line">
// //               {overviewContent.paragraphs?.[0]}
// //             </p>

// //             {(primary || secondary) && (
// //               <div className="mt-7 flex flex-wrap items-center gap-3">
// //                 {primary && (
// //                   <Link href={primary.href} className="btn-primary h-11 px-5">
// //                     {primary.label}
// //                   </Link>
// //                 )}
// //                 {secondary && (
// //                   <Link href={secondary.href} className="btn-ghost h-11 px-5">
// //                     {secondary.label}
// //                   </Link>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           {/* Right: Smaller rotated collage, all squares (image rotates too) */}
// //           <div className="lg:col-span-5">
// //             <div className="lg:flex lg:justify-end">
// //               <div
// //                 className="w-full lg:max-w-[420px] xl:max-w-[460px]"
// //                 style={{ transform: "rotate(0deg)" }} // change to -30deg if you want
// //               >
// //                 <div className="grid grid-cols-2 gap-4 sm:gap-5">
// //                   <CollageCard
// //                     src={imgAt(0)}
// //                     alt={altAt(0)}
// //                     tag={tagAt(0)}
// //                     className="aspect-square"
// //                   />
// //                   <CollageCard
// //                     src={imgAt(1)}
// //                     alt={altAt(1)}
// //                     tag={tagAt(1)}
// //                     className="aspect-square"
// //                   />
// //                   <CollageCard
// //                     src={imgAt(2)}
// //                     alt={altAt(2)}
// //                     tag={tagAt(2)}
// //                     className="aspect-square"
// //                   />
// //                   <CollageCard
// //                     src={imgAt(3)}
// //                     alt={altAt(3)}
// //                     tag={tagAt(3)}
// //                     className="aspect-square"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ===== Stats row ===== */}
// //         {stats.length > 0 && (
// //           <div
// //             className="mt-10 overflow-hidden rounded-2xl"
// //             style={{
// //               border: "1px solid var(--border)",
// //               background: "var(--surface)",
// //             }}
// //           >
// //             <div className="grid grid-cols-2 md:grid-cols-4">
// //               {stats.map((s, idx) => (
// //                 <div
// //                   key={idx}
// //                   className={[
// //                     "px-5 py-5 sm:px-7 sm:py-6",
// //                     "flex items-center gap-3",
// //                     idx !== 0 ? "border-l" : "",
// //                   ].join(" ")}
// //                   style={{ borderColor: "var(--border)" }}
// //                 >
// //                   <span
// //                     className="inline-flex h-10 w-10 items-center justify-center rounded-2xl"
// //                     style={{
// //                       background: "rgba(0,0,0,0.03)",
// //                       border: "1px solid var(--border)",
// //                       color: "var(--text)",
// //                     }}
// //                   >
// //                     {statIconMap[s.icon] || statIconMap.users}
// //                   </span>

// //                   <div>
// //                     <div
// //                       className="text-lg font-extrabold sm:text-xl"
// //                       style={{ color: "var(--text)" }}
// //                     >
// //                       {s.value}
// //                     </div>
// //                     <div className="p-muted text-xs sm:text-[13px]">
// //                       {s.label}
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* ===== Donate bar ===== */}
// //         <div
// //           className="mt-8 rounded-3xl p-6 sm:p-8"
// //           style={{
// //             background:
// //               "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(16,185,129,0.10))",
// //             border: "1px solid rgba(34,197,94,0.25)",
// //           }}
// //         >
// //           <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
// //             <div className="flex items-start gap-4">
// //               <span
// //                 className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
// //                 style={{
// //                   background: "rgba(34,197,94,0.18)",
// //                   border: "1px solid rgba(34,197,94,0.25)",
// //                   color: "var(--text)",
// //                 }}
// //               >
// //                 <HeartHandshake className="h-6 w-6" />
// //               </span>

// //               <div>
// //                 <div
// //                   className="text-lg font-extrabold"
// //                   style={{ color: "var(--text)" }}
// //                 >
// //                   {donate.title || "Make a difference today"}
// //                 </div>
// //                 <p className="p-muted mt-1 text-sm leading-relaxed">
// //                   {donate.desc ||
// //                     "Your contribution powers education, care, and community-led initiatives where it matters most."}
// //                 </p>
// //               </div>
// //             </div>

// //             <Link
// //               href={donate.href || secondary?.href || "/donation"}
// //               className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
// //               style={{
// //                 background:
// //                   "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
// //                 color: "white",
// //                 border: "1px solid rgba(0,0,0,0.08)",
// //               }}
// //             >
// //               {donate.buttonLabel || "Donate Now"}
// //               <ArrowRight className="h-4 w-4" />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function CollageCard({ src, alt, tag, className = "" }) {
// //   return (
// //     <div
// //       className={[
// //         "group relative overflow-hidden rounded-3xl",
// //         "transition hover:-translate-y-0.5 hover:shadow-lg",
// //         className,
// //       ].join(" ")}
// //       style={{
// //         border: "1px solid var(--border)",
// //         background: "var(--surface)",
// //       }}
// //     >
// //       <Image
// //         src={src}
// //         alt={alt}
// //         fill
// //         className="object-cover transition duration-700 group-hover:scale-[1.04]"
// //         sizes="(max-width: 1024px) 100vw, 460px"
// //       />

// //       {/* overlay */}
// //       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

// //       {/* tag */}
// //       {tag && (
// //         <div className="absolute left-3 top-3">
// //           <div
// //             className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold text-white"
// //             style={{
// //               background: "rgba(0,0,0,0.35)",
// //               border: "1px solid rgba(255,255,255,0.18)",
// //               backdropFilter: "blur(8px)",
// //             }}
// //           >
// //             <span
// //               className="h-2 w-2 rounded-full"
// //               style={{ background: "var(--accent)" }}
// //             />
// //             {tag}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// //THIRD (current)

// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import overviewContent from "@/app/content/home.overview";
// // import {
// //   ArrowRight,
// //   Sparkles,
// //   Users,
// //   FolderKanban,
// //   Megaphone,
// //   Network,
// //   HeartHandshake,
// //   GraduationCap,
// //   BookOpen,
// //   HandHeart,
// //   PenLine,
// // } from "lucide-react";

// // const statIconMap = {
// //   users: <Users className="h-4 w-4" />,
// //   projects: <FolderKanban className="h-4 w-4" />,
// //   action: <Megaphone className="h-4 w-4" />,
// //   partners: <Network className="h-4 w-4" />,
// // };

// // export default function Overview() {
// //   const stats = overviewContent.stats || [];
// //   const donate = overviewContent.donateBar || {};

// //   const primary = overviewContent.cta?.primary;
// //   const secondary = overviewContent.cta?.secondary;

// //   // Need 4 tiles; if only 2 images exist, reuse them
// //   const imgs = overviewContent.images || [];
// //   const alts = overviewContent.imageAlts || [];
// //   const tags = overviewContent.collageTags || [
// //     "Community",
// //     "Education",
// //     "Awareness",
// //     "Kindness",
// //   ];

// //   const imgAt = (i) => imgs[i] || imgs[i % Math.max(imgs.length, 1)];
// //   const altAt = (i) =>
// //     alts[i] || alts[i % Math.max(alts.length, 1)] || `Overview image ${i + 1}`;
// //   const tagAt = (i) => tags[i] || tags[i % Math.max(tags.length, 1)];

// //   return (
// //     <section className="section relative overflow-hidden mb-0">
// //       <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-12 relative p-10">
// //         {/* ===== Watermark Background (pencil-style icons) ===== */}
// //         <div className="pointer-events-none absolute inset-0 -z-10">
// //           <BookOpen
// //             className="absolute -left-10 top-2 h-20 w-20 rotate-[-12deg]"
// //             style={{ color: "var(--text)", opacity: 0.06 }}
// //           />

// //           <GraduationCap
// //             className="absolute right-6 top-142 h-20 w-20 rotate-[-5deg]"
// //             style={{ color: "var(--text)", opacity: 0.05 }}
// //           />

// //           <HandHeart
// //             className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[8deg]"
// //             style={{ color: "var(--text)", opacity: 0.04 }}
// //           />
// //           <PenLine
// //             className="absolute left-1/2 top-2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[18deg]"
// //             style={{ color: "var(--text)", opacity: 0.04 }}
// //           />

// //           <div
// //             className="absolute bottom-10 left-8 right-8 h-[1px]"
// //             style={{
// //               background:
// //                 "repeating-linear-gradient(to right, rgba(0,0,0,0.10), rgba(0,0,0,0.10) 6px, rgba(0,0,0,0) 6px, rgba(0,0,0,0) 12px)",
// //               opacity: 0.25,
// //             }}
// //           />
// //         </div>

// //         <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
// //           {/* Left */}
// //           <div className="lg:col-span-7">
// //             <div className="flex items-center gap-2">
// //               <div
// //                 className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold"
// //                 style={{
// //                   background: "var(--surface-2)",
// //                   border: "1px solid var(--border)",
// //                   color: "var(--text)",
// //                 }}
// //               >
// //                 <span
// //                   className="inline-block h-2 w-2 rounded-full"
// //                   style={{ background: "var(--accent)" }}
// //                 />
// //                 Our Purpose
// //               </div>

// //               <span
// //                 className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold"
// //                 style={{
// //                   background: "rgba(0,0,0,0.03)",
// //                   border: "1px solid var(--border)",
// //                   color: "var(--text)",
// //                 }}
// //               >
// //                 <Sparkles className="h-3.5 w-3.5" />
// //                 Purpose-led
// //               </span>
// //             </div>

// //             <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
// //               {overviewContent.title}
// //             </h2>

// //             <div className="mt-4 flex items-center gap-3">
// //               <div
// //                 className="h-1.5 w-20 rounded-full"
// //                 style={{ background: "var(--accent)" }}
// //               />
// //               <div
// //                 className="h-1.5 w-10 rounded-full opacity-60"
// //                 style={{ background: "var(--accent)" }}
// //               />
// //             </div>

// //             <p className="p-muted mt-5 max-w-full text-[15px] text-justify leading-relaxed sm:text-[17px] whitespace-pre-line">
// //               {overviewContent.paragraphs?.[0]}
// //             </p>

// //             {(primary || secondary) && (
// //               <div className="mt-7 flex flex-wrap items-center gap-3">
// //                 {primary && (
// //                   <Link href={primary.href} className="btn-primary h-11 px-5">
// //                     {primary.label}
// //                   </Link>
// //                 )}
// //                 {secondary && (
// //                   <Link href={secondary.href} className="btn-ghost h-11 px-5">
// //                     {secondary.label}
// //                   </Link>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           {/* Right: Smaller rotated collage, all squares (image rotates too) */}
// //           <div className="lg:col-span-5">
// //             <div className="lg:flex lg:justify-end">
// //               <div
// //                 className="w-full lg:max-w-[420px] xl:max-w-[460px]"
// //                 style={{ transform: "rotate(0deg)" }} // change to -30deg if you want
// //               >
// //                 <div className="grid grid-cols-2 gap-4 sm:gap-5">
// //                   <CollageCard
// //                     src={imgAt(0)}
// //                     alt={altAt(0)}
// //                     tag={tagAt(0)}
// //                     className="aspect-square"
// //                   />
// //                   <CollageCard
// //                     src={imgAt(1)}
// //                     alt={altAt(1)}
// //                     tag={tagAt(1)}
// //                     className="aspect-square"
// //                   />
// //                   <CollageCard
// //                     src={imgAt(2)}
// //                     alt={altAt(2)}
// //                     tag={tagAt(2)}
// //                     className="aspect-square"
// //                   />
// //                   <CollageCard
// //                     src={imgAt(3)}
// //                     alt={altAt(3)}
// //                     tag={tagAt(3)}
// //                     className="aspect-square"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ===== Stats row ===== */}
// //         {stats.length > 0 && (
// //           <div
// //             className="mt-10 overflow-hidden rounded-2xl"
// //             style={{
// //               border: "1px solid var(--border)",
// //               background: "var(--surface)",
// //             }}
// //           >
// //             <div className="grid grid-cols-2 md:grid-cols-4">
// //               {stats.map((s, idx) => (
// //                 <div
// //                   key={idx}
// //                   className={[
// //                     "px-5 py-5 sm:px-7 sm:py-6",
// //                     "flex items-center gap-3",
// //                     idx !== 0 ? "border-l" : "",
// //                   ].join(" ")}
// //                   style={{ borderColor: "var(--border)" }}
// //                 >
// //                   <span
// //                     className="inline-flex h-10 w-10 items-center justify-center rounded-2xl"
// //                     style={{
// //                       background: "rgba(0,0,0,0.03)",
// //                       border: "1px solid var(--border)",
// //                       color: "var(--text)",
// //                     }}
// //                   >
// //                     {statIconMap[s.icon] || statIconMap.users}
// //                   </span>

// //                   <div>
// //                     <div
// //                       className="text-lg font-extrabold sm:text-xl"
// //                       style={{ color: "var(--text)" }}
// //                     >
// //                       {s.value}
// //                     </div>
// //                     <div className="p-muted text-xs sm:text-[13px]">
// //                       {s.label}
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* ===== Donate bar ===== */}
// //         <div
// //           className="mt-8 rounded-3xl p-6 sm:p-8"
// //           style={{
// //             background:
// //               "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(16,185,129,0.10))",
// //             border: "1px solid rgba(34,197,94,0.25)",
// //           }}
// //         >
// //           <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
// //             <div className="flex items-start gap-4">
// //               <span
// //                 className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
// //                 style={{
// //                   background: "rgba(34,197,94,0.18)",
// //                   border: "1px solid rgba(34,197,94,0.25)",
// //                   color: "var(--text)",
// //                 }}
// //               >
// //                 <HeartHandshake className="h-6 w-6" />
// //               </span>

// //               <div>
// //                 <div
// //                   className="text-lg font-extrabold"
// //                   style={{ color: "var(--text)" }}
// //                 >
// //                   {donate.title || "Make a difference today"}
// //                 </div>
// //                 <p className="p-muted mt-1 text-sm leading-relaxed">
// //                   {donate.desc ||
// //                     "Your contribution powers education, care, and community-led initiatives where it matters most."}
// //                 </p>
// //               </div>
// //             </div>

// //             <Link
// //               href={donate.href || secondary?.href || "/donation"}
// //               className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
// //               style={{
// //                 background:
// //                   "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
// //                 color: "white",
// //                 border: "1px solid rgba(0,0,0,0.08)",
// //               }}
// //             >
// //               {donate.buttonLabel || "Donate Now"}
// //               <ArrowRight className="h-4 w-4" />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function CollageCard({ src, alt, tag, className = "" }) {
// //   return (
// //     <div
// //       className={[
// //         "group relative overflow-hidden rounded-3xl",
// //         "transition hover:-translate-y-0.5 hover:shadow-lg",
// //         className,
// //       ].join(" ")}
// //       style={{
// //         border: "1px solid var(--border)",
// //         background: "var(--surface)",
// //       }}
// //     >
// //       <Image
// //         src={src}
// //         alt={alt}
// //         fill
// //         className="object-cover transition duration-700 group-hover:scale-[1.04]"
// //         sizes="(max-width: 1024px) 100vw, 460px"
// //       />

// //       {/* overlay */}
// //       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

// //       {/* tag */}
// //       {tag && (
// //         <div className="absolute left-3 top-3">
// //           <div
// //             className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold text-white"
// //             style={{
// //               background: "rgba(0,0,0,0.35)",
// //               border: "1px solid rgba(255,255,255,0.18)",
// //               backdropFilter: "blur(8px)",
// //             }}
// //           >
// //             <span
// //               className="h-2 w-2 rounded-full"
// //               style={{ background: "var(--accent)" }}
// //             />
// //             {tag}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useRef, useState, useEffect } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import overviewContent from "@/app/content/home.overview";
// import {
//   ArrowRight,
//   Sparkles,
//   Users,
//   FolderKanban,
//   Megaphone,
//   Network,
//   HeartHandshake,
//   GraduationCap,
//   BookOpen,
//   HandHeart,
//   PenLine,
//   Target,
//   Globe,
//   Award,
//   TrendingUp,
//   ChevronRight,
// } from "lucide-react";

// const statIconMap = {
//   users: <Users className="h-4 w-4" />,
//   projects: <FolderKanban className="h-4 w-4" />,
//   action: <Megaphone className="h-4 w-4" />,
//   partners: <Network className="h-4 w-4" />,
//   impact: <Target className="h-4 w-4" />,
//   reach: <Globe className="h-4 w-4" />,
//   recognition: <Award className="h-4 w-4" />,
//   growth: <TrendingUp className="h-4 w-4" />,
// };

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function Overview() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [hoveredStat, setHoveredStat] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const stats = overviewContent.stats || [];
//   const donate = overviewContent.donateBar || {};
//   const primary = overviewContent.cta?.primary;
//   const secondary = overviewContent.cta?.secondary;

//   // Need 4 tiles; if only 2 images exist, reuse them
//   const imgs = overviewContent.images || [];
//   const alts = overviewContent.imageAlts || [];
//   const tags = overviewContent.collageTags || [
//     "Community",
//     "Education",
//     "Awareness",
//     "Kindness",
//   ];

//   // Mouse parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width - 0.5;
//       const y = (e.clientY - rect.top) / rect.height - 0.5;
//       setMousePosition({ x, y });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const imgAt = (i) => imgs[i] || imgs[i % Math.max(imgs.length, 1)];
//   const altAt = (i) =>
//     alts[i] || alts[i % Math.max(alts.length, 1)] || `Overview image ${i + 1}`;
//   const tagAt = (i) => tags[i] || tags[i % Math.max(tags.length, 1)];

//   return (
//     <motion.section
//       ref={sectionRef}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={staggerContainer}
//       className="section relative overflow-hidden mb-0"
//     >
//       {/* Animated background elements */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Gradient orbs with parallax */}
//         <motion.div
//           animate={{
//             x: mousePosition.x * 40,
//             y: mousePosition.y * 40,
//           }}
//           transition={{ type: "spring", stiffness: 50, damping: 30 }}
//           className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full blur-3xl"
//           style={{
//             background:
//               "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
//             opacity: 0.15,
//           }}
//         />

//         <motion.div
//           animate={{
//             x: mousePosition.x * -30,
//             y: mousePosition.y * -30,
//           }}
//           transition={{ type: "spring", stiffness: 50, damping: 30 }}
//           className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full blur-3xl"
//           style={{
//             background:
//               "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
//             opacity: 0.15,
//           }}
//         />

//         {/* Grid overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, var(--text) 1px, transparent 0)`,
//             backgroundSize: "40px 40px",
//             opacity: 0.03,
//           }}
//         />

//         {/* Animated lines */}
//         <svg className="absolute inset-0 w-full h-full opacity-20">
//           <motion.line
//             x1="0"
//             y1="20%"
//             x2="100%"
//             y2="20%"
//             stroke="var(--accent)"
//             strokeWidth="0.5"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 0.2 }}
//             transition={{ duration: 2, delay: 1 }}
//           />
//           <motion.line
//             x1="0"
//             y1="80%"
//             x2="100%"
//             y2="80%"
//             stroke="var(--primary)"
//             strokeWidth="0.5"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 0.2 }}
//             transition={{ duration: 2, delay: 1.5 }}
//           />
//         </svg>
//       </div>

//       {/* ===== Watermark Background Icons (Animated) ===== */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <motion.div
//           animate={{
//             rotate: [-12, -8, -12],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//         >
//           <BookOpen
//             className="absolute -left-10 top-2 h-20 w-20"
//             style={{ color: "var(--text)", opacity: 0.06 }}
//           />
//         </motion.div>

//         <motion.div
//           animate={{
//             rotate: [-5, 0, -5],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ repeat: Infinity, duration: 10, delay: 1 }}
//         >
//           <GraduationCap
//             className="absolute right-6 top-32 h-20 w-20"
//             style={{ color: "var(--text)", opacity: 0.05 }}
//           />
//         </motion.div>

//         <motion.div
//           animate={{
//             rotate: [8, 12, 8],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ repeat: Infinity, duration: 9, delay: 2 }}
//         >
//           <HandHeart
//             className="absolute left-1/3 top-1/2 h-20 w-20"
//             style={{ color: "var(--text)", opacity: 0.04 }}
//           />
//         </motion.div>

//         <motion.div
//           animate={{
//             rotate: [18, 22, 18],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
//         >
//           <PenLine
//             className="absolute left-2/3 top-20 h-20 w-20"
//             style={{ color: "var(--text)", opacity: 0.04 }}
//           />
//         </motion.div>
//       </div>

//       <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-12 relative pt-10 sm:pt-10 lg:pt-10">
//         <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
//           {/* Left Content */}
//           <motion.div variants={fadeInUp} className="lg:col-span-7">
//             <div className="flex items-center gap-3 flex-wrap">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold backdrop-blur-sm"
//                 style={{
//                   background: "rgba(var(--surface-2-rgb), 0.8)",
//                   border: "1px solid var(--border)",
//                   color: "var(--text)",
//                   boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
//                 }}
//               >
//                 <motion.span
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                   className="inline-block h-2 w-2 rounded-full"
//                   style={{ background: "var(--accent)" }}
//                 />
//                 Our Purpose
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-semibold backdrop-blur-sm"
//                 style={{
//                   background: "rgba(0,0,0,0.02)",
//                   border: "1px solid var(--border)",
//                   color: "var(--text)",
//                 }}
//               >
//                 <Sparkles
//                   className="h-3.5 w-3.5"
//                   style={{ color: "var(--accent)" }}
//                 />
//                 Purpose-led
//               </motion.div>
//             </div>

//             <motion.h2
//               variants={fadeInUp}
//               className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-[var(--text)] via-[var(--text)] to-[var(--text-muted)] bg-clip-text text-transparent"
//             >
//               {overviewContent.title}
//             </motion.h2>

//             <motion.div
//               variants={fadeInUp}
//               className="mt-6 flex items-center gap-3"
//             >
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "5rem" }}
//                 transition={{ duration: 1, delay: 0.5 }}
//                 className="h-1.5 rounded-full"
//                 style={{ background: "var(--accent)" }}
//               />
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "2.5rem" }}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 className="h-1.5 rounded-full opacity-60"
//                 style={{ background: "var(--accent)" }}
//               />
//             </motion.div>

//             <motion.p
//               variants={fadeInUp}
//               className="p-muted mt-6 max-w-full text-[15px] text-[var(--text)] text-justify leading-relaxed sm:text-[17px] whitespace-pre-line"
//             >
//               {overviewContent.paragraphs?.[0]}
//             </motion.p>

//             {(primary || secondary) && (
//               <motion.div
//                 variants={fadeInUp}
//                 className="mt-8 flex flex-wrap items-center gap-4"
//               >
//                 {primary && (
//                   <motion.div
//                     whileHover={{ scale: 1.02, y: -2 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Link
//                       href={primary.href}
//                       className="group relative inline-flex h-12 items-center gap-2 rounded-xl px-6 font-semibold text-white overflow-hidden"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
//                         boxShadow: "0 8px 20px -8px var(--accent)",
//                       }}
//                     >
//                       <motion.span
//                         className="absolute inset-0 bg-white"
//                         initial={{ opacity: 0, x: "-100%" }}
//                         whileHover={{ opacity: 0.2, x: "100%" }}
//                         transition={{ duration: 0.5 }}
//                       />
//                       <span className="relative z-10 flex items-center gap-2">
//                         {primary.label}
//                         <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </span>
//                     </Link>
//                   </motion.div>
//                 )}

//                 {secondary && (
//                   <motion.div
//                     whileHover={{ scale: 1.02, y: -2 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Link
//                       href={secondary.href}
//                       className="btn-ghost relative h-12 px-6 text-sm font-medium rounded-xl overflow-hidden"
//                       style={{ borderColor: "var(--border)" }}
//                     >
//                       <motion.span
//                         className="absolute inset-0 bg-[var(--accent)]"
//                         initial={{ opacity: 0, scale: 0 }}
//                         whileHover={{ opacity: 0.05, scale: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                       <span className="relative z-10 flex items-center gap-2">
//                         {secondary.label}
//                       </span>
//                     </Link>
//                   </motion.div>
//                 )}
//               </motion.div>
//             )}
//           </motion.div>

//           {/* Right: Animated Collage */}

//           <motion.div variants={scaleIn} className="lg:col-span-5">
//             <div className="lg:flex lg:justify-end">
//               <div className="w-full lg:max-w-[420px] xl:max-w-[460px]">
//                 <div className="grid grid-cols-2 gap-5 sm:gap-6">
//                   {/* LEFT column (lifted) */}
//                   <div className="flex flex-col gap-5 sm:gap-6 -translate-y-6 sm:-translate-y-8">
//                     <CollageCard
//                       src={imgAt(0)}
//                       alt={altAt(0)}
//                       tag={tagAt(0)}
//                       index={0}
//                       isHovered={hoveredCard === 0}
//                       onHover={() => setHoveredCard(0)}
//                       onLeave={() => setHoveredCard(null)}
//                       aspectClass="aspect-square"
//                     />
//                     <CollageCard
//                       src={imgAt(2)}
//                       alt={altAt(2)}
//                       tag={tagAt(2)}
//                       index={2}
//                       isHovered={hoveredCard === 2}
//                       onHover={() => setHoveredCard(2)}
//                       onLeave={() => setHoveredCard(null)}
//                       aspectClass="aspect-[4/3]" // landscape
//                     />
//                   </div>

//                   {/* RIGHT column (pushed down) */}
//                   <div className="flex flex-col gap-5 sm:gap-6 translate-y-6 sm:translate-y-8">
//                     <CollageCard
//                       src={imgAt(1)}
//                       alt={altAt(1)}
//                       tag={tagAt(1)}
//                       index={1}
//                       isHovered={hoveredCard === 1}
//                       onHover={() => setHoveredCard(1)}
//                       onLeave={() => setHoveredCard(null)}
//                       aspectClass="aspect-[4/3]" // landscape
//                     />
//                     <CollageCard
//                       src={imgAt(3)}
//                       alt={altAt(3)}
//                       tag={tagAt(3)}
//                       index={3}
//                       isHovered={hoveredCard === 3}
//                       onHover={() => setHoveredCard(3)}
//                       onLeave={() => setHoveredCard(null)}
//                       aspectClass="aspect-[3/4]" // portrait (taller)
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* ===== Stats row with animations ===== */}
//         {stats.length > 0 && (
//           <motion.div
//             variants={fadeInUp}
//             className="mt-16 overflow-hidden rounded-3xl bg"
//              style={{
//             background:"#fff",
//             //border: "0.5px solid rgba(54, 56, 55, 0.25)",
//             boxShadow: "0 20px 40px -20px rgba(33, 34, 33, 0.3)",
//           }}
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
//               {stats.map((s, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.1 }}
//                   onHoverStart={() => setHoveredStat(idx)}
//                   onHoverEnd={() => setHoveredStat(null)}
//                   className="px-5 py-6 sm:px-7 sm:py-8 flex items-center gap-4 cursor-default"
//                   style={{
//                     background:
//                       hoveredStat === idx
//                         ? "rgba(var(--accent-rgb), 0.03)"
//                         : "transparent",
//                     transition: "background 0.3s ease",
//                   }}
//                 >
//                   <motion.span
//                     animate={
//                       hoveredStat === idx
//                         ? {
//                             rotate: [0, 10, -10, 0],
//                             scale: [1, 1.1, 1],
//                           }
//                         : {}
//                     }
//                     transition={{ duration: 0.5 }}
//                     className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
//                     style={{
//                       background:
//                         hoveredStat === idx
//                           ? "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)"
//                           : "rgba(0,0,0,0.03)",
//                       border: "1px solid var(--border)",
//                       color: hoveredStat === idx ? "white" : "var(--text)",
//                       transition: "all 0.3s ease",
//                     }}
//                   >
//                     {statIconMap[s.icon] || statIconMap.users}
//                   </motion.span>

//                   <div>
//                     <motion.div
//                       animate={
//                         hoveredStat === idx ? { scale: 1.05 } : { scale: 1 }
//                       }
//                       className="text-xl font-extrabold sm:text-2xl"
//                       style={{ color: "var(--text)" }}
//                     >
//                       {s.value}
//                     </motion.div>
//                     <div className="p-muted text-xs sm:text-sm">{s.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* ===== Donate bar with enhanced styling ===== */}
//         <motion.div
//           variants={fadeInUp}
//           whileHover={{ y: -4 }}
//           className="mt-12 rounded-3xl p-8 sm:p-10 backdrop-blur-sm"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(16,185,129,0.08))",
//             border: "1px solid rgba(34,197,94,0.25)",
//             boxShadow: "0 20px 40px -20px rgba(34,197,94,0.3)",
//           }}
//         >
//           <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-start gap-5">
//               <motion.span
//                 whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
//                 style={{
//                   background: "rgba(34,197,94,0.15)",
//                   border: "1px solid rgba(34,197,94,0.3)",
//                   color: "var(--text)",
//                 }}
//               >
//                 <HeartHandshake
//                   className="h-7 w-7"
//                   style={{ color: "#519A66" }}
//                 />
//               </motion.span>

//               <div>
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-xl font-extrabold sm:text-2xl"
//                 >
//                   {donate.title || "Make a difference today"}
//                 </motion.div>
//                 <motion.p
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="p-muted mt-2 text-sm leading-relaxed max-w-xl"
//                 >
//                   {donate.desc ||
//                     "Your contribution powers education, care, and community-led initiatives where it matters most."}
//                 </motion.p>
//               </div>
//             </div>

//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Link
//                 href={donate.href || secondary?.href || "/donation"}
//                 className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-2xl px-8 font-bold text-white overflow-hidden"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
//                   boxShadow: "0 8px 20px -8px var(--accent)",
//                 }}
//               >
//                 <motion.span
//                   className="absolute inset-0 bg-white"
//                   initial={{ opacity: 0, x: "-100%" }}
//                   whileHover={{ opacity: 0.2, x: "100%" }}
//                   transition={{ duration: 0.5 }}
//                 />
//                 <span className="relative z-10 flex items-center gap-2">
//                   {donate.buttonLabel || "Donate Now"}
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 1.5,
//                       repeatType: "reverse",
//                     }}
//                   >
//                     <ArrowRight className="h-5 w-5" />
//                   </motion.div>
//                 </span>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Progress bar (optional) */}
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "75%" }}
//             transition={{ duration: 1.5, delay: 1 }}
//             className="mt-6 h-1.5 rounded-full bg-gradient-to-r from-[var(--success)] to-[var(--accent)]"
//             style={{ opacity: 0.3 }}
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// function CollageCard({ src, alt, tag, index, isHovered, onHover, onLeave }) {
//   const cardRef = useRef(null);
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   // 3D tilt effect
//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     setRotate({ x: y * 10, y: x * 10 });
//   };

//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//     onLeave();
//   };

//   // Different rotation offsets for each card
//   const baseRotations = [-2, 1, 3, -1];
//   const baseRotation = baseRotations[index % baseRotations.length];

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={onHover}
//       onMouseLeave={handleMouseLeave}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 + 0.3 }}
//       whileHover={{ y: -8 }}
//       className={[
//         "group relative overflow-hidden rounded-sm cursor-pointer",
//         "aspect-square",
//       ].join(" ")}
//       style={{
//         border: isHovered
//           ? "2px solid var(--accent)"
//           : "1px solid var(--border)",
//         background: "var(--surface)",
//         transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotate(${baseRotation}deg)`,
//         transition:
//           "transform 0.1s ease, border 0.2s ease, box-shadow 0.3s ease",
//         boxShadow: isHovered
//           ? "0 30px 40px -20px var(--accent)"
//           : "0 10px 20px -10px rgba(0,0,0,0.1)",
//       }}
//     >
//       <motion.div
//         animate={{ scale: isHovered ? 1.08 : 1 }}
//         transition={{ duration: 0.4 }}
//         className="relative w-full h-full"
//       >
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           className="object-cover"
//           sizes="(max-width: 1024px) 100vw, 460px"
//         />
//       </motion.div>

//       {/* Gradient overlays */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{
//           background: isHovered
//             ? "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
//             : "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
//         }}
//         transition={{ duration: 0.3 }}
//       />

//       {/* Animated corner accent */}
//       <motion.div
//         className="absolute top-0 right-0 w-16 h-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isHovered ? 1 : 0 }}
//       >
//         <svg viewBox="0 0 100 100" className="w-full h-full">
//           <motion.path
//             d="M0,0 L100,0 L100,100"
//             fill="none"
//             stroke="var(--accent)"
//             strokeWidth="2"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </svg>
//       </motion.div>

//       {/* Tag with animation */}
//       {tag && (
//         <motion.div
//           className="absolute left-4 top-4"
//           animate={{
//             scale: isHovered ? 1.05 : 1,
//             y: isHovered ? -2 : 0,
//           }}
//         >
//           <div
//             className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
//             style={{
//               background: "rgba(0,0,0,0.45)",
//               border: "1px solid rgba(255,255,255,0.2)",
//               backdropFilter: "blur(8px)",
//             }}
//           >
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="h-2 w-2 rounded-full"
//               style={{ background: "var(--accent)" }}
//             />
//             {tag}
//           </div>
//         </motion.div>
//       )}

//       {/* Floating action indicator */}
//       <motion.div
//         className="absolute bottom-4 right-4"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
//         transition={{ duration: 0.2 }}
//       >
//         <div
//           className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md"
//           style={{
//             background: "rgba(255,255,255,0.2)",
//             border: "1px solid rgba(255,255,255,0.3)",
//           }}
//         >
//           <ChevronRight className="h-5 w-5 text-white" />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useRef, useState, useEffect } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import overviewContent from "@/app/content/home.overview";
// import {
//   ArrowRight,
//   Sparkles,
//   Users,
//   FolderKanban,
//   Megaphone,
//   Network,
//   HeartHandshake,
//   GraduationCap,
//   BookOpen,
//   HandHeart,
//   PenLine,
//   Target,
//   Globe,
//   Award,
//   TrendingUp,
//   ChevronRight,
//   Leaf,
//   Sun,
//   Droplets,
// } from "lucide-react";

// const statIconMap = {
//   users: <Users className="h-5 w-5" />,
//   projects: <FolderKanban className="h-5 w-5" />,
//   action: <Megaphone className="h-5 w-5" />,
//   partners: <Network className="h-5 w-5" />,
//   impact: <Target className="h-5 w-5" />,
//   reach: <Globe className="h-5 w-5" />,
//   recognition: <Award className="h-5 w-5" />,
//   growth: <TrendingUp className="h-5 w-5" />,
// };

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -30 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 30 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function Overview() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [hoveredStat, setHoveredStat] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const stats = overviewContent.stats || [];
//   const donate = overviewContent.donateBar || {};
//   const primary = overviewContent.cta?.primary;
//   const secondary = overviewContent.cta?.secondary;

//   // Need 4 tiles; if only 2 images exist, reuse them
//   const imgs = overviewContent.images || [];
//   const alts = overviewContent.imageAlts || [];
//   const tags = overviewContent.collageTags || [
//     "Community",
//     "Education",
//     "Awareness",
//     "Kindness",
//   ];

//   // Mouse parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width - 0.5;
//       const y = (e.clientY - rect.top) / rect.height - 0.5;
//       setMousePosition({ x, y });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const imgAt = (i) => imgs[i] || imgs[i % Math.max(imgs.length, 1)];
//   const altAt = (i) =>
//     alts[i] || alts[i % Math.max(alts.length, 1)] || `Overview image ${i + 1}`;
//   const tagAt = (i) => tags[i] || tags[i % Math.max(tags.length, 1)];

//   return (
//     <motion.section
//       ref={sectionRef}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={staggerContainer}
//       className="section relative overflow-hidden mb-0 py-20 sm:py-24 lg:py-28"
//     >
//       {/* Premium background with gradient and texture */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--surface-2)]" />

//       {/* Animated background elements */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Large gradient orbs with parallax */}
//         <motion.div
//           animate={{
//             x: mousePosition.x * 50,
//             y: mousePosition.y * 50,
//           }}
//           transition={{ type: "spring", stiffness: 30, damping: 20 }}
//           className="absolute -left-20 -top-20 h-[600px] w-[600px] rounded-full blur-3xl"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(var(--accent-rgb), 0.2) 0%, transparent 70%)",
//           }}
//         />

//         <motion.div
//           animate={{
//             x: mousePosition.x * -40,
//             y: mousePosition.y * -40,
//           }}
//           transition={{ type: "spring", stiffness: 30, damping: 20 }}
//           className="absolute -right-20 -bottom-20 h-[700px] w-[700px] rounded-full blur-3xl"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)",
//           }}
//         />

//         {/* Geometric patterns */}
//         <div className="absolute inset-0 opacity-[0.02]">
//           <div className="absolute top-20 left-10 w-40 h-40 border border-[var(--accent)]/20 rounded-full" />
//           <div className="absolute bottom-20 right-10 w-60 h-60 border border-[var(--primary)]/20 rounded-full" />
//         </div>

//         {/* Grid overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, var(--text) 1px, transparent 0)`,
//             backgroundSize: "50px 50px",
//             opacity: 0.02,
//           }}
//         />

//         {/* Animated lines */}
//         <svg className="absolute inset-0 w-full h-full">
//           <motion.path
//             d="M0,100 Q200,50 400,100 T800,100"
//             stroke="var(--accent)"
//             strokeWidth="0.5"
//             fill="none"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 0.1 }}
//             transition={{ duration: 3, delay: 0.5 }}
//           />
//           <motion.path
//             d="M0,300 Q300,350 600,300 T1200,300"
//             stroke="var(--primary)"
//             strokeWidth="0.5"
//             fill="none"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 0.1 }}
//             transition={{ duration: 3, delay: 1 }}
//           />
//         </svg>
//       </div>

//       {/* ===== Watermark Background Icons (Animated) ===== */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             rotate: [-12, -8, -12],
//             scale: [1, 1.1, 1],
//             x: mousePosition.x * 10,
//             y: mousePosition.y * 10,
//           }}
//           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//         >
//           <BookOpen
//             className="absolute -left-5 top-10 h-32 w-32"
//             style={{ color: "var(--accent)", opacity: 0.03 }}
//           />
//         </motion.div>

//         <motion.div
//           animate={{
//             rotate: [-5, 0, -5],
//             scale: [1, 1.1, 1],
//             x: mousePosition.x * -15,
//             y: mousePosition.y * -15,
//           }}
//           transition={{ repeat: Infinity, duration: 10, delay: 1 }}
//         >
//           <GraduationCap
//             className="absolute right-0 top-40 h-32 w-32"
//             style={{ color: "var(--primary)", opacity: 0.03 }}
//           />
//         </motion.div>

//         <motion.div
//           animate={{
//             rotate: [8, 12, 8],
//             scale: [1, 1.1, 1],
//             x: mousePosition.x * 20,
//             y: mousePosition.y * 20,
//           }}
//           transition={{ repeat: Infinity, duration: 9, delay: 2 }}
//         >
//           <HandHeart
//             className="absolute left-1/4 bottom-20 h-32 w-32"
//             style={{ color: "var(--success)", opacity: 0.02 }}
//           />
//         </motion.div>

//         <motion.div
//           animate={{
//             rotate: [18, 22, 18],
//             scale: [1, 1.1, 1],
//             x: mousePosition.x * -20,
//             y: mousePosition.y * -20,
//           }}
//           transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
//         >
//           <PenLine
//             className="absolute right-1/4 top-60 h-32 w-32"
//             style={{ color: "var(--gold)", opacity: 0.02 }}
//           />
//         </motion.div>
//       </div>

//       <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10 relative">
//         <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
//           {/* Left Content - Enhanced */}
//           <motion.div variants={fadeInLeft} className="lg:col-span-6">
//             <div className="flex items-center gap-3 flex-wrap mb-6">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold backdrop-blur-md"
//                 style={{
//                   background: "linear-gradient(135deg, rgba(var(--accent-rgb), 0.1), rgba(var(--primary-rgb), 0.1))",
//                   border: "1px solid rgba(var(--accent-rgb), 0.2)",
//                   color: "var(--text)",
//                   boxShadow: "0 8px 20px -8px var(--accent)",
//                 }}
//               >
//                 <motion.span
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                   className="inline-block h-2 w-2 rounded-full"
//                   style={{ background: "var(--accent)" }}
//                 />
//                 Our Purpose
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-md"
//                 style={{
//                   background: "rgba(0,0,0,0.02)",
//                   border: "1px solid var(--border)",
//                   color: "var(--text)",
//                 }}
//               >
//                 <Sparkles
//                   className="h-3.5 w-3.5"
//                   style={{ color: "var(--accent)" }}
//                 />
//                 Purpose-led
//               </motion.div>
//             </div>

//             <motion.h2
//               variants={fadeInUp}
//               className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] font-bold"
//             >
//               <span className="block" style={{ color: "var(--text)" }}>
//                 {overviewContent.title.split(' ')[0]}
//               </span>
//               <span className="block mt-2 bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
//                 {overviewContent.title.split(' ').slice(1).join(' ')}
//               </span>
//             </motion.h2>

//             <motion.div
//               variants={fadeInUp}
//               className="mt-8 flex items-center gap-4"
//             >
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "6rem" }}
//                 transition={{ duration: 1, delay: 0.5 }}
//                 className="h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]"
//               />
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "3rem" }}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 className="h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] opacity-40"
//               />
//             </motion.div>

//             <motion.p
//               variants={fadeInUp}
//               className="mt-8 text-lg text-justify leading-relaxed"
//               style={{ color: "var(--text-muted)" }}
//             >
//               {overviewContent.paragraphs?.[0]}
//             </motion.p>

//             {(primary || secondary) && (
//               <motion.div
//                 variants={fadeInUp}
//                 className="mt-10 flex flex-wrap items-center gap-4"
//               >
//                 {primary && (
//                   <motion.div
//                     whileHover={{ scale: 1.02, y: -2 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Link
//                       href={primary.href}
//                       className="group relative inline-flex h-14 items-center gap-3 rounded-xl px-8 font-semibold text-white overflow-hidden shadow-xl"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
//                         boxShadow: "0 15px 30px -10px var(--accent)",
//                       }}
//                     >
//                       <motion.span
//                         className="absolute inset-0 bg-white"
//                         initial={{ opacity: 0, x: "-100%" }}
//                         whileHover={{ opacity: 0.2, x: "100%" }}
//                         transition={{ duration: 0.5 }}
//                       />
//                       <span className="relative z-10 flex items-center gap-2">
//                         {primary.label}
//                         <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </span>
//                     </Link>
//                   </motion.div>
//                 )}

//                 {secondary && (
//                   <motion.div
//                     whileHover={{ scale: 1.02, y: -2 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Link
//                       href={secondary.href}
//                       className="group relative h-14 px-8 text-sm font-semibold rounded-xl overflow-hidden flex items-center gap-2"
//                       style={{
//                         border: "1px solid var(--border)",
//                         color: "var(--text)",
//                         background: "var(--surface)",
//                       }}
//                     >
//                       <motion.span
//                         className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]"
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 0.1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                       <span className="relative z-10 flex items-center gap-2">
//                         {secondary.label}
//                       </span>
//                     </Link>
//                   </motion.div>
//                 )}
//               </motion.div>
//             )}
//           </motion.div>

//           {/* Right: Enhanced Animated Collage with Larger Images */}
//           <motion.div variants={fadeInRight} className="lg:col-span-6">
//             <div className="lg:flex lg:justify-end">
//               <div className="w-full lg:max-w-[600px] xl:max-w-[650px]">
//                 <div className="grid grid-cols-2 gap-6 sm:gap-8">
//                   {/* LEFT column - lifted more */}
//                   <div className="flex flex-col gap-6 sm:gap-8 -translate-y-8 sm:-translate-y-12">
//                     <CollageCard
//                       src={imgAt(0)}
//                       alt={altAt(0)}
//                       tag={tagAt(0)}
//                       index={0}
//                       isHovered={hoveredCard === 0}
//                       onHover={() => setHoveredCard(0)}
//                       onLeave={() => setHoveredCard(null)}
//                       aspectClass="aspect-[4/5]" // portrait
//                     />
//                     <CollageCard
//                       src={imgAt(2)}
//                       alt={altAt(2)}
//                       tag={tagAt(2)}
//                       index={2}
//                       isHovered={hoveredCard === 2}
//                       onHover={() => setHoveredCard(2)}
//                       onLeave={() => setHoveredCard(null)}
//                       aspectClass="aspect-[5/4]" // landscape
//                     />
//                   </div>

//                   {/* RIGHT column - pushed down more */}
//                   <div className="flex flex-col gap-6 sm:gap-8 translate-y-8 sm:translate-y-12">
//                     <CollageCard
//                       src={imgAt(1)}
//                       alt={altAt(1)}
//                       tag={tagAt(1)}
//                       index={1}
//                       isHovered={hoveredCard === 1}
//                       onHover={() => setHoveredCard(1)}
//                       onLeave={() => setHoveredCard(null)}
//                       aspectClass="aspect-[5/4]" // landscape
//                     />
//                     <CollageCard
//                       src={imgAt(3)}
//                       alt={altAt(3)}
//                       tag={tagAt(3)}
//                       index={3}
//                       isHovered={hoveredCard === 3}
//                       onHover={() => setHoveredCard(3)}
//                       onLeave={() => setHoveredCard(null)}
//                       aspectClass="aspect-[4/5]" // portrait
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* ===== Stats row with enhanced styling ===== */}
//         {stats.length > 0 && (
//           <motion.div
//             variants={fadeInUp}
//             className="mt-20 overflow-hidden rounded-3xl"
//             style={{
//               background: "var(--surface)",
//               border: "1px solid var(--border)",
//               boxShadow: "0 30px 60px -30px rgba(0,0,0,0.3)",
//             }}
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
//               {stats.map((s, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.1 }}
//                   onHoverStart={() => setHoveredStat(idx)}
//                   onHoverEnd={() => setHoveredStat(null)}
//                   className="px-6 py-8 sm:px-8 sm:py-10 flex items-center gap-4 cursor-default"
//                   style={{
//                     background:
//                       hoveredStat === idx
//                         ? "linear-gradient(135deg, rgba(var(--accent-rgb), 0.05), rgba(var(--primary-rgb), 0.05))"
//                         : "transparent",
//                     transition: "background 0.3s ease",
//                   }}
//                 >
//                   <motion.span
//                     animate={
//                       hoveredStat === idx
//                         ? {
//                             rotate: [0, 10, -10, 0],
//                             scale: [1, 1.15, 1],
//                           }
//                         : {}
//                     }
//                     transition={{ duration: 0.5 }}
//                     className="inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg"
//                     style={{
//                       background:
//                         hoveredStat === idx
//                           ? "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)"
//                           : "var(--surface-2)",
//                       border: "1px solid var(--border)",
//                       color: hoveredStat === idx ? "white" : "var(--text)",
//                       boxShadow: hoveredStat === idx
//                         ? "0 15px 30px -10px var(--accent)"
//                         : "none",
//                     }}
//                   >
//                     {statIconMap[s.icon] || statIconMap.users}
//                   </motion.span>

//                   <div>
//                     <motion.div
//                       animate={
//                         hoveredStat === idx ? { scale: 1.05 } : { scale: 1 }
//                       }
//                       className="text-2xl font-extrabold sm:text-3xl"
//                       style={{ color: "var(--text)" }}
//                     >
//                       {s.value}
//                     </motion.div>
//                     <div className="text-sm" style={{ color: "var(--text-muted)" }}>
//                       {s.label}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* ===== Donate bar with premium styling ===== */}
//         <motion.div
//           variants={fadeInUp}
//           whileHover={{ y: -4 }}
//           className="mt-16 rounded-3xl p-8 sm:p-10 backdrop-blur-md"
//           style={{
//             background: "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(16,185,129,0.05))",
//             border: "1px solid rgba(34,197,94,0.2)",
//             boxShadow: "0 30px 50px -30px rgba(34,197,94,0.4)",
//           }}
//         >
//           <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex items-start gap-6">
//               <motion.span
//                 whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl"
//                 style={{
//                   background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.1))",
//                   border: "1px solid rgba(34,197,94,0.3)",
//                 }}
//               >
//                 <HeartHandshake
//                   className="h-8 w-8"
//                   style={{ color: "var(--success)" }}
//                 />
//               </motion.span>

//               <div>
//                 <motion.h3
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-2xl font-extrabold sm:text-3xl bg-gradient-to-r from-[var(--success)] to-[var(--accent)] bg-clip-text text-transparent"
//                 >
//                   {donate.title || "Make a difference today"}
//                 </motion.h3>
//                 <motion.p
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="mt-3 text-base leading-relaxed max-w-xl"
//                   style={{ color: "var(--text-muted)" }}
//                 >
//                   {donate.desc ||
//                     "Your contribution powers education, care, and community-led initiatives where it matters most."}
//                 </motion.p>
//               </div>
//             </div>

//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Link
//                 href={donate.href || secondary?.href || "/donation"}
//                 className="group relative inline-flex h-16 items-center justify-center gap-3 rounded-2xl px-10 font-bold text-white overflow-hidden shadow-2xl"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
//                   boxShadow: "0 20px 40px -15px var(--accent)",
//                 }}
//               >
//                 <motion.span
//                   className="absolute inset-0 bg-white"
//                   initial={{ opacity: 0, x: "-100%" }}
//                   whileHover={{ opacity: 0.2, x: "100%" }}
//                   transition={{ duration: 0.5 }}
//                 />
//                 <span className="relative z-10 flex items-center gap-2 text-lg">
//                   {donate.buttonLabel || "Donate Now"}
//                   <motion.div
//                     animate={{ x: [0, 6, 0] }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 1.5,
//                       repeatType: "reverse",
//                     }}
//                   >
//                     <ArrowRight className="h-5 w-5" />
//                   </motion.div>
//                 </span>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Animated progress bar */}
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "75%" }}
//             transition={{ duration: 1.5, delay: 1 }}
//             className="mt-8 h-2 rounded-full bg-gradient-to-r from-[var(--success)] via-[var(--accent)] to-[var(--primary)]"
//             style={{ opacity: 0.2 }}
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// function CollageCard({ src, alt, tag, index, isHovered, onHover, onLeave, aspectClass }) {
//   const cardRef = useRef(null);
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   // 3D tilt effect
//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     setRotate({ x: y * 15, y: x * 15 });
//   };

//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//     onLeave();
//   };

//   // Different rotation offsets for each card
//   const baseRotations = [-3, 2, 4, -2];
//   const baseRotation = baseRotations[index % baseRotations.length];

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={onHover}
//       onMouseLeave={handleMouseLeave}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 + 0.3 }}
//       whileHover={{ y: -12 }}
//       className={[
//         "group relative overflow-hidden rounded-2xl cursor-pointer",
//         aspectClass,
//       ].join(" ")}
//       style={{
//         border: isHovered
//           ? "2px solid var(--accent)"
//           : "1px solid var(--border)",
//         background: "var(--surface)",
//         transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotate(${baseRotation}deg)`,
//         transition:
//           "transform 0.15s ease, border 0.2s ease, box-shadow 0.3s ease",
//         boxShadow: isHovered
//           ? "0 40px 60px -20px var(--accent)"
//           : "0 20px 30px -15px rgba(0,0,0,0.15)",
//       }}
//     >
//       <motion.div
//         animate={{ scale: isHovered ? 1.1 : 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative w-full h-full"
//       >
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           priority={index < 2}
//         />
//       </motion.div>

//       {/* Gradient overlays */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{
//           background: isHovered
//             ? "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
//             : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
//         }}
//         transition={{ duration: 0.3 }}
//       />

//       {/* Animated corner accents */}
//       <motion.div
//         className="absolute top-0 left-0 w-16 h-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isHovered ? 1 : 0 }}
//       >
//         <svg viewBox="0 0 100 100" className="w-full h-full">
//           <motion.path
//             d="M0,0 L100,0 L0,100"
//             fill="none"
//             stroke="var(--accent)"
//             strokeWidth="2"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </svg>
//       </motion.div>

//       <motion.div
//         className="absolute bottom-0 right-0 w-16 h-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isHovered ? 1 : 0 }}
//       >
//         <svg viewBox="0 0 100 100" className="w-full h-full rotate-180">
//           <motion.path
//             d="M0,0 L100,0 L0,100"
//             fill="none"
//             stroke="var(--primary)"
//             strokeWidth="2"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           />
//         </svg>
//       </motion.div>

//       {/* Tag with animation */}
//       {tag && (
//         <motion.div
//           className="absolute left-5 top-5"
//           animate={{
//             scale: isHovered ? 1.1 : 1,
//             y: isHovered ? -3 : 0,
//           }}
//         >
//           <div
//             className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-xl"
//             style={{
//               background: "rgba(0,0,0,0.5)",
//               border: "1px solid rgba(255,255,255,0.2)",
//               backdropFilter: "blur(10px)",
//             }}
//           >
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="h-2 w-2 rounded-full"
//               style={{ background: "var(--accent)" }}
//             />
//             {tag}
//           </div>
//         </motion.div>
//       )}

//       {/* Floating action indicator */}
//       <motion.div
//         className="absolute bottom-5 right-5"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div
//           className="flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md shadow-xl"
//           style={{
//             background: "linear-gradient(135deg, var(--accent), var(--primary))",
//             border: "1px solid rgba(255,255,255,0.3)",
//           }}
//         >
//           <ChevronRight className="h-6 w-6 text-white" />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import overviewContent from "@/app/content/home.overview";
import {
  ArrowRight,
  Sparkles,
  Users,
  FolderKanban,
  Megaphone,
  Network,
  HeartHandshake,
  GraduationCap,
  BookOpen,
  HandHeart,
  PenLine,
  Target,
  Globe,
  Award,
  TrendingUp,
  ChevronRight,
  Leaf,
  Sun,
  Droplets,
} from "lucide-react";

const statIconMap = {
  users: <Users className="h-5 w-5" />,
  projects: <FolderKanban className="h-5 w-5" />,
  action: <Megaphone className="h-5 w-5" />,
  partners: <Network className="h-5 w-5" />,
  impact: <Target className="h-5 w-5" />,
  reach: <Globe className="h-5 w-5" />,
  recognition: <Award className="h-5 w-5" />,
  growth: <TrendingUp className="h-5 w-5" />,
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Overview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = overviewContent.stats || [];
  const donate = overviewContent.donateBar || {};
  const primary = overviewContent.cta?.primary;
  const secondary = overviewContent.cta?.secondary;

  // Need 4 tiles; if only 2 images exist, reuse them
  const imgs = overviewContent.images || [];
  const alts = overviewContent.imageAlts || [];
  const tags = overviewContent.collageTags || [
    "Community",
    "Education",
    "Awareness",
    "Kindness",
  ];

  // Mouse parallax effect
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

  const imgAt = (i) => imgs[i] || imgs[i % Math.max(imgs.length, 1)];
  const altAt = (i) =>
    alts[i] || alts[i % Math.max(alts.length, 1)] || `Overview image ${i + 1}`;
  const tagAt = (i) => tags[i] || tags[i % Math.max(tags.length, 1)];

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="section relative overflow-hidden mb-0 py-20 sm:py-24 lg:py-28"
    >
      {/* Premium background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--surface-2)]" />

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with parallax */}
        <motion.div
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="absolute -left-20 -top-20 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--accent-rgb), 0.2) 0%, transparent 70%)",
          }}
        />

        <motion.div
          animate={{
            x: mousePosition.x * -40,
            y: mousePosition.y * -40,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="absolute -right-20 -bottom-20 h-[700px] w-[700px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-10 w-40 h-40 border border-[var(--accent)]/20 rounded-full" />
          <div className="absolute bottom-20 right-10 w-60 h-60 border border-[var(--primary)]/20 rounded-full" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--text) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
            opacity: 0.02,
          }}
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0,100 Q200,50 400,100 T800,100"
            stroke="var(--accent)"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
          <motion.path
            d="M0,300 Q300,350 600,300 T1200,300"
            stroke="var(--primary)"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 3, delay: 1 }}
          />
        </svg>
      </div>

      {/* ===== Watermark Background Icons (Animated) ===== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [-12, -8, -12],
            scale: [1, 1.1, 1],
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <BookOpen
            className="absolute -left-5 top-10 h-32 w-32"
            style={{ color: "var(--accent)", opacity: 0.03 }}
          />
        </motion.div>

        <motion.div
          animate={{
            rotate: [-5, 0, -5],
            scale: [1, 1.1, 1],
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
          transition={{ repeat: Infinity, duration: 10, delay: 1 }}
        >
          <GraduationCap
            className="absolute right-0 top-40 h-32 w-32"
            style={{ color: "var(--primary)", opacity: 0.03 }}
          />
        </motion.div>

        <motion.div
          animate={{
            rotate: [8, 12, 8],
            scale: [1, 1.1, 1],
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ repeat: Infinity, duration: 9, delay: 2 }}
        >
          <HandHeart
            className="absolute left-1/4 bottom-20 h-32 w-32"
            style={{ color: "var(--success)", opacity: 0.02 }}
          />
        </motion.div>

        <motion.div
          animate={{
            rotate: [18, 22, 18],
            scale: [1, 1.1, 1],
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
        >
          <PenLine
            className="absolute right-1/4 top-60 h-32 w-32"
            style={{ color: "var(--gold)", opacity: 0.02 }}
          />
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10 relative">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Content - Enhanced */}
          <motion.div variants={fadeInLeft} className="lg:col-span-6">
            {/* <div className="flex items-center gap-3 flex-wrap mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(var(--accent-rgb), 0.1), rgba(var(--primary-rgb), 0.1))",
                  border: "1px solid rgba(var(--accent-rgb), 0.2)",
                  color: "var(--text)",
                  boxShadow: "0 8px 20px -8px var(--accent)",
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                Our Purpose
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-md"
                style={{
                  background: "rgba(0,0,0,0.02)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              >
                <Sparkles
                  className="h-3.5 w-3.5"
                  style={{ color: "var(--accent)" }}
                />
                Purpose-led
              </motion.div>
            </div> */}

            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-bold"
            >
              <span className="block" style={{ color: "var(--text)" }}>
                {overviewContent.title.split(" ")[0]}
              </span>
              <span className="block mt-0 bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {overviewContent.title.split(" ").slice(1).join(" ")}
              </span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center gap-4"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] opacity-40"
              />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg text-justify leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {overviewContent.paragraphs?.[0]}
            </motion.p>

            {(primary || secondary) && (
              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                {primary && (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={primary.href}
                      className="group relative inline-flex h-14 items-center gap-3 rounded-xl px-8 font-semibold text-white overflow-hidden shadow-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
                        boxShadow: "0 15px 30px -10px var(--accent)",
                      }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-white"
                        initial={{ opacity: 0, x: "-100%" }}
                        whileHover={{ opacity: 0.2, x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        {primary.label}
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>
                )}

                {secondary && (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={secondary.href}
                      className="group relative h-14 px-8 text-sm font-semibold rounded-xl overflow-hidden flex items-center gap-2"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                        background: "var(--surface)",
                      }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        {secondary.label}
                      </span>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Right: Enhanced Animated Collage with Larger Images */}
          {/* Right: Single Brush Image (like uploaded design) */}
          <motion.div variants={fadeInRight} className="lg:col-span-6">
            <div className="lg:flex lg:justify-end">
              <div className="w-full lg:max-w-[640px] xl:max-w-[720px]">
                <div className="relative h-[260px] sm:h-[340px] lg:h-[580px]">
                  <Image
                    src={overviewContent.heroImage}
                    alt={overviewContent.imageAlts?.[0] || "Hero image"}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 720px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== CENTER HEADING (only) ===== */}
        <motion.div variants={fadeInUp} className="mt-14 text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            <span className="font-extrabold">Find </span>{" "}
            <span className="font-extrabold">
              Clarity, Grow with Intention,
            </span>{" "}
            <span
              className="font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              and live with kindness.
            </span>
          </h2>
        </motion.div>

        {/* ===== BOTTOM TILTED CARDS ===== */}
        <motion.div variants={fadeInUp} className="mt-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {[0, 1, 2, 3].map((i) => {
              const rotations = [-8, -3, 3, 8];
              const lifts = [6, 2, 2, 6];

              return (
                <div
                  key={i}
                  className="relative"
                  style={{
                    transform: `rotate(${rotations[i]}deg) translateY(${lifts[i]}px)`,
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-3xl border"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      boxShadow: "0 24px 50px rgba(0,0,0,0.10)",
                    }}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={imgAt(i)}
                        alt={altAt(i)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                      {/* soft top gloss like reference */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.16), transparent 45%)",
                        }}
                      />
                    </div>

                    {/* label */}
                    {/* <div className="absolute inset-0 grid place-items-center">
                      <div
                        className="px-4 py-1.5 rounded-full text-xs font-semibold"
                        style={{
                          background: "rgba(0,0,0,0.30)",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.20)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {tagAt(i)}
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== Stats row with enhanced styling ===== */}
        {stats.length > 0 && (
          <motion.div
            variants={fadeInUp}
            className="mt-20 overflow-hidden rounded-3xl"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "0 30px 60px -30px rgba(0,0,0,0.3)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onHoverStart={() => setHoveredStat(idx)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="px-6 py-8 sm:px-8 sm:py-10 flex items-center gap-4 cursor-default"
                  style={{
                    background:
                      hoveredStat === idx
                        ? "linear-gradient(135deg, rgba(var(--accent-rgb), 0.05), rgba(var(--primary-rgb), 0.05))"
                        : "transparent",
                    transition: "background 0.3s ease",
                  }}
                >
                  <motion.span
                    animate={
                      hoveredStat === idx
                        ? {
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.15, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg"
                    style={{
                      background:
                        hoveredStat === idx
                          ? "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)"
                          : "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: hoveredStat === idx ? "white" : "var(--text)",
                      boxShadow:
                        hoveredStat === idx
                          ? "0 15px 30px -10px var(--accent)"
                          : "none",
                    }}
                  >
                    {statIconMap[s.icon] || statIconMap.users}
                  </motion.span>

                  <div>
                    <motion.div
                      animate={
                        hoveredStat === idx ? { scale: 1.05 } : { scale: 1 }
                      }
                      className="text-2xl font-extrabold sm:text-3xl"
                      style={{ color: "var(--text)" }}
                    >
                      {s.value}
                    </motion.div>
                    <div
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ===== Donate bar with premium styling ===== */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4 }}
          className="mt-16 rounded-3xl p-8 sm:p-10 backdrop-blur-md"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(16,185,129,0.05))",
            border: "1px solid rgba(34,197,94,0.2)",
            boxShadow: "0 30px 50px -30px rgba(34,197,94,0.4)",
          }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-6">
              <motion.span
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.1))",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                <HeartHandshake
                  className="h-8 w-8"
                  style={{ color: "var(--success)" }}
                />
              </motion.span>

              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-extrabold sm:text-3xl bg-gradient-to-r from-[var(--success)] to-[var(--accent)] bg-clip-text text-transparent"
                >
                  {donate.title || "Make a difference today"}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 text-base leading-relaxed max-w-xl"
                  style={{ color: "var(--text-muted)" }}
                >
                  {donate.desc ||
                    "Your contribution powers education, care, and community-led initiatives where it matters most."}
                </motion.p>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={donate.href || secondary?.href || "/donation"}
                className="group relative inline-flex h-16 items-center justify-center gap-3 rounded-2xl px-10 font-bold text-white overflow-hidden shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
                  boxShadow: "0 20px 40px -15px var(--accent)",
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ opacity: 0, x: "-100%" }}
                  whileHover={{ opacity: 0.2, x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  {donate.buttonLabel || "Donate Now"}
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      repeatType: "reverse",
                    }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Animated progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-8 h-2 rounded-full bg-gradient-to-r from-[var(--success)] via-[var(--accent)] to-[var(--primary)]"
            style={{ opacity: 0.2 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
