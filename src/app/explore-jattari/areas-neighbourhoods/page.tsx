
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const nearbyCities = [
  {
    number: "01",
    name: "Khair",
    region: "Uttar Pradesh",
    description:
      "A nearby town in Aligarh district that serves as a regional centre for everyday shopping, local services and travel.",
    map: "Khair Uttar Pradesh",
  },
  {
    number: "02",
    name: "Aligarh",
    region: "Uttar Pradesh",
    description:
      "The district's major urban centre, known for its educational institutions, markets, healthcare services and historic lock industry.",
    map: "Aligarh Uttar Pradesh",
  },
  {
    number: "03",
    name: "Palwal",
    region: "Haryana",
    description:
      "A city in Haryana connected to the wider regional road network and a useful reference point for journeys towards the Delhi NCR region.",
    map: "Palwal Haryana",
  },
  {
    number: "04",
    name: "Jewar",
    region: "Uttar Pradesh",
    description:
      "A town in Gautam Buddha Nagar district associated with the Noida International Airport and the growing Yamuna Expressway region.",
    map: "Jewar Uttar Pradesh",
  },
  {
    number: "05",
    name: "Greater Noida",
    region: "Uttar Pradesh",
    description:
      "A planned urban area with educational institutions, business districts, residential developments and major road connections.",
    map: "Greater Noida Uttar Pradesh",
  },
  {
    number: "06",
    name: "Mathura",
    region: "Uttar Pradesh",
    description:
      "A well-known pilgrimage city associated with Lord Krishna, temples and religious tourism in the Braj region.",
    map: "Mathura Uttar Pradesh",
  },
];

const localFeatures = [
  {
    number: "01",
    title: "Residential Areas",
    description:
      "Explore homes, residential streets and neighbourhood surroundings to understand local living options.",
  },
  {
    number: "02",
    title: "Markets & Essentials",
    description:
      "Discover everyday shopping, local shops and services that support residents and nearby communities.",
  },
  {
    number: "03",
    title: "Schools & Education",
    description:
      "Consider access to schools, coaching centres and other learning opportunities when exploring an area.",
  },
  {
    number: "04",
    title: "Healthcare",
    description:
      "Check the location and availability of medical facilities, clinics and pharmacies for daily needs.",
  },
  {
    number: "05",
    title: "Road Connectivity",
    description:
      "Jattari is situated on the Aligarh–Palwal road corridor, connecting it with surrounding towns and routes.",
  },
  {
    number: "06",
    title: "Culture & Community",
    description:
      "Religious places, local customs and community spaces contribute to the character of the town.",
  },
];

export default function AreasNeighbourhoodsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#164E52]">
        {/* HERO */}
        <section className="relative flex min-h-[570px] items-center overflow-hidden md:min-h-[660px]">
          <Image
            src="/images/Golden Hour Streets of Jattari.jpg"
            alt="Residential surroundings representing life in Jattari"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092F31]/90 via-[#103F40]/65 to-[#103F40]/15" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
            <div className="max-w-3xl animate-[heroReveal_1s_ease-out_both]">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B] md:text-sm">
                Discover Jattari · Local Guide
              </p>

              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
                Areas &
                <br />
                <span className="font-serif italic text-[#E4C58B]">
                  Neighbourhoods
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                Discover Jattari's residential surroundings, nearby
                cities, local facilities and its connection to the
                wider region of western Uttar Pradesh and Delhi NCR.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#nearby-cities"
                  className="rounded-full bg-[#D9B783] px-7 py-3.5 text-sm font-semibold text-[#103F40] transition hover:-translate-y-1 hover:bg-white"
                >
                  Explore Nearby Cities
                </a>

                <a
                  href="#jewar-airport"
                  className="rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164E52]"
                >
                  Discover Jewar Airport
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#B89552] via-[#E4C58B] to-transparent" />
        </section>

        {/* INTRO */}
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Life in Jattari
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                A local town with
                <br />
                <span className="font-serif italic text-[#B89552]">
                  regional connections
                </span>
              </h2>

              <div className="mt-7 h-1 w-20 rounded-full bg-[#D9B783]" />

              <p className="mt-7 leading-8 text-gray-600">
                Jattari is a town in Khair tehsil of Aligarh district,
                Uttar Pradesh. Its position on the Aligarh–Palwal road
                corridor makes nearby towns and regional destinations
                relevant for residents, commuters and visitors.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                From local markets and residential areas to larger
                urban centres and the Jewar airport region, this guide
                introduces places that may be useful when planning
                daily travel or exploring the area.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E6E2D8] bg-[#F3F4ED] p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B89552]">
                Regional Overview
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-snug md:text-4xl">
                Your starting point for exploring the region.
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Use the city links on this page to open map searches,
                review routes and plan your journey based on your
                destination.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jattari+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#164E52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#245C59]"
              >
                View Jattari on Maps ↗
              </a>
            </div>
          </div>
        </section>

        {/* NEARBY CITIES */}
        <section
          id="nearby-cities"
          className="scroll-mt-24 bg-[#F3F4ED] px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Explore the Region
              </p>

              <h2 className="text-3xl font-semibold md:text-5xl">
                Nearby Cities Around Jattari
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Get a quick introduction to towns and cities connected
                with the wider Jattari region. Select a place to explore
                its location and route on Google Maps.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nearbyCities.map((city) => (
                <article
                  key={city.number}
                  className="group flex flex-col rounded-2xl border border-[#E6E2D8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D9B783] hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl text-[#D9B783]">
                      {city.number}
                    </span>

                    <span className="rounded-full bg-[#F3F4ED] px-3 py-1.5 text-xs font-semibold text-[#55716A]">
                      {city.region}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {city.name}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-gray-600">
                    {city.description}
                  </p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city.map)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#164E52] transition hover:gap-3"
                  >
                    Explore on Maps
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-xs leading-6 text-gray-500">
              These are regional destinations, not a ranking by distance.
              Check the map for the current route, distance and travel time.
            </p>
          </div>
        </section>

        {/* JEWAR AIRPORT */}
        <section
          id="jewar-airport"
          className="scroll-mt-24 px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[#E8EEE5] md:min-h-[480px]">
                <Image
                  src="/images/hub-plane.jpg"
                  alt="Aircraft representing regional airport connectivity"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/70 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4C58B]">
                    Aviation & Connectivity
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                    Noida International Airport
                  </h3>
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                  Jewar · Gautam Buddha Nagar
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Jewar Airport
                  <br />
                  <span className="font-serif italic text-[#B89552]">
                    A regional gateway
                  </span>
                </h2>

                <div className="mt-7 h-1 w-20 rounded-full bg-[#D9B783]" />

                <p className="mt-7 leading-8 text-gray-600">
                  Noida International Airport is located in the Jewar
                  area of Gautam Buddha Nagar district, Uttar Pradesh.
                  It is planned to strengthen air connectivity for the
                  Delhi NCR region and western Uttar Pradesh.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  For people in and around Jattari, the airport is an
                  important regional infrastructure development to
                  keep in mind when considering travel connections,
                  logistics and the wider area's development.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="flex gap-4 rounded-xl border border-[#E6E2D8] p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8EEE5] text-xl">
                      ✈
                    </span>

                    <div>
                      <h3 className="font-semibold">
                        Passenger Connectivity
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        The airport is intended to serve the wider
                        Delhi NCR and western Uttar Pradesh region.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-[#E6E2D8] p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8EEE5] text-xl">
                      ↗
                    </span>

                    <div>
                      <h3 className="font-semibold">
                        Regional Development
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Airport and associated transport infrastructure
                        are intended to support regional mobility,
                        business and logistics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.niairport.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#164E52] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245C59]"
                  >
                    Official Airport Website ↗
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Noida+International+Airport+Jewar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#164E52]/30 px-6 py-3.5 text-sm font-semibold text-[#164E52] transition hover:bg-[#F3F4ED]"
                  >
                    View Airport on Maps ↗
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs leading-6 text-gray-500">
              Airport services, flight schedules and road access can
              change. Check the official airport website before travel.
              No exact Jattari-to-airport distance or journey time is
              stated here.
            </p>
          </div>
        </section>

        {/* LOCAL NEIGHBOURHOOD FEATURES */}
        <section className="bg-[#F3F4ED] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Everyday Living
              </p>

              <h2 className="text-3xl font-semibold md:text-5xl">
                What to Explore in Jattari
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Whether you live locally or are visiting, these
                neighbourhood features can help you understand the
                area's everyday facilities and community life.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {localFeatures.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-[#E6E2D8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D9B783] hover:shadow-lg"
                >
                  <span className="font-serif text-4xl text-[#D9B783]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RESIDENTIAL LIFE */}
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Homes & Living
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                Looking for a place to live?
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                When exploring a residential area, consider your daily
                travel, access to essential services, nearby shopping
                and the type of home that suits your needs.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Visit the real estate section of Jattari Luxe to explore
                property-related information and housing opportunities.
              </p>

              <Link
                href="/real-estate"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#164E52] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245C59]"
              >
                Explore Real Estate →
              </Link>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-2xl md:min-h-[460px]">
              <Image
                src="/images/residential-building.jpg"
                alt="Residential building and housing"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* MORE PAGES */}
        <section className="px-6 pb-20 md:px-12 md:pb-28">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#164E52] px-7 py-12 md:px-14 md:py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B]">
                Continue Exploring
              </p>

              <h2 className="mt-5 text-3xl font-semibold text-white md:text-5xl">
                Discover more with Jattari Luxe
              </h2>

              <p className="mt-5 leading-8 text-white/75">
                Explore the town's heritage, markets and transport
                connections through our local discovery guide.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/explore-jattari/history-culture"
                className="rounded-full bg-[#D9B783] px-6 py-3.5 text-sm font-semibold text-[#103F40] transition hover:bg-white"
              >
                History & Culture
              </Link>

              <Link
                href="/explore-jattari/markets-shopping"
                className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164E52]"
              >
                Markets & Shopping
              </Link>

              <Link
                href="/explore-jattari/transport-connectivity"
                className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164E52]"
              >
                Transport & Connectivity
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164E52]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
