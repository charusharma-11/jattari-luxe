
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ShoppingBasket,
  Shirt,
  PlugZap,
  Leaf,
  Wrench,
  Gift,
} from "lucide-react";

const shopDirectory = [
  {
    category: "Groceries & Daily Needs",
    number: "01",
    icon: ShoppingBasket,
    intro:
      "For everyday groceries and household essentials, start with local general stores and larger grocery outlets around Jattari.",
    shops: [
      {
        name: "Rozana Hyper Mart",
        description:
          "A multi-floor shopping store listed for everyday shopping and household needs.",
        address:
          "Ground, First and Second Floor, Main, Jattari Bypass, Jattari, Uttar Pradesh 202137.",
      },
      {
        name: "Mangla Enterprises",
        description:
          "A local retail and delivery-oriented shop listed for grocery and general household products.",
        address:
          "Jartauli Road, near Kanya Inter College, Jattari, Uttar Pradesh 202137.",
      },
      {
        name: "Super Bazar Canteen",
        description:
          "A local grocery and general store for routine household shopping.",
        address:
          "Pisawa–Jattari Road, Jattari, Uttar Pradesh 202137.",
      },
    ],
  },
  {
    category: "Clothing & Fashion",
    number: "02",
    icon: Shirt,
    intro:
      "For garments, sarees and family clothing, these listed shops are useful starting points in the local market area.",
    shops: [
      {
        name: "Apna Bazar — Chota Chandni Chowk",
        description:
          "Listed for sarees, designer clothing and apparel for children and families.",
        address:
          "Main Market, Pisawa–Jattari Road, near Dauji Mandir, Jattari, Uttar Pradesh 202137.",
      },
      {
        name: "Gopal Garments & Sarees Collection",
        description: "A clothing shop focused on garments and sarees.",
        address:
          "Main Road, Aligarh–Palwal Road, inside/near PNB Bank, Jattari, Uttar Pradesh 202137.",
      },
      {
        name: "Gagan Cloth Collection",
        description:
          "A neighbourhood clothing store in the Ajeet Nagar area.",
        address:
          "Opposite the street of Police Chowki, Ajeet Nagar, Jattari, Uttar Pradesh 202137.",
      },
    ],
  },
  {
    category: "Electronics & Appliances",
    number: "03",
    icon: PlugZap,
    intro:
      "For electrical products, appliances and electronics, these local businesses have public listings in Jattari.",
    shops: [
      {
        name: "Umesh Electronics & Furniture House",
        description:
          "A local retailer listed for electronics, home appliances and furniture.",
        address:
          "1, Aligarh–Palwal Road, Jattari, Uttar Pradesh 202137.",
      },
      {
        name: "Raju Electricals",
        description:
          "An electrical and electronics shop for common electrical supplies and related products.",
        address:
          "Main Road, near Paliwal Gali and Udayveer News Agency, Jattari, Uttar Pradesh 202137.",
      },
      {
        name: "Kapil Electronics Jattari",
        description:
          "A local electronics store listed in the Hetalpur area.",
        address:
          "Ramleela Ground, Wali Gali, Jattari, Hetalpur, Aligarh, Uttar Pradesh.",
      },
    ],
  },
  {
    category: "Fresh Produce & Vegetables",
    number: "04",
    icon: Leaf,
    intro:
      "For fresh vegetables and produce, explore local market stalls and vegetable sellers around the town.",
    shops: [
      {
        name: "Local vegetable sellers",
        description:
          "Small produce shops and vendors are a practical starting point for daily vegetables and seasonal produce.",
        address:
          "Check the relevant market or vegetable-selling area in Jattari before visiting.",
      },
    ],
  },
  {
    category: "Hardware & Home Essentials",
    number: "05",
    icon: Wrench,
    intro:
      "For home repairs, hardware and renovation supplies, these local businesses are listed in and around Jattari.",
    shops: [
      {
        name: "Agrawal Home Center",
        description:
          "A hardware and home-improvement shop serving local household and repair needs.",
        address:
          "Krishna Vihar, near Jattari Bypass, Uttar Pradesh 202137.",
      },
      {
        name: "Master Machinery Store",
        description:
          "Listed for hardware, plumbing supplies, pipes, pumps and related home-maintenance products.",
        address:
          "Jartauli Road, opposite Suresh Chand Vashist, Jattari, Uttar Pradesh 202137.",
      },
      {
        name: "A+ Building Material's",
        description:
          "A local supplier listed for building and construction materials.",
        address:
          "Jattari, Uttar Pradesh 202137. Confirm the precise shop location before visiting.",
      },
    ],
  },
  {
    category: "Gifts, Toys & Sports",
    number: "06",
    icon: Gift,
    intro:
      "For gifts, toys and sports-related purchases, Goverdhan Market has a listed local shop worth checking.",
    shops: [
      {
        name: "Goverdhan Gifts & Sports",
        description:
          "A market-based store listed for gifts and sports items, with listings also mentioning toys and other products.",
        address:
          "Ground Floor, Goverdhan Market, Main Road, Khair Bus Stand, Jattari, Tehsil Khair, Aligarh, Uttar Pradesh 202137.",
      },
      {
        name: "SAKSHAM COSMATIC & GIFT CENTER",
        description:
          "A local cosmetics and gifting shop for beauty products and small gifts.",
        address:
          "Jattari, Uttar Pradesh 202137. Confirm the precise location before visiting.",
      },
    ],
  },
];

type Shop = {
  name: string;
  description: string;
  address: string;
};

function ShopList({ shops }: { shops: Shop[] }) {
  return (
    <div className="divide-y divide-[#E6E2D8]">
      {shops.map((shop, index) => (
        <article
          key={shop.name}
          className="grid gap-3 py-6 sm:grid-cols-[44px_1fr] sm:gap-5"
        >
          <span className="font-serif text-2xl text-[#B89552]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <h4 className="text-lg font-semibold text-[#164E52]">
              {shop.name}
            </h4>

            <p className="mt-2 leading-7 text-gray-600">
              {shop.description}
            </p>

            <div className="mt-3 flex items-start gap-2 text-sm leading-6 text-gray-500">
              <span
                aria-hidden="true"
                className="mt-0.5 text-[#B89552]"
              >
                ●
              </span>

              <p>
                <span className="font-semibold text-[#164E52]">
                  Address:{" "}
                </span>
                {shop.address}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function CategoryRow({
  category,
}: {
  category: (typeof shopDirectory)[number];
}) {
  const Icon = category.icon;

  return (
    <section
      className="grid gap-6 border-b border-[#D8D8CD] py-10 md:grid-cols-[0.72fr_1.28fr] md:items-stretch md:gap-14 md:py-14"
    >
      {/* Left heading: icon + content vertically centered */}
      <div className="flex flex-col justify-center py-5 md:py-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D9B783] bg-[#FFFDF8] text-[#A77E37] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
          <Icon size={27} strokeWidth={1.6} aria-hidden="true" />
        </div>

        <p className="font-serif text-4xl text-[#B89552]">
          {category.number}
        </p>

        <h3 className="mt-4 max-w-md text-2xl font-semibold leading-snug md:text-3xl">
          {category.category}
        </h3>

        <p className="mt-4 max-w-md leading-7 text-gray-600">
          {category.intro}
        </p>

        <div className="mt-6 h-px w-16 bg-[#D9B783]" />
      </div>

      {/* Right shop-list panel */}
      <div className="rounded-2xl bg-white px-5 shadow-[0_8px_30px_rgba(22,78,82,0.04)] sm:px-7">
        <ShopList shops={category.shops} />
      </div>
    </section>
  );
}

export default function MarketsShoppingPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#164E52]">
        {/* HERO */}
        <section className="relative flex min-h-[570px] items-center md:min-h-[660px]">
          <Image
            src="/images/Vibrant Jattari Street Market Scene.jpg"
            alt="Illustrative view of a shopping street in Jattari"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092F31]/90 via-[#103F40]/70 to-[#103F40]/20" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
            <div className="max-w-3xl animate-[heroReveal_1s_ease-out_both]">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B] md:text-sm">
                Discover Jattari · Shopping Guide
              </p>

              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
                Markets &
                <br />
                <span className="font-serif italic text-[#E4C58B]">
                  Shopping
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                Explore local shops, everyday essentials, clothing,
                electronics, household products and shopping destinations
                around Jattari, Aligarh.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#shop-by-category"
                  className="rounded-full bg-[#D9B783] px-7 py-3.5 text-sm font-semibold text-[#103F40] transition hover:-translate-y-1 hover:bg-white"
                >
                  Explore Shopping
                </a>

                <a
                  href="#goverdhan-market"
                  className="rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164E52]"
                >
                  Discover Goverdhan Market
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#B89552] via-[#E4C58B] to-transparent" />
        </section>

        {/* INTRO */}
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                The Local Shopping Experience
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Everyday needs,
                <br />
                <span className="font-serif italic text-[#B89552]">
                  local discoveries
                </span>
              </h2>
            </div>

            <div className="border-l-2 border-[#D9B783] pl-6 md:pl-9">
              <p className="leading-8 text-gray-600">
                Local shopping plays an important role in everyday life.
                Jattari has businesses serving different needs, from
                groceries and clothing to electronics, gifts and home
                improvement supplies.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Instead of listing only broad shopping categories, this
                guide includes real business names and available address
                information so you can identify places worth exploring.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                Shop details and inventory can change. Confirm the address
                and product availability before travelling.
              </p>
            </div>
          </div>
        </section>

        {/* SIX SHOPPING CATEGORIES */}
        <section
          id="shop-by-category"
          className="scroll-mt-24 bg-[#F3F4ED] px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Local Business Directory
              </p>

              <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
                Find shops by what you need
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Each category below includes a short introduction and
                named businesses with publicly listed location details.
              </p>
            </div>

            <div className="border-t border-[#D8D8CD]">
              {shopDirectory.map((category) => (
                <CategoryRow
                  key={category.number}
                  category={category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* MAIN ROAD MARKET */}
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative min-h-[340px] overflow-hidden rounded-2xl md:min-h-[480px]">
              <Image
                src="/images/local-market.jpg"
                alt="Illustrative local shopping street in Jattari"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/65 to-transparent" />

              <p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.25em] text-white">
                Local Shopping · Jattari
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                The Main Road
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Main Road Shopping Area
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Jattari&apos;s Aligarh–Palwal Road has listed shops covering
                different everyday needs. Rather than treating the whole
                road as one formally named market, use individual shop
                addresses to locate the business you want to visit.
              </p>

              <div className="mt-8 border-t border-[#E6E2D8] pt-6">
                <h3 className="text-lg font-semibold">
                  Umesh Electronics & Furniture House
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  A local option for electronics, appliances and furniture.
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  <span className="font-semibold text-[#164E52]">
                    Address:{" "}
                  </span>
                  1, Aligarh–Palwal Road, Jattari, Uttar Pradesh 202137.
                </p>
              </div>

              <div className="mt-6 border-t border-[#E6E2D8] pt-6">
                <h3 className="text-lg font-semibold">
                  Gopal Garments & Sarees Collection
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  A local clothing store listed for garments and sarees.
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  <span className="font-semibold text-[#164E52]">
                    Address:{" "}
                  </span>
                  Main Road, Aligarh–Palwal Road, inside/near PNB Bank,
                  Jattari, Uttar Pradesh 202137.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GOVERDHAN MARKET */}
        <section
          id="goverdhan-market"
          className="scroll-mt-24 bg-[#103F40] text-white"
        >
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[360px] md:min-h-[560px]">
              <Image
                src="/images/Vibrant Indian Market Gateway Scene.jpg"
                alt="AI-generated illustrative view of Goverdhan Market in Jattari"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092F31]/65 via-transparent to-transparent" />

              <p className="absolute bottom-7 left-7 text-xs font-bold uppercase tracking-[0.25em] text-[#E4C58B] md:left-12">
                Market Spotlight · Jattari
              </p>
            </div>

            <div className="flex items-center px-6 py-14 md:px-12 md:py-20 lg:px-16">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B]">
                  Featured Market
                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                  Goverdhan Market
                </h2>

                <p className="mt-6 leading-8 text-white/75">
                  Goverdhan Market is listed near Khair Bus Stand on the
                  Main Road in Jattari. Its directory includes shops for
                  gifts and sports-related products, making it a useful
                  local reference for shoppers looking for those items.
                </p>

                <div className="mt-8 border-l-2 border-[#D9B783] pl-5">
                  <h3 className="text-lg font-semibold text-white">
                    Goverdhan Gifts & Sports
                  </h3>

                  <p className="mt-3 leading-7 text-white/75">
                    A listed store for gifts and sports items, with public
                    listings also mentioning toys and other products.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    <span className="font-semibold text-[#E4C58B]">
                      Address:{" "}
                    </span>
                    Ground Floor, Goverdhan Market, Main Road, Khair Bus
                    Stand, Jattari, Tehsil Khair, Aligarh, Uttar Pradesh
                    202137.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SHOPPING TIPS */}
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Before You Visit
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                A few smart shopping tips
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Store locations, stock and opening hours can change.
                A little planning can make a local shopping trip easier.
              </p>
            </div>

            <div className="divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
              <div className="grid gap-2 py-6 sm:grid-cols-[50px_1fr] sm:gap-5">
                <span className="font-serif text-2xl text-[#B89552]">
                  01
                </span>

                <div>
                  <h3 className="text-lg font-semibold">
                    Confirm the address
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    Use the listed street and landmark to identify the
                    shop, and confirm details if the location is unclear.
                  </p>
                </div>
              </div>

              <div className="grid gap-2 py-6 sm:grid-cols-[50px_1fr] sm:gap-5">
                <span className="font-serif text-2xl text-[#B89552]">
                  02
                </span>

                <div>
                  <h3 className="text-lg font-semibold">
                    Check product availability
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    Ask the shop whether the particular item, size,
                    brand or model is available before making a trip.
                  </p>
                </div>
              </div>

              <div className="grid gap-2 py-6 sm:grid-cols-[50px_1fr] sm:gap-5">
                <span className="font-serif text-2xl text-[#B89552]">
                  03
                </span>

                <div>
                  <h3 className="text-lg font-semibold">
                    Compare prices and policies
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    For electronics and appliances, check warranty,
                    bill, return terms and product specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20 md:px-12 md:pb-28">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#F3F4ED] px-7 py-12 md:px-14 md:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
              Continue Exploring
            </p>

            <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">
                  Discover more of Jattari
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-gray-600">
                  Explore local businesses, neighbourhoods and
                  community places through Jattari Luxe.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/local-businesses"
                  className="rounded-full bg-[#164E52] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245C59]"
                >
                  Local Businesses
                </Link>

                <Link
                  href="/explore-jattari"
                  className="rounded-full border border-[#164E52]/30 px-6 py-3.5 text-sm font-semibold text-[#164E52] transition hover:bg-white"
                >
                  Explore Jattari
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
