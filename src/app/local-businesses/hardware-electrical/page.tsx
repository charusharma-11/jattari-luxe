
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cable,
  Hammer,
  Lightbulb,
  MapPin,
  Paintbrush,
  Pipette,
  Wrench,
  Zap,
} from "lucide-react";

const businesses = [
  {
    name: "Agrawal Home Center",
    category: "Hardware & Home Improvement",
    description:
      "A local home-improvement and hardware shop for people working on household repairs, fittings and renovation projects.",
    address:
      "Near Krishna Vihar, Jattari Bypass, Aligarh–Palwal Road, Jattari, UP 202137",
    icon: Hammer,
    accent: "sand",
  },
  {
    name: "Jai Shri Ram Machinery Store",
    category: "Machinery & Hardware",
    description:
      "A local machinery and hardware shop listed on Pisawa Road, serving everyday equipment and hardware shopping needs.",
    address: "Pisawa Road, Jattari, Aligarh, UP 202137",
    icon: Wrench,
    accent: "plain",
  },
  {
    name: "Master Machinery Store",
    category: "Hardware, Pipes & Sanitary",
    description:
      "A hardware and plumbing-focused store listed for machinery, pipes, water-pump supplies and bathroom fittings.",
    address:
      "Jartauli Road, opposite Suresh Chand Vashist, Jattari, UP 202137",
    icon: Pipette,
    accent: "plain",
  },
  {
    name: "Raju Electricals",
    category: "Electrical Supplies",
    description:
      "A local electrical and electronics retail shop for customers looking for everyday electrical supplies and components.",
    address:
      "Main Road, near Paliwal Gali and Udayveer News Agency, Jattari, UP 202137",
    icon: Zap,
    accent: "sand",
  },
  {
    name: "Azad Hardware",
    category: "General Hardware",
    description:
      "A neighbourhood hardware shop listed on Jartauli Road for common hardware, repair and installation essentials.",
    address:
      "Shop No. 04, Jartauli Road, near Besure Canteen, Jattari, UP 202137",
    icon: Hammer,
    accent: "plain",
  },
  {
    name: "Agrawal Paints and Hardware Store",
    category: "Paints & Finishing",
    description:
      "A Main Road retailer listed for paint and hardware supplies used in routine home maintenance and renovation.",
    address: "Main Road, Jattari, Aligarh, UP 202137",
    icon: Paintbrush,
    accent: "plain",
  },
  {
    name: "Shri Hari Sanitary Store",
    category: "Sanitaryware & Bathroom Fittings",
    description:
      "A sanitaryware and bathroom-supply showroom listed under the Hindware Brand Store name.",
    address:
      "Aligarh–Palwal Road, in front of Nagar Palika, Jattari, UP 202137",
    icon: Pipette,
    accent: "sand",
  },
  {
    name: "Shiv Machinery Store",
    category: "Machinery & Hardware",
    description:
      "A local hardware and machinery store with a main-road location near a familiar banking landmark.",
    address: "Main Road, in front of State Bank, Jattari, UP 202137",
    icon: Wrench,
    accent: "plain",
  },
];

const categories = [
  {
    title: "Hardware & Tools",
    description: "Everyday repair supplies, fittings and tools.",
    icon: Hammer,
  },
  {
    title: "Electrical Supplies",
    description: "Electrical components and household essentials.",
    icon: Cable,
  },
  {
    title: "Paints & Finishing",
    description: "Paint products and renovation supplies.",
    icon: Paintbrush,
  },
  {
    title: "Pipes & Sanitary",
    description: "Plumbing, bathroom fittings and related supplies.",
    icon: Pipette,
  },
];

export default function HardwareElectricalPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#173F40]">
        {/* BLUEPRINT-STYLE HERO */}
        <section className="relative isolate min-h-[570px] overflow-hidden bg-[#103F40] md:min-h-[650px]">
          <Image
            src="/images/Vibrant Hardware Store Showroom.jpg"
            alt="Hardware tools, electrical supplies and building materials in a local Indian shop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/85 via-[#103F40]/65 to-[#103F40]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/60 via-transparent to-transparent" />

          {/* Technical grid decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,253,248,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,253,248,.35) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage:
                "linear-gradient(to right, transparent, black 60%, transparent)",
            }}
          />

          <div className="relative mx-auto flex min-h-[570px] max-w-[1440px] flex-col justify-between px-6 py-10 md:min-h-[650px] md:px-14 md:py-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#E5D0A3]">
                <span className="h-px w-9 bg-[#D9B783]" />
                Jattari Trade Directory
              </div>
              <span className="border border-white/30 px-3 py-2 text-[10px] uppercase tracking-[0.17em] text-white/80">
                Hardware / Electrical / Building
              </span>
            </div>

            <div className="grid items-end gap-9 lg:grid-cols-[1fr_270px]">
              <div className="max-w-4xl">
                <p className="mb-5 text-sm text-white/80">
                  For repairs, upgrades and building projects
                </p>

                <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl">
                  Build it.
                  <br />
                  Fix it. Finish it
                  <span className="text-[#D9B783]">.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                  Explore Jattari&apos;s hardware stores, electrical
                  suppliers, paint shops and sanitaryware outlets. Find a
                  local shop by its name, speciality and listed address.
                </p>

                <a
                  href="#trade-directory"
                  className="mt-8 inline-flex items-center gap-3 bg-[#D9B783] px-6 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#FFFDF8]"
                >
                  Browse the directory
                  <ArrowDownRight size={18} />
                </a>
              </div>

              <div className="hidden border-l border-white/40 pl-6 pb-2 lg:block">
                <Zap size={29} className="text-[#D9B783]" />
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/65">
                  Local trade
                </p>
                <p className="mt-2 text-2xl font-medium leading-tight text-white">
                  Supplies for
                  <br />
                  everyday work.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  A practical guide to nearby hardware and electrical shops.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="border-b border-[#DDE4D9]">
          <div className="mx-auto grid max-w-[1320px] gap-6 px-6 py-9 md:grid-cols-[0.65fr_1.6fr] md:gap-12 md:px-12 md:py-12">
            <div className="flex items-start gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7B43]">
              <Wrench size={18} />
              <span>About the local trade market</span>
            </div>

            <div>
              <h2 className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.035em] md:text-4xl">
                From a small home repair to a bigger renovation, local
                suppliers help keep projects moving.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#65796F] md:text-base">
                Jattari has shops listed across hardware, machinery,
                electrical supplies, paints, pipes and bathroom fittings.
                The directory below brings these local options together
                with short introductions and address details, making it
                easier to identify the type of store you may need.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY STRIP */}
        <section className="bg-[#F0F3EB]">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-px bg-[#D9E1D6] sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="bg-[#F0F3EB] px-6 py-6 transition hover:bg-white md:px-7"
                >
                  <Icon size={23} strokeWidth={1.5} className="text-[#9A7B43]" />
                  <h3 className="mt-4 text-lg font-semibold">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#65796F]">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* DIRECTORY: TECHNICAL SPEC SHEET STYLE */}
        <section
          id="trade-directory"
          className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16"
        >
          <div className="mb-8 grid gap-5 border-b-2 border-[#164E52] pb-6 md:grid-cols-[1fr_300px] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7B43]">
                Local suppliers & shops
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
                The trade directory
              </h2>
            </div>
            <p className="text-sm leading-6 text-[#65796F]">
              Explore the listed shops by speciality and location.
              Product availability can vary from store to store.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {businesses.map((business) => {
              const Icon = business.icon;

              return (
                <article
                  key={business.name}
                  className={`group relative overflow-hidden border border-[#DDE4D9] transition duration-300 hover:border-[#B89552] ${
                    business.accent === "sand"
                      ? "bg-[#F0F3EB]"
                      : "bg-white"
                  }`}
                >
                  <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-8 translate-y-8 rounded-full border border-[#164E52]/10 transition group-hover:translate-x-5 group-hover:translate-y-5" />

                  <div className="relative p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D5DFD4] bg-[#FFFDF8] text-[#164E52]">
                        <Icon size={22} strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A7B43]">
                          {business.category}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.025em] md:text-2xl">
                          {business.name}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={19}
                        className="shrink-0 text-[#B89552] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#65796F]">
                      {business.description}
                    </p>

                    <div className="mt-5 border-t border-[#D8E0D5] pt-4">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A7B43]">
                        Shop address
                      </p>
                      <div className="flex items-start gap-2.5">
                        <MapPin
                          size={17}
                          className="mt-1 shrink-0 text-[#164E52]"
                        />
                        <p className="text-sm leading-6 text-[#35564F]">
                          {business.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 border-l-2 border-[#B89552] pl-4 text-xs leading-6 text-[#7B8B80]">
            Shop names and addresses are based on available public
            listings. Confirm the exact location and stock locally
            before travelling.
          </p>
        </section>

        {/* CLOSING STRIP */}
        <section className="bg-[#164E52]">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E5D0A3]">
                More from Jattari
              </p>
              <h2 className="mt-2 text-2xl font-medium text-white md:text-3xl">
                Explore more local businesses.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Discover more stores and services across the neighbourhood.
              </p>
            </div>

            <Link
              href="/local-businesses"
              className="inline-flex w-fit items-center gap-3 bg-[#FFFDF8] px-5 py-3 text-sm font-semibold text-[#164E52] transition hover:bg-[#D9B783]"
            >
              All local businesses
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
