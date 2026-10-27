
"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sections = [
  {
    no: "01",
    title: "Latest Local News",
    subtitle: "What's happening around Jattari",
    description:
      "Discover local announcements, important updates, development news and stories that matter to residents.",
    href: "/events-news/latest-news",
    word: "THE NEWSROOM",
  },
  {
    no: "02",
    title: "Community Events",
    subtitle: "People, gatherings and local life",
    description:
      "Explore community programmes, school functions, cultural gatherings and activities bringing people together.",
    href: "/events-news/community-events",
    word: "TOGETHER",
  },
  {
    no: "03",
    title: "Festivals",
    subtitle: "Celebrations rooted in tradition",
    description:
      "A space for festival updates, seasonal celebrations, local traditions and upcoming community festivities.",
    href: "/events-news/festivals",
    word: "CELEBRATE",
  },
  {
    no: "04",
    title: "Jobs & Opportunities",
    subtitle: "Find your next opportunity",
    description:
      "Explore local job updates, internships, recruitment drives and opportunities for students and professionals.",
    href: "/events-news/jobs-opportunities",
    word: "YOUR NEXT STEP",
  },
];

export default function EventsNewsPage() {
  return (
    <>
      <Navbar />

      <main className="events-page">
        {/* EDITORIAL HERO */}
        <section className="events-hero">
          <div className="hero-copy">
            <span className="eyebrow">JATTARI JOURNAL · COMMUNITY EDITION</span>

            <h1>
              A town
              <br />
              with stories
              <br />
              <em>to tell.</em>
            </h1>

            <p>
              From local announcements to community celebrations, discover
              the moments, people and opportunities shaping life in Jattari.
            </p>

            <Link href="#discover" className="hero-link">
              Explore the journal <span>↘</span>
            </Link>

            <div className="hero-foot">
              <span>LOCAL STORIES. SHARED EXPERIENCES.</span>
              <span>JATTARI · UTTAR PRADESH</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle circle-one" />
            <div className="art-circle circle-two" />
            <div className="art-cross">✳</div>
            <div className="art-caption">
              <span>THE LOCAL CHRONICLE</span>
              <strong>Life in Jattari</strong>
              <span>NEWS · CULTURE · COMMUNITY</span>
            </div>
            <span className="art-side-text">EST. FOR THE COMMUNITY</span>
          </div>
        </section>

        {/* MOVING EDITORIAL STRIP */}
        <div className="news-ticker" aria-label="Topics covered">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                LOCAL NEWS <b>✳</b> COMMUNITY <b>✳</b> CULTURE <b>✳</b>
                OPPORTUNITIES <b>✳</b> JATTARI STORIES <b>✳</b>
              </span>
            ))}
          </div>
        </div>

        {/* INTRODUCTION */}
        <section className="journal-intro" id="discover">
          <div className="intro-label">
            <span>THE IDEA</span>
            <span>01 / OVERVIEW</span>
          </div>

          <h2>
            More than updates.
            <br />
            <em>A local point of view.</em>
          </h2>

          <div className="intro-bottom">
            <span className="intro-mark">JL.</span>
            <p>
              Jattari is more than a place on the map. It is a growing
              community shaped by its people, local businesses, education,
              celebrations and changing opportunities. This section brings
              those stories together in one place, helping residents discover
              what is happening and what they can take part in.
            </p>
          </div>
        </section>

        {/* CHAPTER NAVIGATION — NO CARDS */}
        <section className="chapters">
          <div className="chapter-heading">
            <span className="eyebrow">INSIDE THE JOURNAL</span>
            <h2>Choose your chapter.</h2>
            <p>Four ways to stay connected with your town.</p>
          </div>

          {sections.map((item) => (
            <Link href={item.href} className="chapter-row" key={item.no}>
              <span className="chapter-number">{item.no}</span>

              <div className="chapter-main">
                <span className="chapter-subtitle">{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="chapter-word">{item.word}</span>
              <span className="chapter-arrow">↗</span>
            </Link>
          ))}
        </section>

        {/* REAL ESTATE SPOTLIGHT */}
        <section className="property-section">
          <div className="property-heading">
            <span className="eyebrow">JATTARI & THE REGION · SPOTLIGHT</span>
            <h2>
              Places shaping
              <br />
              <em>tomorrow.</em>
            </h2>
            <p>
              Explore residential developments connected with the region.
              Visit the official project websites for current details,
              layouts, amenities and enquiries.
            </p>
          </div>

          <article className="property-feature anugrah">
            <div className="property-image">
              <img
                src="/images/anugrah-homes.jpg"
                alt="Anugrah Homes residential project"
                loading="lazy"
              />
              <span className="image-index">FEATURED PROJECT / 01</span>
            </div>

            <div className="property-copy">
              <span className="eyebrow">RESIDENTIAL DEVELOPMENT</span>
              <h3>Anugrah Homes</h3>
              <p>
                A residential plots project in the Jattari area, promoted
                around planned living and connectivity to the wider Jewar
                region.
              </p>
              <span className="property-location">
                JATTARI · ALIGARH–PALWAL ROAD
              </span>
              <a
                href="https://www.anugrahhomes.com/"
                target="_blank"
                rel="noreferrer"
                className="property-link"
              >
                Explore official website <span>↗</span>
              </a>
            </div>
          </article>

          <article className="property-feature skyline">
            <div className="property-image">
              <img
  src="/images/skyline aero homes.jpg"
  alt="Skyline Aero Homes residential development"
  loading="lazy"
/>
              <span className="image-index">FEATURED PROJECT / 02</span>
            </div>

            <div className="property-copy">
              <span className="eyebrow">RESIDENTIAL DEVELOPMENT</span>
              <h3>Skyline Aero Homes</h3>
              <p>
                A residential plots development near Jewar Airport and the
                Yamuna Expressway corridor. Explore the official website
                for project information and site details.
              </p>
              <span className="property-location">
                JEWAR REGION · JATTARI, UTTAR PRADESH
              </span>
              <a
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noreferrer"
                className="property-link"
              >
                Explore official website <span>↗</span>
              </a>
            </div>
          </article>

          <p className="property-note">
            Project details may change. Confirm approvals, documentation,
            availability and other claims directly with the respective
            developer before making a property decision.
          </p>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="journal-ending">
          <span className="eyebrow">YOUR TOWN, YOUR STORIES</span>
          <h2>
            Stay curious.
            <br />
            <em>Stay connected.</em>
          </h2>
          <p>
            Good things happen when a community stays informed.
            Start exploring the stories and opportunities around you.
          </p>
          <Link href="/events-news/latest-news" className="ending-link">
            Enter the journal <span>↗</span>
          </Link>
          <span className="ending-stamp">JATTARI / INDIA</span>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .events-page {
          --paper: #fffdf8;
          --cream: #fff5e1;
          --teal: #103f40;
          --teal-dark: #082f30;
          --gold: #d9b783;
          background: var(--paper);
          color: var(--teal);
          overflow: hidden;
        }

        .events-page * {
          box-sizing: border-box;
        }

        .events-page a {
          text-decoration: none;
        }

        .events-page .eyebrow {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .events-hero {
          min-height: 570px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          background: var(--teal-dark);
          color: var(--paper);
        }

        .hero-copy {
          padding: 85px 8% 28px 11%;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        .hero-copy h1,
        .journal-intro h2,
        .property-heading h2,
        .journal-ending h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          letter-spacing: -3px;
        }

        .hero-copy h1 {
          font-size: clamp(54px, 6.4vw, 88px);
          line-height: 0.98;
          margin: 35px 0 24px;
          animation: journalReveal 0.8s ease both;
        }

        .hero-copy h1 em,
        .journal-intro h2 em,
        .property-heading h2 em,
        .journal-ending h2 em {
          color: var(--gold);
          font-weight: 400;
        }

        .hero-copy > p {
          max-width: 430px;
          font-size: 14px;
          line-height: 1.9;
          color: #e0e9e4;
        }

        .hero-link,
        .ending-link {
          display: inline-flex;
          gap: 26px;
          align-items: center;
          padding: 15px 20px;
          margin-top: 16px;
          border-radius: 40px;
          background: var(--cream);
          color: var(--teal);
          font-size: 12px;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        .hero-link:hover,
        .ending-link:hover {
          transform: translateY(-4px);
        }

        .hero-foot {
          width: 100%;
          margin-top: auto;
          padding-top: 50px;
          display: flex;
          justify-content: space-between;
          gap: 14px;
          font-size: 8px;
          letter-spacing: 1.4px;
          color: #cbdad2;
        }

       .hero-art {
  position: relative;
  min-height: 570px;
  overflow: hidden;
  display: grid;
  place-items: center;
  background:
    linear-gradient(
      90deg,
      rgba(8, 47, 48, 0.25),
      rgba(8, 47, 48, 0.15)
    ),
    url("/images/events-crowd.jpg") center / cover no-repeat;
}

        .hero-art::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.25;
          background-image: repeating-linear-gradient(
            135deg,
            transparent 0,
            transparent 35px,
            #d9b783 36px,
            transparent 37px
          );
          mask-image: linear-gradient(to bottom, black, transparent 80%);
        }

        .art-circle {
          position: absolute;
          width: min(34vw, 360px);
          aspect-ratio: 1;
          border: 1px solid #d9b78388;
          border-radius: 50%;
          animation: journalRotate 32s linear infinite;
        }

        .circle-one {
          transform: translate(-8%, -5%);
        }

        .circle-two {
          width: min(26vw, 270px);
          border-style: dashed;
          animation-direction: reverse;
        }

        .art-cross {
          position: absolute;
          top: 20%;
          right: 18%;
          font-size: 75px;
          color: var(--gold);
          opacity: 0.8;
          animation: journalFloat 5s ease-in-out infinite;
        }

        .art-caption {
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .art-caption span {
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--gold);
        }

        .art-caption strong {
          font: 400 clamp(28px, 3vw, 44px) Georgia, serif;
          color: var(--paper);
        }

        .art-side-text {
          position: absolute;
          right: 20px;
          bottom: 35px;
          writing-mode: vertical-rl;
          color: #e6d3ad;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .news-ticker {
          background: var(--gold);
          color: var(--teal-dark);
          overflow: hidden;
          white-space: nowrap;
          padding: 14px 0;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: journalTicker 28s linear infinite;
        }

        .ticker-track span {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          padding-right: 35px;
        }

        .ticker-track b {
          margin: 0 22px;
        }

        .journal-intro {
          padding: 110px 10% 95px;
        }

        .intro-label {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #d9d7cd;
          padding-bottom: 17px;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: #997447;
        }

        .journal-intro h2,
        .property-heading h2,
        .journal-ending h2 {
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.04;
          margin: 40px 0;
        }

        .journal-intro h2 em,
        .property-heading h2 em {
          color: #9a7847;
        }

        .intro-bottom {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 30px;
          align-items: start;
          border-top: 1px solid #d9d7cd;
          padding-top: 26px;
        }

        .intro-mark {
          font: 400 65px Georgia, serif;
          color: var(--gold);
        }

        .intro-bottom p {
          max-width: 650px;
          font-size: 14px;
          line-height: 2;
          color: #586b65;
          margin: 0;
        }

        .chapters {
          padding: 85px 10% 100px;
          background: #f2eee4;
        }

        .chapter-heading {
          margin-bottom: 45px;
        }

        .chapter-heading h2 {
          font: 400 clamp(35px, 4.5vw, 54px) Georgia, serif;
          margin: 16px 0 10px;
        }

        .chapter-heading p {
          font-size: 13px;
          color: #65746d;
        }

        .chapter-row {
          display: grid;
          grid-template-columns: 65px minmax(0, 1fr) 155px 30px;
          gap: 20px;
          align-items: center;
          padding: 30px 0;
          border-top: 1px solid #d0d0c4;
          color: var(--teal);
          transition: padding 0.3s ease;
        }

        .chapter-row:last-child {
          border-bottom: 1px solid #d0d0c4;
        }

        .chapter-row:hover {
          padding-left: 12px;
          padding-right: 8px;
        }

        .chapter-number {
          align-self: start;
          color: #ad8a55;
          font: 400 22px Georgia, serif;
        }

        .chapter-subtitle {
          font-size: 10px;
          color: #7a8177;
        }

        .chapter-main h3 {
          font: 400 clamp(25px, 3vw, 39px) Georgia, serif;
          margin: 7px 0;
        }

        .chapter-main p {
          max-width: 520px;
          font-size: 12px;
          line-height: 1.8;
          color: #65746d;
          margin: 0;
        }

        .chapter-word {
          font-size: 9px;
          letter-spacing: 1.5px;
          color: #9a7847;
          text-align: right;
        }

        .chapter-arrow {
          font-size: 23px;
          transition: transform 0.3s ease;
        }

        .chapter-row:hover .chapter-arrow {
          transform: translate(4px, -4px);
        }

        .property-section {
          padding: 105px 10% 90px;
        }

        .property-heading {
          max-width: 650px;
          margin-bottom: 55px;
        }

        .property-heading h2 {
          margin: 25px 0;
        }

        .property-heading > p {
          max-width: 480px;
          font-size: 13px;
          line-height: 1.9;
          color: #64736b;
        }

        .property-feature {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          min-height: 340px;
          margin: 0 0 50px;
          background: var(--teal);
          color: var(--paper);
        }

        .property-feature.skyline {
          grid-template-columns: 0.85fr 1.15fr;
          background: #eee7d9;
          color: var(--teal);
        }

        .skyline .property-image {
          order: 2;
        }

        .property-image {
          min-height: 330px;
          position: relative;
          overflow: hidden;
          background: #d9d5c9;
        }

        .property-image img {
          width: 100%;
          height: 100%;
          min-height: 330px;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .property-feature:hover .property-image img {
          transform: scale(1.04);
        }

        .image-index {
          position: absolute;
          bottom: 15px;
          left: 15px;
          padding: 10px 12px;
          background: var(--cream);
          color: var(--teal);
          font-size: 8px;
          letter-spacing: 1.4px;
        }

        .property-copy {
          padding: 42px 35px;
          align-self: center;
        }

        .property-copy h3 {
          font: 400 clamp(30px, 3.2vw, 43px) Georgia, serif;
          margin: 18px 0;
        }

        .property-copy > p {
          font-size: 12px;
          line-height: 1.9;
          color: inherit;
          opacity: 0.8;
        }

        .property-location {
          display: block;
          margin-top: 25px;
          font-size: 8px;
          letter-spacing: 1.2px;
          opacity: 0.8;
        }

        .property-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid #b6b9a7;
          font-size: 11px;
          font-weight: 700;
          color: inherit;
        }

        .property-link span {
          font-size: 18px;
        }

        .property-note {
          font-size: 10px;
          line-height: 1.8;
          color: #788077;
          max-width: 700px;
        }

        .journal-ending {
          position: relative;
          padding: 95px 10%;
          background: var(--teal-dark);
          color: var(--paper);
          overflow: hidden;
        }

        .journal-ending::after {
          content: "J";
          position: absolute;
          right: 5%;
          bottom: -180px;
          font: 400 420px Georgia, serif;
          color: #ffffff08;
          pointer-events: none;
        }

        .journal-ending h2 {
          margin: 30px 0;
          position: relative;
          z-index: 1;
        }

        .journal-ending > p {
          max-width: 430px;
          font-size: 13px;
          line-height: 1.9;
          color: #d2e0d9;
        }

        .ending-stamp {
          display: block;
          margin-top: 70px;
          padding-top: 20px;
          border-top: 1px solid #ffffff30;
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--gold);
        }

        @keyframes journalReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes journalRotate {
          to {
            rotate: 360deg;
          }
        }

        @keyframes journalFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(12deg);
          }
        }

        @keyframes journalTicker {
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 800px) {
          .events-hero {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            min-height: 500px;
            padding: 65px 7% 25px;
          }

          .hero-art {
            min-height: 330px;
          }

          .art-circle {
            width: 250px;
          }

          .circle-two {
            width: 190px;
          }

          .journal-intro,
          .chapters,
          .property-section,
          .journal-ending {
            padding-left: 7%;
            padding-right: 7%;
          }

          .intro-bottom {
            grid-template-columns: 75px 1fr;
            gap: 20px;
          }

          .chapter-row {
            grid-template-columns: 35px minmax(0, 1fr) 25px;
            gap: 12px;
          }

          .chapter-word {
            display: none;
          }

          .property-feature,
          .property-feature.skyline {
            grid-template-columns: 1fr;
          }

          .skyline .property-image {
            order: 0;
          }

          .property-image,
          .property-image img {
            min-height: 260px;
          }
        }

        @media (max-width: 480px) {
          .hero-copy h1 {
            font-size: 54px;
          }

          .hero-foot {
            font-size: 7px;
          }

          .journal-intro {
            padding-top: 75px;
            padding-bottom: 70px;
          }

          .journal-intro h2,
          .property-heading h2,
          .journal-ending h2 {
            letter-spacing: -2px;
          }

          .intro-bottom {
            grid-template-columns: 1fr;
          }

          .intro-mark {
            font-size: 42px;
          }

          .chapter-row {
            padding: 24px 0;
          }

          .chapter-main p {
            font-size: 11px;
          }

          .property-copy {
            padding: 30px 22px;
          }

          .art-cross {
            font-size: 55px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .events-page *,
          .events-page *::before,
          .events-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
