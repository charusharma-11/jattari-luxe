
"use client";

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

      <style jsx global>{`
        .newspaper {
          --paper: #fffdf8;
          --cream: #fff5e1;
          --teal: #103f40;
          --gold: #d9b783;
          background: var(--paper);
          color: var(--teal);
          padding: 0 3%;
        }

        .newspaper * {
          box-sizing: border-box;
        }

        .newspaper a {
          color: inherit;
          text-decoration: none;
        }

        /* HERO BACKGROUND IMAGE */
        .news-masthead {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          text-align: center;
          padding: 65px 20px 55px;
          background:
            linear-gradient(
              rgba(255, 245, 225, 0.7),
              rgba(255, 245, 225, 0.78)
            ),
            url("/images/localnews.jpg") center 48% / cover no-repeat;
          border-bottom: 1px solid var(--gold);
        }

        .paper-overline,
        .story-category,
        .sidebar-kicker {
          color: #a47e49;
          font-size: 9px;
          letter-spacing: 1.4px;
          font-weight: 700;
        }

        .news-masthead h1 {
          color: var(--teal);
          font: 400 clamp(42px, 7vw, 78px)/1.05 Georgia, serif;
          margin: 12px 0;
          letter-spacing: -2px;
        }

        .news-masthead > p {
          color: var(--teal);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .paper-intro {
          color: var(--teal);
          margin-top: 18px;
          font: 15px Georgia, serif;
        }

        .news-strip {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          background: var(--teal);
          color: var(--cream);
          padding: 13px 18px;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .paper-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 240px;
          gap: 22px;
          padding: 28px 0 40px;
        }

        .lead-story {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--gold);
        }

        .lead-image {
          position: relative;
          min-height: 300px;
          overflow: hidden;
          background: var(--cream);
        }

        .lead-image img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 300px;
          object-fit: cover;
        }

        .image-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--teal);
          color: white;
          padding: 8px 10px;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .story-date {
          display: block;
          margin-top: 8px;
          font-size: 9px;
          color: #7c806f;
        }

        .lead-copy h2 {
          font: 400 clamp(27px, 3.2vw, 39px)/1.08 Georgia, serif;
          margin: 15px 0;
        }

        .lead-copy p,
        .news-column p,
        .more-story p,
        .sidebar-project p {
          font-size: 12px;
          line-height: 1.8;
          color: #596d64;
        }

        .read-link {
          display: inline-block;
          background: var(--teal);
          color: white !important;
          padding: 11px 14px;
          font-size: 10px;
          margin: 8px 0;
        }

        .lead-copy small,
        .news-column small {
          display: block;
          font-size: 9px;
          color: #8a785b;
          margin-top: 8px;
        }

        .paper-divider,
        .more-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 20px 0 14px;
          border-bottom: 1px solid var(--gold);
          font-size: 9px;
          letter-spacing: 1px;
        }

        .news-columns {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-bottom: 1px solid var(--gold);
        }

        .news-column {
          padding: 18px 12px 20px;
          border-right: 1px solid #e5d8be;
          min-width: 0;
        }

        .news-column:first-child {
          padding-left: 0;
        }

        .news-column:last-child {
          border-right: 0;
          padding-right: 0;
        }

        .news-column img {
          display: block;
          width: 100%;
          height: 140px;
          object-fit: cover;
          margin-top: 14px;
          background: var(--cream);
        }

        .news-column h3,
        .more-story h3 {
          font: 400 22px/1.15 Georgia, serif;
          margin: 12px 0;
        }

        .news-column > a,
        .more-story a {
          display: inline-block;
          margin-top: 8px;
          font-size: 10px;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .more-heading h2 {
          font: 400 29px Georgia, serif;
          margin: 0;
          letter-spacing: -1px;
        }

        .more-story {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid #e5d8be;
        }

        .more-story img {
          display: block;
          width: 100%;
          height: 140px;
          object-fit: cover;
          background: var(--cream);
        }

        .more-story h3 {
          font-size: 23px;
        }

        .paper-sidebar {
          border-left: 1px solid var(--gold);
          padding-left: 18px;
          min-width: 0;
        }

        .sidebar-section {
          padding: 15px 0 22px;
          border-bottom: 1px solid var(--gold);
        }

        .sidebar-section h3,
        .sidebar-project h3 {
          font: 400 25px Georgia, serif;
          margin: 12px 0;
        }

        .update-row {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 10px;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #e9e0d0;
        }

        .update-row > span {
          background: var(--cream);
          text-align: center;
          padding: 8px 2px;
          font: 18px Georgia, serif;
        }

        .update-row small {
          display: block;
          font: 9px Arial, sans-serif;
        }

        .update-row strong {
          font-size: 10px;
          line-height: 1.5;
          font-weight: 500;
        }

        .sidebar-section > a:not(.update-row) {
          display: block;
          font-size: 10px;
          margin-top: 14px;
        }

        .category-row {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          padding: 12px 0;
          border-bottom: 1px solid #e9e0d0;
          font-size: 11px;
        }

        .category-row span:first-child {
          color: #a47e49;
        }

        .sidebar-project {
          margin-top: 22px;
          background: var(--cream);
          padding: 13px;
        }

        .sidebar-project img {
          display: block;
          width: 100%;
          height: 125px;
          object-fit: cover;
          margin-top: 12px;
        }

        .sidebar-project h3 {
          font-size: 23px;
        }

        .sidebar-project > a {
          display: block;
          padding: 10px 0;
          border-top: 1px solid var(--gold);
          font-size: 10px;
          font-weight: 700;
        }

        .paper-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
          border-top: 1px solid var(--gold);
          padding: 25px 0;
        }

        .paper-footer h2 {
          font: 400 27px Georgia, serif;
          margin: 0;
        }

        .paper-footer p,
        .paper-footer > span {
          font-size: 10px;
        }

        @media (max-width: 900px) {
          .paper-layout {
            grid-template-columns: 1fr;
          }

          .paper-sidebar {
            border-left: 0;
            border-top: 1px solid var(--gold);
            padding: 15px 0 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .sidebar-project {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .newspaper {
            padding: 0 4%;
          }

          .news-masthead {
            padding: 45px 12px 35px;
            background-position: center;
          }

          .news-masthead h1 {
            letter-spacing: -1px;
          }

          .news-masthead > p {
            line-height: 1.8;
            letter-spacing: 1.5px;
          }

          .lead-story,
          .news-columns,
          .more-story {
            grid-template-columns: 1fr;
          }

          .lead-image,
          .lead-image img {
            min-height: 220px;
            height: 240px;
          }

          .news-column,
          .news-column:first-child,
          .news-column:last-child {
            padding: 20px 0;
            border-right: 0;
            border-bottom: 1px solid #e5d8be;
          }

          .news-column img {
            height: 190px;
          }

          .more-story img {
            height: 200px;
          }

          .paper-sidebar {
            grid-template-columns: 1fr;
          }

          .sidebar-project {
            grid-column: auto;
          }

          .paper-intro {
            font-size: 13px;
            line-height: 1.7;
          }

          .news-strip {
            font-size: 8px;
          }
        }
      `}</style>
    </>
  );
}
