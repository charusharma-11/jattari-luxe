
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const heritagePlaces = [
  {
    number: "01",
    name: "Andareshwar Mahadev Temple",
    hindi: "अंडारेश्वर महादेव मंदिर",
    description:
      "An important local religious landmark in Jattari. Local reporting describes the temple as an old Shiva shrine that attracts devotees for darshan and offerings, particularly on Mondays.",
    detail: "Shiva worship · Local religious heritage",
  },
  {
    number: "02",
    name: "Pataleshwar Mahadev Temple",
    hindi: "पातालेश्वर महादेव मंदिर",
    description:
      "Another Shiva temple associated with Jattari's local religious heritage. It forms part of the area's wider tradition of neighbourhood shrines and places of worship.",
    detail: "Temple traditions · Community faith",
  },
];

const cultureTopics = [
  {
    number: "01",
    title: "Temple Traditions",
    description:
      "Local temples are places of worship, prayer and community gathering. Visitors should respect the customs and instructions followed at each shrine.",
    symbol: "✧",
  },
  {
    number: "02",
    title: "Sawan & Monday Worship",
    description:
      "For Shiva devotees, the month of Sawan and Mondays can be important occasions for worship. Specific timings and activities vary by temple and year.",
    symbol: "ॐ",
  },
  {
    number: "03",
    title: "Festivals & Gatherings",
    description:
      "Religious occasions and seasonal celebrations can bring families and neighbours together through prayer, visits and shared community experiences.",
    symbol: "✳",
  },
  {
    number: "04",
    title: "Everyday Community Life",
    description:
      "Local markets, family gatherings and neighbourhood interactions are also part of the living culture of Jattari and its surrounding settlements.",
    symbol: "⌂",
  },
];

export default function HistoryCulturePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#164E52]">
        {/* HERO */}
        <section className="group relative flex min-h-[540px] items-center overflow-hidden bg-[#103F40] sm:min-h-[650px]">
          <img
            src="/images/Andareshwar Mahadev Temple Entrance.jpg"
            alt="Temple associated with the cultural heritage of Jattari"
            className="absolute inset-0 h-full w-full object-cover object-center animate-[heroZoom_18s_ease-in-out_infinite_alternate]"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#102F30]/95 via-[#103F40]/75 to-[#103F40]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102F30]/60 via-transparent to-black/10" />
          <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#D9B783]/15 blur-[100px]" />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12">
            <div className="max-w-4xl animate-[heroReveal_1s_ease-out_both]">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D9B783]" />
                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#E7C995] sm:text-sm">
                  Explore Jattari · History & Culture
                </p>
              </div>

              <h1 className="mt-7 text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-8xl">
                The Spirit
                <span className="mt-2 block font-normal italic text-[#E7C995]">
                  of Jattari.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
                Discover Jattari through its local temples, religious
                traditions, community gatherings and the everyday
                experiences that connect generations.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#heritage"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-bold text-[#103F40] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F0D8AE] hover:shadow-xl"
                >
                  Discover Local Heritage
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/explore-jattari"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#D9B783] hover:bg-white/15"
                >
                  Explore Jattari
                </a>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-3 border-t border-white/25 pt-5 sm:mt-16">
              <span className="text-lg text-[#D9B783]">✳</span>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-white/75 sm:text-xs">
                Local Heritage · Faith · Community
              </p>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                The Cultural Identity
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Heritage lives in places, people and traditions.
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#D9B783]" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#66736A]">
              <p>
                Jattari is a town in Aligarh district, Uttar Pradesh. Its
                local cultural life can be explored through places of
                worship, religious occasions, family traditions and
                community interactions.
              </p>

              <p>
                Temples are an important part of the religious landscape
                for many local residents. The customs followed at each
                place can differ, making respectful visits and conversations
                with local residents useful ways to understand the area.
              </p>

              <p>
                Culture is not limited to monuments or festivals. Everyday
                activities, local markets, shared meals and relationships
                between neighbours also help shape a town's identity.
              </p>
            </div>
          </div>
        </section>

        {/* TEMPLE HERITAGE */}
        <section
          id="heritage"
          className="bg-[#F3F3EC] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                Local Religious Heritage
              </p>

              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                Temples of Jattari
              </h2>

              <p className="mt-5 text-base leading-8 text-[#66736A]">
                Local temples offer a window into religious practice and
                community life. Here are two Shiva temples associated with
                Jattari. Check locally for current access, timings and
                festival arrangements before visiting.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {heritagePlaces.map((place) => (
                <article
                  key={place.number}
                  className="group rounded-2xl border border-[#E5E2D8] bg-[#FFFDF8] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[3px] text-[#A17C43]">
                      HERITAGE {place.number}
                    </span>
                    <span className="text-2xl text-[#C6A66D]">✧</span>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold leading-snug sm:text-3xl">
                    {place.name}
                  </h3>

                  <p className="mt-2 text-lg text-[#A17C43]">
                    {place.hindi}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#66736A]">
                    {place.description}
                  </p>

                  <div className="mt-7 border-t border-[#E8E2D8] pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#927B58]">
                      {place.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-[#7B8279]">
              Temple histories and religious beliefs may include oral
              traditions. Confirm specific stories and local practices
              with temple representatives or knowledgeable residents.
            </p>
          </div>
        </section>

        {/* ANDARESHWAR TEMPLE FEATURE */}
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-tl-[72px] rounded-br-[72px]">
              <img
                src="/images/Andareshwar Mahadev Temple at Golden Hour.jpg"
                alt="Temple architecture representing local religious heritage"
                className="h-[320px] w-full object-cover sm:h-[460px]"
                loading="lazy"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#103F40]/85 to-transparent p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#E7C995]">
                  A place of worship
                </p>
                <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Andareshwar Mahadev Temple
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                Andareshwar Mahadev
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                A local shrine with a place in community life.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#66736A]">
                Local news coverage describes Andareshwar Mahadev Temple
                in Jattari as an old religious site where devotees visit
                for Shiva darshan and offerings. Mondays are among the
                occasions associated with worship at the shrine.
              </p>

              <p className="mt-4 text-base leading-8 text-[#66736A]">
                Visitors can learn about the temple's traditions by
                observing local customs and asking temple representatives
                about visiting hours, worship arrangements and special
                occasions.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Andareshwar+Mahadev+Temple+Jattari"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#164E52] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#103F40]"
              >
                Find Temple on Maps
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* CULTURE AND TRADITIONS */}
        <section className="bg-[#F3F3EC] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
              Customs & Community
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              The traditions that bring people together.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#66736A]">
              Religious occasions, family customs and neighbourhood
              gatherings are useful starting points for understanding
              community life. Practices differ between households and
              communities.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cultureTopics.map((topic) => (
                <article
                  key={topic.number}
                  className="rounded-2xl border border-[#E5E2D8] bg-[#FFFDF8] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D9B783] bg-[#E8EEE5] text-2xl text-[#164E52]">
                    {topic.symbol}
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-[2px] text-[#A17C43]">
                    {topic.number}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#66736A]">
                    {topic.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SAWAN & RELIGIOUS OCCASIONS */}
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                Religious Calendar
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Sawan, Mondays and temple visits
              </h2>

              <p className="mt-5 text-base leading-8 text-[#66736A]">
                Sawan holds religious significance for many devotees of
                Lord Shiva. Across the region, some people visit Shiva
                temples, offer prayers and take part in worship during
                this period.
              </p>

              <p className="mt-4 text-base leading-8 text-[#66736A]">
                The dates of the Hindu lunar calendar vary each year.
                Temple timings, ceremonies and crowd levels may also
                change. Contact the temple or check local announcements
                before planning a visit.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E2D8] bg-[#F3F3EC] p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
                Visitor Etiquette
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                A respectful temple visit
              </h3>

              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#66736A]">
                <li className="flex gap-3">
                  <span className="font-bold text-[#A17C43]">01</span>
                  Follow the temple's dress and footwear guidance.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#A17C43]">02</span>
                  Ask before taking photographs or recording worship.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#A17C43]">03</span>
                  Respect queues, prayer areas and local instructions.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#A17C43]">04</span>
                  Confirm opening times and special arrangements in advance.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* LOCAL COMMUNITY IMAGE */}
        <section className="bg-[#103F40] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#D9B783]">
                Beyond the Temples
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Everyday places tell their own stories.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/75">
                Cultural identity also develops through local shopping
                areas, social visits, family occasions and interactions
                between neighbours. These ordinary experiences help
                connect the town's past with its present.
              </p>

              <p className="mt-4 text-base leading-8 text-white/75">
                Explore the local business directory to learn more about
                the businesses and services that form part of daily life
                in Jattari.
              </p>

              <a
                href="/local-businesses"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-bold text-[#103F40] transition duration-300 hover:-translate-y-1 hover:bg-[#E8D2AC]"
              >
                Explore Local Businesses
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/local-market.jpg"
                alt="Local market and everyday community activity"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A17C43]">
              Continue Exploring
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Discover more of Jattari.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#66736A]">
              Continue exploring the town's neighbourhoods, markets and
              local connections through the Jattari Luxe guide.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/explore-jattari"
                className="inline-flex items-center gap-2 rounded-full bg-[#164E52] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#103F40]"
              >
                Back to Explore Jattari
                <span aria-hidden="true">←</span>
              </a>

              <a
                href="/explore-jattari/areas-neighbourhoods"
                className="inline-flex items-center gap-2 rounded-full border border-[#164E52] px-7 py-4 text-sm font-semibold text-[#164E52] transition hover:-translate-y-1 hover:bg-[#E8EEE5]"
              >
                Areas & Neighbourhoods
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
