
"use client";

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
              Discover India's colourful celebrations, timeless traditions
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
              Festivals are an important part of India's cultural identity.
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

      <style jsx>{`
        .fest-page {
          --cream: #fff5e1;
          --white: #fffdf8;
          --teal: #103f40;
          --teal-light: #164e52;
          --gold: #d9b783;
          --gold-dark: #987646;
          --muted: #6e7772;
          color: var(--teal);
          background: var(--cream);
          overflow: hidden;
        }

        .content-width {
          width: min(1200px, calc(100% - 56px));
          margin-inline: auto;
        }

        .fest-hero {
          min-height: 590px;
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 85px 24px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(255, 245, 225, 0.92),
              rgba(255, 245, 225, 0.78)
            ),
            url("https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1800&q=85")
              center / cover no-repeat;
          border-bottom: 1px solid var(--gold);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(
            ellipse at center,
            transparent 15%,
            rgba(255, 245, 225, 0.35) 100%
          );
        }

        .hero-content {
          max-width: 800px;
          animation: fadeUp 0.8s ease both;
        }

        .eyebrow,
        .section-label {
          display: block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.2px;
          line-height: 1.8;
          color: var(--gold-dark);
        }

        .fest-hero h1 {
          font-size: clamp(44px, 7vw, 80px);
          font-weight: 500;
          letter-spacing: -3px;
          line-height: 1.06;
          margin: 25px 0 22px;
        }

        .fest-hero h1 em,
        .fest-intro h2 em,
        .featured-details h2 em,
        .section-heading h2 em,
        .traditions-intro h2 em,
        .values-content h2 em,
        .festival-cta h2 em {
          color: var(--gold-dark);
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
        }

        .hero-content > p {
          max-width: 590px;
          margin: auto;
          font-size: 14px;
          line-height: 1.9;
          color: var(--muted);
        }

        .fest-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          margin-top: 27px;
          padding: 15px 21px;
          background: var(--teal);
          color: var(--cream);
          text-decoration: none;
          font-size: 12px;
          border: 1px solid var(--teal);
          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .fest-button:hover {
          background: transparent;
          color: var(--teal);
          transform: translateY(-3px);
        }

        .fest-button span,
        .inline-link span {
          font-size: 17px;
          transition: transform 0.3s ease;
        }

        .fest-button:hover span,
        .inline-link:hover span {
          transform: translate(3px, -3px);
        }

        .hero-caption {
          margin-top: 27px;
          font-size: 10px;
          letter-spacing: 1.2px;
          color: var(--muted);
        }

        .hero-caption span {
          color: var(--gold-dark);
          margin-right: 7px;
        }

        .hero-side-label {
          position: absolute;
          right: 22px;
          top: 50%;
          writing-mode: vertical-rl;
          color: var(--gold-dark);
          font-size: 9px;
          letter-spacing: 3px;
        }

        .hero-orbit {
          position: absolute;
          z-index: -1;
          width: 270px;
          height: 270px;
          border: 1px solid rgba(217, 183, 131, 0.5);
          border-radius: 50%;
          animation: rotateOrbit 30s linear infinite;
        }

        .hero-orbit::before,
        .hero-orbit::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(217, 183, 131, 0.4);
          border-radius: 50%;
          inset: 22px;
        }

        .hero-orbit::after {
          inset: 44px;
        }

        .orbit-one {
          top: -145px;
          left: -95px;
        }

        .orbit-two {
          right: -155px;
          bottom: -155px;
          width: 360px;
          height: 360px;
        }

        .fest-intro {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 70px;
          align-items: center;
          padding-top: 95px;
          padding-bottom: 85px;
        }

        .fest-intro h2,
        .featured-details h2,
        .section-heading h2,
        .traditions-intro h2,
        .values-content h2,
        .festival-cta h2 {
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 500;
          letter-spacing: -1.8px;
          line-height: 1.16;
          margin: 15px 0 0;
        }

        .intro-description {
          border-left: 1px solid var(--gold);
          padding-left: 28px;
        }

        .intro-description p,
        .featured-details > p,
        .section-heading > p,
        .traditions-intro > p,
        .festival-cta > p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.95;
          margin: 0 0 15px;
        }

        .inline-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--gold);
          color: var(--teal);
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          margin-top: 10px;
        }

        .featured-festival {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          background: var(--white);
          border: 1px solid rgba(217, 183, 131, 0.65);
        }

        .featured-photo {
          position: relative;
          min-height: 410px;
          overflow: hidden;
          background: #e7decd;
        }

        .featured-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .featured-festival:hover .featured-photo img {
          transform: scale(1.045);
        }

        .photo-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(16, 63, 64, 0.55),
            transparent 55%
          );
        }

        .photo-caption {
          position: absolute;
          left: 25px;
          bottom: 25px;
          color: white;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .featured-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 40px clamp(25px, 4vw, 52px);
        }

        .featured-details h2 {
          font-size: clamp(32px, 3.6vw, 45px);
          margin-bottom: 19px;
        }

        .feature-points {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 16px;
          margin-top: 8px;
          font-size: 10px;
        }

        .feature-points span::first-letter {
          color: var(--gold-dark);
        }

        .festival-collection,
        .season-section,
        .gallery-section {
          padding-top: 105px;
          padding-bottom: 105px;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 38px;
        }

        .section-heading h2 {
          margin-top: 12px;
        }

        .section-heading > p {
          max-width: 320px;
          margin-bottom: 4px;
        }

        .festival-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .festival-card {
          background: var(--white);
          border: 1px solid rgba(217, 183, 131, 0.65);
          min-width: 0;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
          animation: fadeUp 0.65s ease both;
        }

        .festival-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 38px rgba(16, 63, 64, 0.1);
        }

        .festival-card-image {
          height: 225px;
          position: relative;
          overflow: hidden;
          background: #e8dfce;
        }

        .festival-card-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .festival-card:hover .festival-card-image img {
          transform: scale(1.07);
        }

        .card-number {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 245, 225, 0.96);
          color: var(--teal);
          padding: 7px 10px;
          font-size: 10px;
        }

        .card-image-arrow {
          position: absolute;
          right: 14px;
          bottom: 14px;
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: var(--teal);
          color: var(--cream);
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .festival-card:hover .card-image-arrow {
          background: var(--gold-dark);
          transform: rotate(45deg);
        }

        .festival-card-content {
          padding: 23px;
        }

        .festival-category {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.6px;
          color: var(--gold-dark);
        }

        .festival-card-content h3 {
          font-size: 25px;
          font-weight: 500;
          margin: 12px 0 10px;
        }

        .festival-card-content > p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
          margin: 0 0 18px;
        }

        .festival-facts {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 13px 0;
          border-top: 1px solid rgba(217, 183, 131, 0.55);
          border-bottom: 1px solid rgba(217, 183, 131, 0.55);
          color: var(--muted);
          font-size: 11px;
          line-height: 1.6;
        }

        .fact-label {
          color: var(--gold-dark);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.2px;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 13px;
          font-size: 10px;
          color: var(--teal);
        }

        .footer-star {
          color: var(--gold-dark);
          font-size: 19px;
          transition: transform 0.4s ease;
        }

        .festival-card:hover .footer-star {
          transform: rotate(90deg);
        }

        .traditions-section {
          background: var(--teal);
          color: var(--cream);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .traditions-section::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border: 1px solid rgba(217, 183, 131, 0.2);
          border-radius: 50%;
          right: -140px;
          top: -250px;
          box-shadow:
            0 0 0 35px rgba(217, 183, 131, 0.025),
            0 0 0 70px rgba(217, 183, 131, 0.025);
        }

        .traditions-layout {
          position: relative;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 75px;
          align-items: center;
        }

        .traditions-intro .section-label {
          color: var(--gold);
        }

        .traditions-intro h2 {
          margin-bottom: 22px;
        }

        .traditions-intro h2 em,
        .values-content h2 em {
          color: var(--gold);
        }

        .traditions-intro > p {
          color: rgba(255, 245, 225, 0.72);
          max-width: 370px;
        }

        .tradition-list {
          border-top: 1px solid rgba(217, 183, 131, 0.4);
        }

        .tradition-row {
          display: grid;
          grid-template-columns: 28px 34px 1fr 18px;
          gap: 17px;
          align-items: center;
          padding: 24px 0;
          border-bottom: 1px solid rgba(217, 183, 131, 0.4);
          transition: padding 0.3s ease;
        }

        .tradition-row:hover {
          padding-left: 7px;
        }

        .tradition-number {
          color: var(--gold);
          font-size: 10px;
        }

        .tradition-symbol {
          color: var(--gold);
          font-size: 25px;
          text-align: center;
        }

        .tradition-row h3 {
          margin: 0 0 7px;
          font-size: 16px;
          font-weight: 500;
        }

        .tradition-row p {
          margin: 0;
          color: rgba(255, 245, 225, 0.7);
          font-size: 11px;
          line-height: 1.8;
        }

        .tradition-arrow {
          color: var(--gold);
          transition: transform 0.3s ease;
        }

        .tradition-row:hover .tradition-arrow {
          transform: translate(3px, -3px);
        }

        .season-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .season-card {
          background: var(--white);
          border: 1px solid rgba(217, 183, 131, 0.65);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .season-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 28px rgba(16, 63, 64, 0.09);
        }

        .season-image {
          height: 180px;
          overflow: hidden;
          background: #e8dfce;
        }

        .season-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .season-card:hover img {
          transform: scale(1.06);
        }

        .season-info {
          padding: 19px;
        }

        .season-info .section-label {
          font-size: 8px;
          letter-spacing: 1.1px;
        }

        .season-info h3 {
          margin: 9px 0;
          font-size: 22px;
          font-weight: 500;
        }

        .season-info p {
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .gallery-section {
          padding-top: 30px;
        }

        .festival-gallery {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr 0.9fr;
          grid-template-rows: 220px 220px;
          gap: 18px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          margin: 0;
          background: #e8dfce;
        }

        .gallery-item-1 {
          grid-row: span 2;
        }

        .gallery-item-4 {
          grid-column: span 2;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.07);
        }

        .gallery-item figcaption {
          position: absolute;
          inset: auto 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 18px;
          color: white;
          font-size: 12px;
          background: linear-gradient(
            0deg,
            rgba(16, 63, 64, 0.8),
            transparent
          );
        }

        .gallery-item figcaption span:last-child {
          font-size: 17px;
        }

        .values-section {
          padding: 80px 0;
          background: #f5ead5;
          border-top: 1px solid rgba(217, 183, 131, 0.6);
          border-bottom: 1px solid rgba(217, 183, 131, 0.6);
        }

        .values-content {
          text-align: center;
        }

        .values-content h2 {
          margin-bottom: 42px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
          text-align: left;
        }

        .value-item {
          background: var(--white);
          padding: 26px;
          border: 1px solid rgba(217, 183, 131, 0.6);
          transition: transform 0.3s ease;
        }

        .value-item:hover {
          transform: translateY(-5px);
        }

        .value-item > span {
          color: var(--gold-dark);
          font-size: 11px;
        }

        .value-item h3 {
          font-size: 22px;
          font-weight: 500;
          margin: 15px 0 10px;
        }

        .value-item p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
        }

        .festival-cta {
          position: relative;
          margin-top: 95px;
          margin-bottom: 95px;
          padding: 75px 25px;
          text-align: center;
          border: 1px solid var(--gold);
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(217, 183, 131, 0.2),
              transparent 65%
            ),
            var(--white);
        }

        .festival-cta h2 {
          margin-top: 15px;
        }

        .festival-cta > p {
          max-width: 520px;
          margin: 17px auto 0;
        }

        .cta-decoration {
          position: absolute;
          right: 25px;
          top: 15px;
          font-size: 58px;
          color: rgba(217, 183, 131, 0.55);
          animation: rotateOrbit 25s linear infinite;
        }

        .cta-bottom-note {
          margin-top: 32px;
          color: #987646;
          font-size: 9px;
          letter-spacing: 2px;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1000px) {
          .festival-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .season-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .traditions-layout {
            gap: 38px;
          }

          .featured-details {
            padding: 30px;
          }

          .festival-card-image {
            height: 240px;
          }
        }

        @media (max-width: 700px) {
          .content-width {
            width: calc(100% - 36px);
          }

          .fest-hero {
            min-height: 510px;
            padding: 75px 20px;
          }

          .fest-hero h1 {
            font-size: clamp(40px, 10vw, 59px);
            letter-spacing: -2px;
          }

          .hero-side-label {
            display: none;
          }

          .fest-intro {
            grid-template-columns: 1fr;
            gap: 24px;
            padding-top: 65px;
            padding-bottom: 60px;
          }

          .intro-description {
            padding-left: 18px;
          }

          .featured-festival {
            grid-template-columns: 1fr;
          }

          .featured-photo {
            min-height: 290px;
          }

          .featured-details {
            padding: 32px 24px;
          }

          .festival-collection,
          .season-section,
          .gallery-section {
            padding-top: 75px;
            padding-bottom: 75px;
          }

          .section-heading {
            display: block;
            margin-bottom: 28px;
          }

          .section-heading > p {
            margin-top: 14px;
          }

          .traditions-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .traditions-section {
            padding: 70px 0;
          }

          .festival-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 220px 180px 180px;
            gap: 12px;
          }

          .gallery-item-1 {
            grid-column: span 2;
            grid-row: auto;
          }

          .gallery-item-4 {
            grid-column: span 2;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .values-section {
            padding: 65px 0;
          }

          .festival-cta {
            margin-top: 65px;
            margin-bottom: 65px;
            padding: 60px 18px;
          }
        }

        @media (max-width: 480px) {
          .content-width {
            width: calc(100% - 30px);
          }

          .eyebrow,
          .section-label {
            font-size: 9px;
            letter-spacing: 1.5px;
          }

          .fest-hero h1 {
            font-size: 42px;
          }

          .fest-intro h2,
          .featured-details h2,
          .section-heading h2,
          .traditions-intro h2,
          .values-content h2,
          .festival-cta h2 {
            font-size: 35px;
            letter-spacing: -1px;
          }

          .festival-grid,
          .season-grid {
            grid-template-columns: 1fr;
          }

          .festival-card-image {
            height: 235px;
          }

          .season-image {
            height: 220px;
          }

          .tradition-row {
            grid-template-columns: 22px 26px 1fr 14px;
            gap: 10px;
            padding: 21px 0;
          }

          .tradition-row h3 {
            font-size: 14px;
          }

          .tradition-row p {
            font-size: 10px;
          }

          .festival-gallery {
            grid-template-rows: 210px 160px 160px;
          }

          .cta-decoration {
            right: 12px;
            top: 8px;
            font-size: 38px;
          }

          .cta-bottom-note {
            font-size: 8px;
            letter-spacing: 1px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fest-page *,
          .fest-page *::before,
          .fest-page *::after {
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
