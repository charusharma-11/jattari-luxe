
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  Coffee,
  MapPin,
  Utensils,
  Soup,
  Pizza,
  ChefHat,
} from "lucide-react";

const restaurants = [
  {
    name: "Ninimmya Chaudhary Restaurant",
    category: "Indian dining",
    description:
      "A local restaurant for everyday meals and casual family dining, located near Radhika Vihar Colony.",
    address:
      "Main Road, near Radhika Vihar Colony, Jattari, Uttar Pradesh 202137",
    icon: Utensils,
    featured: true,
  },
  {
    name: "Hotel Raysab Palace",
    category: "Family restaurant",
    description:
      "A roadside dining option serving North Indian and Indo-Chinese food, convenient for people travelling through Jattari.",
    address:
      "Main Road, Aligarh–Palwal Road, near Nitin Motors and petrol pump, Jattari, UP 202137",
    icon: ChefHat,
    featured: false,
  },
  {
    name: "Yummy Times Food Cafe",
    category: "Cafe · Fast food",
    description:
      "A casual food-cafe listing known for options such as rolls, pizza, burgers and other quick bites.",
    address:
      "Pisawa–Jattari Road, Hetalpur, Jattari, Aligarh, UP 202137",
    icon: Coffee,
    featured: false,
  },
  {
    name: "Harino's",
    category: "Pizza · Burgers",
    description:
      "A local option for pizza and burger lovers looking for a casual meal or takeaway in the Jattari area.",
    address:
      "Ground Floor, Shri Roshanlal Sharma Complex, Main Road, Chhajjupur, Jattari, UP 202137",
    icon: Pizza,
    featured: true,
  },
  {
    name: "Tandoori Chaupal",
    category: "Restaurant · Tandoori food",
    description:
      "A local restaurant listing on the Aligarh–Palwal Road for people exploring dining options around Jattari.",
    address: "Aligarh–Palwal Road, Jattari, Aligarh, UP 202137",
    icon: Soup,
    featured: false,
  },
  {
    name: "Shiv Shakti Hotel",
    category: "Local restaurant",
    description:
      "A neighbourhood food stop listed on Pisawa Road, suitable to include when exploring local dining choices.",
    address: "Pisawa Road, Jattari, Aligarh, UP 202137",
    icon: Utensils,
    featured: false,
  },
];

export default function RestaurantsCafesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#173F40]">
        {/* HERO */}
        <section className="relative min-h-[540px] overflow-hidden bg-[#103F40] md:min-h-[610px]">
          <Image
            src="/images/restrocafe.jpg"
            alt="Restaurant and cafe dining atmosphere in an Indian town"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/80 via-[#103F40]/55 to-[#103F40]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/40 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[540px] max-w-[1440px] flex-col justify-between px-6 py-12 md:min-h-[610px] md:px-14 md:py-16">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#E5D0A3]">
              <span className="h-px w-9 bg-[#D9B783]" />
              The Jattari Food Guide
            </div>

            <div className="max-w-4xl pb-3">
              <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl">
                Good food.
                <br />
                Good company<span className="text-[#D9B783]">.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                Discover restaurants, cafes and casual food spots around
                Jattari. From family meals to coffee breaks and quick bites,
                explore local places with short introductions and addresses.
              </p>

              <a
                href="#food-directory"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#D9B783]"
              >
                Explore food places
                <ArrowDownRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="border-b border-[#DDE4D9]">
          <div className="mx-auto grid max-w-[1320px] gap-5 px-6 py-9 md:grid-cols-[0.65fr_1.6fr] md:gap-12 md:px-12 md:py-12">
            <p className="flex items-start gap-3 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7B43]">
              <Utensils size={17} />
              <span>Eating out in Jattari</span>
            </p>

            <div>
              <h2 className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.035em] md:text-4xl">
                Everyday meals, quick snacks and relaxed cafe visits — all
                part of the local food scene.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#65796F] md:text-base">
                Jattari has a mix of local restaurants, family dining spots
                and fast-food cafes along its main roads and market areas.
                This guide brings together publicly listed places so you
                can explore the options and find their locations more easily.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PLACE */}
        <section
          id="food-directory"
          className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 md:py-14"
        >
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7B43]">
                Local favourites to explore
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
                Around the table
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#65796F]">
              Restaurant details and addresses from available public listings.
            </p>
          </div>

          {restaurants.map((place, index) => {
            const Icon = place.icon;

            return (
              <article
                key={place.name}
                className={`group grid gap-5 border-t border-[#DDE4D9] py-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center md:gap-12 ${
                  place.featured
                    ? "bg-[#F0F3EB] px-5 md:px-7"
                    : "px-1"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#164E52] text-[#FFFDF8] transition group-hover:bg-[#B89552]">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9A7B43]">
                      {place.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.025em] md:text-2xl">
                      {place.name}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-sm leading-7 text-[#65796F]">
                    {place.description}
                  </p>

                  <div className="mt-3 flex items-start gap-2.5">
                    <MapPin
                      size={17}
                      className="mt-1 shrink-0 text-[#B89552]"
                    />
                    <p className="text-sm leading-6 text-[#35564F]">
                      {place.address}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          <div className="border-t border-[#DDE4D9] pt-4 text-xs leading-5 text-[#7B8B80]">
            Restaurant menus, services and opening hours can change. Check
            locally before visiting.
          </div>
        </section>

        {/* COMPACT CLOSING BANNER */}
        <section className="bg-[#164E52]">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-12">
            <div>
              <h2 className="text-2xl font-medium text-white md:text-3xl">
                Explore more of your neighbourhood.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Find more local shops and everyday services around Jattari.
              </p>
            </div>

            <Link
              href="/local-businesses"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#FFFDF8] px-5 py-3 text-sm font-semibold text-[#164E52] transition hover:bg-[#D9B783]"
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
