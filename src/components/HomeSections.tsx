
import Link from "next/link";
import ContactButton from "./ContactButton";

const imagePath = (name: string) => `/images/${name}`;

const categories = [
  {
    title: "Explore Jattari",
    description:
      "Discover local places, neighbourhood highlights and the character of Jattari.",
    image: "explore-railway.jpg",
    href: "/explore-jattari",
    label: "Discover places",
  },
  {
    title: "Education",
    description:
      "Explore schools, colleges and learning opportunities in the area.",
    image: "education-school.jpg",
    href: "/education",
    label: "Find education",
  },
  {
    title: "Local Businesses",
    description:
      "Find neighbourhood shops, everyday services and local businesses.",
    image: "local-market.jpg",
    href: "/local-businesses",
    label: "Explore businesses",
  },
  {
    title: "Real Estate",
    description:
      "Discover residential projects, homes, plots and property opportunities.",
    image: "residential-home.jpg",
    href: "/real-estate",
    label: "View properties",
  },
  {
    title: "Events & News",
    description:
      "Stay connected with local events, community updates and announcements.",
    image: "events-festival.jpg",
    href: "/events-news",
    label: "Read updates",
  },
];

const projects: {
  name: string;
  description: string;
  image?: string;
}[] = [
  {
    name: "Anugrah Homes",
    description:
      "Contact our team for project details and property information about Anugrah Homes.",
    image: "anugrah-homes.jpg",
  },
  {
    name: "Skyline Aero Homes",
    description:
      "Request more information about Skyline Aero Homes through the Jattari Luxe team.",
    image: "skyline aero homes.jpg",
  },
  {
    name: "Dreams N Realtors",
    description:
      "Connect with our team to enquire about Dreams N Realtors and its property details.",
    image: "residential-home.jpg",
  },
  {
    name: "Jewar Lands",
    description:
      "Send an enquiry to request further information about Jewar Lands.",
    image: "hub-fields.jpg",
  },
  {
    name: "Shiva Associates",
    description:
      "Contact our team for more information about Shiva Associates.",
    image: "hub-building-right.jpg",
  },
  {
    name: "Shree Balaji Group",
    description:
      "Promotes A1 City, a residential plotted development near the Yamuna Expressway and Noida International Airport.",
    image: "balajigroup.jpg",
  },
  {
    name: "Chhabra Properties",
    description:
      "A property dealer and real estate consultant serving Noida, Greater Noida and Yamuna Expressway across residential and commercial properties, villas and plots.",
    image: "chhabra.jpg",
  },
  {
    name: "Maxrow Properties",
    description:
      "Provides property advisory across Noida, Greater Noida and Yamuna Expressway, including industrial, commercial, residential and investment properties.",
    image: "maxrow.jpg",
  },
  {
    name: "Truevisory Realty",
    description:
      "Offers curated property options with buying guidance, investment advisory and legal assistance.",
    image: "truevisory.jpg",
  },
];

const businesses = [
  {
    name: "Local Property & Plot Services",
    description:
      "Explore residential plots, property options and local real estate opportunities around Jattari.",
    image: "residential-home.jpg",
    href: "/real-estate",
  },
  {
    name: "Local Shops & Services",
    description:
      "Discover nearby shops, useful services and businesses around Jattari.",
    image: "local-market.jpg",
    href: "/local-businesses",
  },
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="jl-section-heading">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function LocalImage({
  name,
  alt,
  className = "",
}: {
  name: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={imagePath(name)}
      alt={alt}
      className={`jl-local-image ${className}`}
      loading="lazy"
    />
  );
}

export default function HomeSections() {
  return (
    <main className="jl-home-sections">
      {/* 01 — Discover Jattari */}
      <section className="jl-discover jl-container">
        <div className="jl-discover-image">
          <LocalImage
            name="hub-fields.jpg"
            alt="Agricultural landscape around Jattari"
          />

          <div className="jl-image-caption">
            <span>LOCAL ROOTS</span>
            <span>JATTARI, UTTAR PRADESH</span>
          </div>
        </div>

        <div className="jl-discover-content">
          <h2>
            Discover Jattari.
            <br />
            A town with local charm.
          </h2>

          <p>
            Jattari is a town in Khair Tehsil of Aligarh district,
            Uttar Pradesh. Located along the Aligarh–Palwal highway,
            it connects nearby towns and villages and serves as a
            local hub for shopping, everyday services and community life.
          </p>

          <p>
            Its local markets, surrounding agricultural landscape and
            close-knit community are part of everyday life in Jattari.
            Jattari Luxe brings local businesses, education and
            property information together to help people explore
            the town more easily.
          </p>

          <ul className="jl-highlights">
            <li>
              <span className="jl-check">01</span>
              <span>
                <strong>Location</strong> — Khair Tehsil, Aligarh district,
                Uttar Pradesh
              </span>
            </li>

            <li>
              <span className="jl-check">02</span>
              <span>
                <strong>Local Life</strong> — Markets, daily essentials
                and neighbourhood businesses
              </span>
            </li>

            <li>
              <span className="jl-check">03</span>
              <span>
                <strong>Connectivity</strong> — Aligarh–Palwal highway
                and nearby towns
              </span>
            </li>
          </ul>

          <Link className="jl-text-link" href="/explore-jattari">
            Explore Jattari <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* 02 — Categories */}
      <section className="jl-categories-section">
        <div className="jl-container">
          <SectionHeading
            title="Everything around you, connected."
            description="From local shops to property projects, explore the categories that make Jattari easier to discover."
          />

          <div className="jl-category-grid">
            {categories.map((category) => (
              <Link
                href={category.href}
                className="jl-category-card"
                key={category.title}
              >
                <div className="jl-category-image">
                  <LocalImage
                    name={category.image}
                    alt={category.title}
                  />

                  <span className="jl-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="jl-category-copy">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="jl-card-link">{category.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Real estate projects */}
      <section className="jl-projects-section">
        <div className="jl-container">
          <div className="jl-heading-row">
            <SectionHeading
              title="Featured real estate projects"
              description="Explore our featured projects and send an enquiry directly to the Jattari Luxe team."
            />

            <Link className="jl-outline-link" href="/real-estate">
              All properties <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="jl-project-grid">
            {projects.map((project) => (
              <article className="jl-project-card" key={project.name}>
                {project.image && (
                  <div className="jl-project-image">
                    <LocalImage
                      name={project.image}
                      alt={project.name}
                    />
                  </div>
                )}

                <div className="jl-project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <ContactButton
                    className="jl-text-link cursor-pointer border-0 bg-transparent p-0"
                  >
                    Contact <span aria-hidden="true">↗</span>
                  </ContactButton>
                </div>
              </article>
            ))}
          </div>

          <p className="jl-disclaimer">
            Contact our team for project details, availability and pricing.
            Confirm property information before making a decision.
          </p>
        </div>
      </section>

      {/* 04 — Local property and businesses */}
      <section className="jl-business-section">
        <div className="jl-container jl-business-layout">
          <div className="jl-business-intro">
            <h2>
              Your neighbourhood
              <br />
              has a lot to offer.
            </h2>

            <p>
              Explore property opportunities, discover nearby services
              and find useful information about businesses around Jattari.
            </p>

            <Link className="jl-dark-button" href="/local-businesses">
              Browse all businesses <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="jl-business-list">
            {businesses.map((business) => (
              <Link
                className="jl-business-row"
                href={business.href}
                key={business.name}
              >
                <LocalImage
                  name={business.image}
                  alt={business.name}
                  className="jl-business-thumb"
                />

                <div className="jl-business-info">
                  <h3>{business.name}</h3>
                  <p>{business.description}</p>
                </div>

                <span className="jl-business-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Education */}
      <section className="jl-services-section">
        <div className="jl-container">
          <SectionHeading
            title="Explore local education."
            description="Discover schools and learning opportunities around Jattari."
          />

          <div className="jl-service-grid">
            <article className="jl-service-panel">
              <div className="jl-service-image">
                <LocalImage
                  name="education-school.jpg"
                  alt="School and education facilities"
                />
              </div>

              <div className="jl-service-copy">
                <h3>Education</h3>

                <p>
                  Explore schools, colleges and educational institutes
                  to learn more about local learning options.
                </p>

                <Link className="jl-text-link" href="/education">
                  Explore education <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
            <article className="jl-service-panel">
              <div className="jl-service-image">
                <LocalImage
                  name="residential-building.jpg"
                  alt="Residential property in Jattari"
                />
              </div>

              <div className="jl-service-copy">
                <h3>Real Estate</h3>

                <p>
                  Discover residential projects, homes, plots and property
                  opportunities around Jattari.
                </p>

                <Link className="jl-text-link" href="/real-estate">
                  Explore real estate <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 06 — Events and news */}
      <section className="jl-news-section">
        <div className="jl-container">
          <div className="jl-heading-row">
            <SectionHeading
              title="What's happening in Jattari?"
              description="A preview of local events, community activities and updates."
            />

            <Link className="jl-outline-link" href="/events-news">
              All updates <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="jl-news-layout">
            <Link className="jl-news-feature" href="/events-news">
              <LocalImage
                name="events-crowd.jpg"
                alt="Community gathering and local events"
              />

              <span className="jl-news-overlay">
                <span className="jl-news-title">
                  Local stories bring the community together.
                </span>

                <span className="jl-news-cta">
                  Explore community updates ↗
                </span>
              </span>
            </Link>

            <div className="jl-news-side">
              <Link className="jl-news-item" href="/events-news">
                <LocalImage
                  name="events-festival.jpg"
                  alt="Local cultural celebrations"
                />
                <div>
                  <h3>Local events & celebrations</h3>
                  <span className="jl-news-read">
                    Explore events ↗
                  </span>
                </div>
              </Link>

              <Link className="jl-news-item" href="/events-news">
                <LocalImage
                  name="events-news.jpg"
                  alt="Local community updates"
                  className="jl-news-announcement-image"
                />

                <div>
                  <h3>News and community announcements</h3>
                  <span className="jl-news-read">
                    Read updates ↗
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
