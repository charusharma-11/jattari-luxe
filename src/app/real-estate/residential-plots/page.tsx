"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  ExternalLink,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";


const plotGuides = [
  {
    number: "01",
    title: "Choose the right plot size",
    description:
      "Compare 100, 150 and 200 square yard options according to your home plan, budget and future requirements.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Check the paperwork",
    description:
      "Ask for the approved layout, ownership records, applicable permissions and all charges in writing before booking.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Visit before deciding",
    description:
      "Inspect the actual plot, road access, surrounding development and amenities instead of relying only on brochures.",
    icon: Compass,
  },
];

const developers = [
  {
    name: "Anugrah Homes",
    subtitle: "Planned residential plots",
    image: "/images/anugrah-homes.jpg",
    imageAlt: "Anugrah Homes real estate project",
    description:
      "Explore Anugrah Homes for residential plot options near the Jattari and Jewar Airport corridor. Its official website features plotted developments, layout information and community amenities.",
    location: "Jattari, Aligarh, Uttar Pradesh",
    sizes: [
      { size: "100 sq. yd.", note: "Compact home planning" },
      { size: "200 sq. yd.", note: "More space for a family home" },
    ],
    highlights: [
      "Published plot and layout information",
      "Community amenities described on the official website",
      "Site visit and documentation enquiries",
    ],
    website: "https://www.anugrahhomes.com/",
    label: "Explore Anugrah",
    tag: "Residential living",
  },
  {
    name: "Skyline Aero Homes",
    subtitle: "Residential township near Jewar",
    image: "/images/skyline aero homes.jpg",
    imageAlt: "Skyline Aero Homes residential project",
    description:
      "Skyline Aero Homes presents residential plots near the Yamuna Expressway and Jewar Airport corridor, with a focus on planned roads, gated-community features and open spaces.",
    location: "Jattari area, Uttar Pradesh",
    sizes: [
      { size: "100 sq. yd.", note: "A compact plot option" },
      { size: "150 sq. yd.", note: "An intermediate plot option" },
    ],
    highlights: [
      "Planned internal roads and community spaces",
      "Gated-entry and security features described by the developer",
      "Layout and current inventory enquiries",
    ],
    website: "https://www.skylineaerohomes.com/",
    label: "Explore Skyline",
    tag: "Planned township",
  },
];

export default function ResidentialPlotsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#173F40]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[#103F40] lg:min-h-[730px]">
        <Image
          src="/images/hub-fields.jpg"
          alt="Open land and surroundings near Jattari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/95 via-[#103F40]/75 to-[#103F40]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/70 via-transparent to-black/10" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 pb-24 pt-32 sm:px-8 lg:min-h-[730px] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <Sparkles size={14} className="text-[#D9B783]" />
              Real Estate · Jattari
            </div>

            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              Find a plot.
              <br />
              <span className="font-serif font-normal italic text-[#E8D2A7]">
                Build your future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Explore residential plot options around Jattari, compare
              developments, and take a more informed first step towards
              building your home.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured-developments"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition duration-300 hover:-translate-y-1 hover:bg-[#E8D2A7]"
              >
                Explore developments
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Ask a question
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#D9B783]" />
                Jattari & surrounding areas
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#D9B783]" />
                Check documents before buying
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[330px] border-l border-t border-white/20 bg-[#103F40]/65 p-7 text-white backdrop-blur-xl md:block lg:w-[390px] lg:p-9">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D9B783]">
            Start with the essentials
          </p>
          <p className="mt-3 text-2xl font-medium leading-snug">
            Location. Layout.
            <br />
            Documentation.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Compare the details before you commit to a property.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              A thoughtful starting point
            </p>

            <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              More than land.
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                A place to belong.
              </span>
            </h2>
          </div>

          <div className="lg:pt-3">
            <p className="text-lg leading-8 text-[#526666]">
              Choosing a residential plot is about finding the right balance
              between location, size, connectivity and the kind of home you
              want to build. Jattari&apos;s position in the wider Jewar and
              Yamuna Expressway corridor makes it worth researching the
              available developments carefully.
            </p>

            <p className="mt-5 text-base leading-8 text-[#687B78]">
              Start by exploring the projects below, then confirm the exact
              site location, approvals, plot dimensions, price and possession
              terms directly with the developer.
            </p>

            <a
              href="#plot-checklist"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#B89552] pb-2 text-sm font-semibold transition hover:gap-4"
            >
              Your plot-buying checklist
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED DEVELOPMENTS */}
      <section
        id="featured-developments"
        className="bg-[#F1F0E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Explore the projects
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Two names to explore.
                <br />
                <span className="font-serif font-normal italic text-[#A27C45]">
                  One important decision.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#607270]">
              Review each developer&apos;s published information and contact
              them directly for current availability and verified details.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {developers.map((developer, index) => (
              <article
                key={developer.name}
                className="group overflow-hidden rounded-[26px] border border-[#D9DED5] bg-[#FFFDF8] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(16,63,64,0.12)]"
              >
                <div className="relative h-[270px] overflow-hidden sm:h-[340px]">
                  <Image
                    src={developer.image}
                    alt={developer.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/85 via-[#092D2E]/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-[#103F40]/65 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9B783]" />
                    {developer.tag}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-7 sm:left-8">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#E8D2A7]">
                      Featured development 0{index + 1}
                    </p>
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                      {developer.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {developer.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-3 text-sm text-[#687B78]">
                    <MapPin
                      size={17}
                      className="mt-0.5 shrink-0 text-[#A27C45]"
                    />
                    <span>{developer.location}</span>
                  </div>

                  <p className="mt-5 text-[15px] leading-7 text-[#526666]">
                    {developer.description}
                  </p>

                  <div className="mt-7">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C45]">
                      Plot options to enquire about
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {developer.sizes.map((plot) => (
                        <div
                          key={plot.size}
                          className="rounded-2xl border border-[#E0E4DB] bg-[#F6F5EF] p-4 transition hover:border-[#B89552]"
                        >
                          <div className="flex items-center gap-2">
                            <Ruler
                              size={16}
                              className="text-[#A27C45]"
                            />
                            <p className="font-semibold text-[#173F40]">
                              {plot.size}
                            </p>
                          </div>
                          <p className="mt-2 text-xs leading-5 text-[#687B78]">
                            {plot.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    {developer.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-[#526666]"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-[#A27C45]"
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 border-t border-[#E4E5DC] pt-6 sm:flex-row">
                    <a
                      href={developer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#164E52] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#103F40]"
                    >
                      {developer.label}
                      <ExternalLink size={15} />
                    </a>

                    <Link
                      href={`/contact?project=${encodeURIComponent(
                        developer.name
                      )}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#B9C8BE] px-5 py-3.5 text-sm font-semibold text-[#173F40] transition hover:border-[#164E52] hover:bg-[#E8EEE5]"
                    >
                      Enquire
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-[#84918A]">
                    Plot options and features are subject to confirmation by
                    the developer. Verify current inventory, prices and
                    approvals directly.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUYING CHECKLIST */}
      <section
        id="plot-checklist"
        className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Before you book
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                A better plot
                <br />
                starts with
                <br />
                <span className="font-serif font-normal italic text-[#A27C45]">
                  better questions.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#687B78]">
                Do your checks before paying a booking amount. Ask for written
                answers, not just verbal assurances.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#164E52] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#103F40]"
              >
                Contact our team
                <ArrowDownRight size={17} />
              </Link>
            </div>

            <div className="divide-y divide-[#E2E5DC] border-y border-[#E2E5DC]">
              {plotGuides.map((guide) => {
                const GuideIcon = guide.icon;

                return (
                  <div
                    key={guide.number}
                    className="group grid gap-4 py-7 sm:grid-cols-[70px_1fr] sm:gap-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EEE5] text-[#164E52] transition duration-300 group-hover:rotate-[-5deg] group-hover:bg-[#D9B783]">
                      <GuideIcon size={22} />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-[0.16em] text-[#A27C45]">
                          {guide.number}
                        </span>
                        <h3 className="text-xl font-semibold text-[#173F40]">
                          {guide.title}
                        </h3>
                      </div>
                      <p className="max-w-xl text-sm leading-7 text-[#687B78]">
                        {guide.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#103F40] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-5 -top-12 h-52 w-52 rounded-full border border-[#D9B783]/30" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#D9B783]">
                Your next step
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                Have a location or plot size in mind?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Tell us what you are looking for and contact the relevant
                developer to confirm the available options.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition hover:-translate-y-1 hover:bg-[#E8D2A7]"
            >
              Get in touch
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}