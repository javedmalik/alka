import Image from "next/image";
import Link from "next/link";
import bannerContent from "@/app/content/home.banner";

export default function HomeBanner() {
  return (
    <section className="relative">
      {/* background image */}
      <div className="relative h-[72vh] min-h-[560px] w-full">
        <Image
          src={bannerContent.image}
          alt={bannerContent.tagline || "ALKA"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* dark overlay like screenshot */}
        <div className="absolute inset-0 bg-black/55" />

        {/* center content */}
        <div className="absolute inset-0">
          <div className="container-page flex h-full flex-col items-center justify-center text-center">
            {/* logo area optional (keep if you want) */}
            {/* <div className="mb-4 text-white/90 font-serif text-lg">ALKA</div> */}

            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl">
              {bannerContent.title}
            </h1>

            {/* <p className="pt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-xl">
              {bannerContent.description}
            </p> */}
            <p className="mt-4 max-w-full text-sm leading-relaxed text-white/85 sm:text-base lg:text-xl">
             <br/> {bannerContent.description2}
            </p>

            {/* <div className="mt-7">
              <Link
                href="/donation"
                className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold text-white transition hover:opacity-90 active:opacity-85"
                style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)" }} // green like screenshot button
              >
                Donate Now
              </Link>
            </div> */}
          </div>
        </div>

        {/* IMPORTANT: add bottom space so floating cards don't cover hero content */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-32 lg:h-40" />
      </div>
    </section>
  );
}
