
"use client";

import "./community-events.css";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ContactButton from "../../../components/ContactButton";

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
          <ContactButton className="note-link">
            Contact <span>↗</span>
          </ContactButton>
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

    </>
  );
}
