
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Store,
  Building2,
  BriefcaseBusiness,
  Warehouse,
  ShieldCheck,
  ExternalLink,
  TrendingUp,
  Ruler,
  Compass,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const propertyTypes = [
  {
    number: "01",
    title: "Retail Shops",
    icon: Store,
    description:
      "Explore shop spaces for daily-needs stores, convenience retail, salons, specialty retailers and other neighbourhood services.",
    note: "Verify frontage, footfall and permitted use.",
  },
  {
    number: "02",
    title: "Showrooms",
    icon: Building2,
    description:
      "Consider suitable commercial premises for branded retail, electronics, furniture, appliances or other display-led businesses.",
    note: "Check visibility, parking and access.",
  },
  {
    number: "03",
    title: "Office Spaces",
    icon: BriefcaseBusiness,
    description:
      "Look for premises that could suit professional services, consultancies, small businesses or local administrative offices.",
    note: "Confirm utilities and commercial permissions.",
  },
  {
    number: "04",
    title: "Commercial Land",
    icon: Warehouse,
    description:
      "Research commercial plots for a future business premises, subject to the approved land use and applicable development rules.",
    note: "Verify zoning and building approvals.",
  },
];

const projects = [
  {
    name: "Anugrah Homes",
    subtitle: "Residential township with retail-related amenities",
    location: "Aligarh–Palwal Road, Jattari",
    image: "/images/anugrah-homes.jpg",
    alt: "Anugrah Homes development in Jattari",
    description:
      "Anugrah Homes publishes residential plotted-development information and lists retail shops among its amenities. If you are looking for a shop or commercial space, contact the developer to check whether any dedicated commercial units or commercial plots are actually offered for sale or lease.",
    highlights: [
      "Retail shops are mentioned among published amenities",
      "Jattari location for local-area property research",
      "Commercial availability and usage rights require direct confirmation",
    ],
    website: "https://www.anugrahhomes.com/",
    cta: "Explore Anugrah Homes",
  },
  {
    name: "Skyline Aero Homes",
    subtitle: "Township with a dedicated commercial zone",
    location: "Durgapur, Jattari, Uttar Pradesh",
    image: "/images/skyline aero homes.jpg",
    alt: "Skyline Aero Homes township development",
    description:
      "Skyline Aero Homes' published brochure describes a dedicated commercial zone within its planned township. Businesses and investors can contact the developer to ask about commercial plot availability, permitted business uses, dimensions, pricing and site-visit arrangements.",
    highlights: [
      "Dedicated commercial zone mentioned in the project brochure",
      "Residential township near the wider Jewar Airport corridor",
      "Ask for the commercial layout, inventory and applicable approvals",
    ],
    website: "https://www.skylineaerohomes.com/",
    cta: "Explore Skyline Aero Homes",
  },
];

const locationIdeas = [
  {
    title: "Jattari Market",
    tag: "Local business search",
    description:
      "Research existing market streets for shops, customer access, nearby businesses and local demand. Check individual premises for current availability.",
  },
  {
    title: "Aligarh–Palwal Road",
    tag: "Roadside premises",
    description:
      "Compare road-facing shops and commercial premises in the Jattari area. Check legal access, parking, visibility and permitted commercial use.",
  },
  {
    title: "Tappal and the wider Jewar corridor",
    tag: "Regional search",
    description:
      "Broaden your search to nearby areas if the right property is not available locally. Verify the exact site and transport connections before making comparisons.",
  },
];

const dueDiligence = [
  "Verify the land use and whether the property is legally permitted for your intended business.",
  "Ask for ownership documents, approved layout plans and relevant development permissions.",
  "Confirm the total price or rent, taxes, maintenance charges, utilities and payment terms in writing.",
  "Visit the site and assess road access, parking, visibility and nearby customer activity.",
];

export default function CommercialPropertiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#173F40]">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-[#103F40]">
        <Image
          src="/images/Golden Hour Retail Boulevard.jpg"
          alt="Local market and commercial activity around Jattari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/95 via-[#103F40]/75 to-[#103F40]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/65 via-transparent to-black/10" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <Building2 size={15} className="text-[#D9B783]" />
              Commercial Real Estate · Jattari
            </div>

            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              Space for
              <br />
              <span className="font-serif font-normal italic text-[#E8D2A7]">
                your next move.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Explore commercial property categories, shop and showroom
              possibilities, and planned developments in Jattari and nearby
              areas. Compare location, accessibility and permitted use before
              choosing a business space.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#property-types"
                className="inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition hover:-translate-y-1 hover:bg-[#E8D2A7]"
              >
                Explore property types
                <ArrowRight size={17} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Business enquiry
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#D9B783]" />
                Jattari & nearby areas
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#D9B783]" />
                Verify commercial permissions
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[340px] border-l border-t border-white/20 bg-[#103F40]/70 p-8 text-white backdrop-blur-xl md:block lg:w-[390px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D9B783]">
            A smarter property search
          </p>
          <p className="mt-3 text-2xl font-medium leading-snug">
            Location.
            <br />
            Business use.
            <br />
            Documentation.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Start with the practical details before committing to a property.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              Find your business space
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              The right space
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                makes a difference.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#526666]">
              Whether you are planning a retail shop, a showroom, an office or
              a commercial plot, the right property depends on the kind of
              business you want to operate and the customers you need to reach.
            </p>

            <p className="mt-5 text-base leading-8 text-[#687B78]">
              This guide brings together commercial property categories and
              two developments to investigate around Jattari. It is a
              discovery page, not a live inventory of available shops, offices
              or commercial plots.
            </p>

            <a
              href="#featured-projects"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#B89552] pb-2 text-sm font-semibold transition hover:gap-4"
            >
              Explore featured developments
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section
        id="property-types"
        className="bg-[#F1F0E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Commercial property guide
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Different spaces.
                <br />
                <span className="font-serif font-normal italic text-[#A27C45]">
                  Different opportunities.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#687B78]">
              Understand the property types you can search for. Availability
              and permissions depend on the individual property.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {propertyTypes.map((item) => {
              const PropertyIcon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group flex min-h-[310px] flex-col rounded-[24px] border border-[#D9DED5] bg-[#FFFDF8] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B89552] hover:shadow-[0_18px_45px_rgba(16,63,64,0.09)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EEE5] text-[#164E52] transition duration-300 group-hover:rotate-[-5deg] group-hover:bg-[#D9B783]">
                      <PropertyIcon size={23} />
                    </div>

                    <span className="text-xs tracking-[0.2em] text-[#A27C45]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#687B78]">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-[#E4E5DC] pt-4 text-xs leading-6 text-[#8D7048]">
                    {item.note}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANUGRAH + SKYLINE */}
      <section
        id="featured-projects"
        className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              Featured developments
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Explore the projects.
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                Ask about commercial options.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#687B78]">
              Anugrah Homes and Skyline Aero Homes have relevant published
              development information. Use their official websites to confirm
              whether commercial units or plots are currently available.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[26px] border border-[#D9DED5] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(16,63,64,0.12)]"
              >
                <div className="relative h-[270px] overflow-hidden sm:h-[340px]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/90 via-[#092D2E]/10 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-[#103F40]/65 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Development 0{index + 1}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
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
                    {project.highlights.map((highlight) => (
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
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#164E52] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#103F40]"
                    >
                      {project.cta}
                      <ExternalLink size={15} />
                    </a>

                    <Link
                      href={`/contact?project=${encodeURIComponent(project.name)}&interest=${encodeURIComponent("Commercial Property")}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#B9C8BE] px-5 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#E8EEE5]"
                    >
                      Commercial enquiry
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-[#77857D]">
            The features above refer to published project information, not a
            guarantee of available commercial inventory. Confirm current
            stock, plot use, approvals, price and lease terms directly.
          </p>
        </div>
      </section>

      {/* LOCATION GUIDE */}
      <section className="bg-[#F1F0E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Location matters
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Find your
                <br />
                <span className="font-serif font-normal italic text-[#A27C45]">
                  business address.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-[#687B78]">
                These are useful areas to investigate when searching for
                commercial property. They are not confirmed listings of
                currently available premises.
              </p>
            </div>

            <div className="space-y-4">
              {locationIdeas.map((area, index) => (
                <div
                  key={area.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#D9DED5] bg-[#FFFDF8] p-5 transition hover:border-[#B89552] sm:flex-row sm:items-start sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52] transition group-hover:bg-[#D9B783]">
                    <MapPin size={21} />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold">{area.title}</h3>
                      <span className="rounded-full bg-[#F1F0E8] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#8D7048]">
                        {area.tag}
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-[#687B78]">
                      {area.description}
                    </p>

                    <Link
                      href={`/contact?location=${encodeURIComponent(area.title)}&interest=${encodeURIComponent("Commercial Property")}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#164E52] transition hover:gap-3"
                    >
                      Ask about this area
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  <span className="hidden text-xs tracking-[0.18em] text-[#A27C45] sm:block">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS PROPERTY CHECKLIST */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              Before you invest or lease
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Check the details.
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                Protect your plans.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-[#687B78]">
              A property's location is only one part of the decision. Check
              that the premises are suitable for your intended business
              before paying a booking amount or signing a lease.
            </p>
          </div>

          <div className="divide-y divide-[#E2E5DC] border-y border-[#E2E5DC]">
            {dueDiligence.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 py-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52]">
                  {index === 0 ? (
                    <ShieldCheck size={20} />
                  ) : index === 1 ? (
                    <Compass size={20} />
                  ) : index === 2 ? (
                    <Ruler size={20} />
                  ) : (
                    <MapPin size={20} />
                  )}
                </div>

                <p className="pt-1 text-sm leading-7 text-[#526666]">
                  {item}
                </p>
              </div>
            ))}
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
                Your next business move
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                Looking for a shop, office or commercial plot?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Tell us the property type and preferred location so you can
                organise your search around Jattari and nearby areas.
              </p>
            </div>

            <Link
              href={`/contact?interest=${encodeURIComponent("Commercial Property")}`}
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition hover:-translate-y-1 hover:bg-[#E8D2A7]"
            >
              Send an enquiry
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
