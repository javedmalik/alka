import HopeBridge from "@/app/components/donation/HopeBridge ";
import Image from "next/image";
import { HeartHandshake, Sparkles, HandHeart, Calendar, Package } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
     {/* <section className="relative -mt-[80px]">
            <div className="relative h-[260px] sm:h-[420px] w-full overflow-hidden">
              <Image
                src="/images/banners/aboutus_page_banners/core.jpeg" // change if needed
                alt="Donation banner"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/60" />
    
              <div className="container-page relative h-full mt-10">
                <div className="flex h-full items-end pb-8 sm:pb-20 pt-[80px]">
                  <div>
                       
                    <h1 className="mt-4 text-4xl sm:text-5xl font-serif font-extrabold text-white">
                      Donation
                    </h1>
    
                    <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/80">
                      At ALKA, learning brings us together and purpose helps us move forward.
                    </p>
    
                    <div className="mt-2 flex flex-wrap gap-3">
                      <a
                        href="#donate"
                        className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                        style={{
                          background: "linear-gradient(135deg, var(--primary), var(--accent))",
                        }}
                      >
                        Donate Now
                      </a>
    
                      <a
                        href="#mission"
                        className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-extrabold transition hover:-translate-y-0.5 hover:shadow-md"
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.22)",
                          color: "rgba(255,255,255,0.9)",
                        }}
                      >
                        How it helps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
   
      <HopeBridge />
    </>
  );
};

export default page;
