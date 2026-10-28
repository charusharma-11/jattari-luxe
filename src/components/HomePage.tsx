
"use client";

import { useState } from "react";
import Link from "next/link";
import ContactButton from "./ContactButton";

const categories = [
  {
    title: "Explore Jattari",
    subtitle: "Places · Culture · Living",
    icon: "⌖",
    href: "/explore-jattari",
    className: "explore",
    photos: [
      "explore-temple.jpg",
      "explore-railway.jpg",
    ],
    fallbackName: "explore-temple.jpg",
  },
  {
    title: "Education",
    subtitle: "Schools · Colleges · Institutes",
    icon: "◆",
    href: "/education",
    className: "education",
    photos: [
      "education-school.jpg",
      "- hub-school-bottom.jpg",
    ],
    fallbackName: "education-school.jpg",
  },
  {
    title: "Local Businesses",
    subtitle: "Shops · Services · Markets",
    icon: "▤",
    href: "/local-businesses",
    className: "business",
    photos: [
      "local-market.jpg",
      "explore-market.jpg",
    ],
    fallbackName: "local-market.jpg",
  },
  {
    title: "Real Estate",
    subtitle: "Properties · Plots · Projects",
    icon: "⌂",
    href: "/real-estate",
    className: "estate",
    photos: [
      "anugrah-homes.jpg",
      "residential-home.jpg",
      "residential-building.jpg",
      "hub-building-right.jpg",
    ],
    fallbackName: "residential-home.jpg",
  },
  {
    title: "Events & News",
    subtitle: "Updates · Events · Opportunities",
    icon: "▦",
    href: "/events-news",
    className: "events",
    photos: [
      "events-crowd.jpg",
      "events-festival.jpg",
      "events-news.jpg",
    ],
    fallbackName: "events-crowd.jpg",
  },
];

const centrePhotos = [
  "hub-plane.jpg",
  "hub-fields.jpg",
  "hub-homes-left.jpg",
  "hub-building-right.jpg",
  "- hub-school-bottom.jpg",
  "anugrah-homes.jpg",
];

function Photo({
  name,
  alt,
  className = "",
  fallbackName,
}: {
  name: string;
  alt: string;
  className?: string;
  fallbackName: string;
}) {
  const [src, setSrc] = useState(`/images/${name}`);
  const [fallbackTried, setFallbackTried] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`image-fallback ${className}`}
        role="img"
        aria-label={`${alt} unavailable`}
      />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (!fallbackTried && name !== fallbackName) {
          setFallbackTried(true);
          setSrc(`/images/${fallbackName}`);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

export default function HomePage() {
  return (
    <main className="jl-home">

      <section className="jl-hero">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-16 h-80 w-80 rounded-full bg-[#DCE9DD]/50 blur-3xl" />
          <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#E8D9B7]/35 blur-3xl" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(#A9BBA9 0.7px, transparent 0.7px)",
              backgroundSize: "15px 15px",
            }}
          />
        </div>

        <div className="jl-layout relative">
          <div className="jl-copy">
            <p className="jl-eyebrow">YOUR NEIGHBOURHOOD, CONNECTED</p>

            <h1 className="jl-heading">
              Explore
              <br />
              Jattari <span style={{ color: "#B89552" }}>Luxe</span>
            </h1>

            <p className="jl-description">
              Your complete guide to local businesses, education, real estate,
              events and everything Jattari.
            </p>

            <div className="jl-actions">
              <Link href="/explore-jattari" className="jl-button jl-button-primary">
                Explore Jattari <span>→</span>
              </Link>
              <ContactButton
                className="jl-button jl-button-secondary"
              >
                Contact
              </ContactButton>
            </div>

            <div className="jl-mini-links">
              {[
                ["✈", "Jewar Airport Connectivity"],
                ["⌂", "Growing Real Estate"],
                ["▤", "Local Businesses"],
                ["◆", "Education Hub"],
                ["▦", "Local Events"],
              ].map(([icon, label]) => (
                <div key={label} className="jl-mini-link">
                  <span className="jl-mini-icon">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 w-full">
            <div className="jl-scene">
              <svg
                className="jl-pipes"
                viewBox="0 0 1000 630"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path
                    d="M550 315 C490 220 410 145 310 80 M550 315 C635 220 730 145 850 80 M550 315 C445 315 340 315 205 315 M550 315 C665 315 760 315 910 315 M550 315 C625 405 705 485 830 565"
                    stroke="#8AD9A2"
                    strokeWidth="12"
                  />
                  <path
                    d="M550 315 C490 220 410 145 310 80 M550 315 C635 220 730 145 850 80 M550 315 C445 315 340 315 205 315 M550 315 C665 315 760 315 910 315 M550 315 C625 405 705 485 830 565"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                  />
                </g>
              </svg>

              <div className="jl-hub-ring">
                <div className="jl-hub-photos">
                  {centrePhotos.map((name, index) => (
                    <div key={`${name}-${index}`}>
                      <Photo
                        name={name}
                        alt="Jattari Luxe central photo"
                        fallbackName="hub-homes-left.jpg"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="jl-logo-disc">
                  <span className="jl-logo-letters">JL</span>
                  <span className="jl-logo-name">Jattari Luxe</span>
                  <span className="jl-logo-tag">ELEVATED LIVING</span>
                </div>
              </div>

              <div className="jl-card-grid">
                {categories.map((item) => (
                  <div
                    key={item.title}
                    className={`jl-card-position ${item.className}`}
                  >
                    <div className="jl-photo-strip">
                      {item.photos.map((name, index) => (
                        <div key={`${name}-${index}`}>
                          <Photo
                            name={name}
                            alt={`${item.title} photo`}
                            fallbackName={item.fallbackName}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <Link href={item.href} className="jl-category">
                      <span className="jl-category-icon">{item.icon}</span>
                      <span className="jl-category-copy">
                        <span className="jl-category-title block">
                          {item.title}
                        </span>
                        <span className="jl-category-subtitle block">
                          {item.subtitle}
                        </span>
                      </span>
                      <span className="jl-arrow">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <p className="jl-tagline">
              DISCOVER · CONNECT · GROW WITH JATTARI
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
