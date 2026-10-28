
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ContactButton from "../../../components/ContactButton";
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  ChevronRight,
  Computer,
  FileText,
  Search,
  Store,
  CakeSlice,
  BriefcaseBusiness,
  MapPin,
  X,
} from "lucide-react";

const businesses = [
  {
    name: "Amba Studio",
    category: "Photography",
    description:
      "A local photography studio and photo lab for portraits, event photography and photo-printing needs.",
    address: "Main Road, Jattari, Uttar Pradesh 202137",
    icon: Camera,
    tags: ["Photography", "Photo lab", "Printing"],
    featured: true,
  },
  {
    name: "Chhaya Studio",
    category: "Photography",
    description:
      "A neighbourhood photography and videography studio listed near Paliwal Gali on the main Palwal Road.",
    address:
      "Paliwal Gali, Main Palwal Road, Jattari, Uttar Pradesh 202137",
    icon: Camera,
    tags: ["Photography", "Videography"],
    featured: false,
  },
  {
    name: "Chaudhary Printing Press",
    category: "Printing & Design",
    description:
      "A local printing business listed in Jattari for print-related and greeting-card shop services.",
    address: "2MF6+7GM, Jattari, Uttar Pradesh 202137",
    icon: FileText,
    tags: ["Printing", "Greeting cards"],
    featured: false,
  },
  {
    name: "Gopal G Sweets and Namkeen",
    category: "Sweets & Namkeen",
    description:
      "A local sweet and savoury snack shop listed in Jattari for traditional sweets and namkeen.",
    address: "Jattari, Aligarh, Uttar Pradesh 202137",
    icon: CakeSlice,
    tags: ["Sweets", "Namkeen"],
    featured: true,
  },
  {
    name: "C.C.T Computer Institutes",
    category: "Computer Services",
    description:
      "A computer institute listed near Khair Bus Stand and Goverdhan Market in Jattari.",
    address:
      "Near Khair Bus Stand, near Goverdhan Market, Jattari, Aligarh 202137",
    icon: Computer,
    tags: ["Computer training", "Digital skills"],
    featured: false,
  },
  {
    name: "Ram Charan Educare",
    category: "Computer Services",
    description:
      "An education and skills centre in Jattari associated with computer learning, typing practice and job-oriented IT and accounting skills.",
    address: "2MC5+Q94, Jattari, Uttar Pradesh 202137",
    icon: Computer,
    tags: ["Computer learning", "Typing", "IT skills"],
    featured: false,
  },
];

const categories = [
  "All businesses",
  "Photography",
  "Printing & Design",
  "Sweets & Namkeen",
  "Computer Services",
];

export default function AllBusinessesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All businesses");

  const filteredBusinesses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return businesses.filter((business) => {
      const matchesCategory =
        category === "All businesses" || business.category === category;

      const searchableText = [
        business.name,
        business.category,
        business.description,
        business.address,
        ...business.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [search, category]);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#173F40]">
        {/* DISTINCT DIRECTORY HERO */}
        <section className="relative isolate min-h-[520px] overflow-hidden bg-[#103F40] md:min-h-[590px]">
          <Image
            src="/images/marketimage.jpg"
            alt="Local businesses and independent shops along an Indian town market"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/80 via-[#103F40]/55 to-[#103F40]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/60 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[520px] max-w-[1440px] flex-col justify-between px-6 py-10 md:min-h-[590px] md:px-14 md:py-14">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#E5D0A3]">
                <span className="h-px w-9 bg-[#D9B783]" />
                Jattari Business Directory
              </div>
              <span className="hidden border border-white/40 px-3 py-2 text-xs text-white/80 sm:block">
                Independent & local
              </span>
            </div>

            <div className="grid items-end gap-8 lg:grid-cols-[1fr_260px]">
              <div className="max-w-4xl">
                <p className="mb-4 text-sm text-white/80">
                  The people and services behind the neighbourhood
                </p>

                <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl">
                  More than
                  <br />
                  just shops<span className="text-[#D9B783]">.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                  Discover additional local services, photography studios,
                  printing businesses, sweet shops and other useful
                  businesses around Jattari.
                </p>

                <a
                  href="#business-explorer"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#D9B783]"
                >
                  Explore the directory
                  <ArrowDownRight size={18} />
                </a>
              </div>

              <div className="hidden border-l border-white/35 pl-5 pb-1 lg:block">
                <Store size={28} className="text-[#D9B783]" />
                <p className="mt-4 text-2xl font-medium leading-tight text-white">
                  Local names.
                  <br />
                  Useful places.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  A growing guide to the businesses that serve Jattari.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-[#DDE4D9]">
          <div className="mx-auto grid max-w-[1320px] gap-5 px-6 py-8 md:grid-cols-[0.65fr_1.5fr] md:gap-12 md:px-12 md:py-10">
            <p className="flex items-start gap-3 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7B43]">
              <BriefcaseBusiness size={17} />
              <span>Beyond everyday shopping</span>
            </p>

            <div>
              <h2 className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.035em] md:text-4xl">
                Find the services, small businesses and local specialists
                that make everyday life easier.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#65796F] md:text-base">
                Jattari&apos;s business community includes more than retail
                shops. Photography studios, printing presses, sweet shops
                and training services also serve local residents. This
                directory highlights additional business types rather than
                repeating the categories covered on our dedicated pages.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY EXPLORER */}
        <section
          id="business-explorer"
          className="bg-[#F0F3EB] py-8 md:py-10"
        >
          <div className="mx-auto max-w-[1320px] px-6 md:px-12">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7B43]">
                  Explore by speciality
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  What are you looking for?
                </h2>
              </div>
              <span className="hidden text-sm text-[#65796F] sm:block">
                Choose a category below
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((item) => {
                const selected = category === item;

                return (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`shrink-0 rounded-full border px-4 py-3 text-sm transition ${
                      selected
                        ? "border-[#164E52] bg-[#164E52] text-white"
                        : "border-[#D6DFD2] bg-[#FFFDF8] text-[#365A54] hover:border-[#B89552]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEARCH + DIRECTORY */}
        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 md:py-14">
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7B43]">
                The local index
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
                Businesses around Jattari
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#65796F]">
                Search a name, service or location to narrow down the directory.
              </p>
            </div>

            <div className="text-sm text-[#65796F]">
              Showing{" "}
              <span className="font-semibold text-[#164E52]">
                {filteredBusinesses.length}
              </span>{" "}
              {filteredBusinesses.length === 1 ? "business" : "businesses"}
            </div>
          </div>

          <div className="relative mb-8 max-w-2xl">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#819187]"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search business, service or address..."
              aria-label="Search businesses"
              className="w-full rounded-2xl border border-[#D8E0D5] bg-white py-4 pl-12 pr-12 text-sm text-[#173F40] outline-none transition placeholder:text-[#97A299] focus:border-[#164E52] focus:ring-2 focus:ring-[#164E52]/10"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#65796F] hover:text-[#164E52]"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredBusinesses.map((business) => {
              const Icon = business.icon;

              return (
                <article
                  key={business.name}
                  className={`group flex min-h-full flex-col border border-[#DDE4D9] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B89552] hover:shadow-[0_14px_40px_rgba(16,63,64,0.08)] md:p-6 ${
                    business.featured ? "bg-[#F0F3EB]" : "bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D8E0D5] bg-[#FFFDF8] text-[#164E52]">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <span className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-medium text-[#6D8174]">
                      {business.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-snug tracking-[-0.025em] text-[#173F40]">
                    {business.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#65796F]">
                    {business.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {business.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#DDE4D9] px-2.5 py-1.5 text-xs text-[#526C61]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-[#DDE4D9] pt-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A7B43]">
                      Address
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
                </article>
              );
            })}
          </div>

          {filteredBusinesses.length === 0 && (
            <div className="border border-dashed border-[#C9D6CA] bg-[#F7F8F2] px-6 py-12 text-center">
              <Store size={30} className="mx-auto text-[#9A7B43]" />
              <h3 className="mt-4 text-xl font-semibold">
                No matching businesses found
              </h3>
              <p className="mt-2 text-sm text-[#65796F]">
                Try another search term or select a different category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All businesses");
                }}
                className="mt-5 rounded-full bg-[#164E52] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#103F40]"
              >
                Reset directory
              </button>
            </div>
          )}
        </section>

        {/* LIST YOUR BUSINESS */}
        <section className="bg-[#164E52]">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-12 md:py-11">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E5D0A3]">
                Join the local directory
              </p>
              <h2 className="mt-2 text-2xl font-medium text-white md:text-3xl">
                Run a business in Jattari?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Help local customers discover your business by adding your
                details to the directory.
              </p>
            </div>

            <ContactButton
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#FFFDF8] px-5 py-3 text-sm font-semibold text-[#164E52] transition hover:bg-[#D9B783]"
            >
              Contact
              <ChevronRight size={17} />
            </ContactButton>
          </div>
        </section>

        <p className="mx-auto max-w-[1320px] px-6 py-5 text-xs leading-5 text-[#7B8B80] md:px-12">
          Business details are based on available public listings. Confirm
          addresses and current services locally before visiting. This
          directory is a growing selection, not a complete census of every
          business in Jattari.
        </p>
      </main>

      <Footer />
    </>
  );
}
