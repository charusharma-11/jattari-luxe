
"use client";

import "./events-news.css";
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

    </>
  );
}
