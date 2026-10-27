
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
  BookOpen,
  Landmark,
  CheckCircle2,
} from "lucide-react";

const colleges = [
  {
    name: "R.B.S. College of Management & Technology",
    area: "Jattari, Aligarh–Palwal Road",
    type: "Management & Higher Education",
    description:
      "A college listed in public education records at Jattari, near Bharat Petrol Pump on Aligarh–Palwal Road. Contact the institution to confirm current courses and admissions.",
    website: "http://rbscollegejattarialigarh.org",
    location: "Jattari",
  },
  {
    name: "Government Degree College, Khair",
    area: "Khair, Aligarh district",
    type: "Government Degree College",
    description:
      "A government college option in the wider Khair area. Check the current prospectus for available undergraduate programmes and eligibility.",
    location: "Khair, Aligarh",
  },
  {
    name: "D.S. College",
    area: "Achal Tal, Aligarh",
    type: "Degree College",
    description:
      "A degree college listed in the Aligarh district public directory. Confirm the current courses, fees and admission schedule through the college.",
    website: "http://dspgcollege.org/",
    location: "Achal Tal, Aligarh",
  },
  {
    name: "Aligarh Muslim University",
    area: "Civil Lines, Aligarh",
    type: "Central University",
    description:
      "A major university in Aligarh offering a broad range of academic programmes. Course requirements and entrance processes vary by programme.",
    website: "https://www.amu.ac.in/",
    location: "Civil Lines, Aligarh",
  },
  {
    name: "Mangalayatan University",
    area: "Beswan, Aligarh district",
    type: "University",
    description:
      "A university in the wider Aligarh region. Visit its official website to review programmes, eligibility, fees and admission details.",
    website: "http://mangalayatan.in/",
    location: "Beswan, Aligarh",
  },
  {
    name: "Shree Varshney College",
    area: "Aligarh",
    type: "Degree College",
    description:
      "Listed in the district's public college directory. Contact the institution for current undergraduate and postgraduate course information.",
    website: "http://www.svcaligarh.org/",
    location: "Aligarh",
  },
  {
    name: "Sri Tika Ram Kanya Mahavidyalaya",
    area: "Ramghat Road, Aligarh",
    type: "Women's College",
    description:
      "A women's college listed in the Aligarh district directory. Check the official site for available programmes and admission requirements.",
    website: "http://trkpgcollege.com/",
    location: "Ramghat Road, Aligarh",
  },
  {
    name: "Aligarh College of Education",
    area: "Kasimpur Tiraha, Aligarh",
    type: "Education & Teacher Training",
    description:
      "An education institution in Aligarh. Prospective students should check course recognition, eligibility and current admission details directly.",
    website: "https://aligarhcollege.in/",
    location: "Aligarh",
  },
  {
    name: "R.J. Mahavidyalaya",
    area: "Raipur, Gharbara, Aligarh district",
    type: "Affiliated College",
    description:
      "Listed in public college records for the wider Aligarh district. Confirm its current courses and exact campus details before visiting.",
    website: "https://rjmahavidyalaya.co.in/",
    location: "Raipur, Gharbara",
  },
  {
    name: "SDS Degree College",
    area: "Bhadesi Maafi, Aligarh",
    type: "Degree College",
    description:
      "A college listed in public institutional records in the Aligarh district. Check the college website for its current programme information.",
    website: "https://www.sdsdegreecollege.com/",
    location: "Bhadesi Maafi, Aligarh",
  },
  {
    name: "Riya International College",
    area: "Aligarh district",
    type: "Higher Education",
    description:
      "An institution appearing in public college records. Verify its present campus, affiliation and course availability before applying.",
    website: "https://www.riyainternationalcollege.com/",
    location: "Aligarh district",
  },
  {
    name: "Ch. Jeevan Singh Memorial Mahavidyalaya",
    area: "Sarol, Tappal region",
    type: "Mahavidyalaya",
    description:
      "A college name appearing in public examination and college records for the wider Tappal area. Confirm current academic offerings directly.",
    location: "Sarol, Tappal",
  },
  {
    name: "Vishwakarma Mahavidyalaya",
    area: "Tappal, Aligarh district",
    type: "Mahavidyalaya",
    description:
      "A nearby-area college listing. Verify the exact address, current affiliation and programmes before planning a visit.",
    location: "Tappal, Aligarh",
  },
  {
    name: "Satyawati Devi Mahavidyalaya",
    area: "Khandeha, Khair region",
    type: "Mahavidyalaya",
    description:
      "A college listed in the wider Khair region. Contact the institution or relevant university to verify available courses and admissions.",
    location: "Khandeha, Khair",
  },
  {
    name: "Maa Shakumbhari Devi Mahavidyalaya",
    area: "Gharbara, Aligarh district",
    type: "Mahavidyalaya",
    description:
      "A college appearing in public university-related records for the wider Aligarh area. Confirm the exact campus and current courses before applying.",
    location: "Gharbara, Aligarh",
  },
];

const checklist = [
  "Confirm the college's current affiliation and recognition.",
  "Check the course, eligibility and entrance examination requirements.",
  "Ask for the latest fee structure and scholarship options.",
  "Confirm the admission deadline and required documents.",
  "Check transport options and the exact campus location.",
];

export default function CollegesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#164E52]">
        {/* HERO: One college background image */}
        <section className="relative flex min-h-[540px] items-center bg-[#103F40] md:min-h-[620px]">
          <Image
            src="/images/collageimage.jpg"
            alt="College campus background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092F31]/95 via-[#103F40]/80 to-[#103F40]/25" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12 lg:px-16">
            <Link
              href="/education"
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              Back to Education
            </Link>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B] md:text-sm">
              Jattari Luxe · College Directory
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Colleges Near
              <span className="mt-2 block font-serif italic text-[#E4C58B]">
                Jattari
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Explore higher education options in Jattari and the wider
              Aligarh region. Compare institution details and check official
              sources before applying.
            </p>

            <a
              href="#college-directory"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-3.5 text-sm font-semibold text-[#103F40] transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Colleges
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* INTRO: Editorial split layout */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-12 lg:px-16 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B89552]">
              Plan Your Next Step
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Find a college that fits your goals.
            </h2>
          </div>

          <div className="border-l-2 border-[#D9B783] pl-6 md:pl-9">
            <p className="leading-8 text-gray-600">
              This directory combines a Jattari institution with selected
              colleges and universities in nearby Aligarh and surrounding
              areas. The list is not an official ranking, and not every entry
              is located inside Jattari itself.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Course availability, recognition, fees and admission rules can
              change. Confirm these details with the institution before
              submitting an application.
            </p>
          </div>
        </section>

        {/* DIRECTORY: Numbered editorial rows, not cards */}
        <section
          id="college-directory"
          className="scroll-mt-24 bg-[#F3F4ED] px-6 py-20 md:px-12 lg:px-16 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 border-b border-[#D9DFD4] pb-8 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                  Explore Institutions
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  College directory
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                  Browse institutions by name, location and type. The order
                  below is for directory navigation, not a quality ranking.
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-[#526B68]">
                <Landmark size={20} />
                {colleges.length} listings
              </div>
            </div>

            <div className="mt-5">
              {colleges.map((college, index) => (
                <article
                  key={college.name}
                  className="group grid gap-4 border-b border-[#D9DFD4] py-7 transition-colors duration-300 hover:bg-white/60 md:grid-cols-[64px_minmax(0,1fr)_auto] md:items-start md:gap-7 md:px-4"
                >
                  <div className="flex items-center gap-3 md:block">
                    <span className="font-serif text-3xl text-[#B89552] md:text-4xl">
<GraduationCap className="h-6 w-6 text-[#B89552]" />                    </span>
                    <span className="h-px w-10 bg-[#D9B783] md:mt-4 md:block" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A784F]">
                      {college.area}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-snug transition-colors group-hover:text-[#92733F] md:text-2xl">
                      {college.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#526B68]">
                      {college.type}
                    </p>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                      {college.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#526B68]">
                      <BookOpen size={15} className="text-[#B89552]" />
                      <span>{college.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center md:justify-end">
                    {college.website ? (
                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#164E52]/25 px-4 py-2.5 text-xs font-semibold text-[#164E52] transition hover:bg-[#164E52] hover:text-white"
                      >
                        Official Website
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs text-[#7C8178]">
                        <Landmark size={15} />
                        Contact locally
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm leading-6 text-gray-500">
              The listings include nearby Aligarh-district institutions, not
              just colleges within Jattari. Some details and website links
              require direct confirmation. This is not an official ranking.
            </p>
          </div>
        </section>

        {/* ADMISSION CHECKLIST: Split layout */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16 lg:py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B89552]">
                Admission Guide
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                Before you apply
              </h2>
              <p className="mt-5 leading-8 text-gray-600">
                A few important checks can help you compare options and avoid
                last-minute admission issues.
              </p>
            </div>

            <div className="space-y-5">
              {checklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-[#E1E6DC] pb-5"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#B89552]"
                  />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B89552]">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 leading-7 text-gray-600">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEXT DESTINATION */}
        <section className="px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-[26px] bg-[#103F40] p-8 text-white md:flex-row md:items-center md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4C58B]">
                Continue Exploring
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Looking for coaching centres?
              </h2>
              <p className="mt-3 leading-7 text-white/75">
                Explore coaching and preparation options in the area.
              </p>
            </div>

            <Link
              href="/education/coaching-centres"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#D9B783] px-7 py-4 text-sm font-semibold text-[#103F40] transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Coaching
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
