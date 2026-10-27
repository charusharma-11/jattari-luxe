
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  School,
  Laptop,
  CalendarDays,
  Users,
  BookMarked,
  Lightbulb,
  ClipboardCheck,
  Building2,
  MapPin,
  ArrowRight,
} from "lucide-react";

const educationSections = [
  {
    number: "01",
    title: "Schools",
    eyebrow: "School Education",
    description:
      "Explore school education in Jattari, from foundational learning to secondary and senior secondary studies. Compare school information, academic boards and facilities before choosing a school.",
    highlights: [
      "Primary and secondary education",
      "CBSE and Uttar Pradesh State Board options",
      "School facilities and admission information",
    ],
    image: "/images/education-school.jpg",
    imageAlt: "School campus and learning environment",
    href: "/education/schools",
    icon: School,
    linkText: "Explore Schools",
  },
  {
    number: "02",
    title: "Colleges",
    eyebrow: "Higher Education",
    description:
      "Learn about higher education options in Jattari and nearby areas, including undergraduate courses, professional programmes and further-study pathways.",
    highlights: [
      "Undergraduate study options",
      "Professional and career-oriented courses",
      "Nearby colleges and universities",
    ],
    image: "/images/collageimage.jpg",
    imageAlt: "Educational campus environment",
    href: "/education/colleges",
    icon: GraduationCap,
    linkText: "Explore Colleges",
  },
  {
    number: "03",
    title: "Coaching Centres",
    eyebrow: "Exam Preparation",
    description:
      "Find information about academic support, competitive examinations and entrance-test preparation. Confirm course details, batches and fees directly with each institute.",
    highlights: [
      "School subject support",
      "Competitive and entrance exam preparation",
      "Course and batch information",
    ],
    image: "/images/coachingcenter.jpg",
    imageAlt: "Students preparing for examinations",
    href: "/education/coaching-centres",
    icon: BookOpen,
    linkText: "Explore Coaching",
  },
  {
    number: "04",
    title: "Computer Institutes",
    eyebrow: "Digital Skills",
    description:
      "Explore computer education and practical digital skills that can support further study and employment, from office applications to programming and technical training.",
    highlights: [
      "Basic computer literacy",
      "Software and programming skills",
      "Career-oriented digital learning",
    ],
    image: "/images/Modern Computer Institute Classroom.jpg",
    imageAlt: "Students learning computer and digital skills",
    href: "/education/computer-institutes",
    icon: Laptop,
    linkText: "Explore Institutes",
  },
  {
    number: "05",
    title: "Admission Updates",
    eyebrow: "Important Information",
    description:
      "Explore admission notices, application requirements, deadlines and official education announcements. Verify dates and eligibility through the relevant institution.",
    highlights: [
      "Application and registration dates",
      "Eligibility and required documents",
      "Official notices and announcements",
    ],
    image: "/images/admission.jpg",
    imageAlt: "Student reviewing admission documents",
    href: "/education/admission-updates",
    icon: CalendarDays,
    linkText: "View Admission Updates",
  },
];

const learningPath = [
  {
    step: "01",
    title: "Build the foundation",
    description:
      "Choose a suitable school and build strong academic fundamentals.",
    icon: BookMarked,
  },
  {
    step: "02",
    title: "Choose your next step",
    description:
      "Explore college programmes, vocational options and further study.",
    icon: GraduationCap,
  },
  {
    step: "03",
    title: "Develop practical skills",
    description:
      "Consider computer learning, communication and career-focused skills.",
    icon: Lightbulb,
  },
  {
    step: "04",
    title: "Plan applications",
    description:
      "Review eligibility, deadlines and official admission requirements.",
    icon: ClipboardCheck,
  },
];

const communityProjects = [
  {
    name: "Anugrah Homes",
    eyebrow: "Residential Living",
    description:
      "Explore Anugrah Homes as part of Jattari's residential and community landscape. Visit the real-estate section to discover the project and its available information.",
    image: "/images/anugrah-homes.jpg",
    imageAlt: "Anugrah Homes residential project",
  },
  {
    name: "Skyline Aero Homes",
    eyebrow: "Modern Homes",
    description:
      "Discover Skyline Aero Homes while exploring residential developments around Jattari. Find more project information through the Jattari Luxe real-estate directory.",
    image: "/images/skyline aero homes.jpg",
    imageAlt: "Skyline Aero Homes residential project",
  },
];

export default function EducationPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFFDF8] text-[#164E52]">
        {/* HERO */}
        <section className="relative flex min-h-[540px] items-center md:min-h-[660px]">
          <Image
            src="/images/bgeduction.jpg"
            alt="School campus and students arriving for classes"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#092F31]/95 via-[#103F40]/75 to-[#103F40]/15" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12 lg:px-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B] md:text-sm">
                Jattari Luxe · Learning & Opportunity
              </p>

              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
                Education in
                <br />
                <span className="font-serif italic text-[#E4C58B]">
                  Jattari
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                Your guide to schools, higher education, coaching, computer
                training and admission information in Jattari and surrounding
                areas.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#education-overview"
                  className="inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-7 py-3.5 text-sm font-semibold text-[#103F40] transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Explore Education
                  <ArrowUpRight size={18} />
                </a>

                <Link
                  href="/education/admission-updates"
                  className="inline-flex items-center gap-3 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164E52]"
                >
                  Admission Updates
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#B89552] via-[#E4C58B] to-transparent" />
        </section>

        {/* INTRODUCTION */}
        <section
          id="education-overview"
          className="scroll-mt-24 px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                A Complete Education Guide
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight md:text-5xl">
                Every stage of learning,
                <br />
                <span className="font-serif italic text-[#B89552]">
                  one place to explore
                </span>
              </h2>
            </div>

            <div className="border-l-2 border-[#D9B783] pl-6 md:pl-9">
              <p className="leading-8 text-gray-600">
                Education helps students develop knowledge, confidence and
                skills for future opportunities. This guide brings together
                key education categories for families and learners in Jattari
                and nearby areas.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Whether you are choosing a school, considering college,
                preparing for an examination or learning computer skills, open
                the relevant section below for more detailed information.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                Institution details, course availability, fees and admission
                dates should be confirmed directly with the relevant
                institution.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION AT A GLANCE */}
        <section className="bg-[#103F40] px-6 py-14 text-white md:px-12 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: School,
                title: "School Education",
                text: "Explore academic stages and school options.",
              },
              {
                icon: GraduationCap,
                title: "Higher Studies",
                text: "Plan the transition to college and further study.",
              },
              {
                icon: Users,
                title: "Academic Support",
                text: "Discover coaching and supplementary learning.",
              },
              {
                icon: Laptop,
                title: "Digital Learning",
                text: "Build computer knowledge and practical skills.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-l border-[#D9B783]/70 pl-5"
                >
                  <Icon
                    size={27}
                    className="text-[#E4C58B]"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CATEGORY OVERVIEWS */}
        <section className="bg-[#F3F4ED] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                  Explore the Sections
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                  Find the education information you need
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Each section has its own dedicated page. Select a category to
                open its details, listings and relevant resources.
              </p>
            </div>

            <div className="space-y-8">
              {educationSections.map((section, index) => {
                const Icon = section.icon;
                const imageOnLeft = index % 2 === 0;

                return (
                  <article
                    key={section.number}
                    className="grid overflow-hidden rounded-2xl bg-white shadow-[0_8px_35px_rgba(22,78,82,0.04)] md:grid-cols-2"
                  >
                    <div
                      className={`relative min-h-[280px] md:min-h-[390px] ${
                        imageOnLeft ? "" : "md:order-2"
                      }`}
                    >
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/45 to-transparent" />

                      <span className="absolute bottom-6 left-6 font-serif text-4xl text-white">
                        {section.number}
                      </span>
                    </div>

                    <div
                      className={`flex flex-col justify-center p-7 md:p-10 lg:p-12 ${
                        imageOnLeft ? "" : "md:order-1"
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9B783] bg-[#FFFDF8] text-[#A77E37]">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>

                      <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#B89552]">
                        {section.eyebrow}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                        {section.title}
                      </h3>

                      <p className="mt-5 leading-8 text-gray-600">
                        {section.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {section.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B89552]" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                       <Link
  href={section.href}
  className="inline-flex items-center gap-3 rounded-full bg-[#164E52] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#245C59]"
>
  {section.linkText}
  <ArrowUpRight size={17} aria-hidden="true" />
</Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* STUDENT LEARNING JOURNEY */}
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Student Resources
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Plan your learning journey
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-gray-600">
                Every student has different goals. These steps can help
                families and learners organise their education choices and
                prepare for the next stage.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {learningPath.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.step}
                    className="border-t-2 border-[#D9B783] pt-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl text-[#B89552]">
                        {item.step}
                      </span>

                      <Icon
                        size={25}
                        strokeWidth={1.5}
                        className="text-[#164E52]"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMMUNITY & LIVING — INDIRECT PROJECT PROMOTION */}
        <section className="bg-[#F3F4ED] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                  Community & Living
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                  Education is part of a growing community.
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Families exploring schools and educational opportunities may
                also want to learn about residential developments in the
                Jattari area. Discover these projects through Jattari Luxe.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {communityProjects.map((project, index) => (
                <article
                  key={project.name}
                  className="group overflow-hidden rounded-[26px] border border-[#E1E6DC] bg-[#FFFDF8] transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[280px] overflow-hidden md:h-[340px]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/65 via-transparent to-transparent" />

                    <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#E4C58B]">
                      {project.eyebrow}
                    </span>
                  </div>

                  <div className="p-7 md:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold md:text-3xl">
                          {project.name}
                        </h3>
                        <p className="mt-4 leading-7 text-gray-600">
                          {project.description}
                        </p>
                      </div>

                      <Building2
                        size={27}
                        className="shrink-0 text-[#B89552]"
                      />
                    </div>

                    <Link
                      href="/real-estate"
                      className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#164E52] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#103F40]"
                    >
                      Explore Real Estate
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-gray-500">
              <MapPin size={16} className="mt-1 shrink-0" />
              Visit the dedicated real-estate section to review project
              information and contact details. Availability and project
              details should be confirmed with the respective developer.
            </p>
          </div>
        </section>

        {/* PRACTICAL CHECKLIST */}
        <section className="px-6 py-20 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B89552]">
                Before You Apply
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                Keep your education plans organised
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Before selecting an institution or applying for a course,
                review the details that matter to your circumstances.
              </p>
            </div>

            <div className="divide-y divide-[#D8D8CD] border-y border-[#D8D8CD]">
              {[
                {
                  title: "Check eligibility",
                  text: "Review the required qualifications, subjects and minimum marks.",
                },
                {
                  title: "Prepare documents",
                  text: "Keep relevant marksheets, identity documents, photographs and certificates ready as required.",
                },
                {
                  title: "Confirm costs",
                  text: "Ask the institution about current fees, additional charges and available financial support.",
                },
                {
                  title: "Verify deadlines",
                  text: "Use official institution notices for the latest application dates and admission instructions.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-3 py-6 sm:grid-cols-[42px_1fr] sm:gap-5"
                >
                  <span className="font-serif text-xl text-[#B89552]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADMISSION CTA */}
        <section className="px-6 py-12 md:px-12 md:py-20">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#103F40] px-7 py-12 text-white md:px-14 md:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4C58B]">
              Stay Informed
            </p>

            <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                  Preparing for an admission?
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-white/75">
                  Check admission information, required documents and
                  official announcements before submitting an application.
                </p>
              </div>

              <Link
                href="/education/admission-updates"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#D9B783] px-7 py-3.5 text-sm font-semibold text-[#103F40] transition hover:bg-white"
              >
                View Admission Updates
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
