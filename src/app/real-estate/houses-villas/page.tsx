
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  House,
  Ruler,
  ShieldCheck,
  ExternalLink,
  Compass,
} from "lucide-react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const projects = [
  {
    name: "Anugrah Homes",
    location: "Aligarh–Palwal Road, Jattari",
    image: "/images/anugrah-homes.jpg",
    alt: "Anugrah Homes residential development",
    description:
      "Anugrah Homes is a development to explore if you are considering residential plots for a future independent house in Jattari. Contact the developer to confirm current inventory, construction permissions, and whether any completed houses are available.",
    features: [
      "Residential plot options to enquire about",
      "Jattari location and wider regional connectivity",
      "Confirm plot dimensions, approvals and building conditions",
    ],
    website: "https://www.anugrahhomes.com/",
  },
  {
    name: "Skyline Aero Homes",
    location: "Durgapur, Jattari, Uttar Pradesh",
    image: "/images/skyline aero homes.jpg",
    alt: "Skyline Aero Homes residential township",
    description:
      "Skyline Aero Homes is another residential development to research near Jattari and the wider Jewar Airport corridor. Its published project material describes residential plots. Confirm directly with the developer whether ready-built houses or villas are available.",
    features: [
      "Residential township and plot options",
      "Published plot sizes include 100, 125, 150 and 200 sq. yd.",
      "Confirm current availability, approvals and construction terms",
    ],
    website: "https://www.skylineaerohomes.com/",
  },
];

const nearbyAreas = [
  {
    name: "Jattari",
    tag: "Local search",
    description:
      "Explore independent houses, residential plots and properties around Jattari. Confirm the exact locality and access to roads and amenities.",
  },
  {
    name: "Tappal",
    tag: "Nearby area",
    description:
      "Compare available residential properties in the wider Tappal area and along the Aligarh–Palwal Road corridor.",
  },
  {
    name: "Jewar corridor",
    tag: "Regional search",
    description:
      "Research properties near the Yamuna Expressway and Jewar Airport corridor. Verify actual travel distances and property locations before visiting.",
  },
];

const buyingChecklist = [
  "Confirm whether the property is a plot, an under-construction house or a ready-to-move villa.",
  "Verify ownership documents, applicable approvals and permitted land use.",
  "Get the total price, additional charges, possession date and construction conditions in writing.",
  "Visit the actual site and check road access, water, electricity and nearby facilities.",
];

export default function HousesVillasPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#173F40]">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#103F40]">
        <Image
          src="/images/residential-home.jpg"
          alt="Modern residential house"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/95 via-[#103F40]/70 to-[#103F40]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/55 via-transparent to-black/10" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <House size={15} className="text-[#D9B783]" />
              Houses & Villas · Jattari
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              Find your place.
              <br />
              <span className="font-serif font-normal italic text-[#E8D2A7]">
                Make it home.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Discover independent-home possibilities, villa-style living and
              residential developments in Jattari and nearby areas. Compare
              locations, explore projects and verify property details before
              making a decision.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#featured-projects"
                className="inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition hover:-translate-y-1 hover:bg-[#E8D2A7]"
              >
                Explore projects
                <ArrowRight size={17} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Property enquiry
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-white/75">
              <MapPin size={16} className="text-[#D9B783]" />
              Jattari · Tappal · Jewar corridor
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              Find the right property
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              A home that fits
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                your plans.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#526666]">
              Whether you want a ready-to-move house, a villa or a plot on which
              to build your own home, start by comparing the property type,
              location, budget and possession status.
            </p>

            <p className="mt-5 text-base leading-8 text-[#687B78]">
              Anugrah Homes and Skyline Aero Homes are two developments worth
              researching for residential plots around Jattari. Their published
              plot information does not automatically confirm the availability
              of completed houses or villas.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E1E5DC] bg-[#F3F4ED] p-5">
                <House size={22} className="text-[#A27C45]" />
                <h3 className="mt-4 font-semibold">Ready-built homes</h3>
                <p className="mt-2 text-sm leading-6 text-[#687B78]">
                  Check construction quality, ownership and possession details.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E1E5DC] bg-[#F3F4ED] p-5">
                <Ruler size={22} className="text-[#A27C45]" />
                <h3 className="mt-4 font-semibold">Plots for your home</h3>
                <p className="mt-2 text-sm leading-6 text-[#687B78]">
                  Check plot dimensions and permitted construction before
                  purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        id="featured-projects"
        className="bg-[#F1F0E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              Featured developments
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Start your search
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                close to Jattari.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#687B78]">
              Explore each developer&apos;s published information and contact
              them directly to verify property types, current availability,
              prices and construction conditions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[26px] border border-[#D9DED5] bg-[#FFFDF8] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(16,63,64,0.12)]"
              >
                <div className="relative h-[270px] overflow-hidden sm:h-[330px]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/85 via-transparent to-black/10" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-[#103F40]/65 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Development 0{index + 1}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
                      <MapPin size={15} className="text-[#E8D2A7]" />
                      {project.location}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-[15px] leading-7 text-[#526666]">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-[#526666]"
                      >
                        <ShieldCheck
                          size={17}
                          className="mt-0.5 shrink-0 text-[#A27C45]"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 border-t border-[#E4E5DC] pt-6 sm:flex-row">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#164E52] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#103F40]"
                    >
                      Official website
                      <ExternalLink size={15} />
                    </a>

                    <Link
                      href={`/contact?project=${encodeURIComponent(project.name)}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#B9C8BE] px-5 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#E8EEE5]"
                    >
                      Enquire
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-[#77857D]">
            Property prices, inventory, legal approvals and possession details
            should be independently verified with the relevant developer.
          </p>
        </div>
      </section>

      {/* NEARBY LOCATIONS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Expand your search
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Look beyond
                <br />
                <span className="font-serif font-normal italic text-[#A27C45]">
                  one location.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-[#687B78]">
                If you do not find a suitable property in Jattari, compare
                nearby areas. These are suggested search areas, not confirmed
                listings for available houses or villas.
              </p>
            </div>

            <div className="space-y-4">
              {nearbyAreas.map((area) => (
                <div
                  key={area.name}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#E1E5DC] p-5 transition hover:border-[#B89552] hover:bg-[#F7F6F0] sm:flex-row sm:items-center sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52] transition group-hover:bg-[#D9B783]">
                    <MapPin size={21} />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold">{area.name}</h3>
                      <span className="rounded-full bg-[#F1F0E8] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#8D7048]">
                        {area.tag}
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-[#687B78]">
                      {area.description}
                    </p>
                  </div>

                  <Link
                    href={`/contact?location=${encodeURIComponent(area.name)}`}
                    aria-label={`Ask about property options in ${area.name}`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9DED5] transition hover:bg-[#164E52] hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUYING CHECKLIST */}
      <section className="bg-[#E8EEE5] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              Before you buy
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Make the decision
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                with confidence.
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {buyingChecklist.map((item) => (
              <div
                key={item}
                className="flex gap-3 text-sm leading-7 text-[#526666]"
              >
                <ShieldCheck
                  size={19}
                  className="mt-1 shrink-0 text-[#A27C45]"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#103F40] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-4 -top-10 h-48 w-48 rounded-full border border-[#D9B783]/30" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#D9B783]">
                Your next step
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Searching for a house, villa or plot?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Share your preferred location and property type to organise
                your search around Jattari and nearby areas.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition hover:-translate-y-1 hover:bg-[#E8D2A7]"
            >
              Send an enquiry
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
