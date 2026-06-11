import Link from "next/link";
import donateData from "@/app/content/home.donate";

function toneStyles(tone) {
  switch (tone) {
    case "danger":
      return { bg: "var(--danger)" };
    case "accent":
      return { bg: "var(--alka2)" };
    case "gold":
      return { bg: "var(--alka3)" };
    case "success":
      return { bg: "var(--alka4)" };
    default:
      return { bg: "var(--alka1)" };
  }
}

export default function DonateSection2() {
  return (
    <section className="relative mb-20 bg-[var(--bg)] py-16">
      <div className="container-page w-full max-w-[1500px] mt-0">
       
        <div className="mx-auto max-w-full text-center">
          <h2 className="h2 p-5">{donateData.title}</h2>
          <p className="p-muted mt-3 text-base  sm:text-[17px]">
            {donateData.description}
          </p>
        </div>

      
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {donateData.options.map((option, index) => {
            const tone = toneStyles(option.tone);

            return (
              <div
                key={index}
                className="group card relative flex h-full flex-col overflow-hidden p-6 min-h-[320px]"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, " +
                    tone.bg +
                    ", white 92%) 0%, color-mix(in oklab, var(--surface), transparent 0%) 55%, var(--surface) 100%)",
                }}
              >
                
                <div
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{ background: tone.bg }}
                />

                
                <div className="flex flex-1 flex-col">
                  <h3 className="mt-2 py-2 font-serif text-center text-2xl leading-snug">
                    {option.title}
                  </h3>

                  <p className="p-muted mt-3 text-xl text-center leading-relaxed">
                    {option.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      href={option.link}
                      className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:opacity-80"
                      style={{ background: tone.bg }}
                    >
                      {option.buttonText}
                    </Link>
                  </div>
                </div>

                
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-30"
                  style={{ background: tone.bg }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}