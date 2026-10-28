
"use client";

import "./festivals.css";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const festivals = [
  {
    name: "Diwali",
    category: "LIGHTS & HAPPINESS",
    description:
      "Diwali, the festival of lights, is celebrated with diyas, colourful rangoli, decorations, sweets and family gatherings. It symbolises the victory of light over darkness and good over evil.",
    image: "/images/diwali.jpg",
    tradition: "Lighting diyas, rangoli and sharing sweets",
    season: "Autumn",
  },
  {
    name: "Holi",
    category: "COLOURS & JOY",
    description:
      "Holi welcomes the arrival of spring with vibrant colours, music, festive foods and joyful gatherings. The celebration is associated with friendship, forgiveness and the triumph of good over evil.",
    image: "/images/holi.jpg",
    tradition: "Playing with colours and enjoying festive treats",
    season: "Spring",
  },
  {
    name: "Janmashtami",
    category: "FAITH & DEVOTION",
    description:
      "Janmashtami celebrates the birth of Lord Krishna. Devotees may decorate temples, sing devotional songs, observe fasts and organise cultural performances inspired by Krishna's life.",
    image: "/images/janmastmi.jpg",
    tradition: "Bhajans, temple decorations and devotional rituals",
    season: "Monsoon",
  },
  {
    name: "Eid",
    category: "COMMUNITY & FAITH",
    description:
      "Eid celebrations bring families and communities together through prayers, festive meals, new clothes, charity and exchanging greetings. Customs vary between Eid al-Fitr and Eid al-Adha.",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=85",
    tradition: "Prayers, sharing food and helping others",
    season: "Dates vary",
  },
  {
    name: "Dussehra",
    category: "TRADITION & HERITAGE",
    description:
      "Dussehra, also called Vijayadashami, represents the victory of good over evil. Celebrations may include Ramleela performances, cultural gatherings and traditional festivities.",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=85",
    tradition: "Ramleela, cultural performances and gatherings",
    season: "Autumn",
  },
  {
    name: "Makar Sankranti",
    category: "HARVEST & SEASONS",
    description:
      "Makar Sankranti marks a seasonal transition and is associated with harvest traditions in many parts of India. Sesame sweets, jaggery and regional customs are part of its celebrations.",
    image: "/images/makarsakranti.jpg",
    tradition: "Seasonal foods and regional celebrations",
    season: "Winter",
  },
  {
    name: "Raksha Bandhan",
    category: "FAMILY & BONDS",
    description:
      "Raksha Bandhan celebrates the bond between siblings. Families exchange gifts, share meals and follow the tradition of tying a rakhi as a symbol of affection and care.",
    image: "/images/raksabandan.jpg",
    tradition: "Tying rakhi and exchanging gifts",
    season: "Monsoon",
  },
  {
    name: "Christmas",
    category: "PEACE & GIVING",
    description:
      "Christmas celebrates the birth of Jesus Christ. People decorate Christmas trees, exchange gifts, attend church services and share festive meals with family and friends.",
    image: "/images/chrismas.jpg",
    tradition: "Decorations, carols and exchanging gifts",
    season: "Winter",
  },
];

const traditions = [
  {
    number: "01",
    icon: "✳",
    title: "Traditional Decorations",
    description:
      "Explore rangoli, flower decorations, diyas, lanterns and the colourful designs that make festive spaces special.",
  },
  {
    number: "02",
    icon: "❋",
    title: "Festive Food & Sweets",
    description:
      "Discover traditional sweets, homemade delicacies and special dishes prepared for family celebrations.",
  },
  {
    number: "03",
    icon: "✦",
    title: "Music, Dance & Culture",
    description:
      "Experience devotional songs, folk music, cultural performances and activities that keep traditions alive.",
  },
  {
    number: "04",
    icon: "❈",
    title: "Family & Community",
    description:
      "Festivals create opportunities to meet neighbours, reconnect with relatives and share moments of happiness.",
  },
];

const seasons = [
  {
    title: "Spring",
    subtitle: "Colours & New Beginnings",
    description:
      "Holi and seasonal celebrations welcome fresh beginnings and the arrival of warmer days.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Monsoon",
    subtitle: "Faith & Togetherness",
    description:
      "Many religious and regional festivals during this season celebrate devotion, family bonds and community life.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Autumn",
    subtitle: "Lights & Celebrations",
    description:
      "Festivals such as Dussehra and Diwali bring decorations, traditional gatherings and festive joy.",
    image:
      "https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Winter",
    subtitle: "Harvest & Warmth",
    description:
      "Seasonal celebrations bring traditional foods, family gatherings and regional harvest customs.",
    image:
      "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=900&q=85",
  },
];

const gallery = [
  {
    title: "Festive Lights",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Floral Traditions",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Cultural Moments",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Community Gatherings",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85",
  },
];

export default function FestivalsPage() {
  return (
    <>
      <Navbar />

      <main className="fest-page">
        {/* HERO */}
        <section className="fest-hero">
          <div className="hero-overlay" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-content">
            <span className="eyebrow">
              JATTARI · CULTURE · HERITAGE
            </span>

            <h1>
              Festivals That
              <br />
              <em>Bring Us Together</em>
            </h1>

            <p>
              Discover India colourful celebrations, timeless traditions
              and the moments that bring families and communities closer.
            </p>

            <a href="#festival-collection" className="fest-button">
              Explore Festivals <span>↗</span>
            </a>

            <div className="hero-caption">
              <span>✳</span> Celebrating culture, one tradition at a time
            </div>
          </div>

          <span className="hero-side-label">A CELEBRATION OF LIFE</span>
        </section>

        {/* INTRODUCTION */}
        <section className="fest-intro content-width">
          <div className="intro-heading">
            <span className="section-label">THE SPIRIT OF INDIA</span>
            <h2>
              Every festival
              <br />
              <em>has a story.</em>
            </h2>
          </div>

          <div className="intro-description">
            <p>
              Festivals are an important part of India cultural identity.
              They bring together people from different backgrounds through
              shared beliefs, food, music, decorations and traditions.
            </p>
            <p>
              In and around Jattari, families can observe festivals according
              to their own customs and beliefs. This page introduces popular
              Indian celebrations and the traditions associated with them.
              Specific local events may vary each year.
            </p>

            <a href="#traditions" className="inline-link">
              Discover our traditions <span>↗</span>
            </a>
          </div>
        </section>

        {/* FEATURED FESTIVAL */}
        <section className="featured-festival content-width">
          <div className="featured-photo">
            <img
              src="/images/events-crowd.jpg"
              alt="Festive lights and decorations"
            />
            <div className="photo-shade" />
            <span className="photo-caption">
              LIGHT · JOY · TOGETHERNESS
            </span>
          </div>

          <div className="featured-details">
            <span className="section-label">A FESTIVE EXPERIENCE</span>
            <h2>
              Moments of
              <br />
              <em>light & happiness.</em>
            </h2>
            <p>
              From glowing lights and colourful decorations to traditional
              food and family gatherings, festive occasions create memories
              that stay with us long after the celebrations end.
            </p>

            <div className="feature-points">
              <span>✦ Rich traditions</span>
              <span>✦ Shared happiness</span>
              <span>✦ Cultural heritage</span>
            </div>

            <a href="#festival-collection" className="inline-link">
              Explore celebrations <span>↗</span>
            </a>
          </div>
        </section>

        {/* FESTIVAL COLLECTION */}
        <section
          className="festival-collection content-width"
          id="festival-collection"
        >
          <div className="section-heading">
            <div>
              <span className="section-label">EXPLORE & DISCOVER</span>
              <h2>
                Festivals of <em>India</em>
              </h2>
            </div>
            <p>
              Discover the stories, traditions and meaningful moments behind
              popular celebrations.
            </p>
          </div>

          <div className="festival-grid">
            {festivals.map((festival, index) => (
              <article className="festival-card" key={festival.name}>
                <div className="festival-card-image">
                  <img
                    src={festival.image}
                    alt={`${festival.name} festival`}
                    loading="lazy"
                  />
                  <span className="card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="card-image-arrow">↗</span>
                </div>

                <div className="festival-card-content">
                  <span className="festival-category">
                    {festival.category}
                  </span>

                  <h3>{festival.name}</h3>
                  <p>{festival.description}</p>

                  <div className="festival-facts">
                    <span className="fact-label">TRADITION</span>
                    <span>{festival.tradition}</span>
                  </div>

                  <div className="card-footer">
                    <span>{festival.season}</span>
                    <span className="footer-star">✳</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TRADITIONS */}
        <section className="traditions-section" id="traditions">
          <div className="content-width traditions-layout">
            <div className="traditions-intro">
              <span className="section-label">MORE THAN A CELEBRATION</span>
              <h2>
                Traditions that
                <br />
                <em>connect us.</em>
              </h2>
              <p>
                Behind every celebration are customs and shared experiences
                passed from one generation to another.
              </p>
            </div>

            <div className="tradition-list">
              {traditions.map((item) => (
                <article className="tradition-row" key={item.number}>
                  <span className="tradition-number">{item.number}</span>
                  <span className="tradition-symbol">{item.icon}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <span className="tradition-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEASONAL CELEBRATIONS */}
        <section className="season-section content-width">
          <div className="section-heading">
            <div>
              <span className="section-label">CELEBRATIONS THROUGH THE YEAR</span>
              <h2>
                Festivals by <em>season</em>
              </h2>
            </div>
            <p>
              Different times of the year bring their own traditions,
              celebrations and festive experiences.
            </p>
          </div>

          <div className="season-grid">
            {seasons.map((season) => (
              <article className="season-card" key={season.title}>
                <div className="season-image">
                  <img src={season.image} alt={season.title} loading="lazy" />
                </div>
                <div className="season-info">
                  <span className="section-label">{season.subtitle}</span>
                  <h3>{season.title}</h3>
                  <p>{season.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FESTIVAL GALLERY */}
        <section className="gallery-section content-width">
          <div className="section-heading">
            <div>
              <span className="section-label">A VISUAL CELEBRATION</span>
              <h2>
                Moments worth <em>remembering.</em>
              </h2>
            </div>
            <p>
              A collection inspired by the colours, flowers, lights and
              gatherings associated with festive occasions.
            </p>
          </div>

          <div className="festival-gallery">
            {gallery.map((item, index) => (
              <figure
                className={`gallery-item gallery-item-${index + 1}`}
                key={item.title}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>
                  <span>{item.title}</span>
                  <span>↗</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CELEBRATION VALUES */}
        <section className="values-section">
          <div className="content-width values-content">
            <span className="section-label">WHAT MAKES FESTIVALS SPECIAL</span>
            <h2>
              Different traditions.
              <br />
              <em>One shared feeling.</em>
            </h2>

            <div className="values-grid">
              <div className="value-item">
                <span>01</span>
                <h3>Unity</h3>
                <p>
                  Celebrations offer opportunities to reconnect with family,
                  friends and neighbours.
                </p>
              </div>

              <div className="value-item">
                <span>02</span>
                <h3>Heritage</h3>
                <p>
                  Customs, stories and rituals help preserve cultural identity
                  for future generations.
                </p>
              </div>

              <div className="value-item">
                <span>03</span>
                <h3>Generosity</h3>
                <p>
                  Sharing food, gifts and support reflects the spirit of
                  kindness found in many celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL COMMUNITY CTA */}
        <section className="festival-cta content-width">
          <span className="cta-decoration">✳</span>
          <span className="section-label">CELEBRATE LOCAL CULTURE</span>

          <h2>
            Every celebration
            <br />
            <em>starts with community.</em>
          </h2>

          <p>
            Explore community gatherings, cultural activities and local
            celebrations connected with life around Jattari.
          </p>

          <Link
            href="/events-news/community-events"
            className="fest-button"
          >
            Explore Community Events <span>↗</span>
          </Link>

          <div className="cta-bottom-note">
            JATTARI LUXE · DISCOVER YOUR COMMUNITY
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
