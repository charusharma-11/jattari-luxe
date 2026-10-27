
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  Route,
  BusFront,
  TrainFront,
  Plane,
  CarFront,
  Lightbulb,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const transportOptions = [
  {
    number: "01",
    title: "Road Connectivity",
    icon: Route,
    description:
      "Jattari is connected to surrounding towns by road. The Aligarh–Palwal corridor provides access toward Khair, Aligarh, Palwal and nearby destinations.",
    detail:
      "For a road journey, confirm your route, traffic conditions and estimated travel time before leaving.",
  },
  {
    number: "02",
    title: "Bus & Public Transport",
    icon: BusFront,
    description:
      "Buses and other shared transport services can help residents and visitors travel between Jattari and nearby towns.",
    detail:
      "Bus availability, routes and departure times may vary. Check locally for the latest service information.",
  },
  {
    number: "03",
    title: "Railway Access",
    icon: TrainFront,
    description:
      "Rail travel may be accessed through nearby railway stations serving the wider Aligarh and surrounding region.",
    detail:
      "Check the official railway timetable and confirm the most convenient station for your destination before travelling.",
  },
  {
    number: "04",
    title: "Airport Connectivity",
    icon: Plane,
    description:
      "Noida International Airport at Jewar is an important developing regional aviation gateway for western Uttar Pradesh.",
    detail:
      "Check current flight operations, airport access roads and journey time before planning an airport transfer.",
  },
  {
    number: "05",
    title: "Local Mobility",
    icon: CarFront,
    description:
      "Auto-rickshaws, e-rickshaws and other local transport options may help with short journeys around town.",
    detail:
      "Confirm the fare and destination with the driver before starting your journey.",
  },
  {
    number: "06",
    title: "Travel Planning",
    icon: Lightbulb,
    description:
      "A little preparation can make journeys to schools, markets, workplaces and nearby cities easier.",
    detail:
      "Keep extra time for traffic, check service updates and verify directions before departure.",
  },
];

export default function TransportConnectivityPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#164E52]">
        {/* HERO */}
        <section className="relative flex min-h-[520px] items-center md:min-h-[640px]">
          <Image
            src="/images/Jattari Transport Hub at Golden Hour.jpg"
            alt="AI-generated illustrative scene of regional road and public transport"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092F31]/95 via-[#103F40]/75 to-[#103F40]/20" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12 lg:px-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B] md:text-sm">
                Explore Jattari · Getting Around
              </p>

              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
                Transport &
                <br />
                <span className="font-serif italic text-[#E4C58B]">
                  Connectivity
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                Discover road connections, public transport options and
                regional travel links that help connect Jattari with nearby
                towns and important destinations.
              </p>

              <a
                href="#transport-options"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-3.5 text-sm font-semibold text-[#103F40] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore Connectivity
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#B89552] via-[#E4C58B] to-transparent" />
        </section>

        {/* INTRODUCTION */}
        <section className="px-6 py-20 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Get Around Jattari
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight md:text-5xl">
                Connected to everyday life and nearby destinations
              </h2>
            </div>

            <div className="border-l-2 border-[#D9B783] pl-6 md:pl-9">
              <p className="leading-8 text-gray-600">
                Roads and local transport play an important role in
                connecting Jattari with nearby communities. Residents and
                visitors can plan journeys for education, work, shopping,
                healthcare and regional travel.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Use this guide as a starting point for understanding the
                available transport options. Confirm exact routes, operating
                schedules and current travel conditions before departure.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSPORT OPTIONS */}
        <section
          id="transport-options"
          className="scroll-mt-24 bg-[#F3F4ED] px-6 py-20 md:px-12 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Your Travel Guide
              </p>

              <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
                Ways to travel from Jattari
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Explore the main transport options and useful considerations
                for planning journeys within the town and beyond.
              </p>
            </div>

            <div className="border-t border-[#D8D8CD]">
              {transportOptions.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="grid gap-6 border-b border-[#D8D8CD] py-9 md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-14 md:py-12"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D9B783] bg-[#FFFDF8] text-[#A77E37]">
                        <Icon
                          size={26}
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <p className="font-serif text-sm text-[#B89552]">
                          {item.number}
                        </p>

                        <h3 className="mt-1 text-xl font-semibold md:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="md:border-l md:border-[#D9B783] md:pl-8">
                      <p className="leading-8 text-gray-600">
                        {item.description}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-gray-500">
                        {item.detail}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ROAD CONNECTIVITY FEATURE */}
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative min-h-[330px] overflow-hidden rounded-2xl md:min-h-[470px]">
              <Image
                src="/images/Northern India Highway Direction Sign.jpg"
                alt="Illustrative road and residential surroundings in Jattari"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/60 to-transparent" />

              <p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.25em] text-white">
                Regional Road Connections
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Road Network
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Travel to nearby towns
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Jattari is situated along the Aligarh–Palwal road corridor.
                This road connection provides access toward nearby places
                including Khair, Aligarh and Palwal.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    place: "Khair",
                    detail:
                      "A nearby town and an important local reference point.",
                  },
                  {
                    place: "Aligarh",
                    detail:
                      "A major regional destination for education, services and rail connections.",
                  },
                  {
                    place: "Palwal",
                    detail:
                      "A neighbouring regional destination toward Haryana.",
                  },
                ].map((item) => (
                  <div
                    key={item.place}
                    className="flex items-start gap-4 border-b border-[#E6E2D8] pb-5"
                  >
                    <MapPin
                      size={19}
                      className="mt-1 shrink-0 text-[#B89552]"
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className="font-semibold">{item.place}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-6 text-gray-500">
                Distances and journey times depend on the selected route and
                current road conditions. Check a current navigation service
                before travelling.
              </p>
            </div>
          </div>
        </section>

        {/* AIRPORT CONNECTIVITY */}
        <section className="bg-[#103F40] text-white">
          <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-20 lg:px-16">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B]">
                Regional Aviation
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Airport Connectivity
              </h2>

              <p className="mt-6 leading-8 text-white/75">
                Noida International Airport at Jewar is an important
                aviation development in western Uttar Pradesh. Its relevance
                for a journey from Jattari depends on current airport
                operations, road access and your flight details.
              </p>

              <p className="mt-5 leading-8 text-white/75">
                Before travelling, verify flight availability, terminal
                information and the recommended route using official airport
                information.
              </p>

              <a
                href="https://www.niairport.in/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#D9B783] px-6 py-3.5 text-sm font-semibold text-[#103F40] transition hover:bg-white"
              >
                Visit Airport Website
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="relative min-h-[320px] md:min-h-[520px]">
              <Image
                src="/images/hub-plane.jpg"
                alt="Illustrative aviation and airport scene"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092F31]/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* TRAVEL TIPS */}
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Before You Travel
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Plan your journey with confidence
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Transport schedules and travel conditions can change.
                Confirming details in advance can help avoid unnecessary
                delays.
              </p>
            </div>

            <div className="divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
              {[
                {
                  number: "01",
                  title: "Check current timings",
                  text: "Confirm bus, train and flight schedules using official sources before leaving.",
                },
                {
                  number: "02",
                  title: "Allow extra travel time",
                  text: "Plan for traffic, weather, transfers and possible delays, especially during busy periods.",
                },
                {
                  number: "03",
                  title: "Verify your route",
                  text: "Use a current navigation service and confirm the pickup or departure point.",
                },
                {
                  number: "04",
                  title: "Keep a backup option",
                  text: "For important appointments, consider an alternative route or transport option.",
                },
              ].map((tip) => (
                <article
                  key={tip.number}
                  className="grid gap-3 py-6 sm:grid-cols-[50px_1fr] sm:gap-5"
                >
                  <span className="font-serif text-2xl text-[#B89552]">
                    {tip.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold">{tip.title}</h3>
                    <p className="mt-2 leading-7 text-gray-600">
                      {tip.text}
                    </p>
                  </div>
                </article>
              ))}
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
                  Explore local neighbourhoods, markets and community
                  destinations through Jattari Luxe.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/explore-jattari/areas-neighbourhoods"
                  className="rounded-full bg-[#164E52] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245C59]"
                >
                  Areas & Neighbourhoods
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
