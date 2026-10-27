
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Leaf,
  MapPin,
  Milk,
  Package,
  ShoppingBasket,
  ShoppingCart,
  Sprout,
  Store,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const places = [
  {
    id: "rozana",
    number: "01",
    name: "Rozana Hyper Mart",
    category: "Hypermarket",
    address: "Jattari Bypass, Jattari, Uttar Pradesh 202137",
    description:
      "A multi-floor shopping destination listed for everyday grocery and household shopping.",
    tags: ["Groceries", "Daily essentials", "Household shopping"],
    size: "tall",
    icon: ShoppingBasket,
  },
  {
    id: "mangla",
    number: "02",
    name: "Mangla Enterprises",
    category: "Grocery & General Needs",
    address: "Jartouli Road, near Kanya Inter College, Jattari, UP 202137",
    description:
      "A local retail and grocery-delivery listing serving everyday shopping needs.",
    tags: ["General needs", "Local retail"],
    size: "normal",
    icon: Store,
  },
  {
    id: "super-bazar",
    number: "03",
    name: "Super Bazar Canteen",
    category: "Grocery Store",
    address: "Pisawa–Jattari Road, Jattari, UP 202137",
    description:
      "A neighbourhood grocery stop for routine household and daily-need purchases.",
    tags: ["Kirana", "Household essentials"],
    size: "normal",
    icon: ShoppingCart,
  },
  {
    id: "patanjali",
    number: "04",
    name: "Patanjali Arogya Kendra",
    category: "Natural Food & Essentials",
    address: "Ground Floor, Usarah Road, Jattari, UP 202137",
    description:
      "A branded store offering natural food products, grocery items and personal-care essentials.",
    tags: ["Natural foods", "Personal care", "Grocery"],
    size: "tall",
    icon: Leaf,
  },
  {
    id: "faujdar",
    number: "05",
    name: "Faujdar Dairy",
    category: "Dairy",
    address: "Main Road, in front of Goverdhan Market, Jattari, UP 202137",
    description:
      "A local dairy shop located near the familiar Goverdhan Market landmark.",
    tags: ["Dairy products", "Local shop"],
    size: "normal",
    icon: Milk,
  },
  {
    id: "vegetables",
    number: "06",
    name: "Vegetable Shop Jattari",
    category: "Fresh Produce",
    address: "2Mf4+G5H, Jattari, Aligarh, Uttar Pradesh",
    description:
      "A local listing for fresh-produce shopping in the Jattari area.",
    tags: ["Vegetables", "Fresh produce"],
    size: "normal",
    icon: Sprout,
  },
];

const categoryTree = [
  {
    name: "Grocery & Kirana",
    icon: ShoppingBasket,
    children: [
      "Rozana Hyper Mart",
      "Super Bazar Canteen",
      "Mangla Enterprises",
    ],
  },
  {
    name: "Natural Food & Essentials",
    icon: Package,
    children: ["Patanjali Arogya Kendra"],
  },
  {
    name: "Fresh & Dairy",
    icon: Sprout,
    children: ["Faujdar Dairy", "Vegetable Shop Jattari"],
  },
];

export default function GroceryDailyNeedsPage() {
  const [expanded, setExpanded] = useState<string[]>([
    "Grocery & Kirana",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All places");

  const categories = [
    "All places",
    "Grocery",
    "Natural essentials",
    "Fresh & dairy",
  ];

  const filteredPlaces = places.filter((place) => {
    if (selectedCategory === "All places") return true;
    if (selectedCategory === "Grocery") {
      return ["rozana", "mangla", "super-bazar"].includes(place.id);
    }
    if (selectedCategory === "Natural essentials") {
      return place.id === "patanjali";
    }
    return ["faujdar", "vegetables"].includes(place.id);
  });

  function toggleTree(name: string) {
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFDF8] text-[#173F40]">
        {/* HERO */}
        <section className="relative min-h-[590px] overflow-hidden bg-[#103F40] md:min-h-[660px]">
          <Image
            src="/images/Bustling Indian Grocery Marketfront.jpg"
            alt="A lively Indian grocery market with everyday food and household shops"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/80 via-[#103F40]/55 to-[#103F40]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/40 via-transparent to-[#092D2E]/10" />

          <div className="relative mx-auto flex min-h-[590px] max-w-[1440px] flex-col justify-between px-6 pb-9 pt-16 md:min-h-[660px] md:px-14 md:pb-12 md:pt-24">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#E5D0A3]">
              <span className="h-px w-10 bg-[#D9B783]" />
              Jattari Local Directory
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
              <div className="max-w-4xl">
                <p className="mb-5 text-sm font-medium tracking-wide text-white/80">
                  Everyday essentials, closer to home
                </p>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl">
                  Good things
                  <br />
                  for every day<span className="text-[#D9B783]">.</span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                  Explore grocery shops, daily-needs stores, dairy outlets
                  and fresh-produce spots around Jattari — with short
                  introductions and useful local addresses.
                </p>

                <a
                  href="#local-directory"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#D9B783]"
                >
                  Explore local places
                  <ArrowDownRight size={18} />
                </a>
              </div>

              <div className="hidden border-l border-white/35 pl-6 pb-2 text-white lg:block">
                <p className="text-xs uppercase tracking-[0.22em] text-[#E5D0A3]">
                  The everyday edit
                </p>
                <p className="mt-4 text-3xl font-medium leading-tight">
                  From pantry
                  <br />
                  to produce.
                </p>
                <p className="mt-4 text-sm leading-6 text-white/75">
                  A simple directory of local places to help with daily
                  shopping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="border-b border-[#DDE4D9]">
          <div className="mx-auto grid max-w-[1320px] gap-7 px-6 py-10 md:grid-cols-[190px_1fr_240px] md:items-center md:px-12 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7448]">
              Your neighbourhood
            </p>
            <p className="max-w-3xl text-xl leading-8 text-[#244F4D] md:text-2xl">
              From a quick kirana run to fresh daily essentials, local
              shops keep the rhythm of everyday life moving.
            </p>
            <div className="flex items-center gap-3 text-sm text-[#52706B]">
              <MapPin size={19} className="text-[#B89552]" />
              <span>Jattari, Aligarh, Uttar Pradesh</span>
            </div>
          </div>
        </section>

        {/* MASONRY SHOWCASE */}
        <section
          id="local-directory"
          className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#9A7B43]">
                The local directory
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                Shop around Jattari
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#667A70]">
                Browse useful everyday destinations. Each entry includes
                a short introduction and its listed address.
              </p>
            </div>

            <span className="w-fit rounded-full border border-[#D8DFD3] px-4 py-2 text-sm text-[#49645D]">
              {filteredPlaces.length} places listed
            </span>
          </div>

          <div className="mb-9 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-sm transition ${
                  selectedCategory === category
                    ? "border-[#164E52] bg-[#164E52] text-white"
                    : "border-[#D7E0D5] bg-white text-[#365A54] hover:border-[#B89552]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
            {filteredPlaces.map((place) => {
              const Icon = place.icon;

              return (
                <article
                  key={place.id}
                  className={`mb-5 break-inside-avoid overflow-hidden rounded-[26px] border border-[#DDE4D9] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,63,64,0.09)] ${
                    place.size === "tall" ? "min-h-[330px]" : "min-h-[260px]"
                  }`}
                >
                  <div className="flex items-start justify-between px-6 pt-6">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#9A7B43]">
                      PLACE / {place.number}
                    </span>
                    <span className="rounded-full bg-[#F0F3EB] p-3 text-[#164E52]">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="px-6 pb-6 pt-7">
                    <p className="text-xs font-medium uppercase tracking-[0.13em] text-[#7D9184]">
                      {place.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#173F40]">
                      {place.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#65796F]">
                      {place.description}
                    </p>

                    <div className="mt-6 border-t border-[#E5EAE1] pt-5">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={17}
                          className="mt-1 shrink-0 text-[#B89552]"
                        />
                        <p className="text-sm leading-6 text-[#35564F]">
                          {place.address}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {place.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#F3F4ED] px-3 py-1.5 text-xs text-[#536C61]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E5EAE1] px-6 py-4">
                    <span className="text-xs text-[#87958A]">
                      Jattari local listing
                    </span>
                    <ArrowUpRight size={18} className="text-[#B89552]" />
                  </div>
                </article>
              );
            })}
          </div>

          {filteredPlaces.length === 0 && (
            <p className="rounded-2xl border border-[#DDE4D9] p-8 text-[#667A70]">
              No places found in this category.
            </p>
          )}
        </section>

        {/* TREE VIEW */}
        <section className="bg-[#F0F3EB]">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-12 md:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#9A7B43]">
                Browse by need
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-5xl">
                Find your everyday essentials.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-[#63786D]">
                Expand a category to see the local places listed under it.
                This directory groups shops by their general purpose.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-[#49645D]">
                <span className="rounded-full bg-white p-3">
                  <Sprout size={20} />
                </span>
                A simpler way to explore local shopping
              </div>
            </div>

            <div className="rounded-[28px] border border-[#D9E1D6] bg-[#FFFDF8] p-5 sm:p-8">
              <div className="mb-5 flex items-center justify-between border-b border-[#E1E7DD] pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#9A7B43]">
                    Directory structure
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Daily needs
                  </h3>
                </div>
                <ShoppingBasket className="text-[#B89552]" size={25} />
              </div>

              <div className="space-y-3">
                {categoryTree.map((group, index) => {
                  const Icon = group.icon;
                  const isExpanded = expanded.includes(group.name);

                  return (
                    <div key={group.name}>
                      <button
                        onClick={() => toggleTree(group.name)}
                        aria-expanded={isExpanded}
                        className="flex w-full items-center gap-3 rounded-2xl border border-[#E0E6DB] bg-white px-4 py-4 text-left transition hover:border-[#B89552]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0F3EB] text-[#164E52]">
                          <Icon size={20} />
                        </span>
                        <span className="flex-1 font-medium text-[#244F4D]">
                          {group.name}
                        </span>
                        <span className="text-xs text-[#839187]">
                          {group.children.length} places
                        </span>
                        {isExpanded ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="ml-5 mt-2 space-y-1 border-l border-[#D6DFD2] pl-5">
                          {group.children.map((child, childIndex) => (
                            <div
                              key={child}
                              className="flex items-center gap-3 py-3 text-sm text-[#526C61]"
                            >
                              <span className="h-2 w-2 rounded-full bg-[#B89552]" />
                              <span className="flex-1">{child}</span>
                              <span className="text-xs text-[#9AA69B]">
                                {String(index + 1).padStart(2, "0")}.
                                {childIndex + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTNOTE */}
        <section className="mx-auto max-w-[1320px] px-6 py-12 md:px-12 md:py-16">
          <div className="flex flex-col gap-5 border-b border-[#DDE4D9] pb-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7B43]">
                A local guide
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Supporting Jattari&apos;s everyday businesses.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#6B7D72]">
                Addresses are based on available public listings. Please
                verify the exact shop location locally before visiting.
              </p>
            </div>

            <Link
              href="/local-businesses"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#164E52] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#103F40]"
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
