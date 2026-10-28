
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Store,
  ShoppingBasket,
  Shirt,
  Utensils,
  Wrench,
  Smartphone,
  MapPin,
  Search,
  Building2,
  ExternalLink,
  ShoppingBag,
  Compass,
  Sparkles,
  Coffee,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactButton from "../../components/ContactButton";

const categories = [
  {
    number: "01",
    title: "Electronics & Appliances",
    description:
      "Explore electronics shops, mobile accessories, home appliances and everyday technology needs.",
    href: "/local-businesses/electronics-appliances",
    icon: Smartphone,
    accent: "bg-[#E8EEE5]",
    label: "Technology & home",
  },
  {
    number: "02",
    title: "Grocery & Daily Needs",
    description:
      "Discover local grocery stores, household essentials and everyday shopping options.",
    href: "/local-businesses/grocery-daily-needs",
    icon: ShoppingBasket,
    accent: "bg-[#F2E7D3]",
    label: "Everyday essentials",
  },
  {
    number: "03",
    title: "Clothing & Fashion",
    description:
      "Explore clothing shops, fashion accessories, traditional wear and occasion shopping.",
    href: "/local-businesses/clothing-fashion",
    icon: Shirt,
    accent: "bg-[#E9E4F3]",
    label: "Style & shopping",
  },
  {
    number: "04",
    title: "Restaurants & Cafes",
    description:
      "Find places to eat, casual cafes, family dining and local food spots around Jattari.",
    href: "/local-businesses/restaurants-cafes",
    icon: Utensils,
    accent: "bg-[#F5E4D8]",
    label: "Food & meetups",
  },
  {
    number: "05",
    title: "Hardware & Electrical",
    description:
      "Explore hardware, electrical supplies, repair essentials and home improvement stores.",
    href: "/local-businesses/hardware-electrical",
    icon: Wrench,
    accent: "bg-[#DFEBE9]",
    label: "Home & construction",
  },
  {
    number: "06",
    title: "All Businesses",
    description:
      "Browse the wider local business directory across categories, shops and services.",
    href: "/local-businesses/all-businesses",
    icon: Store,
    accent: "bg-[#F1E9D9]",
    label: "Explore the directory",
  },
];

const quickLinks = [
  {
    title: "Shop locally",
    description:
      "Explore everyday shopping categories and find businesses that fit your needs.",
    icon: ShoppingBag,
  },
  {
    title: "Discover places",
    description:
      "Use category pages to explore local services, food spots and useful shops.",
    icon: Compass,
  },
  {
    title: "Grow locally",
    description:
      "Help people discover your business by sharing accurate information online.",
    icon: Building2,
  },
];

const developments = [
  {
    name: "Anugrah Homes",
    eyebrow: "Residential development · Jattari",
    image: "/images/anugrah-homes.jpg",
    alt: "Anugrah Homes residential development",
    description:
      "Explore Anugrah Homes for published residential development information and project amenities. Business owners researching the area can contact the developer to ask about any currently available commercial or retail spaces.",
    website: "https://www.anugrahhomes.com/",
    label: "Explore Anugrah",
  },
  {
    name: "Skyline Aero Homes",
    eyebrow: "Planned township · Jattari area",
    image: "/images/skyline aero homes.jpg",
    alt: "Skyline Aero Homes township development",
    description:
      "Learn about Skyline Aero Homes and its planned development in the wider Jattari and Jewar corridor. If you are researching business opportunities, contact the developer to verify commercial inventory and permitted uses.",
    website: "https://www.skylineaerohomes.com/",
    label: "Explore Skyline",
  },
];

export default function LocalBusinessesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#173F40]">
      {/* NAVBAR */}
      <Navbar />

      {/* FULL-WIDTH REFERENCE-INSPIRED HERO */}
      <section className="w-full px-0 pb-8 pt-0 sm:pb-8 sm:pt-0 lg:pb-10">
        <div className="relative w-full overflow-hidden rounded-none border-0 bg-[#E8EEE5] p-0">
          <div className="relative isolate min-h-[620px] overflow-hidden rounded-none bg-[#092D2E] sm:min-h-[660px] lg:min-h-[min(760px,calc(100vh-100px))]">
            <Image
              src="/images/Golden-Hour Indian Street Market.jpg"
              alt="Local shops and commercial activity in a neighbourhood market"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/85 via-[#103F40]/55 to-[#103F40]/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/50 via-transparent to-transparent" />

            <div className="pointer-events-none absolute -right-20 top-10 hidden h-[440px] w-[440px] rounded-full border border-white/10 lg:right-[8%] lg:block" />
            <div className="pointer-events-none absolute -right-2 top-28 hidden h-[300px] w-[300px] rounded-full border border-[#D9B783]/20 lg:right-[13%] lg:block" />

            <div className="relative grid min-h-[620px] items-center gap-10 px-5 py-16 sm:min-h-[660px] sm:px-8 lg:min-h-[min(760px,calc(100vh-100px))] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10 lg:py-12 xl:px-16 2xl:px-20">
              {/* HERO LEFT CONTENT */}
              <div className="relative z-10 max-w-2xl">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  <Sparkles size={14} className="text-[#D9B783]" />
                  Jattari · Local Business Guide
                </div>

                <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-6xl lg:text-[clamp(3.5rem,5.2vw,5.5rem)] xl:text-[84px]">
                  Discover
                  <br />
                  <span className="font-serif font-normal italic text-[#E8D2A7]">
                    what&apos;s local.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                  Explore Jattari&apos;s shopping categories, food spots,
                  everyday essentials and useful services. Find your next
                  local discovery, one category at a time.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#business-categories"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-6 py-4 text-sm font-semibold text-[#173F40] transition duration-300 hover:-translate-y-1 hover:bg-[#E8D2A7] sm:px-7"
                  >
                    Explore categories
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <ContactButton
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/[0.08] px-6 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/[0.15] sm:px-7"
                  >
                    Contact
                    <ArrowUpRight size={17} />
                  </ContactButton>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#D9B783]" />
                    Jattari, Uttar Pradesh
                  </span>
                  <span className="flex items-center gap-2">
                    <Search size={16} className="text-[#D9B783]" />
                    Browse by category
                  </span>
                </div>
              </div>

              {/* HERO RIGHT: LAYERED UI, NO EXTRA PHOTOGRAPHS */}
              <div className="relative mx-auto min-h-[330px] w-full max-w-[520px] lg:min-h-[450px]">
                <div className="absolute right-0 top-4 h-[290px] w-[88%] rounded-[28px] border border-white/15 bg-white/[0.06] backdrop-blur-md sm:h-[340px] lg:top-8 lg:h-[370px]" />

                <div className="absolute right-0 top-10 w-[88%] rounded-[24px] border border-white/15 bg-[#F9F7F0] p-5 text-[#173F40] shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-7 lg:top-14">
                  <div className="flex items-center justify-between border-b border-[#DDE1D6] pb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#164E52] text-white">
                        <Store size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Jattari Luxe</p>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#8B968A]">
                          Local discovery
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-[#E8EEE5] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#164E52]">
                      Explore
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C45]">
                    Discover by category
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#E8EEE5] p-4">
                      <Smartphone size={22} className="text-[#164E52]" />
                      <p className="mt-3 text-sm font-semibold">Electronics</p>
                      <p className="mt-1 text-[11px] text-[#687B78]">
                        Tech & appliances
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F2E7D3] p-4">
                      <ShoppingBasket size={22} className="text-[#8D7048]" />
                      <p className="mt-3 text-sm font-semibold">Daily needs</p>
                      <p className="mt-1 text-[11px] text-[#687B78]">
                        Everyday shopping
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#E9E4F3] p-4">
                      <Shirt size={22} className="text-[#65578A]" />
                      <p className="mt-3 text-sm font-semibold">Fashion</p>
                      <p className="mt-1 text-[11px] text-[#687B78]">
                        Style & clothing
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F5E4D8] p-4">
                      <Coffee size={22} className="text-[#9A6548]" />
                      <p className="mt-3 text-sm font-semibold">Food & cafes</p>
                      <p className="mt-1 text-[11px] text-[#687B78]">
                        Places to eat
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-1 top-1 z-10 flex items-center gap-3 rounded-2xl border border-white/20 bg-[#164E52] px-4 py-3 text-white shadow-xl sm:-left-3 lg:left-0">
                  <MapPin size={20} className="text-[#D9B783]" />
                  <div>
                    <p className="text-xs font-semibold">Around Jattari</p>
                    <p className="mt-0.5 text-[10px] text-white/65">
                      Local business guide
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-1 left-0 z-10 flex items-center gap-3 rounded-2xl border border-[#D9DED5] bg-white px-4 py-3 text-[#173F40] shadow-xl sm:bottom-0 sm:left-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9B783]">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Own a business?</p>
                    <p className="mt-0.5 text-[10px] text-[#687B78]">
                      Get discovered locally
                    </p>
                  </div>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>

            {/* HERO BOTTOM STRIP */}
            <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-white/15 bg-[#092D2E]/45 px-5 py-5 text-xs text-white/65 sm:px-8 lg:px-10 xl:px-16">
              <span className="flex items-center gap-2">
                <ShoppingBag size={15} className="text-[#D9B783]" />
                Local shopping
              </span>
              <span className="flex items-center gap-2">
                <Utensils size={15} className="text-[#D9B783]" />
                Food & cafes
              </span>
              <span className="flex items-center gap-2">
                <Compass size={15} className="text-[#D9B783]" />
                Discover nearby
              </span>
              <span className="flex items-center gap-2">
                <Building2 size={15} className="text-[#D9B783]" />
                Business directory
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
              The local discovery guide
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Everything local,
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                in one place.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#526666]">
              From daily shopping to finding a place to eat, local businesses
              make a town convenient and connected. Jattari Luxe brings
              different business categories together so visitors can discover
              them through one central guide.
            </p>

            <p className="mt-5 text-base leading-8 text-[#687B78]">
              Each category has a dedicated page for its own information.
              Verified business names, addresses, opening hours, contact
              details and directions can be added as the directory grows.
            </p>

            <Link
              href="/local-businesses/all-businesses"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#B89552] pb-2 text-sm font-semibold transition hover:gap-4"
            >
              Browse all businesses
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID — NO PHOTOGRAPHS HERE */}
      <section
        id="business-categories"
        className="bg-[#F1F0E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Browse the directory
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Find your kind
                <br />
                <span className="font-serif font-normal italic text-[#A27C45]">
                  of local.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#687B78]">
              Choose a category to open its dedicated page. These cards use
              icons and typography rather than repeating photographs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[24px] border border-[#D9DED5] bg-[#FFFDF8] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B89552] hover:shadow-[0_20px_50px_rgba(16,63,64,0.09)] sm:p-7"
                >
                  <span className="absolute right-6 top-5 font-serif text-5xl text-[#E7E8DE] transition group-hover:text-[#E8D2A7]">
                    {category.number}
                  </span>

                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.accent} text-[#164E52] transition duration-300 group-hover:rotate-[-5deg]`}>
                    <CategoryIcon size={25} />
                  </div>

                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#A27C45]">
                    {category.label}
                  </p>

                  <h3 className="mt-2 max-w-[260px] text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#687B78]">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E4E5DC] pt-4">
                    <span className="text-sm font-semibold text-[#164E52]">
                      Explore category
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9DED5] transition group-hover:border-[#164E52] group-hover:bg-[#164E52] group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                Explore with purpose
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Local discovery,
                <br />
                <span className="font-serif font-normal italic text-[#A27C45]">
                  made simpler.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-[#687B78]">
                Start with a category, check the information provided and
                contact a business directly to confirm its details before
                visiting.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {quickLinks.map((item, index) => {
                const QuickIcon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[#E1E5DC] p-5 transition hover:border-[#B89552] hover:bg-[#F7F6F0] sm:p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52]">
                      <QuickIcon size={22} />
                    </div>

                    <p className="mt-5 text-xs font-semibold tracking-[0.15em] text-[#A27C45]">
                      STEP 0{index + 1}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-[#687B78]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ANUGRAH + SKYLINE PROMOTION */}
      <section className="bg-[#103F40] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#D9B783]">
              Explore developments around Jattari
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Local business meets
              <br />
              <span className="font-serif font-normal italic text-[#E8D2A7]">
                future development.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Residential developments can also be relevant when researching
              neighbourhood amenities and possible commercial opportunities.
              Explore these projects and confirm current details directly.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {developments.map((project, index) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[26px] border border-white/15 bg-white/[0.06] transition duration-500 hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="relative h-[260px] overflow-hidden sm:h-[310px]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/85 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#103F40]/70 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Featured development 0{index + 1}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-semibold sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {project.eyebrow}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-sm leading-7 text-white/75">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9B783] px-5 py-3.5 text-sm font-semibold text-[#173F40] transition hover:bg-[#E8D2A7]"
                    >
                      {project.label}
                      <ExternalLink size={15} />
                    </a>

                    <Link
                      href={`/contact?project=${encodeURIComponent(project.name)}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Ask about opportunities
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-white/50">
            Commercial availability, amenities and development details must be
            confirmed directly with the relevant developer.
          </p>
        </div>
      </section>

      {/* LIST YOUR BUSINESS CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#F1F0E8] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#B89552]/25" />
          <div className="pointer-events-none absolute -right-2 -top-6 h-40 w-40 rounded-full border border-[#B89552]/25" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A27C45]">
                For local business owners
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Make your business easier to discover.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#687B78] sm:text-base">
                Share accurate information about your business, location and
                services so more people can discover what you offer.
              </p>
            </div>

            <ContactButton
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#164E52] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#103F40]"
            >
              Contact
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </ContactButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
