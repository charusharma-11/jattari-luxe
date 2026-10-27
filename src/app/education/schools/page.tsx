
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  GraduationCap,
  MapPin,
  School,
} from "lucide-react";

const schools = [
  {
    name: "Babuji Convent School",
    area: "Fazilpur Kalan, Jattari",
    address: "Village Fazilpur Kalan, Post Jattari, Aligarh, UP 202137",
    board: "CBSE",
    description:
      "Established in 2008, this senior secondary school is listed in the official CBSE SARAS directory. Families can check the school's website for its latest academic and admission information.",
    website: "https://babujiconventschool.com/",
  },
  {
    name: "Shree Ji Public School",
    area: "Chhajupur, Jattari",
    address:
      "Aligarh–Palwal Road, opposite Bijali Ghar, Chhajupur, Jattari, UP 202137",
    board: "CBSE",
    description:
      "A senior secondary school listed in the CBSE directory. Its official website provides school information and public disclosures.",
    website: "https://www.shreejipublicschool.com/",
  },
  {
    name: "S.D. International School",
    area: "Jattari–Khair",
    address: "Jattari–Khair, Aligarh, Uttar Pradesh 202137",
    board: "CBSE",
    description:
      "Listed in the CBSE SARAS directory at Jattari Khair. Contact the school to confirm current classes, facilities and admission availability.",
    website: "https://www.sdisjattari.com/",
  },
  {
    name: "R.P.S. Global School",
    area: "Harsukh Ki Nagaliya, Jattari",
    address: "Village Harsukh Ki Nagaliya, Post Jattari, Aligarh, UP 202137",
    board: "CBSE",
    description:
      "A senior secondary school listed in CBSE SARAS. Its official website describes its educational approach and learning environment.",
    website: "https://rpsglobalschool.com/",
  },
  {
    name: "Patel Smarak Inter College",
    area: "Police Chowki Gali, Jattari",
    address: "Police Chowki Gali, Jattari, Aligarh, UP 202137",
    board: "Uttar Pradesh State Board",
    description:
      "Established in 1961, this co-educational institution offers secondary and higher secondary education. Its website identifies Hindi as the medium of instruction.",
    website: "https://www.psicjattari.com/",
  },
  {
    name: "Jeevan Jyoti Public School",
    area: "Usarah–Rasulpur",
    address: "Usarah, Rasulpur, Jattari area, Aligarh, UP 202137",
    board: "CBSE listing reported",
    description:
      "A school listed in public education directories in the Usarah–Rasulpur area. Confirm the current affiliation, classes and campus details directly before admission.",
    website: "https://www.jeevanjyotischool.com/",
  },
  {
    name: "MD Janta Public School",
    area: "Jattari",
    address: "Jattari, Aligarh, Uttar Pradesh 202137",
    board: "Confirm with school",
    description:
      "A local school listed in the Jattari area. Contact the institution to confirm its current classes, recognition and facilities.",
  },
  {
    name: "Badami Devi School",
    area: "Jattari",
    address: "Sharma Colony / Neta Nagar area, Jattari, UP 202137",
    board: "Confirm with school",
    description:
      "A local primary-school option listed in Jattari. Verify the exact campus address, classes and admission requirements before visiting.",
  },
  {
    name: "G.L. Public School",
    area: "Jattari",
    address: "Jattari, Aligarh, Uttar Pradesh 202137",
    board: "Confirm with school",
    description:
      "A school listed in local directories for Jattari. Ask the school for its current recognition, class levels and contact information.",
  },
  {
    name: "U.P.S. Deep Nagar",
    area: "Deep Nagar, Jattari",
    address: "Deep Nagar, Jattari, Aligarh, Uttar Pradesh 202137",
    board: "Government school listing",
    description:
      "A composite school listed in the Deep Nagar area, serving elementary-level education. Confirm current school details through local education authorities.",
  },
  {
    name: "Jaipur World School",
    area: "Rayka Market, Jattari",
    address:
      "Near Khair bus stand, Aligarh–Palwal Road, Jattari, UP 202137",
    board: "Confirm with school",
    description:
      "A local school listed around the Rayka Market and Khair bus stand area. Confirm the curriculum, classes and transport arrangements directly.",
  },
  {
    name: "B.L. Convent School",
    area: "Main Road, Jattari",
    address:
      "Opposite Radhika Vihar Colony, Main Road, Jattari, Aligarh, UP 202137",
    board: "Confirm current affiliation",
    description:
      "A school listed on Main Road in Jattari. Contact the institution to verify its current board, academic levels and campus facilities.",
  },
  {
    name: "DPS World School",
    area: "Aligarh–Palwal Road, Jattari area",
    address:
      "Aligarh–Palwal Road, Jattari area, Uttar Pradesh 202137",
    board: "CBSE listing reported",
    description:
      "A school listing in the Jattari–Khair region. Confirm the exact campus, current affiliation and official admissions contact before applying.",
  },
  {
    name: "Shri Gandhi Smarak Inter College",
    area: "Bajhera–Bharatpur vicinity",
    address: "Bajhera / Bharatpur area near Jattari, Aligarh district, UP",
    board: "Confirm with institution",
    description:
      "An inter-college option in the wider area around Jattari. It is included as a nearby option; confirm its exact location and academic offerings before visiting.",
  },
  {
    name: "S.R.G. Government Girls Inter College",
    area: "Jattari area",
    address: "Jattari area, Aligarh district, Uttar Pradesh",
    board: "Government school",
    description:
      "A girls' inter-college name appearing in local education-related records. Confirm the current official address, classes and admission process with the education department.",
  },
];

export default function SchoolsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#164E52]">
        {/* HERO: One background image only */}
        <section className="relative flex min-h-[540px] items-center bg-[#103F40] md:min-h-[620px]">
          <Image
            src="/images/education-school.jpg"
            alt="School campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092F31]/95 via-[#103F40]/80 to-[#103F40]/20" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12 lg:px-16">
            <Link
              href="/education"
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              Back to Education
            </Link>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B] md:text-sm">
              Jattari Luxe · School Directory
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Schools in
              <span className="mt-2 block font-serif italic text-[#E4C58B]">
                Jattari
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Explore schools, read short introductions, check available
              location information and visit official websites where available.
            </p>

            <a
              href="#directory"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-3.5 text-sm font-semibold text-[#103F40] transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Directory
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-12 lg:px-16 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B89552]">
              Find the Right School
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Explore 15 school listings for your search.
            </h2>
          </div>

          <div className="border-l-2 border-[#D9B783] pl-6 md:pl-9">
            <p className="leading-8 text-gray-600">
              This directory brings together schools in Jattari and selected
              nearby areas. Entries are not presented as an official ranking.
              Some details, especially for smaller institutions, require
              confirmation with the school.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Compare curriculum, location, class availability, transport and
              current admission requirements before making a decision.
            </p>
          </div>
        </section>

        {/* SCHOOL DIRECTORY: No individual school images */}
        <section
          id="directory"
          className="scroll-mt-24 bg-[#F3F4ED] px-6 py-20 md:px-12 lg:px-16 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                  School Listings
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Explore the directory
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                  Browse the entries below. Use the location and official
                  links to verify the school that suits your needs.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D9DFD4] bg-[#FFFDF8] px-4 py-2.5 text-sm">
                <School size={17} />
                {schools.length} listings
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {schools.map((school, index) => (
                <article
                  key={school.name}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E1E6DC] bg-[#FFFDF8] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52]">
                      <GraduationCap size={23} />
                    </div>
                    <span className="font-serif text-2xl text-[#B89552]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B89552]">
                    {school.area}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-snug">
                    {school.name}
                  </h3>

                  <span className="mt-3 w-fit rounded-full bg-[#E8EEE5] px-3 py-1.5 text-xs font-semibold text-[#164E52]">
                    {school.board}
                  </span>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                    {school.description}
                  </p>

                  <div className="mt-5 flex items-start gap-2 border-t border-[#E5E8E0] pt-4 text-sm leading-6 text-[#526B68]">
                    <MapPin
                      size={17}
                      className="mt-1 shrink-0 text-[#B89552]"
                    />
                    <span>{school.address}</span>
                  </div>
<div className="mt-5 flex flex-wrap gap-3">
  {school.website && (
    <a
      href={school.website}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#164E52] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#103F40]"
    >
      Official Site
      <ExternalLink size={14} />
    </a>
  )}
</div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm leading-6 text-gray-500">
              School details and affiliations for some local listings may
              require direct confirmation. Always verify information before
              visiting or applying.
            </p>
          </div>
        </section>

        {/* PARENT CHECKLIST */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16 lg:py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B89552]">
                For Parents
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                Before choosing a school
              </h2>
              <p className="mt-5 leading-8 text-gray-600">
                Confirm the essential details directly with the institution.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Verify the current board affiliation and recognition.",
                "Ask for the latest fees and additional charges.",
                "Confirm classes, subjects and admission dates.",
                "Check transport, campus safety and facilities.",
                "Request the exact document checklist from the school.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-[#E1E6DC] pb-5"
                >
                  <span className="font-serif text-xl text-[#B89552]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-7 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEXT PAGE */}
        <section className="px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-[26px] bg-[#103F40] p-8 text-white md:flex-row md:items-center md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4C58B]">
                Continue Exploring
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Looking for colleges?
              </h2>
              <p className="mt-3 leading-7 text-white/75">
                Explore higher education options in nearby areas.
              </p>
            </div>

            <Link
              href="/education/colleges"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#103F40] transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Colleges
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
