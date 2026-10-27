
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const categories = [
  {
    number: "01",
    title: "History & Culture",
    description:
      "Explore local identity, traditions, community celebrations and the cultural life of Jattari.",
    href: "/explore-jattari/history-culture",
    image: "/images/explore-temple.jpg",
    
  },
  {
    number: "02",
    title: "Areas & Neighbourhoods",
    description:
      "Learn about residential surroundings, local facilities and everyday neighbourhood life.",
    href: "/explore-jattari/areas-neighbourhoods",
    image: "/images/residential-home.jpg",
    symbol: "⌂",
  },
  {
    number: "03",
    title: "Markets & Shopping",
    description:
      "Discover shops, daily essentials and businesses serving local residents.",
    href: "/explore-jattari/markets-shopping",
    image: "/images/marketimage.jpg",
  },
  {
    number: "04",
    title: "Transport & Connectivity",
    description:
      "Explore regional connections and useful information for planning your journeys.",
    href: "/explore-jattari/transport-connectivity",
    image: "/images/hub-plane.jpg",
    symbol: "↗",
  },
];

const schools = [
  "Patel Smarak Inter College",
  "Natkhat Kanha School",
  "Shreeji Public School",
  "Babuji Convent School",
  "SD International School",
  "Shree Radhekrishna Public School",
  "Global Rock World School",
  "Jeevan Public School",
];

const nearbyPlaces = [
  {
    name: "Aligarh",
    description: "A district headquarters and regional urban centre.",
  },
  {
    name: "Khair",
    description: "The tehsil associated with Jattari.",
  },
  {
    name: "Palwal",
    description: "A regional city in neighbouring Haryana.",
  },
  {
    name: "Jewar",
    description: "A town in the wider surrounding region.",
  },
  {
    name: "Greater Noida",
    description: "A major urban centre in the wider region.",
  },
  {
    name: "Mathura & Agra",
    description: "Cities that can be explored for wider regional travel.",
  },
];

const facts = [
  { label: "State", value: "Uttar Pradesh" },
  { label: "District", value: "Aligarh" },
  { label: "Tehsil", value: "Khair" },
  { label: "PIN code", value: "202137" },
  { label: "Census population", value: "18,387 (2011)" },
];

const statistics = [
  { label: "Total population", value: "18,387" },
  { label: "Male population", value: "9,793" },
  { label: "Female population", value: "8,594" },
  { label: "Households", value: "3,057" },
];

export default function ExploreJattariPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#29443A]">
        {/* HERO */}
        <section className="relative flex min-h-[540px] items-center sm:min-h-[620px]">
          <img
            src="/images/hub-plane.jpg"
            alt="Regional landscape around Jattari"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#103F40]/95 via-[#103F40]/75 to-[#103F40]/20" />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#E4C99B]">
              Jattari · Aligarh · Uttar Pradesh
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Discover Jattari.
              <span className="mt-2 block font-normal italic text-[#E4C99B]">
                Know the place. Feel the connection.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              A detailed guide to Jattari&apos;s location, education,
              neighbourhoods, local markets and regional connections.
              Explore the town and learn more about the place people call home.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about-jattari"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D9B783] px-7 py-3 text-sm font-bold text-[#164E52] transition hover:bg-[#E8D2AC]"
              >
                Get to Know Jattari ↓
              </a>

              <a
                href="#explore-more"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the Guide
              </a>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="border-b border-[#E8E2D8] bg-white px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="border-l-2 border-[#D9B783] pl-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#927B58]">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#164E52] sm:text-base">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT JATTARI */}
        <section
          id="about-jattari"
          className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                About Jattari
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#164E52] sm:text-4xl lg:text-5xl">
                A town connected to its region and its people.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#66736A]">
                Jattari is a town in Khair Tehsil of Aligarh district,
                Uttar Pradesh, India. It is situated along the Aligarh–Palwal
                highway, connecting the surrounding towns and settlements
                across western Uttar Pradesh and neighbouring Haryana.
              </p>

              <p className="mt-4 text-base leading-8 text-[#66736A]">
                Its regional setting connects everyday movement, local
                commerce, education and community services. The town&apos;s
                character is shaped by its neighbourhoods, businesses,
                institutions and connections with nearby places.
              </p>

              <p className="mt-4 text-base leading-8 text-[#66736A]">
                Hindi is used in everyday communication. For current civic
                services, public facilities and local administration
                information, check relevant official sources.
              </p>

              <a
                href="#location"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#164E52] underline decoration-[#D9B783] underline-offset-4 hover:text-[#927B58]"
              >
                Explore the location ↓
              </a>
            </div>

            <div className="relative">
              <img
                src="/images/residential-building.jpg"
                alt="Buildings and residential surroundings"
                className="h-[300px] w-full rounded-tl-[72px] rounded-br-[72px] object-cover shadow-lg sm:h-[430px]"
                loading="lazy"
              />

              <div className="absolute -bottom-5 left-4 max-w-xs rounded-xl border border-[#E8E2D8] bg-white p-5 shadow-lg sm:left-6">
                <p className="text-xs font-bold uppercase tracking-[2px] text-[#927B58]">
                  Local perspective
                </p>
                <p className="mt-2 text-sm leading-6 text-[#164E52]">
                  Understand the town through its people, places and everyday
                  connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION AND GEOGRAPHY */}
        <section
          id="location"
          className="bg-[#F3F3EC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                Location & Geography
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#164E52] sm:text-4xl">
                Finding Jattari on the map
              </h2>

              <p className="mt-5 text-base leading-8 text-[#66736A]">
                Jattari is located in Aligarh district, Uttar Pradesh,
                along the Aligarh–Palwal highway. Its regional setting makes
                connections with nearby towns and destinations an important
                part of local travel.
              </p>

              <p className="mt-4 text-base leading-8 text-[#66736A]">
                Nearby destinations include Khair, Palwal, Jewar and other
                urban centres in the wider region. Travel times and route
                distances depend on the destination and current road conditions.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jattari%2C+Aligarh%2C+Uttar+Pradesh"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#164E52] px-6 py-3 text-sm font-semibold text-white hover:bg-[#103F40]"
              >
                View Jattari on Map ↗
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white p-3 shadow-sm">
              <iframe
                title="Map showing Jattari, Aligarh, Uttar Pradesh"
                src="https://maps.google.com/maps?q=Jattari%2C%20Aligarh%2C%20Uttar%20Pradesh&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                className="rounded-xl border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <p className="px-3 py-3 text-xs leading-5 text-[#66736A]">
                Map provided for general orientation. Confirm directions
                and current travel conditions before travelling.
              </p>
            </div>
          </div>
        </section>

        {/* DEMOGRAPHICS */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
              People & Demographics
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#164E52] sm:text-4xl">
              A snapshot from the 2011 Census
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#66736A]">
              These are historical census figures, not a current population
              estimate.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statistics.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#E8E2D8] bg-white p-6"
                >
                  <p className="text-sm text-[#66736A]">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-[#164E52]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-[#927B58]">Census 2011</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-[#E8EEE5] p-5 sm:p-6">
              <p className="text-sm leading-7 text-[#53675C]">
                The 2011 figures also report 11,795 literates and an
                effective literacy rate of approximately 75.7% among people
                aged seven and above. These figures should be read alongside
                their census year.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="bg-[#F3F3EC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                Education & Learning
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#164E52] sm:text-4xl">
                Learning opportunities in the town
              </h2>

              <p className="mt-5 text-base leading-8 text-[#66736A]">
                Education is an important consideration for students and
                families. Explore educational options in the area and check
                the latest information before making decisions about schools
                and admissions.
              </p>

              <p className="mt-4 text-base leading-8 text-[#66736A]">
                The list below is a starting point for local research, not
                a ranking. Verify contact information, affiliations,
                facilities and admissions directly with each institution.
              </p>

              <a
                href="/education"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#164E52] px-6 py-3 text-sm font-semibold text-white hover:bg-[#103F40]"
              >
                Explore Education Guide →
              </a>
            </div>

            <div className="rounded-2xl border border-[#E8E2D8] bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#164E52]">
                Schools to explore
              </h3>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {schools.map((school) => (
                  <li
                    key={school}
                    className="flex gap-3 rounded-lg bg-[#F8F8F2] p-3 text-sm leading-6 text-[#53675C]"
                  >
                    <span className="text-[#A17C43]">◆</span>
                    <span>{school}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs leading-5 text-[#7B8279]">
                Verify current details directly with each institution.
              </p>
            </div>
          </div>
        </section>

        {/* LOCAL ECONOMY AND COMMUNITY */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/local-market.jpg"
                alt="Local market and everyday commerce"
                className="h-[300px] w-full object-cover sm:h-[420px]"
                loading="lazy"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                Markets & Community Life
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#164E52] sm:text-4xl">
                Everyday life is part of a town&apos;s identity.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#66736A]">
                Local markets, neighbourhood shops, educational institutions
                and everyday services help connect residents with the
                essentials of daily life. Jattari Luxe brings these local
                resources together in a structured directory.
              </p>

              <p className="mt-4 text-base leading-8 text-[#66736A]">
                Explore the local business directory to find useful
                categories and discover businesses serving the community.
              </p>

              <a
                href="/local-businesses"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#164E52] underline decoration-[#D9B783] underline-offset-4"
              >
                Explore Local Businesses →
              </a>
            </div>
          </div>
        </section>

        {/* NEARBY PLACES */}
        <section className="bg-[#F3F3EC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
              Regional Connections
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#164E52] sm:text-4xl">
              Places around Jattari
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#66736A]">
              Jattari is part of a wider network of towns and cities.
              Explore these destinations to learn more about the surrounding
              region. This is a general guide, not a distance ranking.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nearbyPlaces.map((place) => (
                <article
                  key={place.name}
                  className="rounded-xl border border-[#E8E2D8] bg-[#FFFDF8] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-[#164E52]">
                    {place.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#66736A]">
                    {place.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECTIVITY */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1200px] rounded-2xl border border-[#E8E2D8] bg-white p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
              Transport & Connectivity
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[#164E52] sm:text-4xl">
              Understand your routes before you travel.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#66736A]">
              Jattari&apos;s location along the Aligarh–Palwal highway makes
              regional road connections an important part of travel. For
              current bus services, railway schedules, road closures and
              journey times, check official transport information and live
              navigation before travelling.
            </p>

            <a
              href="/explore-jattari/transport-connectivity"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#164E52] px-6 py-3 text-sm font-semibold text-white hover:bg-[#103F40]"
            >
              Explore Connectivity →
            </a>
          </div>
        </section>

        {/* RESIDENTIAL DISCOVERY */}
        <section className="bg-[#164E52] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#D9B783]">
                Exploring Places to Call Home
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Get to know an area before choosing where to live.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/75">
                Location, everyday services, regional access and personal
                priorities all matter when exploring residential options.
                Jattari Luxe brings local information and property discovery
                together so visitors can research before making their own
                decisions.
              </p>

              <a
                href="/real-estate"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D9B783] px-7 py-3.5 text-sm font-bold text-[#164E52] hover:bg-[#E8D2AC]"
              >
                Explore Residential Developments →
              </a>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/[0.06] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#D9B783]">
                Featured in Our Property Guide
              </p>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                Anugrah Homes
              </h3>

              <p className="mt-2 text-sm leading-7 text-white/75">
                Explore Anugrah Homes as part of your wider residential
                research and review available project information.
              </p>

              <div className="my-6 border-t border-white/15" />

              <h3 className="text-2xl font-semibold text-white">
                Skyline Aero Homes
              </h3>

              <p className="mt-2 text-sm leading-7 text-white/75">
                Discover Skyline Aero Homes in the local property directory
                and check project details before making a decision.
              </p>

              <a
                href="/real-estate"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#E4C99B] hover:text-white"
              >
                View the Real Estate Guide →
              </a>
            </div>
          </div>
        </section>

        {/* EXPLORE MORE */}
        <section
          id="explore-more"
          className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1200px]">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
              Continue Exploring
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#164E52] sm:text-4xl">
              Discover more of Jattari.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[#66736A]">
              Use these guides to explore local places, community life,
              shopping and regional travel information.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <a
                  key={category.title}
                  href={category.href}
                  className="group overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[#E8EEE5]">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#E8EEE5] to-[#D8E3D8]">
                        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D9B783] text-4xl text-[#164E52]">
                          {category.symbol}
                        </span>
                      </div>
                    )}

                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/90 text-lg text-[#164E52] transition group-hover:bg-[#D9B783]">
                      ↗
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-[2px] text-[#927B58]">
                      {category.number}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-[#164E52]">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#66736A]">
                      {category.description}
                    </p>

                    <span className="mt-5 inline-block text-sm font-bold text-[#927B58]">
                      Explore More →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
