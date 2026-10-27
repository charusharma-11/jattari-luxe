
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Shirt,
  Scissors,
  Sparkles,
} from "lucide-react";

const shops = [
  {
    name: "Apna Bazar — Chota Chandni Chowk",
    type: "Sarees · Family Wear · Kidswear",
    description:
      "A local clothing destination in Jattari's main market, listed for sarees, designer-style outfits and children's clothing.",
    address:
      "Main Market, Pisawa–Jattari Road, near Dauji Mandir, Jattari, UP 202137",
    style: "featured",
  },
  {
    name: "Gopal Garments & Sarees Collection",
    type: "Garments · Sarees",
    description:
      "A clothing shop for shoppers looking for garments and saree collections along Jattari's main road.",
    address:
      "Aligarh–Palwal Road, near/inside PNB premises, Jattari, UP 202137",
    style: "standard",
  },
  {
    name: "Gagan Cloth Collection",
    type: "Clothing & Fabric",
    description:
      "A neighbourhood clothing shop located near the Police Chowki in the Ajeet Nagar area.",
    address:
      "Opposite street of Police Chowki, Ajeet Nagar, Jattari, UP 202137",
    style: "standard",
  },
  {
    name: "Bhumika Garments",
    type: "Readymade Garments",
    description:
      "A local garments shop near the Usharh Road junction, listed as an option for budget-conscious clothing shoppers.",
    address:
      "Usharh Road Tiraha, Bypass, Jattari, UP 202137",
    style: "featured",
  },
  {
    name: "STYLOX Style & Comfort",
    type: "Ready-to-wear Clothing",
    description:
      "A local clothing showroom on the Aligarh–Palwal Road for everyday ready-to-wear apparel.",
    address:
      "Aligarh–Palwal Road, Jattari, UP 202137",
    style: "standard",
  },
  {
    name: "New Arrivals Clothes Store",
    type: "Clothing & Everyday Wear",
    description:
      "A neighbourhood clothes shop on the Aligarh–Palwal Road, convenient to explore for regular clothing needs.",
    address:
      "1, Aligarh–Palwal Road, Jattari, UP 202137",
    style: "standard",
  },
];

export default function ClothingFashionPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#173F40]">
        {/* HERO */}
        <section className="relative min-h-[540px] overflow-hidden bg-[#103F40] md:min-h-[620px]">
          <Image
            src="/images/explore-market.jpg"
            alt="Clothing and fashion shops in an Indian local market"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/80 via-[#103F40]/55 to-[#103F40]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/40 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[540px] max-w-[1440px] flex-col justify-between px-6 py-12 md:min-h-[620px] md:px-14 md:py-16">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#E6D1A6]">
              <span className="h-px w-10 bg-[#D9B783]" />
              The Jattari Style Directory
            </div>

            <div className="max-w-4xl pb-3">
              <p className="mb-5 text-sm text-white/80">
                Everyday looks. Festive finds. Personal style.
              </p>

              <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl">
                Find your
                <br />
                kind of style<span className="text-[#D9B783]">.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                Discover clothing shops around Jattari, from sarees and
                family wear to readymade garments and everyday fashion.
                Explore local shop introductions and addresses in one place.
              </p>

              <a
                href="#fashion-directory"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#D9B783]"
              >
                Explore clothing shops
                <ArrowDownRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="border-b border-[#E0E5DB]">
          <div className="mx-auto grid max-w-[1320px] gap-5 px-6 py-10 md:grid-cols-[0.7fr_1.6fr] md:gap-12 md:px-12 md:py-14">
            <div className="flex items-start gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7B43]">
              <Shirt size={18} />
              <span>Local fashion in Jattari</span>
            </div>

            <div>
              <h2 className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.035em] md:text-4xl">
                From daily essentials to special-occasion outfits, explore
                clothing stores close to home.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#65796F] md:text-base">
                Jattari local market has clothing and garment shops for
                different shopping needs, including sarees, readymade
                outfits and family clothing. This directory brings together
                publicly listed shops with brief descriptions and location
                details, helping residents and visitors decide where to
                start their shopping.
              </p>
            </div>
          </div>
        </section>

        {/* DIRECTORY */}
        <section
          id="fashion-directory"
          className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16"
        >
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#DDE4D9] pb-7 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7B43]">
                <Sparkles size={15} />
                Around your neighbourhood
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
                Clothing & fashion
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#65796F]">
              Browse local stores by name, discover what each listing is
              associated with, and note its address.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {shops.map((shop) => (
              <article
                key={shop.name}
                className={`group relative border-b border-[#DDE4D9] py-7 transition-colors hover:border-[#B89552] ${
                  shop.style === "featured"
                    ? "bg-[#F2F3EB] px-5 md:px-6"
                    : "px-1"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8E0D5] bg-[#FFFDF8] text-[#164E52] transition group-hover:border-[#B89552]">
                    {shop.name.includes("Apna Bazar") ? (
                      <Sparkles size={19} strokeWidth={1.6} />
                    ) : shop.name.includes("Bhumika") ? (
                      <Scissors size={19} strokeWidth={1.6} />
                    ) : (
                      <Shirt size={19} strokeWidth={1.6} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#9A7B43]">
                      {shop.type}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.025em] text-[#173F40] md:text-2xl">
                      {shop.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#65796F]">
                      {shop.description}
                    </p>

                    <div className="mt-4 flex items-start gap-2.5">
                      <MapPin
                        size={17}
                        className="mt-1 shrink-0 text-[#B89552]"
                      />
                      <p className="text-sm leading-6 text-[#35564F]">
                        {shop.address}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="mt-1 shrink-0 text-[#B89552] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CLOSING STRIP */}
        <section className="bg-[#164E52]">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#E5D0A3]">
                Explore local
              </p>
              <h2 className="mt-3 text-2xl font-medium text-white md:text-3xl">
                Discover more of Jattari.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Explore more local shops and everyday services in the
                Jattari directory.
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

        <p className="mx-auto max-w-[1320px] px-6 py-5 text-xs leading-5 text-[#7B8B80] md:px-12">
          Shop details are based on available public listings. Stock,
          opening hours and product ranges may change; confirm locally
          before travelling.
        </p>
      </main>

      <Footer />
    </>
  );
}
