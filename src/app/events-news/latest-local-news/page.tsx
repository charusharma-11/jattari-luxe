
"use client";

import "./latest-local-news.css";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const news = [
  {
    category: "CIVIC UPDATES",
    date: "07 AUG 2026",
    title: "Rainwater Waterlogging Reported in Jattari",
    desc: "A published report described waterlogging after heavy rainfall and a municipal inspection of affected areas.",
    image:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=700&q=80",
    source: "Live Hindustan",
    url: "https://www.livehindustan.com/uttar-pradesh/aligarh/story-continuous-rain-disrupts-life-in-jattari-municipal-chairperson-inspects-areas-201786044402687.amp.html",
  },
  {
    category: "PUBLIC LAND",
    date: "01 JUL 2026",
    title: "Action Reported Against Pond-Land Encroachment",
    desc: "Read about local administration and public-land related developments.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=80",
    source: "Regional News",
    url: "https://www.amarujala.com/uttar-pradesh/aligarh",
  },
  {
    category: "DEVELOPMENT",
    date: "20 AUG 2026",
    title: "Jattari Used-Water Management Project",
    desc: "An official tender covers used-water management infrastructure in Jattari.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=700&q=80",
    source: "UP eProcurement",
    url: "https://etender.up.nic.in/nicgep/app",
  },
];

const roadReport =
  "https://www.amarujala.com/uttar-pradesh/aligarh/widening-of-khair-jattari-road-will-provide-relief-from-traffic-jams-aligarh-news-c-2-1-ald1025-959364-2026-04-25";

export default function LatestLocalNewsPage() {
  return (
    <>
      <Navbar />

      <main className="newspaper">
        {/* HERO */}
        <header className="news-masthead">
          <span className="paper-overline">JATTARI LUXE PRESENTS</span>
          <h1>Latest Local News</h1>
          <p>NEWS · PEOPLE · DEVELOPMENT · COMMUNITY</p>
          <div className="paper-intro">
            Your town. Our stories. Stay informed about Jattari and the
            surrounding region.
          </div>
        </header>

        <div className="news-strip">
          <span>JATTARI · UTTAR PRADESH</span>
          <span>LOCAL NEWS • CIVIC UPDATES • DEVELOPMENT</span>
        </div>

        <section className="paper-layout">
          <div className="paper-main">
            {/* FEATURED NEWS */}
            <article className="lead-story">
              <div className="lead-image">
                <img
                  src="/images/roadimage.jpg"
                  alt="Road construction work in an Indian town"
                />
                <span className="image-tag">FEATURED REPORT</span>
              </div>

              <div className="lead-copy">
                <span className="story-category">
                  ROADS & CONNECTIVITY
                </span>
                <span className="story-date">25 APR 2026</span>
                <h2>Khair–Jattari Road Widening to Ease Traffic</h2>
                <p>
                  A published report covered road-widening work intended
                  to improve traffic movement along the Khair–Jattari route.
                </p>
                <a
                  href={roadReport}
                  target="_blank"
                  rel="noreferrer"
                  className="read-link"
                >
                  Read Full Report ↗
                </a>
                <small>Source: Amar Ujala</small>
              </div>
            </article>

            <div className="paper-divider">
              <span>THE LOCAL BRIEFING</span>
              <span>SELECTED REPORTS</span>
            </div>

            {/* NEWS COLUMNS */}
            <div className="news-columns">
              {news.map((item) => (
                <article className="news-column" key={item.title}>
                  <span className="story-category">{item.category}</span>
                  <span className="story-date">{item.date}</span>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Read Report ↗
                  </a>
                  <small>Source: {item.source}</small>
                </article>
              ))}
            </div>

            {/* MORE STORIES */}
            <section className="more-news">
              <div className="more-heading">
                <h2>More from the Region</h2>
                <span>LOCAL JOURNAL</span>
              </div>

              <div className="more-story">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=80"
                  alt="People at a community gathering"
                  loading="lazy"
                />
                <div>
                  <span className="story-category">COMMUNITY</span>
                  <h3>Stories, People and Everyday Life</h3>
                  <p>
                    Explore community activities and local stories as
                    verified updates become available.
                  </p>
                  <Link href="/events-news/community-events">
                    Explore Community Events ↗
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="paper-sidebar">
            <div className="sidebar-section">
              <span className="sidebar-kicker">JATTARI LUXE</span>
              <h3>Latest Updates</h3>

              {news.map((item) => (
                <a
                  className="update-row"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  key={item.title}
                >
                  <span>
                    {item.date.split(" ")[0]}
                    <small>{item.date.split(" ")[1]}</small>
                  </span>
                  <strong>{item.title}</strong>
                </a>
              ))}

              <a
                href="https://etender.up.nic.in/nicgep/app"
                target="_blank"
                rel="noreferrer"
              >
                Official Notices ↗
              </a>
            </div>

            <div className="sidebar-section">
              <span className="sidebar-kicker">BROWSE BY TOPIC</span>
              <h3>News Categories</h3>

              {[
                ["Development", "/events-news/latest-local-news"],
                ["Community", "/events-news/community-events"],
                ["Festivals", "/events-news/festivals"],
                ["Jobs & Careers", "/events-news/jobs-opportunities"],
              ].map(([name, href]) => (
                <Link className="category-row" href={href} key={name}>
                  <span>✳</span>
                  {name}
                  <span>↗</span>
                </Link>
              ))}
            </div>

            <div className="sidebar-project">
              <span className="sidebar-kicker">REGIONAL SPOTLIGHT</span>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
                alt="Modern residential property"
                loading="lazy"
              />
              <h3>Explore Local Real Estate</h3>
              <p>Discover residential projects in the region.</p>
              <a
                href="https://www.anugrahhomes.com/"
                target="_blank"
                rel="noreferrer"
              >
                Anugrah Homes ↗
              </a>
              <a
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noreferrer"
              >
                Skyline Aero Homes ↗
              </a>
            </div>
          </aside>
        </section>

        <footer className="paper-footer">
          <div>
            <h2>JATTARI LUXE</h2>
            <p>Your one-stop guide to the town.</p>
          </div>
          <Link href="/events-news">Events & News ↗</Link>
          <span>LOCAL STORIES · SHARED WITH CARE</span>
        </footer>
      </main>

      <Footer />

    </>
  );
}
