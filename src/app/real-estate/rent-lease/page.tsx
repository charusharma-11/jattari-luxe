
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  KeyRound,
  House,
  Store,
  Building2,
  Clock3,
  ShieldCheck,
  ExternalLink,
  FileCheck2,
  Search,
  CalendarDays,
} from "lucide-react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const rentalTypes = [
  {
    number: "01",
    title: "Homes & Apartments",
    description:
      "Search for rental homes and independent residential properties in Jattari according to your family size, budget and preferred location.",
    icon: House,
    details: "Residential rent",
  },
  {
    number: "02",
    title: "Shops & Retail Spaces",
    description:
      "Explore shop premises for retail, daily-needs businesses, salons, service outlets and other local commercial uses.",
    icon: Store,
    details: "Commercial rent",
  },
  {
    number: "03",
    title: "Office & Business Space",
    description:
      "Look for premises suitable for professional services, small offices, consultancies and local business operations.",
    icon: Building2,
    details: "Business leases",
  },
];

const developers = [
  {
    name: "Anugrah Homes",
    eyebrow: "Jattari · Aligarh–Palwal Road",
    image: "/images/anugrah-homes.jpg",
    alt: "Anugrah Homes residential development",
    description:
      "Anugrah Homes focuses on residential plots and planned living near Jattari. Its published amenities also mention a commercial center. If you are looking to rent or lease a property within or associated with the development, ask the developer whether any suitable units are currently available.",
    questions: [
      "Ask about available commercial spaces or retail units",
      "Enquire about any rental or lease opportunities",
      "Confirm the exact location, permitted use and lease terms",
    ],
    website: "https://www.anugrahhomes.com/",
    label: "Visit Anugrah Homes",
  },
  {
    name: "Skyline Aero Homes",
    eyebrow: "Jattari · Jewar corridor",
    image: "/images/skyline aero homes.jpg",
    alt: "Skyline Aero Homes township development",
    description:
      "Skyline Aero Homes is a planned residential township near the wider Jewar Airport and Yamuna Expressway corridor. If you are interested in leasing a property or finding a business space linked to the project, contact the developer to verify whether rental inventory is offered.",
    questions: [
      "Ask whether any property is available on rent or lease",
      "Confirm residential versus commercial property options",
      "Request current terms, site details and availability",
    ],
    website: "https://www.skylineaerohomes.com/",
    label: "Visit Skyline Aero Homes",
  },
];

const leaseChecklist = [
  {
    title: "Check the agreement",
    description:
      "Read the lease duration, notice period, renewal conditions, deposit refund rules and any lock-in period.",
    icon: FileCheck2,
  },
  {
    title: "Understand the total cost",
    description:
      "Confirm monthly rent, security deposit, maintenance charges, utility bills and any other payable fees.",
    icon: KeyRound,
  },
  {
    title: "Inspect the property",
    description:
      "Check the actual premises, water and electricity supply, access, condition and any repairs required before moving in.",
    icon: Search,
  },
  {
    title: "Confirm permitted use",
    description:
      "For shops and offices, verify that the lease and applicable permissions allow your intended business activity.",
    icon: ShieldCheck,
  },
];

const searchAreas = [
  {
    name: "Jattari",
    description:
      "Begin with local homes, independent properties, shops and business premises. Ask the owner or agent to confirm current availability.",
  },
  {
    name: "Tappal",
    description:
      "Expand your search to nearby residential and commercial areas if you need more options. Confirm the exact property address before visiting.",
  },
  {
    name: "Jewar corridor",
    description:
      "Research properties in the wider regional corridor, checking commute, actual distance, permitted use and total rental costs.",
  },
];

export default function RentLeasePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#173F40]">
      {/* NAVBAR */}
      <Navbar />

    
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[640px] overflow-hidden bg-[#103F40] lg:min-h-[700px]">
        <Image
          src="/images/residential-building.jpg"
          alt="Residential property and buildings for rent and lease"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Green overlay — consistent with other page heroes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/95 via-[#103F40]/75 to-[#103F40]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/70 via-transparent to-black/10" />

        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:min-h-[700px] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <KeyRound size={15} className="text-[#D9B783]" />
              Rent & Lease · Jattari
            </div>

            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              Find your space.
              <br />
              <span className="font-serif font-normal italic text-[#E8D2A7]">
                Make it yours.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Explore homes, shops, offices and commercial spaces for rent or
              lease in Jattari and nearby areas. Compare locations, understand
              the terms and choose a property that fits your plans.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#rental-types"
                className="group inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition duration-300 hover:-translate-y-1 hover:bg-[#E8D2A7]"
              >
                Explore rental options
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/contact?interest=Rent%20and%20Lease"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Send an enquiry
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
                Check lease terms
              </span>
            </div>
          </div>
        </div>

        {/* Floating information panel */}
        <div className="absolute bottom-0 right-0 hidden w-[340px] border-l border-t border-white/20 bg-[#103F40]/75 p-7 text-white backdrop-blur-xl md:block lg:w-[390px] lg:p-9">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D9B783]">
            Find the right fit
          </p>

          <p className="mt-3 text-2xl font-medium leading-snug">
            Residential.
            <br />
            Commercial.
            <br />
            Flexible leasing.
          </p>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Explore your options and confirm availability directly with the
            property owner or developer.
          </p>
        </div>
      </section>


      {/* RENTAL CATEGORIES */}
      <section
        id="rental-types"
        className="bg-[#F1F0E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Find the right fit
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                What do you need
                <br />
                <span className="font-serif font-normal italic text-[#A27C45]">
                  space for?
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#687B78]">
              Choose a property category to guide your search. These categories
              describe what to look for, not verified live listings.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {rentalTypes.map((item) => {
              const RentalIcon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[24px] border border-[#D9DED5] bg-[#FFFDF8] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B89552] hover:shadow-[0_20px_50px_rgba(16,63,64,0.09)] sm:p-8"
                >
                  <div className="absolute right-6 top-5 font-serif text-5xl text-[#E7E8DE] transition group-hover:text-[#E8D2A7]">
                    {item.number}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EEE5] text-[#164E52] transition group-hover:bg-[#D9B783]">
                    <RentalIcon size={25} />
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#A27C45]">
                    {item.details}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[100px] text-sm leading-7 text-[#687B78]">
                    {item.description}
                  </p>

                  <Link
                    href={`/contact?interest=${encodeURIComponent(item.title)}`}
                    className="mt-6 inline-flex items-center gap-2 border-b border-[#B89552] pb-2 text-sm font-semibold transition hover:gap-4"
                  >
                    Enquire about this
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEVELOPER PROMOTIONS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              Explore local developments
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Two projects to know.
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                Ask about lease options.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#687B78]">
              If you are considering a property connected with either
              development, use the official links to ask about current rental
              inventory, commercial units or lease opportunities.
            </p>
          </div>

          <div className="space-y-8">
            {developers.map((project, index) => (
              <article
                key={project.name}
                className={`grid overflow-hidden rounded-[28px] border border-[#D9DED5] bg-white lg:min-h-[460px] lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#E8D2A7]">
                      Featured project 0{index + 1}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 flex items-center gap-2 text-sm text-white/85">
                      <MapPin size={15} className="text-[#E8D2A7]" />
                      {project.eyebrow}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C45]">
                    Developer information
                  </p>

                  <h4 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    Explore the project.
                    <br />
                    Ask the right questions.
                  </h4>

                  <p className="mt-5 text-sm leading-7 text-[#687B78]">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {project.questions.map((question) => (
                      <div
                        key={question}
                        className="flex items-start gap-3 text-sm leading-6 text-[#526666]"
                      >
                        <ShieldCheck
                          size={17}
                          className="mt-0.5 shrink-0 text-[#A27C45]"
                        />
                        <span>{question}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#164E52] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#103F40]"
                    >
                      {project.label}
                      <ExternalLink size={15} />
                    </a>

                    <Link
                      href={`/contact?project=${encodeURIComponent(project.name)}&interest=${encodeURIComponent("Rent and Lease")}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B9C8BE] px-5 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#E8EEE5]"
                    >
                      Ask about rent
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-[#84918A]">
                    Rental or lease availability is not confirmed. Ask the
                    developer directly for current options and terms.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION SEARCH */}
      <section className="bg-[#103F40] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#D9B783]">
                Where to look
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Search locally.
                <br />
                <span className="font-serif font-normal italic text-[#E8D2A7]">
                  Compare carefully.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70">
                Start in Jattari and expand to nearby areas if you need more
                choices. Check the actual address and travel time for each
                property rather than relying on broad location descriptions.
              </p>
            </div>

            <div className="divide-y divide-white/15 border-y border-white/15">
              {searchAreas.map((area, index) => (
                <div
                  key={area.name}
                  className="group flex gap-5 py-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#D9B783] transition group-hover:bg-[#D9B783] group-hover:text-[#103F40]">
                    <MapPin size={20} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold">{area.name}</h3>
                      <span className="text-xs tracking-[0.15em] text-[#D9B783]">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-white/65">
                      {area.description}
                    </p>

                    <Link
                      href={`/contact?location=${encodeURIComponent(area.name)}&interest=${encodeURIComponent("Rent and Lease")}`}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#E8D2A7] transition hover:gap-3"
                    >
                      Ask about this area
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEASE CHECKLIST */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              Before signing
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Know the terms.
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                Avoid surprises.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#687B78]">
              Whether you rent a home or lease commercial premises, review the
              complete agreement and get the important terms in writing.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {leaseChecklist.map((item, index) => {
              const ChecklistIcon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex gap-5 rounded-[24px] border border-[#E1E5DC] p-6 transition hover:border-[#B89552] hover:bg-[#F7F6F0] sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52] transition group-hover:bg-[#D9B783]">
                    <ChecklistIcon size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-[#A27C45]">
                      CHECK 0{index + 1}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#687B78]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#F1F0E8] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#B89552]/25" />
          <div className="pointer-events-none absolute -right-2 -top-6 h-40 w-40 rounded-full border border-[#B89552]/25" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Find your next space
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Tell us what you want to rent or lease.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#687B78] sm:text-base">
                Share your preferred location and property type to start
                organising your search around Jattari and nearby areas.
              </p>
            </div>

            <Link
              href={`/contact?interest=${encodeURIComponent("Rent and Lease")}`}
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#164E52] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#103F40]"
            >
              Contact us
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
