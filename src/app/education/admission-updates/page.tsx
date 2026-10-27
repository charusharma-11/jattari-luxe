
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  School,
  BookOpen,
  Award,
  ClipboardCheck,
  BellRing,
  FileText,
  ExternalLink,
  Search,
  CheckCircle2,
  Clock3,
  Globe,
  Sparkles,
  Landmark,
} from "lucide-react";

const admissionCategories = [
  {
    title: "School Admissions",
    description:
      "Explore school admission announcements, eligibility requirements, documents and application procedures.",
    icon: School,
    tags: ["New admissions", "Eligibility", "Documents"],
  },
  {
    title: "College Admissions",
    description:
      "Find official college admission portals, course details, merit-list information and counselling notices.",
    icon: GraduationCap,
    tags: ["UG courses", "Merit lists", "Counselling"],
  },
  {
    title: "Entrance Examinations",
    description:
      "Check official notifications for entrance exams, application forms, admit cards and results.",
    icon: ClipboardCheck,
    tags: ["Exam notices", "Admit cards", "Results"],
  },
  {
    title: "Scholarships & Financial Aid",
    description:
      "Explore scholarship eligibility, application instructions, required documents and official portals.",
    icon: Award,
    tags: ["Scholarships", "Eligibility", "Financial aid"],
  },
];

const officialPortals = [
  {
    name: "National Scholarship Portal",
    category: "Scholarships",
    description:
      "Check centrally administered scholarship schemes and application information.",
    url: "https://scholarships.gov.in/",
    icon: Award,
  },
  {
    name: "Samarth eGov",
    category: "University admissions",
    description:
      "Access participating universities' admission portals and application services.",
    url: "https://samarth.edu.in/",
    icon: Landmark,
  },
  {
    name: "NTA Official Website",
    category: "Entrance examinations",
    description:
      "Check official examination notifications, information bulletins and related updates.",
    url: "https://nta.ac.in/",
    icon: ClipboardCheck,
  },
  {
    name: "Uttar Pradesh Scholarship Portal",
    category: "State scholarships",
    description:
      "Visit the UP scholarship system for scheme information and application services.",
    url: "https://scholarship.up.gov.in/",
    icon: FileText,
  },
];

const preparationItems = [
  "Keep your marksheets and certificates ready.",
  "Check eligibility criteria and age requirements.",
  "Prepare a valid email address and mobile number.",
  "Review application fees and required documents.",
  "Save the official application confirmation after submitting.",
];

const admissionStages = [
  {
    title: "Find an opportunity",
    description:
      "Identify the school, college, course or scholarship that matches your goals.",
    icon: Search,
  },
  {
    title: "Check official details",
    description:
      "Read eligibility rules, dates, fees and document requirements on the official portal.",
    icon: FileText,
  },
  {
    title: "Apply and track",
    description:
      "Submit your application through the official channel and check future notices.",
    icon: CheckCircle2,
  },
];

export default function AdmissionUpdatesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#164E52]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden md:min-h-[610px]">
        <Image
          src="/images/College Admission Notice Board Crowd.jpg"
          alt="Students preparing for education and admissions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Keep the background photograph visible */}
        <div className="absolute inset-0 bg-[#103F40]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#103F40]/80 via-[#103F40]/45 to-[#103F40]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#103F40]/40 via-transparent to-black/10" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#F1D49A]"
          >
            <ArrowLeft size={17} />
            Back to Education
          </Link>

          <div className="mt-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <BellRing size={15} />
              Admission information
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl">
              Your next chapter
              <span className="mt-3 block font-serif italic text-[#F1D49A]">
                starts with a step.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white md:text-lg">
              Explore admission resources, entrance examination information
              and scholarship portals to plan your next educational step.
            </p>

            <a
              href="#admission-categories"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#164E52] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D9B783]"
            >
              Explore admission resources
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-7 right-7 hidden rounded-2xl border border-white/30 bg-[#103F40]/40 p-5 text-white backdrop-blur-md lg:block">
          <GraduationCap size={30} className="text-[#F1D49A]" />
          <p className="mt-3 font-semibold">Plan your future</p>
          <p className="mt-1 text-xs text-white/85">
            Explore. Prepare. Apply.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-16 lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
            Education opportunities
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Stay prepared for your next opportunity.
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#D9B783]" />

          <p className="mt-6 leading-8 text-[#63736D]">
            Admission processes can differ by institution, course and academic
            year. Use this page to discover relevant official resources, then
            verify application dates and eligibility before submitting a form.
          </p>

          <div className="mt-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EEE5] text-[#164E52]">
              <ShieldCheckIcon />
            </div>

            <div>
              <h3 className="font-semibold">Trust official notifications</h3>
              <p className="mt-2 text-sm leading-7 text-[#63736D]">
                Always confirm important dates and instructions on the
                institution  official website or government portal.
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
              Before you apply
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              A little preparation can help you complete your application
              accurately and avoid missing important requirements.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Verify eligibility and application dates",
                "Keep scanned documents ready",
                "Review the application fee",
                "Save your application reference",
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

      {/* Admission categories */}
      <section
        id="admission-categories"
        className="scroll-mt-24 bg-[#F3F4ED] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Explore opportunities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              What are you looking for?
            </h2>

            <p className="mt-5 leading-7 text-[#63736D]">
              Choose the type of opportunity you need and check the relevant
              official notifications.
            </p>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {admissionCategories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <article
                  key={category.title}
                  className="group border-t border-[#CCD5CA] pt-7 transition-colors duration-300 hover:border-[#B89552]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#164E52] transition duration-300 group-hover:bg-[#164E52] group-hover:text-white">
                      <CategoryIcon size={25} strokeWidth={1.7} />
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="text-[#A1844D] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold md:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#63736D]">
                    {category.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
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

      {/* Official portals */}
      <section className="bg-[#FFFDF8] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            {/* Left panel */}
            <aside className="space-y-8">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#164E52] p-8 text-white md:p-10 lg:sticky lg:top-28">
                <div className="absolute -right-12 -top-10 h-48 w-48 rounded-full border border-white/10" />
                <div className="absolute -right-3 top-0 h-32 w-32 rounded-full border border-[#D9B783]/35" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#D9B783]">
                    <Globe size={29} />
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#D9B783]">
                    Official resources
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                    Start with the right source.
                  </h2>

                  <p className="mt-5 leading-7 text-white/80">
                    Official portals are the best starting point for current
                    notices, application forms and eligibility rules.
                  </p>

                  <div className="my-8 h-px bg-white/20" />

                  <p className="text-sm font-semibold text-[#D9B783]">
                    Remember to check
                  </p>

                  <div className="mt-5 space-y-5">
                    {[
                      {
                        icon: CalendarDays,
                        title: "Application dates",
                        text: "Confirm the opening date and deadline.",
                      },
                      {
                        icon: FileText,
                        title: "Required documents",
                        text: "Review the official document checklist.",
                      },
                      {
                        icon: ClipboardCheck,
                        title: "Eligibility criteria",
                        text: "Check course, age and qualification rules.",
                      },
                    ].map((item) => {
                      const ItemIcon = item.icon;

                      return (
                        <div key={item.title} className="flex gap-3">
                          <ItemIcon
                            size={20}
                            className="mt-0.5 shrink-0 text-[#D9B783]"
                          />
                          <div>
                            <p className="text-sm font-medium text-white">
                              {item.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-white/65">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="flex items-center gap-2 text-[#D9B783]">
                      <BellRing size={18} />
                      <span className="text-sm font-semibold">
                        Important reminder
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Do not rely on old screenshots or forwarded messages for
                      admission deadlines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Left lower panel */}
              <div className="rounded-[1.5rem] border border-[#D9DFD4] bg-[#F3F4ED] p-6 md:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A1844D]">
                  Application checklist
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-snug">
                  Get your documents ready.
                </h3>

                <div className="mt-6 space-y-5">
                  {preparationItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#A1844D]"
                      />
                      <p className="text-sm leading-6 text-[#506763]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right directory */}
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
                Useful admission links
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Official portals to explore
              </h2>

              <p className="mt-4 leading-7 text-[#63736D]">
                These government and education resources can help you locate
                official information. Availability and eligibility depend on
                the relevant scheme, institution and admission cycle.
              </p>

              <div className="mt-8 divide-y divide-[#D5DDD1] border-y border-[#D5DDD1]">
                {officialPortals.map((portal) => {
                  const PortalIcon = portal.icon;

                  return (
                    <article
                      key={portal.name}
                      className="group flex gap-4 py-7 transition-all duration-300 hover:translate-x-1 md:gap-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D9B783]/50 bg-[#F3F4ED] text-[#A1844D] transition duration-300 group-hover:bg-[#164E52] group-hover:text-white">
                        <PortalIcon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A1844D]">
                          {portal.category}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold leading-snug md:text-xl">
                          {portal.name}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#63736D]">
                          {portal.description}
                        </p>

                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#164E52] transition hover:text-[#A1844D]"
                        >
                          Visit official portal
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-[#D9DFD4] bg-[#F3F4ED] p-5">
                <p className="flex items-center gap-2 font-semibold">
                  <Clock3 size={18} className="text-[#A1844D]" />
                  Check dates before applying
                </p>
                <p className="mt-2 text-sm leading-7 text-[#63736D]">
                  This page does not claim that any particular admission is
                  currently open. Refer to the latest official notification for
                  application dates, fees and eligibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-[#E8EEE5] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Your admission journey
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              From research to application.
            </h2>

            <p className="mt-5 leading-7 text-[#63736D]">
              Follow a clear process to understand requirements and complete
              your application with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {admissionStages.map((stage) => {
              const StageIcon = stage.icon;

              return (
                <article
                  key={stage.title}
                  className="border-t-2 border-[#D9B783] pt-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#164E52]">
                    <StageIcon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {stage.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#63736D]">
                    {stage.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#164E52] px-7 py-12 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute right-8 top-0 h-40 w-40 rounded-full border border-[#D9B783]/30" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B783]">
              Education in Jattari
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Help students discover new opportunities.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/75">
              Know a school, college or education provider with an official
              admission notice? Help make useful information easier to discover.
            </p>

            <Link
              href="/list-your-business"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#164E52] transition duration-300 hover:-translate-y-1 hover:bg-[#D9B783]"
            >
              Share an education listing
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ShieldCheckIcon() {
  return <CheckCircle2 size={23} />;
}
