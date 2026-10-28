
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ContactButton from "../../../components/ContactButton";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
  Users,
  Laptop,
  Calculator,
  Languages,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

const coachingCentres = [
  {
    name: "CCA Coaching Centre",
    area: "Ajeet Nagar, Jattari",
    focus: "Academic tuition",
    description:
      "A local coaching option for students looking for school-level academic support.",
    icon: BookOpen,
  },
  {
    name: "Ram Charan Educare",
    area: "Jattari",
    focus: "Computer and skill-based learning",
    description:
      "An education centre associated with practical computer education and accounting-related skills.",
    icon: Laptop,
  },
  {
    name: "Chaudhary Coaching Centre",
    area: "Rewadian Mohalla, Jattari",
    focus: "Academic coaching",
    description:
      "A local coaching centre for students seeking subject guidance and academic support.",
    icon: GraduationCap,
  },
  {
    name: "Tirupati Coaching Center",
    area: "Jattari",
    focus: "Coaching and test practice",
    description:
      "A local centre with a digital learning presence associated with Tirupati Classes Jattari.",
    icon: Target,
  },
  {
    name: "The Diamond Academy",
    area: "Usarah Bypass, near Post Office",
    focus: "Academic learning",
    description:
      "A local education centre serving students in and around the Jattari area.",
    icon: Sparkles,
  },
  {
    name: "Lakshya Educare Academy",
    area: "Aligarh–Palwal Road, near Bharat Petrol Pump",
    focus: "Academic support",
    description:
      "An education centre listed on the Aligarh–Palwal Road in Jattari.",
    icon: Users,
  },
  {
    name: "KD & CCA Coaching Center",
    area: "Pisawa–Jattari Road",
    focus: "Coaching and tuition",
    description:
      "A locally listed education centre on the Pisawa–Jattari Road.",
    icon: BookOpen,
  },
  {
    name: "Ramkumar Super 30 Chemistry Classes",
    area: "Hetalpur, Main Road, Jattari",
    focus: "Chemistry",
    description:
      "A subject-focused option for students looking for Chemistry coaching.",
    icon: FlaskConical,
  },
  {
    name: "Attri Mathematics Classes (AMC)",
    area: "Behind Patel School, Jattari",
    focus: "Mathematics",
    description:
      "A local mathematics coaching option listed near Patel School.",
    icon: Calculator,
  },
  {
    name: "Sujit Singh Sagar",
    area: "Taharpur, Jattari",
    focus: "Subject tutoring",
    description:
      "A local tutoring option in the Taharpur–Jattari area. Confirm subjects and class levels directly.",
    icon: Languages,
  },
];

const learningAreas = [
  {
    title: "School tuition",
    description:
      "Find academic support for school subjects and strengthen your basics.",
    icon: BookOpen,
  },
  {
    title: "Competitive preparation",
    description:
      "Ask institutes about entrance exams, government exams and test series.",
    icon: Target,
  },
  {
    title: "Computer skills",
    description:
      "Explore computer education and practical, job-oriented learning options.",
    icon: Laptop,
  },
];

export default function CoachingCentresPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#164E52]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[490px] items-center overflow-hidden md:min-h-[590px]">
        <Image
          src="/images/coachingcenter.jpg"
          alt="Coaching institute classroom and learning environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#103F40]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#103F40]/95 via-[#103F40]/75 to-[#103F40]/25" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <Link
            href="/education"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#FFFDF8]/85 transition hover:text-[#D9B783]"
          >
            <ArrowLeft size={17} />
            Back to Education
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F3E5C8] backdrop-blur-sm">
              <Sparkles size={14} />
              Learning opportunities
            </span>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-7xl">
              Find the right place
              <span className="mt-2 block font-serif italic text-[#D9B783]">
                to learn and grow.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Explore coaching and tuition options in Jattari, from academic
              support to subject-focused learning and practical skills.
            </p>

            <a
              href="#coaching-directory"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#164E52] transition duration-300 hover:-translate-y-1 hover:bg-[#D9B783]"
            >
              Explore institutes
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-48 border-l border-t border-white/25 bg-[#FFFDF8]/10 p-6 text-white backdrop-blur-md md:block">
          <GraduationCap className="mb-3 text-[#D9B783]" size={30} />
          <p className="text-sm font-medium">Your learning journey</p>
          <p className="mt-1 text-xs text-white/70">
            Start with the right questions.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-16 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
            Education in Jattari
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            A little guidance can make a big difference.
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#D9B783]" />

          <p className="mt-6 leading-8 text-[#5C706D]">
            The right coaching centre depends on your class, subjects, goals and
            preferred teaching style. Use this directory as a starting point,
            then confirm the course details directly with the institute.
          </p>
        </div>

        <div className="relative rounded-[2rem] bg-[#E8EEE5] p-7 md:p-10">
          <div className="absolute right-8 top-8 text-[#B89552]/70">
            <Sparkles size={34} />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8A784F]">
            Before you enrol
          </p>

          <h3 className="mt-4 max-w-lg text-2xl font-semibold leading-snug md:text-3xl">
            Choose based on your needs, not just the name.
          </h3>

          <div className="mt-8 space-y-5">
            {[
              "Ask about the subjects and class levels offered.",
              "Confirm fees, batch timings and demo-class availability.",
              "Check the teaching approach and doubt-clearing support.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#A1844D]"
                  size={19}
                />
                <p className="text-sm leading-6 text-[#506763]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching directory */}
      <section
        id="coaching-directory"
        className="scroll-mt-24 bg-[#F3F4ED] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-6 border-b border-[#D5DDD1] pb-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
                Local institute directory
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Coaching centres to explore
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#63736D]">
                Browse local learning options and contact an institute to
                confirm its current courses and admissions.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D5DDD1] bg-white px-4 py-2 text-sm text-[#506763]">
              <MapPin size={16} className="text-[#A1844D]" />
              Jattari and nearby areas
            </span>
          </div>

          <div className="mt-5 divide-y divide-[#D5DDD1]">
            {coachingCentres.map((centre) => {
              const CentreIcon = centre.icon;

              return (
                <article
                  key={centre.name}
                  className="group grid gap-5 py-8 transition-all duration-300 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9B783]/50 bg-white text-[#A1844D] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#164E52] group-hover:text-white">
                    <CentreIcon size={25} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A1844D]">
                      {centre.focus}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-snug transition-colors group-hover:text-[#92733F] md:text-2xl">
                      {centre.name}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[#63736D]">
                      {centre.description}
                    </p>

                    <p className="mt-3 flex items-start gap-2 text-sm text-[#506763]">
                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-[#A1844D]"
                      />
                      {centre.area}
                    </p>
                  </div>

                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      centre.name + " " + centre.area
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-[#164E52]/20 px-5 py-3 text-sm font-semibold text-[#164E52] transition duration-300 hover:border-[#164E52] hover:bg-[#164E52] hover:text-white md:justify-self-end"
                  >
                    Find details
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>

          <p className="mt-8 rounded-2xl border border-[#D5DDD1] bg-white/70 p-5 text-sm leading-7 text-[#63736D]">
            <strong className="text-[#164E52]">Please note:</strong> This is a
            local discovery directory, not a verified ranking. Course
            availability, fees, timings and contact details may change. Confirm
            all details with the institute before visiting or enrolling.
          </p>
        </div>
      </section>

      {/* Learning areas */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
            Find your direction
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            What would you like to learn?
          </h2>
          <p className="mt-4 leading-7 text-[#63736D]">
            Start by identifying your learning goal, then ask the institute
            whether it offers the right course for you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {learningAreas.map((area, index) => {
            const AreaIcon = area.icon;

            return (
              <article
                key={area.title}
                className={`relative overflow-hidden border-t-2 border-[#D9B783] py-7 ${
                  index === 1 ? "md:mt-10" : ""
                }`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8EEE5] text-[#164E52]">
                  <AreaIcon size={25} strokeWidth={1.7} />
                </div>

                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 leading-7 text-[#63736D]">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-10 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#164E52] px-7 py-12 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-[#D9B783]/40" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B783]">
              Help grow the directory
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Know a coaching centre in Jattari?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/75">
              Help students discover local learning options by sharing accurate
              institute information.
            </p>

            <ContactButton
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFFDF8] px-6 py-3.5 text-sm font-semibold text-[#164E52] transition duration-300 hover:-translate-y-1 hover:bg-[#D9B783]"
            >
              Contact
              <ArrowUpRight size={17} />
            </ContactButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
