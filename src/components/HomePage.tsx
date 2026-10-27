
"use client";

import { useState } from "react";

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
    title: "Healthcare",
    subtitle: "Hospitals · Clinics · Pharmacies",
    icon: "✚",
    href: "/healthcare",
    className: "health",
    photos: [
      "healthcare-max.jpg",
      "healthcare-clinic.jpg",
    ],
    fallbackName: "healthcare-clinic.jpg",
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
  "hub-school-bottom.jpg",
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
      <style jsx global>{`
        @keyframes jl-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -5px; }
        }

        @keyframes jl-ring-glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(105, 215, 143, .35));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(105, 215, 143, .7));
          }
        }

        .jl-home {
          --cream: #fffdf7;
          --teal: #07564d;
          --gold: #b89552;
          --green: #85d69a;
          color: #164e52;
          background: var(--cream);
          overflow: hidden;
        }

        .jl-hero {
          position: relative;
          isolation: isolate;
          min-height: 650px;
          background:
            radial-gradient(ellipse at 66% 45%, rgba(229,237,219,.75), transparent 46%),
            linear-gradient(105deg, #fffdf7 0%, #faf8ef 58%, #f5f4e9 100%);
        }

        .jl-layout {
          width: 100%;
          max-width: 1800px;
          min-height: 650px;
          margin-inline: auto;
          padding: 24px 30px;
          display: grid;
          grid-template-columns: minmax(290px, 25%) minmax(0, 75%);
          align-items: center;
          gap: 8px;
        }

        .jl-copy {
          position: relative;
          z-index: 4;
          max-width: 440px;
          padding-bottom: 6px;
        }

        .jl-eyebrow {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .jl-eyebrow::after {
          content: "";
          width: 36px;
          height: 1px;
          background: var(--gold);
        }

        .jl-heading {
          margin-top: 26px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 4.2vw, 72px);
          font-weight: 700;
          letter-spacing: -2.5px;
          line-height: .98;
        }

        .jl-description {
          max-width: 380px;
          margin-top: 20px;
          color: #425b53;
          font-size: 15px;
          line-height: 1.65;
        }

        .jl-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .jl-button {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 999px;
          padding: 0 23px;
          font-size: 12px;
          font-weight: 750;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease;
        }

        .jl-button:hover { transform: translateY(-2px); }

        .jl-button-primary {
          color: white;
          background: var(--teal);
          box-shadow: 0 5px 14px rgba(7,86,77,.16);
        }

        .jl-button-secondary {
          color: var(--teal);
          background: rgba(255,255,255,.6);
          border: 1px solid #d9b783;
        }

        .jl-mini-links {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 5px;
          margin-top: 30px;
          padding-top: 16px;
          border-top: 1px solid #dfdccf;
        }

        .jl-mini-link {
          text-align: center;
          font-size: 9px;
          font-weight: 650;
          line-height: 1.35;
        }

        .jl-mini-icon {
          display: block;
          margin-bottom: 6px;
          color: var(--gold);
          font-size: 24px;
        }

        .jl-scene {
          position: relative;
          width: 100%;
          max-width: 1150px;
          height: 630px;
          margin-inline: auto;
          isolation: isolate;
        }

        .jl-hub-ring {
          position: absolute;
          z-index: 1;
          left: 54%;
          top: 50%;
          width: clamp(290px, 32vw, 390px);
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          border: 7px solid #d9b783;
          border-radius: 50%;
          background: rgba(255,255,255,.12);
          box-shadow:
            0 0 0 5px rgba(255,255,255,.95),
            0 0 0 9px #8bd9a0,
            0 0 0 13px rgba(255,255,255,.8),
            0 0 0 17px #d9b783,
            0 0 26px rgba(95,192,125,.38);
          animation: jl-ring-glow 4s ease-in-out infinite;
        }

        .jl-hub-photos {
          position: absolute;
          inset: 24px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: repeat(3, minmax(0, 1fr));
          gap: 4px;
          overflow: hidden;
          border: 4px solid white;
          border-radius: 50%;
          background: #e8eee5;
        }

        .jl-hub-photos > div {
          min-width: 0;
          min-height: 0;
          overflow: hidden;
        }

        .jl-logo-disc {
          position: absolute;
          z-index: 3;
          left: 50%;
          top: 50%;
          width: 43%;
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          border: 5px solid #d9b783;
          border-radius: 50%;
          background: rgba(255,253,240,.97);
          box-shadow: 0 5px 20px rgba(22,78,82,.2);
          text-align: center;
        }

        .jl-logo-letters {
          color: var(--gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 3vw, 48px);
          font-weight: 800;
          line-height: 1;
        }

        .jl-logo-name {
          margin-top: 6px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(12px, 1.25vw, 18px);
          font-weight: 800;
        }

        .jl-logo-tag {
          margin-top: 4px;
          color: var(--gold);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .jl-pipes {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .jl-card-grid {
          position: absolute;
          inset: 0;
          z-index: 4;
        }

        .jl-card-position {
          position: absolute;
          z-index: 4;
          width: clamp(190px, 23%, 265px);
          animation: jl-float 5s ease-in-out infinite;
        }

        .jl-card-position.explore {
          left: 8%;
          top: 2%;
          animation-delay: -.5s;
        }

        .jl-card-position.education {
          right: 4%;
          top: 2%;
          animation-delay: -1.5s;
        }

        .jl-card-position.business {
          left: 0;
          top: 36%;
          animation-delay: -2.5s;
        }

        .jl-card-position.estate {
          right: 0;
          top: 36%;
          animation-delay: -3.5s;
        }

        .jl-card-position.health {
          left: 8%;
          bottom: 1%;
          animation-delay: -4.5s;
        }

        .jl-card-position.events {
          right: 4%;
          bottom: 1%;
          animation-delay: -2s;
        }

        .jl-photo-strip {
          display: flex;
          height: 82px;
          gap: 3px;
          overflow: hidden;
          border: 2px solid white;
          border-radius: 14px;
          background: white;
          box-shadow: 0 4px 13px rgba(22,78,82,.13);
        }

        .jl-photo-strip > div {
          min-width: 0;
          flex: 1;
          overflow: hidden;
        }

        .jl-photo-strip img,
        .jl-hub-photos img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .jl-category {
          position: relative;
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 72px;
          margin-top: -8px;
          padding: 9px 10px;
          border: 2px solid white;
          border-radius: 18px;
          background: rgba(255,253,248,.98);
          box-shadow:
            0 8px 14px rgba(22,78,82,.12),
            0 0 14px rgba(113,220,151,.28);
          text-decoration: none;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .jl-category:hover {
          border-color: #d9b783;
          box-shadow: 0 10px 22px rgba(22,78,82,.18);
        }

        .jl-category-icon {
          display: flex;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #e8eee5;
          font-size: 25px;
        }

        .jl-category-copy { min-width: 0; flex: 1; }

        .jl-category-title {
          font-size: 13px;
          font-weight: 800;
          line-height: 1.3;
        }

        .jl-category-subtitle {
          margin-top: 4px;
          color: #52685e;
          font-size: 10px;
          line-height: 1.4;
        }

        .jl-arrow {
          display: flex;
          width: 27px;
          height: 27px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          background: var(--gold);
          font-size: 17px;
        }

        .jl-tagline {
          position: absolute;
          right: 3%;
          bottom: 0;
          color: #6b7b6e;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 2px;
          text-align: center;
        }

        .image-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e8eee5, #f6f1df);
        }

        @media (min-width: 768px) and (max-width: 1200px) {
          .jl-layout {
            grid-template-columns: minmax(245px, 29%) minmax(0, 71%);
            padding-inline: 16px;
            gap: 0;
          }

          .jl-heading { font-size: clamp(45px, 5vw, 60px); }
          .jl-scene { height: 610px; }

          .jl-hub-ring {
            left: 54%;
            width: clamp(270px, 34vw, 340px);
          }

          .jl-card-position { width: clamp(160px, 24%, 215px); }
          .jl-card-position.explore { left: 4%; }
          .jl-card-position.education { right: 1%; }
          .jl-card-position.health { left: 4%; }
          .jl-card-position.events { right: 1%; }

          .jl-photo-strip { height: 65px; }
          .jl-category { min-height: 64px; padding: 7px; gap: 6px; }
          .jl-category-icon { width: 33px; height: 33px; font-size: 20px; }
          .jl-category-title { font-size: 11px; }
          .jl-category-subtitle { font-size: 9px; }
          .jl-arrow { width: 23px; height: 23px; }
        }

        @media (max-width: 767px) {
          .jl-hero { min-height: auto; }

          .jl-layout {
            grid-template-columns: minmax(0, 1fr);
            padding: 28px 15px 34px;
            gap: 25px;
          }

          .jl-copy {
            width: 100%;
            max-width: 530px;
            margin-inline: auto;
          }

          .jl-heading { font-size: clamp(48px, 12vw, 68px); }

          .jl-scene {
            display: flex;
            height: auto;
            flex-direction: column;
            gap: 20px;
          }

          .jl-hub-ring {
            position: relative;
            top: auto;
            left: auto;
            width: min(76vw, 320px);
            flex-shrink: 0;
            margin: 10px auto 20px;
            transform: none;
          }

          .jl-hub-photos { inset: 20px; }
          .jl-pipes { display: none; }
          .jl-logo-letters { font-size: 34px; }
          .jl-logo-name { font-size: 14px; }

          .jl-card-grid {
            position: relative;
            inset: auto;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 12px;
          }

          .jl-card-position {
            position: relative;
            inset: auto !important;
            width: 100%;
            min-width: 0;
            animation: none;
          }

          .jl-photo-strip { height: clamp(55px, 16vw, 82px); }
          .jl-category { min-height: 68px; gap: 6px; padding: 7px; }
          .jl-category-icon { width: 32px; height: 32px; font-size: 20px; }
          .jl-category-title { font-size: 11px; }
          .jl-category-subtitle { font-size: 9px; }
          .jl-arrow { width: 23px; height: 23px; }

          .jl-tagline {
            position: relative;
            right: auto;
            bottom: auto;
            margin-top: 22px;
            line-height: 1.8;
          }
        }

        @media (max-width: 390px) {
          .jl-layout { padding-inline: 11px; }
          .jl-card-grid { gap: 15px 8px; }
          .jl-category { padding: 6px; gap: 5px; }
          .jl-category-icon { width: 27px; height: 27px; font-size: 18px; }
          .jl-category-title { font-size: 10px; }
          .jl-category-subtitle { font-size: 8px; }
          .jl-arrow { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .jl-card-position,
          .jl-hub-ring { animation: none !important; }
        }
      `}</style>

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
              Your complete guide to local businesses, education, healthcare,
              real estate, events and everything Jattari.
            </p>

            <div className="jl-actions">
              <a href="/explore-jattari" className="jl-button jl-button-primary">
                Explore Jattari <span>→</span>
              </a>
              <a
                href="/list-your-business"
                className="jl-button jl-button-secondary"
              >
                List Your Business
              </a>
            </div>

            <div className="jl-mini-links">
              {[
                ["✈", "Jewar Airport Connectivity"],
                ["⌂", "Growing Real Estate"],
                ["▤", "Local Businesses"],
                ["◆", "Education Hub"],
                ["♡", "Healthcare Facilities"],
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
                    d="M550 315 C490 220 410 145 310 80 M550 315 C635 220 730 145 850 80 M550 315 C445 315 340 315 205 315 M550 315 C665 315 760 315 910 315 M550 315 C480 405 415 485 330 565 M550 315 C625 405 705 485 830 565"
                    stroke="#8AD9A2"
                    strokeWidth="12"
                  />
                  <path
                    d="M550 315 C490 220 410 145 310 80 M550 315 C635 220 730 145 850 80 M550 315 C445 315 340 315 205 315 M550 315 C665 315 760 315 910 315 M550 315 C480 405 415 485 330 565 M550 315 C625 405 705 485 830 565"
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

                    <a href={item.href} className="jl-category">
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
                    </a>
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
