
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Monitor,
  Refrigerator,
  Camera,
  Wrench,
  MapPin,
  Phone,
  Search,
  Store,
  Zap,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ShieldCheck,
  Laptop,
  Tv,
} from "lucide-react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const businesses = [
  {
    id: "vivo",
    name: "VIVO Exclusive Store",
    category: "Mobile Phones & Accessories",
    address: "Near Police Chowki, Jattari, Uttar Pradesh 202137",
    phone: "+91 79068 38300",
    icon: Smartphone,
    description:
      "A dedicated vivo phone store for customers exploring smartphones and compatible accessories. Confirm the model, colour and stock before visiting.",
    services: ["vivo smartphones", "Phone accessories", "Product enquiries"],
    note: "Near Police Chowki",
  },
  {
    id: "umesh",
    name: "Umesh Electronics & Furniture House",
    category: "Electronics & Home Appliances",
    address: "1, Aligarh–Palwal Road, Jattari, Uttar Pradesh 202137",
    phone: "+91 78951 11366",
    icon: Refrigerator,
    description:
      "A local electronics and furniture retailer serving Jattari and nearby communities. Contact the shop to check appliance options, availability and current prices.",
    services: [
      "Consumer electronics",
      "Home appliances",
      "Furniture enquiries",
    ],
    note: "Aligarh–Palwal Road",
  },
  {
    id: "kapil",
    name: "Kapil Electronics Jattari",
    category: "Electronics Retail",
    address: "Ramleela Ground, Wali Gali, Jattari, Hetalpur, Aligarh",
    phone: "",
    icon: Tv,
    description:
      "A listed local electronics shop in the Ramleela Ground and Wali Gali area. Ask locally about the products currently stocked and their availability.",
    services: [
      "Electronics shopping",
      "Product availability enquiries",
      "Local retail",
    ],
    note: "Ramleela Ground area",
  },
  {
    id: "lalit",
    name: "Lalit Computer Solution Jattari",
    category: "Computers, Printers & Repairs",
    address:
      "Opposite Paliwal Hospital, Kua Wali Gali, Main Road, Jattari, Uttar Pradesh 202137",
    phone: "",
    icon: Laptop,
    description:
      "A computer service shop listed for laptop and desktop troubleshooting, printer support, ink refilling and related computer needs.",
    services: [
      "Computer troubleshooting",
      "Printer support",
      "Ink and cartridge refilling",
    ],
    note: "Opposite Paliwal Hospital",
  },
  {
    id: "divya",
    name: "Divya CCTV and Inverter Battery",
    category: "Security & Power Backup",
    address:
      "Aligarh–Palwal Road, near Punjab National Bank, Jattari, Uttar Pradesh 202137",
    phone: "+91 89580 00933",
    icon: Camera,
    description:
      "A local business listed for CCTV, inverter batteries and related power and security equipment. Contact the shop to confirm compatible products and installation support.",
    services: [
      "CCTV-related products",
      "Inverter and battery enquiries",
      "Power and security equipment",
    ],
    note: "Near Punjab National Bank",
  },
  {
    id: "raju",
    name: "Raju Electricals",
    category: "Electrical Supplies",
    address:
      "Main Road, near Paliwal Gali and Udayveer News Agency, Jattari, Uttar Pradesh 202137",
    phone: "",
    icon: Zap,
    description:
      "A local electrical and electronics retailer listed on Main Road. It may be useful for enquiries about common electrical supplies and lighting-related needs.",
    services: [
      "Electrical supplies",
      "Lighting-related enquiries",
      "Local electrical products",
    ],
    note: "Near Paliwal Gali",
  },
  {
    id: "alien-tech",
    name: "Alien Tech Mobile Repairing Center",
    category: "Mobile Repair & Support",
    address:
      "Pachori Market, near Sakhi Saree Showroom, Jattari, Uttar Pradesh 202137",
    phone: "+91 97596 06462",
    icon: Wrench,
    description:
      "A local mobile repair centre listed in the Pachori Market area. Contact the shop to check whether your phone model and required repair are supported.",
    services: [
      "Mobile troubleshooting",
      "Repair enquiries",
      "Phone-related support",
    ],
    note: "Pachori Market",
  },
  {
    id: "ds-refrigeration",
    name: "D S Refrigeration",
    category: "AC & Refrigerator Service",
    address:
      "Main Road, Paliwal Market, near Naresh Chandra Shastri Ji's office, Jattari, Aligarh",
    phone: "+91 63979 71010",
    icon: Wrench,
    description:
      "A listed local appliance service option associated with AC and refrigerator repair. Confirm the service required, visit availability and estimated cost directly.",
    services: [
      "AC service enquiries",
      "Refrigerator repair enquiries",
      "Appliance maintenance",
    ],
    note: "Paliwal Market",
  },
];

const categories = [
  {
    label: "Mobile Phones",
    icon: Smartphone,
    description: "Phones, accessories and mobile support",
  },
  {
    label: "Home Appliances",
    icon: Refrigerator,
    description: "Electronics and household appliances",
  },
  {
    label: "Computers",
    icon: Monitor,
    description: "Computers, printers and technical support",
  },
  {
    label: "CCTV & Power",
    icon: Camera,
    description: "Security equipment and backup power",
  },
];

export default function ElectronicsAppliancesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = [
      business.name,
      business.category,
      business.address,
      business.description,
      ...business.services,
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      (activeCategory === "Mobile Phones" &&
        /mobile|phone/i.test(
          `${business.name} ${business.category} ${business.description}`
        )) ||
      (activeCategory === "Home Appliances" &&
        /appliance|electronics|refrigeration|furniture/i.test(
          `${business.name} ${business.category}`
        )) ||
      (activeCategory === "Computers" &&
        /computer|printer|laptop/i.test(
          `${business.name} ${business.category} ${business.description}`
        )) ||
      (activeCategory === "CCTV & Power" &&
        /cctv|inverter|battery|electrical|security/i.test(
          `${business.name} ${business.category} ${business.description}`
        ));

    return matchesSearch && matchesCategory;
  });

  async function copyAddress(id: string, address: string) {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(id);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#173F40]">
      <Navbar />

      {/* FULL-WIDTH HERO */}
      <section className="relative isolate min-h-[600px] overflow-hidden bg-[#092D2E] lg:min-h-[670px]">
        <Image
          src="/images/Indian Electronics Market Street.jpg"
          alt="A local shopping street with stores and everyday market activity"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#092D2E]/85 via-[#103F40]/55 to-[#103F40]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092D2E]/50 via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[600px] max-w-[1600px] items-center gap-12 px-5 py-20 sm:px-8 lg:min-h-[670px] lg:grid-cols-[1.1fr_0.9fr] lg:px-14 xl:px-20">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <Zap size={15} className="text-[#D9B783]" />
              Local Electronics · Jattari
            </div>

            <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
              Power your
              <br />
              <span className="font-serif font-normal italic text-[#E8D2A7]">
                everyday life.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Explore electronics shops, mobile stores, computer services,
              home appliances, CCTV equipment and repair options in Jattari.
              Check local addresses and contact businesses directly before
              visiting.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#local-stores"
                className="group inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition hover:-translate-y-1 hover:bg-[#E8D2A7]"
              >
                Explore local stores
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#find-store"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Find a category
                <Search size={17} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#D9B783]" />
                Jattari, Uttar Pradesh
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#D9B783]" />
                Check details before visiting
              </span>
            </div>
          </div>

          {/* Decorative, image-free floating panel */}
          <div className="relative mx-auto w-full max-w-[490px]">
            <div className="absolute -right-3 -top-4 h-full w-[90%] rounded-[28px] border border-white/20 bg-white/[0.06] backdrop-blur-sm" />

            <div className="relative rounded-[26px] border border-white/20 bg-[#F9F7F0] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-8">
              <div className="flex items-center justify-between border-b border-[#DFE2D8] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#164E52] text-white">
                    <Store size={22} />
                  </div>
                  <div>
                    <p className="font-semibold">Jattari Luxe</p>
                    <p className="mt-1 text-xs text-[#687B78]">
                      Electronics directory
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#E8EEE5] px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#164E52]">
                  Local guide
                </span>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C45]">
                Browse what you need
              </p>

              <div className="mt-4 space-y-3">
                {categories.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-[#E2E4DB] bg-white p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52]">
                        <Icon size={21} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="mt-1 text-xs leading-5 text-[#687B78]">
                          {item.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-[#A27C45]"
                      />
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-xs leading-6 text-[#687B78]">
                Use the directory below to check shop details and available
                contact information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#A27C45]">
              Your local buying guide
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Find the right
              <br />
              <span className="font-serif font-normal italic text-[#A27C45]">
                store for your needs.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#687B78]">
            Whether you need a new phone, an appliance, computer assistance,
            CCTV equipment or electrical products, this directory brings
            relevant local listings together. Product stock, service coverage
            and opening hours may change, so confirm them before travelling.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section
        id="find-store"
        className="border-y border-[#E2E4DB] bg-[#F3F4ED] px-5 py-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A27C45]">
              Browse by need
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              What are you looking for?
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    setActiveCategory(isActive ? "All" : item.label)
                  }
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
                    isActive
                      ? "border-[#164E52] bg-[#164E52] text-white"
                      : "border-[#DDE1D7] bg-[#FFFDF8] text-[#173F40] hover:border-[#B89552]"
                  }`}
                >
                  <Icon
                    size={22}
                    className={isActive ? "text-[#E8D2A7]" : "text-[#A27C45]"}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">
                      {item.label}
                    </span>
                    <span
                      className={`mt-1 block text-xs leading-5 ${
                        isActive ? "text-white/70" : "text-[#687B78]"
                      }`}
                    >
                      {item.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEARCH + DIRECTORY */}
      <section
        id="local-stores"
        className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A27C45]">
                Jattari business directory
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Local stores & services
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#687B78]">
                Browse listed electronics shops and service providers. Use
                the address and contact details shown on each card.
              </p>
            </div>

            <div className="w-full md:max-w-sm">
              <label
                htmlFor="business-search"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#687B78]"
              >
                Search this directory
              </label>
              <div className="flex items-center gap-3 rounded-full border border-[#D9DED5] bg-white px-4 py-3 focus-within:border-[#164E52]">
                <Search size={18} className="text-[#A27C45]" />
                <input
                  id="business-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search shop, service or address..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#9AA49A]"
                />
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E4DB] pb-5">
            <p className="text-sm text-[#687B78]">
              Showing{" "}
              <span className="font-semibold text-[#173F40]">
                {filteredBusinesses.length}
              </span>{" "}
              {filteredBusinesses.length === 1 ? "listing" : "listings"}
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
                setExpanded(null);
              }}
              className="text-sm font-semibold text-[#164E52] underline decoration-[#B89552] underline-offset-4 hover:text-[#A27C45]"
            >
              Reset filters
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredBusinesses.map((business) => {
              const Icon = business.icon;
              const isExpanded = expanded === business.id;
              const isCopied = copied === business.id;

              return (
                <article
                  key={business.id}
                  className="group flex flex-col rounded-[24px] border border-[#E0E4DA] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B89552] hover:shadow-[0_20px_45px_rgba(16,63,64,0.08)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EEE5] text-[#164E52] transition group-hover:bg-[#164E52] group-hover:text-white">
                      <Icon size={26} />
                    </div>
                    <span className="rounded-full bg-[#F3F4ED] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#687B78]">
                      Local listing
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#A27C45]">
                    {business.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.02em]">
                    {business.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#687B78]">
                    {business.description}
                  </p>

                  <div className="mt-5 rounded-2xl bg-[#F6F6F0] p-4">
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        className="mt-0.5 shrink-0 text-[#A27C45]"
                      />
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8A9689]">
                          Address
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#173F40]">
                          {business.address}
                        </p>
                        <p className="mt-2 text-xs text-[#687B78]">
                          Landmark: {business.note}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        copyAddress(business.id, business.address)
                      }
                      className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#D9DED5] bg-white px-3 py-2 text-xs font-semibold text-[#164E52] transition hover:border-[#164E52]"
                    >
                      {isCopied ? <Check size={14} /> : <Copy size={14} />}
                      {isCopied ? "Address copied" : "Copy address"}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 rounded-2xl border border-[#E2E4DB] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A27C45]">
                        What to ask about
                      </p>

                      <ul className="mt-3 space-y-2">
                        {business.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2 text-sm leading-6 text-[#526666]"
                          >
                            <Check
                              size={15}
                              className="mt-1 shrink-0 text-[#164E52]"
                            />
                            {service}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-4 border-t border-[#E2E4DB] pt-3 text-xs leading-6 text-[#687B78]">
                        Confirm current stock, pricing, working hours and
                        service availability directly before visiting.
                      </p>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded(isExpanded ? null : business.id)
                      }
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#164E52] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#103F40]"
                    >
                      {isExpanded ? "Hide details" : "View details"}
                      {isExpanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {business.phone ? (
                      <a
                        href={`tel:${business.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9DED5] px-4 py-3 text-sm font-semibold text-[#164E52] transition hover:border-[#164E52] hover:bg-[#F3F4ED]"
                        aria-label={`Call ${business.name}`}
                      >
                        <Phone size={16} />
                        Call
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(
                            isExpanded ? null : business.id
                          )
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9DED5] px-4 py-3 text-sm font-semibold text-[#164E52] transition hover:border-[#164E52] hover:bg-[#F3F4ED]"
                      >
                        <Search size={16} />
                        Info
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {filteredBusinesses.length === 0 && (
            <div className="mt-8 rounded-[24px] border border-dashed border-[#C9D2C7] bg-[#F6F6F0] px-6 py-12 text-center">
              <Search size={28} className="mx-auto text-[#A27C45]" />
              <h3 className="mt-4 text-xl font-semibold">
                No matching listings found
              </h3>
              <p className="mt-2 text-sm text-[#687B78]">
                Try another shop name, service or address.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 rounded-full bg-[#164E52] px-5 py-3 text-sm font-semibold text-white hover:bg-[#103F40]"
              >
                Show all listings
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SHOPPING CHECKLIST */}
      <section className="bg-[#F1F0E8] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A27C45]">
              Before you visit
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Shop with confidence.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#687B78]">
              A few quick checks can help you choose the right shop and avoid
              unnecessary trips.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Confirm the product is in stock.",
              "Ask about the final price and warranty.",
              "Check repair costs before approving work.",
              "Confirm opening hours before visiting.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#DDE1D7] bg-[#FFFDF8] p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EEE5] text-[#164E52]">
                  <ShieldCheck size={17} />
                </div>
                <p className="text-sm leading-6 text-[#526666]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIST YOUR BUSINESS */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-[28px] bg-[#103F40] px-6 py-10 text-white sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9B783]">
              Are you a local business owner?
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Help more people discover your store.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Share your business information with Jattari Luxe so visitors
              can learn about your products and services.
            </p>
          </div>

          <Link
            href="/list-your-business"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#173F40] transition hover:-translate-y-1 hover:bg-[#E8D2A7]"
          >
            List your business
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
