
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Building2,
  House,
  Compass,
  ShieldCheck,
  Sparkles,
  Landmark,
  Trees,
  MoveUpRight,
  CheckCircle2,
  ExternalLink,
  Send,
} from "lucide-react";

const developmentTypes = [
  {
    title: "Planned Communities",
    eyebrow: "Space to grow",
    description:
      "Explore planned residential environments and understand how layout, access and surrounding development shape everyday living.",
    image: "/images/hub-fields.jpg",
    icon: MapPin,
    href: "/real-estate/residential-plots",
  },
  {
    title: "Independent Homes",
    eyebrow: "A place of your own",
    description:
      "Discover home styles, neighbourhood settings and practical considerations for choosing an independent residence.",
    image: "/images/local-market.jpg",
    icon: House,
    href: "/real-estate/houses-villas",
  },
  {
    title: "Contemporary Residences",
    eyebrow: "Modern living",
    description:
      "Explore residential architecture, shared surroundings and the features that can make a property suitable for your lifestyle.",
    image: "/images/explore-railway.jpg",
    icon: Building2,
    href: "/real-estate/houses-villas",
  },
];

const projectReferences = [
  {
    name: "Anugrah Homes",
    eyebrow: "Residential development",
    description:
      "Explore Anugrah Homes and visit its official website for project-specific information and details.",
    image: "/images/anugrah-homes.jpg",
    url: "https://anugrahhomes.com/",
  },
  {
    name: "Skyline Aero Homes",
    eyebrow: "Residential community",
    description:
      "Discover Skyline Aero Homes and review project information through its official website.",
    image: "/images/skyline aero homes.jpg",
    url: "https://skylineaerohomes.com/",
  },
];

const additionalProjects = [
  {
    name: "Dreams N Realtors",
    description:
      "Interested in Dreams N Realtors? Send an enquiry through Jattari Luxe to request further information.",
    category: "Property Enquiry",
  },
  {
    name: "Jewar Lands",
    description:
      "Want to know more about Jewar Lands? Submit your enquiry through our website for further details.",
    category: "Land & Property",
  },
  {
    name: "Shiva Associates",
    description:
      "Explore Shiva Associates and contact us through the enquiry form to request project information.",
    category: "Real Estate",
  },
];

const evaluationPoints = [
  {
    title: "Location and connectivity",
    description:
      "Understand road access, nearby facilities, everyday travel requirements and the surrounding neighbourhood.",
    icon: Compass,
  },
  {
    title: "Documents and approvals",
    description:
      "Verify ownership, applicable approvals, land-use information and other required records with the relevant authorities.",
    icon: ShieldCheck,
  },
  {
    title: "Layout and surroundings",
    description:
      "Review the development plan, access routes, available amenities and the immediate surroundings in person.",
    icon: Trees,
  },
];

const buyingChecklist = [
  "Request current project documents and ownership details.",
  "Confirm the exact location and visit the site where possible.",
  "Ask for a written breakdown of the total purchase cost.",
  "Verify applicable approvals with the relevant authorities.",
  "Review the agreement carefully before making a commitment.",
];

function EnquiryLink({
  project,
  className,
}: {
  project: string;
  className: string;
}) {
  return (
    <Link
      href={`/contact?project=${encodeURIComponent(project)}`}
      className={className}
    >
      Enquire Now
      <Send size={16} />
    </Link>
  );
}

export default function FeaturedProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#164E52]">
      <Navbar />

      {/* Hero: residential-home.jpg is used only here */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden md:min-h-[740px]">
        <Image
          src="/images/residential-home.jpg"
          alt="Residential neighbourhood with modern homes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#103F40]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082D2D]/75 via-[#103F40]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082D2D]/55 via-transparent to-black/5" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div>
            <Link
              href="/real-estate"
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#F1D49A]"
            >
              <ArrowLeft size={17} />
              Back to Real Estate
            </Link>

            <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <Sparkles size={15} className="text-[#F1D49A]" />
              Featured developments
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl">
              Discover places.
              <span className="mt-3 block font-serif italic text-[#F1D49A]">
                Imagine what&apos;s next.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/95 md:text-lg">
              Explore property categories and discover five featured real
              estate names. Compare the information available and send
              enquiries directly through Jattari Luxe.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#developments"
                className="inline-flex items-center gap-3 rounded-full bg-[#D9B783] px-6 py-3.5 text-sm font-semibold text-[#164E52] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FFFDF8]"
              >
                Explore developments
                <ArrowRight size={17} />
              </a>

              <a
                href="#project-stories"
                className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#164E52]"
              >
                Discover projects
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Text-only floating panel: no repeated image */}
          <div className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -left-12 top-16 h-28 w-28 rounded-full border border-white/40" />
            <div className="absolute -right-5 -top-7 h-20 w-20 rounded-full border border-[#F1D49A]/70" />

            <div className="relative rounded-[2rem] border border-white/35 bg-[#103F40]/65 p-7 shadow-2xl backdrop-blur-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10">
                <Building2 size={28} className="text-[#F1D49A]" />
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#F1D49A]">
                Jattari · Property Guide
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
                A closer look at living.
              </h2>

              <p className="mt-4 leading-7 text-white/80">
                Explore project names, review available information and send
                your property questions through one website.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <MapPin size={20} className="text-[#F1D49A]" />
                  <p className="mt-3 text-sm font-semibold text-white">
                    Location
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/75">
                    Check the project details
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <ShieldCheck size={20} className="text-[#F1D49A]" />
                  <p className="mt-3 text-sm font-semibold text-white">
                    Due diligence
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/75">
                    Verify before deciding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9B783]/80 to-transparent" />
      </section>

      {/* Editorial introduction: no image reused */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-16 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
            The bigger picture
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            More than a property. A place to belong.
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#D9B783]" />

          <p className="mt-6 leading-8 text-[#63736D]">
            Every development offers a different way to think about space,
            everyday living and future plans. Understanding the neighbourhood,
            property type and available documentation helps you make a more
            informed decision.
          </p>

          <Link
            href="/real-estate"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#164E52] transition hover:text-[#A1844D]"
          >
            Explore the real estate guide
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#164E52] p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-3 -top-3 h-32 w-32 rounded-full border border-[#D9B783]/30" />

          <div className="relative">
            <Landmark size={30} className="text-[#D9B783]" />

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#D9B783]">
              Look beyond the building
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              Location matters.
            </h3>

            <p className="mt-4 max-w-lg leading-8 text-white/75">
              Consider access, surrounding facilities, development layout and
              your long-term needs. Check important property information before
              making a decision.
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
              <span className="text-sm text-white/80">
                Explore thoughtfully
              </span>
              <Compass size={21} className="text-[#D9B783]" />
            </div>
          </div>
        </div>
      </section>

      {/* Development types: each image path is unique on this page */}
      <section
        id="developments"
        className="scroll-mt-24 bg-[#F3F4ED] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Explore development styles
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Different spaces. Different possibilities.
            </h2>

            <p className="mt-5 leading-7 text-[#63736D]">
              Start with the kind of property that suits your plans and explore
              its dedicated guide for more information.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {developmentTypes.map((development, index) => {
              const DevelopmentIcon = development.icon;

              return (
                <article
                  key={development.title}
                  className={`group relative overflow-hidden rounded-[1.8rem] border border-[#D9DFD4] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    index === 1 ? "lg:translate-y-10" : ""
                  }`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={development.image}
                      alt={development.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#082D2D]/80 via-[#103F40]/10 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md">
                      <DevelopmentIcon size={20} />
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F1D49A]">
                        {development.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold">
                        {development.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="leading-7 text-[#63736D]">
                      {development.description}
                    </p>

                    <Link
                      href={development.href}
                      className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#164E52] transition hover:text-[#A1844D]"
                    >
                      Explore this category
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#164E52]/20 transition group-hover:border-[#164E52] group-hover:bg-[#164E52] group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anugrah Homes and Skyline Aero Homes: preserve both images and links */}
      <section
        id="project-stories"
        className="scroll-mt-24 relative overflow-hidden bg-[#082D2D] py-20 text-white md:py-28"
      >
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 top-16 h-64 w-64 rounded-full border border-[#D9B783]/20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D9B783]/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B783]">
                A closer look
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                Residential developments around Jattari.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-white/75">
              Explore Anugrah Homes and Skyline Aero Homes, and visit their
              respective websites for project-specific information. You can
              also enquire about either project directly through Jattari Luxe.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {projectReferences.map((project, index) => (
              <article
                key={project.name}
                className={`group grid overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] backdrop-blur-sm transition duration-500 hover:border-[#D9B783]/60 md:grid-cols-2 ${
                  index === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[280px] overflow-hidden md:min-h-[350px]">
                  <Image
                    src={project.image}
                    alt={`${project.name} project`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082D2D]/40 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-[#082D2D]/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    {project.eyebrow}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9B783]">
                    Residential landscape
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
                    {project.name}
                  </h3>

                  <p className="mt-5 leading-8 text-white/75">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-3 rounded-full bg-[#D9B783] px-5 py-3 text-sm font-semibold text-[#164E52] transition hover:-translate-y-1 hover:bg-[#FFFDF8]"
                    >
                      Official Website
                      <ExternalLink size={16} />
                    </a>

                    <EnquiryLink
                      project={project.name}
                      className="inline-flex w-fit items-center gap-3 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164E52]"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/55">
            Confirm current project details, availability, specifications and
            applicable approvals with the relevant developer or authority.
          </p>
        </div>
      </section>

      {/* Additional projects: no images, phone numbers or email addresses */}
      <section
        id="additional-projects"
        className="scroll-mt-24 bg-[#FFFDF8] px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
                More property names
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                More options to explore.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-[#63736D]">
              You can enquire about Dreams N Realtors, Jewar Lands and Shiva
              Associates through Jattari Luxe. No direct phone numbers, email
              addresses or project images are displayed in this section.
            </p>
          </div>

          <div className="mt-12 divide-y divide-[#D9DFD4] border-y border-[#D9DFD4]">
            {additionalProjects.map((project, index) => (
              <article
                key={project.name}
                className="group grid gap-5 py-8 transition md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#164E52]/15 bg-[#F3F4ED] text-[#164E52] transition group-hover:bg-[#164E52] group-hover:text-white">
                  {index === 0 ? (
                    <Building2 size={24} />
                  ) : index === 1 ? (
                    <MapPin size={24} />
                  ) : (
                    <Landmark size={24} />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A1844D]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-[#63736D]">
                    {project.description}
                  </p>
                </div>

                <EnquiryLink
                  project={project.name}
                  className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#164E52] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#103F40] md:justify-self-end"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Property evaluation guide */}
      <section className="bg-[#E8EEE5] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Before making a decision
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Look beyond the first impression.
            </h2>

            <p className="mt-5 leading-8 text-[#63736D]">
              Photographs can help you discover a project, but a property
              decision requires careful checks of the site, paperwork and total
              cost. Take time to verify the details independently.
            </p>

            <Link
              href="/real-estate"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#164E52] transition hover:text-[#A1844D]"
            >
              Return to real estate overview
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="space-y-0">
            {evaluationPoints.map((point) => {
              const PointIcon = point.icon;

              return (
                <article
                  key={point.title}
                  className="group flex gap-5 border-b border-[#CCD5CA] py-6 first:border-t"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#164E52] transition duration-300 group-hover:bg-[#164E52] group-hover:text-white">
                    <PointIcon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{point.title}</h3>
                    <p className="mt-2 leading-7 text-[#63736D]">
                      {point.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Checklist and CTA */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <div className="rounded-[2rem] border border-[#D9DFD4] bg-white p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A1844D]">
              Your property checklist
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Be informed before you commit.
            </h2>

            <div className="mt-8 space-y-5">
              {buyingChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#A1844D]"
                  />
                  <p className="leading-7 text-[#63736D]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#164E52] p-7 text-white md:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-3 -top-3 h-32 w-32 rounded-full border border-[#D9B783]/30" />

            <div className="relative">
              <Sparkles size={30} className="text-[#D9B783]" />

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#D9B783]">
                Explore more
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Your next discovery could start here.
              </h2>

              <p className="mt-5 leading-7 text-white/75">
                Continue exploring residential options and property categories
                across the Jattari real-estate guide.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link
                href="/real-estate/residential-plots"
                className="inline-flex items-center gap-2 rounded-full bg-[#D9B783] px-5 py-3 text-sm font-semibold text-[#164E52] transition hover:bg-[#FFFDF8]"
              >
                Explore plots
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/real-estate/houses-villas"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164E52]"
              >
                Explore homes
                <MoveUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
