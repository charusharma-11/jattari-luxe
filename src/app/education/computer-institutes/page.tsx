
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Laptop,
  Monitor,
  Code2,
  FileSpreadsheet,
  Database,
  Globe,
  ShieldCheck,
  Sparkles,
  BookOpen,
  MapPin,
  CheckCircle2,
  Terminal,
  BriefcaseBusiness,
} from "lucide-react";

const institutes = [
  {
    name: "Modern Computer Institute",
    area: "Jattari",
    focus: "Computer fundamentals",
    description:
      "Enquire about computer basics, practical sessions and available training batches.",
    icon: Monitor,
  },
  {
    name: "Ram Charan Educare",
    area: "Jattari",
    focus: "Computer and accounting skills",
    description:
      "Ask about computer education and accounting-related training options.",
    icon: FileSpreadsheet,
  },
  {
    name: "Local Computer Training Centres",
    area: "Jattari and nearby areas",
    focus: "Basic computer courses",
    description:
      "Explore local providers offering typing, internet basics and office productivity training.",
    icon: Laptop,
  },
  {
    name: "Accounting Training Providers",
    area: "Jattari and nearby areas",
    focus: "Tally and accounting software",
    description:
      "Enquire about bookkeeping, accounting software and GST-related training.",
    icon: Database,
  },
  {
    name: "Digital Skills Training Centres",
    area: "Jattari and nearby areas",
    focus: "Office and digital skills",
    description:
      "Look for training in documents, spreadsheets, presentations and everyday digital tools.",
    icon: Globe,
  },
  {
    name: "Programming Training Providers",
    area: "Jattari and nearby areas",
    focus: "Coding fundamentals",
    description:
      "Ask about beginner-friendly programming and web development classes.",
    icon: Code2,
  },
];

const courses = [
  {
    title: "Basic Computer & MS Office",
    description:
      "Learn computer fundamentals, document creation, spreadsheets, presentations and file management.",
    icon: Monitor,
    tags: ["Computer basics", "MS Office", "Spreadsheets"],
  },
  {
    title: "CCC & Digital Literacy",
    description:
      "Explore CCC exam preparation, digital literacy and essential computer concepts.",
    icon: BookOpen,
    tags: ["CCC preparation", "Internet basics", "Digital tools"],
  },
  {
    title: "Tally & Accounting",
    description:
      "Build an understanding of accounting software, bookkeeping and GST-related concepts.",
    icon: FileSpreadsheet,
    tags: ["Tally", "Accounting", "GST basics"],
  },
  {
    title: "Programming & Web Development",
    description:
      "Get started with coding, website fundamentals and practical software development concepts.",
    icon: Terminal,
    tags: ["Python", "Programming", "Web basics"],
  },
];

const checklist = [
  "Confirm the full syllabus and course duration.",
  "Ask about practical lab time and trainer experience.",
  "Check total fees, examination costs and certificate details.",
  "Request a demo class and verify the institute address.",
];

const learningAreas = [
  {
    title: "Computer fundamentals",
    description:
      "Build confidence with computers, office tools and everyday digital tasks.",
    icon: Laptop,
  },
  {
    title: "Accounting and office skills",
    description:
      "Explore spreadsheets, accounting software and workplace productivity tools.",
    icon: FileSpreadsheet,
  },
  {
    title: "Coding and technology",
    description:
      "Discover programming basics and learn how websites and applications work.",
    icon: Code2,
  },
];

const careerBenefits = [
  {
    title: "Learn by doing",
    description:
      "Look for courses that include regular hands-on practice.",
    icon: CheckCircle2,
  },
  {
    title: "Build useful skills",
    description:
      "Explore office tools, accounting software or programming.",
    icon: Code2,
  },
  {
    title: "Prepare for your next step",
    description:
      "Choose training that supports your education or career goals.",
    icon: Sparkles,
  },
];

export default function ComputerInstitutesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#164E52]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden md:min-h-[610px]">
        <Image
          src="/images/Modern Computer Institute Classroom.jpg"
          alt="Computer institute classroom with desktop computers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#103F40]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#103F40]/80 via-[#103F40]/45 to-[#103F40]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/45 via-transparent to-black/10" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#D9B783]"
          >
            <ArrowLeft size={17} />
            Back to Education
          </Link>

          <div className="mt-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <Laptop size={15} />
              Computer education
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl">
              Learn digital skills.
              <span className="mt-3 block font-serif italic text-[#F1D49A]">
                Build your future.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white md:text-lg">
              Explore computer learning options, discover useful courses and
              develop practical digital skills for education, work and everyday
              life.
            </p>

            <a
              href="#course-guide"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#164E52] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D9B783]"
            >
              Explore computer courses
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-7 right-7 hidden rounded-2xl border border-white/30 bg-[#103F40]/40 p-5 text-white backdrop-blur-md lg:block">
          <Code2 size={29} className="text-[#F1D49A]" />
          <p className="mt-3 font-semibold">Skills for tomorrow</p>
          <p className="mt-1 text-xs text-white/85">
            Learn. Practise. Progress.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-16 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
            Digital learning in Jattari
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            The right skills can open new doors.
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#D9B783]" />

          <p className="mt-6 leading-8 text-[#63736D]">
            Whether you are a student, job seeker or working professional,
            computer skills can help you study more effectively and prepare for
            new opportunities. Start with your goal and choose a course that
            offers enough practical learning.
          </p>

          <div className="mt-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52]">
              <ShieldCheck size={23} />
            </div>

            <div>
              <h3 className="font-semibold">Choose with confidence</h3>
              <p className="mt-2 text-sm leading-7 text-[#63736D]">
                Confirm course recognition, fees, facilities and certificate
                details directly with the training provider.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#164E52] p-8 text-white md:p-10">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border border-[#D9B783]/40" />

          <div className="relative">
            <Sparkles size={32} className="text-[#D9B783]" />

            <h3 className="mt-6 text-2xl font-semibold md:text-3xl">
              What do you want to learn?
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              Choose a learning direction first. Then compare course content,
              practical work and teaching support before enrolling.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Improve computer and office skills",
                "Learn accounting software",
                "Prepare for computer-based exams",
                "Start programming or web development",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#D9B783]"
                  />
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course guide */}
      <section
        id="course-guide"
        className="scroll-mt-24 bg-[#F3F4ED] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Explore learning paths
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Find a course that fits your goals.
            </h2>

            <p className="mt-5 leading-7 text-[#63736D]">
              Explore these course categories and confirm availability with
              your chosen training provider.
            </p>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {courses.map((course) => {
              const CourseIcon = course.icon;

              return (
                <article
                  key={course.title}
                  className="group border-t border-[#CCD5CA] pt-7 transition-colors duration-300 hover:border-[#B89552]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#164E52] transition duration-300 group-hover:bg-[#164E52] group-hover:text-white">
                      <CourseIcon size={25} strokeWidth={1.7} />
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="text-[#A1844D] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold md:text-2xl">
                    {course.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#63736D]">
                    {course.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#D5DDD1] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#506763]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local directory */}
      <section className="bg-[#FFFDF8] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            {/* Left column */}
            <aside className="space-y-8">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#164E52] p-8 text-white md:p-10 lg:sticky lg:top-28">
                <div className="absolute -right-12 -top-10 h-48 w-48 rounded-full border border-white/10" />
                <div className="absolute -right-3 top-0 h-32 w-32 rounded-full border border-[#D9B783]/35" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#D9B783]">
                    <Laptop size={29} />
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#D9B783]">
                    Find your institute
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                    Your next skill starts here.
                  </h2>

                  <p className="mt-5 leading-7 text-white/80">
                    Explore computer education options around Jattari and find
                    a course that matches your career goals.
                  </p>

                  <div className="my-8 h-px bg-white/20" />

                  <p className="text-sm font-semibold text-[#D9B783]">
                    Popular learning areas
                  </p>

                  <div className="mt-5 space-y-5">
                    {learningAreas.map((area) => {
                      const AreaIcon = area.icon;

                      return (
                        <div
                          key={area.title}
                          className="flex items-start gap-3"
                        >
                          <AreaIcon
                            size={20}
                            className="mt-0.5 shrink-0 text-[#D9B783]"
                          />
                          <div>
                            <p className="text-sm font-medium text-white">
                              {area.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-white/65">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href="#course-guide"
                    className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#FFFDF8] px-5 py-3 text-sm font-semibold text-[#164E52] transition hover:-translate-y-1 hover:bg-[#D9B783]"
                  >
                    Explore courses
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Added panel to fill lower-left space */}
              <div className="rounded-[1.5rem] border border-[#D9DFD4] bg-[#F3F4ED] p-6 md:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A1844D]">
                  Why learn computer skills?
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-snug">
                  Small steps. Practical skills. New opportunities.
                </h3>

                <div className="mt-6 space-y-5">
                  {careerBenefits.map((benefit) => {
                    const BenefitIcon = benefit.icon;

                    return (
                      <div
                        key={benefit.title}
                        className="flex items-start gap-3"
                      >
                        <div className="rounded-xl bg-white p-2 text-[#164E52]">
                          <BenefitIcon size={19} />
                        </div>

                        <div>
                          <p className="font-semibold">{benefit.title}</p>
                          <p className="mt-1 text-sm leading-6 text-[#63736D]">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-xl bg-white/80 p-4">
                  <div className="flex items-center gap-2 text-[#164E52]">
                    <BriefcaseBusiness size={19} />
                    <p className="text-sm font-semibold">
                      Think about your career goal
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#63736D]">
                    Choose a course that gives you practical experience for
                    the kind of work you want to do.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right column */}
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
                Local directory
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Computer institutes to explore
              </h2>

              <p className="mt-4 leading-7 text-[#63736D]">
                Browse local learning options and contact providers to confirm
                available courses, fees and timings.
              </p>

              <div className="mt-8 divide-y divide-[#D5DDD1] border-y border-[#D5DDD1]">
                {institutes.map((institute) => {
                  const InstituteIcon = institute.icon;

                  return (
                    <article
                      key={institute.name}
                      className="group flex gap-4 py-7 transition-all duration-300 hover:translate-x-1 md:gap-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D9B783]/50 bg-[#F3F4ED] text-[#A1844D] transition duration-300 group-hover:bg-[#164E52] group-hover:text-white">
                        <InstituteIcon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A1844D]">
                          {institute.focus}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold leading-snug md:text-xl">
                          {institute.name}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#63736D]">
                          {institute.description}
                        </p>

                        <p className="mt-3 flex items-start gap-2 text-xs text-[#63736D]">
                          <MapPin
                            size={15}
                            className="mt-0.5 shrink-0 text-[#A1844D]"
                          />
                          {institute.area}
                        </p>

                        <a
                          href={`https://www.google.com/search?q=${encodeURIComponent(
                            institute.name + " " + institute.area
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#164E52] transition hover:text-[#A1844D]"
                        >
                          Search institute details
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>

              <p className="mt-6 border-l-2 border-[#D9B783] pl-4 text-sm leading-7 text-[#63736D]">
                <strong className="text-[#164E52]">Directory note:</strong>{" "}
                These entries are starting points for discovery, not a verified
                list of currently operating institutes. Confirm names,
                addresses and courses before visiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission checklist */}
      <section className="bg-[#E8EEE5] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Before admission
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Ask the right questions.
            </h2>

            <p className="mt-4 leading-7 text-[#63736D]">
              A little research before admission can help you choose a suitable
              learning environment.
            </p>
          </div>

          <div className="space-y-5">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-[#A1844D]"
                />
                <p className="leading-7 text-[#506763]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#164E52] px-7 py-12 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute right-8 top-0 h-40 w-40 rounded-full border border-[#D9B783]/30" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B783]">
              Make learning accessible
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Know a computer institute in Jattari?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/75">
              Help students discover local computer education providers by
              sharing accurate institute and course information.
            </p>

            <Link
              href="/list-your-business"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#164E52] transition duration-300 hover:-translate-y-1 hover:bg-[#D9B783]"
            >
              List an institute
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
