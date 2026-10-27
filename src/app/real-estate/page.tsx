
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  House,
  Building2,
  Store,
  KeyRound,
  Landmark,
  ShieldCheck,
  Compass,
  Sparkles,
} from "lucide-react";

const propertyTypes = [
  {
    title: "Residential Plots",
    description:
      "Explore residential plot options and learn what to check before choosing land for your future home.",
    href: "/real-estate/residential-plots",
    image: "/images/residential-building.jpg",
    icon: MapPin,
    label: "Land & plots",
  },
  {
    title: "Houses & Villas",
    description:
      "Discover independent houses and villas, with guidance on location, construction and property documents.",
    href: "/real-estate/houses-villas",
    image: "/images/residential-home.jpg",
    icon: House,
    label: "Residential living",
  },
  {
    title: "Commercial Properties",
    description:
      "Explore shops, office spaces and commercial property options for business requirements.",
    href: "/real-estate/commercial-properties",
    image: "/images/local-market.jpg",
    icon: Store,
    label: "Business spaces",
  },
  {
    title: "Rent & Lease",
    description:
      "Learn what to consider when looking for a rental home, shop or commercial space.",
    href: "/real-estate/rent-lease",
    image: "/images/residential-building.jpg",
    icon: KeyRound,
    label: "Rental properties",
  },
];

const featuredProjects = [
  {
    name: "Anugrah Homes",
    description:
      "Explore the project, available property information and details provided through its official website.",
    image: "/images/anugrah-homes.jpg",
    href: "https://anugrahhomes.com/",
  },
  {
    name: "Skyline Aero Homes",
    description:
      "Discover the project and review its official information before making property decisions.",
    image: "/images/skyline aero homes.jpg",
    href: "https://skylineaerohomes.com/",
  },
];

const buyingTips = [
  {
    title: "Verify documents",
    description:
      "Review ownership documents, title records and applicable approvals before purchasing.",
    icon: ShieldCheck,
  },
  {
    title: "Understand the location",
    description:
      "Check road access, nearby facilities, connectivity and the surrounding development.",
    icon: Compass,
  },
  {
    title: "Compare the full cost",
    description:
      "Consider registration, taxes, maintenance and other applicable charges in your budget.",
    icon: Landmark,
  },
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#164E52]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[650px]">
        <Image
          src="/images/Sunlit Modern Residential Neighborhood.jpg"
          alt="Residential property in a modern Indian neighbourhood"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#103F40]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#103F40]/85 via-[#103F40]/50 to-[#103F40]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/40 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            <MapPin size={15} />
            Jattari · Aligarh · Uttar Pradesh
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl">
            Find your place.
            <span className="mt-3 block font-serif italic text-[#F1D49A]">
              Build your future.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Explore Jattari&apos;s real estate landscape, from residential
            plots and homes to commercial spaces and featured developments.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#property-types"
              className="inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-6 py-3.5 text-sm font-semibold text-[#164E52] transition hover:-translate-y-1 hover:bg-[#FFFDF8]"
            >
              Explore properties
              <ArrowRight size={17} />
            </a>

            <a
              href="#featured-projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#164E52]"
            >
              Featured projects
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-16 lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
            Real estate in Jattari
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            A place to live, grow and invest thoughtfully.
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#D9B783]" />

          <p className="mt-6 leading-8 text-[#63736D]">
            Whether you are planning a home, exploring land or searching for
            commercial space, understanding the location and property documents
            is an important first step. Use this guide to explore the main
            property categories and featured projects.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#63736D]">
            Property availability, prices and legal status must be confirmed
            directly with the relevant seller or authorised representative.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#164E52] p-8 text-white md:p-10">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute -right-3 -top-3 h-32 w-32 rounded-full border border-[#D9B783]/35" />

          <div className="relative">
            <Sparkles size={30} className="text-[#D9B783]" />

            <h3 className="mt-6 text-2xl font-semibold md:text-3xl">
              Explore what matters to you.
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              Start with the type of property you need, then explore the
              relevant information and project resources.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Residential plots and land",
                "Independent homes and villas",
                "Shops and commercial spaces",
                "Rental and lease options",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ArrowRight
                    size={17}
                    className="shrink-0 text-[#D9B783]"
                  />
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property categories */}
      <section
        id="property-types"
        className="scroll-mt-24 bg-[#F3F4ED] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
                Explore property types
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Find the property that fits your plans.
              </h2>

              <p className="mt-5 leading-7 text-[#63736D]">
                Explore each category to learn more about property options and
                important considerations.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {propertyTypes.map((property, index) => {
              const PropertyIcon = property.icon;

              return (
                <article
                  key={property.title}
                  className={`group overflow-hidden rounded-[1.75rem] border border-[#D9DFD4] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index === 1 ? "md:mt-10" : ""
                  }`}
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/75 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/30 bg-[#103F40]/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                      <PropertyIcon size={15} />
                      {property.label}
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold">
                      {property.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#63736D]">
                      {property.description}
                    </p>

                    <Link
                      href={property.href}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#164E52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24686A]"
                    >
                      Explore more
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section
        id="featured-projects"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Featured developments
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Projects worth exploring.
            </h2>

            <p className="mt-5 leading-7 text-[#63736D]">
              Visit the project websites for their own descriptions and
              available information.
            </p>
          </div>

          <Link
            href="/real-estate/featured-projects"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#164E52] transition hover:text-[#A1844D]"
          >
            View all projects
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-[1.75rem] border border-[#D9DFD4] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden md:h-80">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/45 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold">{project.name}</h3>

                <p className="mt-3 leading-7 text-[#63736D]">
                  {project.description}
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#164E52]/20 px-5 py-3 text-sm font-semibold text-[#164E52] transition hover:bg-[#164E52] hover:text-white"
                >
                  Visit project website
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Buying guide */}
      <section className="bg-[#E8EEE5] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Property buying guide
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Make informed property decisions.
            </h2>

            <p className="mt-5 leading-7 text-[#63736D]">
              Before committing to a property, take time to understand the
              documents, location and complete financial requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {buyingTips.map((tip) => {
              const TipIcon = tip.icon;

              return (
                <article
                  key={tip.title}
                  className="border-t-2 border-[#D9B783] pt-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#164E52]">
                    <TipIcon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{tip.title}</h3>

                  <p className="mt-3 leading-7 text-[#63736D]">
                    {tip.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#164E52] px-7 py-12 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute right-8 top-0 h-40 w-40 rounded-full border border-[#D9B783]/30" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B783]">
              Connect with the community
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Have a property to list?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/75">
              Share property or project information to help people explore
              available options in and around Jattari.
            </p>

            <Link
              href="/list-your-business"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#164E52] transition duration-300 hover:-translate-y-1 hover:bg-[#D9B783]"
            >
              List your property
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
