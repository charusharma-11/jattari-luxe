
"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const communityStories = [
  {
    category: "EDUCATION",
    title: "School Events & Student Activities",
    desc: "Discover school celebrations, annual functions, student achievements and educational activities in and around Jattari.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    label: "Schools & Students",
  },
  {
    category: "CULTURE",
    title: "Cultural Programmes & Celebrations",
    desc: "Explore cultural performances, traditional celebrations and activities that bring the local community together.",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=85",
    label: "Culture & Traditions",
  },
  {
    category: "COMMUNITY",
    title: "Local Gatherings & Public Activities",
    desc: "A place to discover community gatherings, neighbourhood initiatives and public activities around the region.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85",
    label: "People & Community",
  },
  {
    category: "SOCIAL INITIATIVES",
    title: "Community Support & Social Work",
    desc: "Learn about cleanliness drives, social awareness campaigns, volunteering and initiatives that support local residents.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85",
    label: "Social Impact",
  },
  {
    category: "FAIRS & FESTIVALS",
    title: "Local Fairs & Seasonal Celebrations",
    desc: "Explore local fairs, seasonal celebrations and public festivities. Event dates should be confirmed before planning a visit.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
    label: "Fairs & Festivals",
  },
 
{
  category: "SPORTS",
  title: "Sports, Youth & Local Activities",
  desc: "Discover youth activities, sporting events and opportunities for people to participate in community life.",
  image:
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  label: "Sports & Youth",
},

];

export default function CommunityEventsPage() {
  return (
    <>
      <Navbar />

      <main className="community-page">
        {/* HERO */}
        <section className="community-hero">
          <div className="hero-content">
            <span className="eyebrow">JATTARI LUXE · OUR COMMUNITY</span>
            <h1>
              Together, We Make
              <br />
              <span>Jattari Special.</span>
            </h1>
            <p>
              Discover the people, traditions, celebrations and activities
              that bring Jattari and its surrounding communities together.
            </p>

            <a href="#community-news" className="hero-button">
              Explore Community Stories <span>↗</span>
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"
              alt="People coming together at a community gathering"
            />
            <div className="image-caption">
              <span>PEOPLE · CULTURE · CONNECTION</span>
              <strong>Celebrating the spirit of community</strong>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="community-intro">
          <div className="intro-label">
            <span>01</span>
            <span>ABOUT OUR COMMUNITY</span>
          </div>

          <div className="intro-content">
            <h2>
              Every neighbourhood
              <br />
              has a <em>story to tell.</em>
            </h2>

            <div className="intro-text">
              <p>
                Jattari is home to families, students, local businesses and
                people whose everyday activities shape the character of the
                town. Community events offer opportunities to connect,
                celebrate traditions and share experiences.
              </p>
              <p>
                This page brings together community-related topics, including
                educational programmes, cultural celebrations, social
                initiatives, local fairs and sporting activities. Verified
                event announcements can be added as they become available.
              </p>

              <Link href="/events-news" className="text-link">
                Back to Events & News ↗
              </Link>
            </div>
          </div>
        </section>

        {/* COMMUNITY STORIES */}
        <section className="community-stories" id="community-news">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE COMMUNITY JOURNAL</span>
              <h2>Explore Community Stories</h2>
            </div>
            <p>
              Education, culture, local activities and the people who bring
              the community together.
            </p>
          </div>

          <div className="stories-grid">
            {communityStories.map((story, index) => (
              <article className="story-card" key={story.title}>
                <div className="story-image">
                  <img src={story.image} alt={story.label} loading="lazy" />
                  <span className="story-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="story-content">
                  <span className="story-category">{story.category}</span>
                  <h3>{story.title}</h3>
                  <p>{story.desc}</p>
                  <span className="story-label">
                    {story.label} <span>↗</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EVENTS INFORMATION */}
        <section className="event-note">
          <div className="note-symbol">✳</div>
          <div>
            <span className="eyebrow">STAY CONNECTED</span>
            <h2>Know about an upcoming event?</h2>
            <p>
              Community announcements, event dates and venue details can be
              shared here once verified. This helps residents and visitors
              find useful local information in one place.
            </p>
          </div>
          <Link href="/list-your-business" className="note-link">
            Explore Jattari <span>↗</span>
          </Link>
        </section>

        {/* RELATED LINKS */}
        <section className="related-links">
          <span className="eyebrow">KEEP EXPLORING</span>
          <h2>More from Jattari</h2>

          <div className="related-grid">
            <Link href="/events-news/latest-local-news">
              <span>LOCAL NEWS</span>
              <strong>Latest Local News ↗</strong>
            </Link>

            <Link href="/events-news/festivals">
              <span>CELEBRATIONS</span>
              <strong>Festivals & Traditions ↗</strong>
            </Link>

            <Link href="/events-news/jobs-opportunities">
              <span>OPPORTUNITIES</span>
              <strong>Jobs & Careers ↗</strong>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .community-page {
          --cp-paper: #fffdf8;
          --cp-cream: #fff5e1;
          --cp-teal: #103f40;
          --cp-gold: #d9b783;
          background: var(--cp-paper);
          color: var(--cp-teal);
          padding: 0 4%;
        }

        .community-page * {
          box-sizing: border-box;
        }

        .community-page a {
          color: inherit;
          text-decoration: none;
        }

        .community-page img {
          display: block;
          width: 100%;
          object-fit: cover;
        }

        .community-hero {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          align-items: center;
          gap: 5%;
          padding: 65px 2% 70px;
          background:
            radial-gradient(
              ellipse at 10% 0%,
              #e8eee5 0%,
              transparent 48%
            ),
            var(--cp-cream);
          border-bottom: 1px solid var(--cp-gold);
        }

        .hero-content {
          padding: 10px 0;
        }

        .eyebrow {
          color: #a47e49;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .hero-content h1 {
          font: 400 clamp(42px, 5.5vw, 72px)/1.06 Georgia, serif;
          letter-spacing: -2px;
          margin: 22px 0;
        }

        .hero-content h1 span {
          color: #8b744f;
          font-style: italic;
        }

        .hero-content > p {
          max-width: 480px;
          color: #596d64;
          font-size: 14px;
          line-height: 1.9;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          background: var(--cp-teal);
          color: white !important;
          padding: 15px 19px;
          margin-top: 18px;
          font-size: 11px;
          transition: background 0.25s, transform 0.25s;
        }

        .hero-button:hover {
          background: #205a59;
          transform: translateY(-3px);
        }

        .hero-image {
          position: relative;
          min-width: 0;
        }

        .hero-image > img {
          height: 390px;
          object-fit: cover;
        }

        .image-caption {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 18px;
          color: white;
          background: rgba(16, 63, 64, 0.88);
        }

        .image-caption span {
          color: #f1d6a6;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .image-caption strong {
          font: 400 21px Georgia, serif;
        }

        .community-intro {
          padding: 75px 2%;
          border-bottom: 1px solid #e5d8be;
        }

        .intro-label {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #a47e49;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .intro-label span:first-child {
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          border: 1px solid var(--cp-gold);
          border-radius: 50%;
          font-size: 11px;
        }

        .intro-content {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 8%;
          margin-top: 28px;
        }

        .intro-content h2,
        .section-heading h2,
        .related-links h2 {
          font: 400 clamp(32px, 4vw, 48px)/1.15 Georgia, serif;
          letter-spacing: -1px;
          margin: 0;
        }

        .intro-content h2 em {
          color: #9b8055;
          font-weight: 400;
        }

        .intro-text p {
          margin: 0 0 16px;
          color: #596d64;
          font-size: 13px;
          line-height: 1.95;
        }

        .text-link {
          display: inline-block;
          margin-top: 7px;
          padding-bottom: 5px;
          border-bottom: 1px solid var(--cp-gold);
          font-size: 11px;
          font-weight: 700;
        }

        .community-stories {
          padding: 75px 2%;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 25px;
          margin-bottom: 32px;
        }

        .section-heading h2 {
          margin-top: 13px;
        }

        .section-heading > p {
          max-width: 330px;
          color: #596d64;
          font-size: 12px;
          line-height: 1.8;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 32px 22px;
        }

        .story-card {
          min-width: 0;
          border-bottom: 1px solid var(--cp-gold);
          padding-bottom: 20px;
        }

        .story-image {
          position: relative;
          overflow: hidden;
          background: var(--cp-cream);
        }

        .story-image img {
          height: 225px;
          transition: transform 0.45s;
        }

        .story-card:hover .story-image img {
          transform: scale(1.045);
        }

        .story-number {
          position: absolute;
          top: 12px;
          left: 12px;
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          background: var(--cp-cream);
          color: var(--cp-teal);
          font: 16px Georgia, serif;
        }

        .story-content {
          padding-top: 20px;
        }

        .story-category {
          color: #a47e49;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .story-content h3 {
          font: 400 25px/1.2 Georgia, serif;
          margin: 12px 0;
        }

        .story-content p {
          color: #596d64;
          font-size: 12px;
          line-height: 1.85;
          margin-bottom: 18px;
        }

        .story-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid #e9e0d0;
          font-size: 10px;
          font-weight: 700;
        }

        .story-label span {
          color: #a47e49;
        }

        .event-note {
          display: grid;
          grid-template-columns: 50px 1fr auto;
          align-items: center;
          gap: 22px;
          padding: 32px;
          background: var(--cp-cream);
          border-top: 1px solid var(--cp-gold);
          border-bottom: 1px solid var(--cp-gold);
        }

        .note-symbol {
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          border: 1px solid var(--cp-gold);
          border-radius: 50%;
          font-size: 23px;
        }

        .event-note h2 {
          font: 400 27px Georgia, serif;
          margin: 10px 0;
        }

        .event-note p {
          max-width: 650px;
          color: #596d64;
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        .note-link {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 13px 16px;
          background: var(--cp-teal);
          color: white !important;
          font-size: 10px;
          white-space: nowrap;
        }

        .related-links {
          padding: 75px 2%;
        }

        .related-links h2 {
          margin-top: 12px;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 30px;
        }

        .related-grid a {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 22px;
          background: var(--cp-cream);
          border: 1px solid #e8d9bd;
          transition: background 0.25s, transform 0.25s;
        }

        .related-grid a:hover {
          background: #e8eee5;
          transform: translateY(-3px);
        }

        .related-grid a > span {
          color: #a47e49;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .related-grid strong {
          font: 400 21px Georgia, serif;
        }

        @media (max-width: 900px) {
          .community-hero {
            grid-template-columns: 1fr 0.85fr;
            gap: 25px;
            padding: 45px 1%;
          }

          .hero-image > img {
            height: 330px;
          }

          .stories-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .event-note {
            grid-template-columns: 45px 1fr;
          }

          .note-link {
            grid-column: 2;
            justify-self: start;
          }
        }

        @media (max-width: 600px) {
          .community-page {
            padding: 0 4%;
          }

          .community-hero {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 40px 0;
          }

          .hero-content h1 {
            font-size: 43px;
            letter-spacing: -1.5px;
          }

          .hero-image > img {
            height: 260px;
          }

          .community-intro,
          .community-stories,
          .related-links {
            padding: 48px 0;
          }

          .intro-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-heading {
            align-items: start;
            flex-direction: column;
            gap: 10px;
          }

          .stories-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .story-image img {
            height: 230px;
          }

          .event-note {
            grid-template-columns: 1fr;
            padding: 23px;
            gap: 15px;
          }

          .note-link {
            grid-column: auto;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
