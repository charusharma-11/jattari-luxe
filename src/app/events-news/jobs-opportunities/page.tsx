
"use client";

import "./jobs-opportunities.css";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const jobs = [
  {
    title: "IT & Software",
    desc: "Explore software development, computer operator, technical support and internship opportunities.",
    image: "", // Add your image path here
    link: "https://www.linkedin.com/jobs/",
  },
  {
    title: "Teaching & Education",
    desc: "Discover teaching, tutoring, school administration and educational opportunities.",
    image: "", // Add your image path here
    link: "https://www.ncs.gov.in/",
  },
  {
    title: "Sales & Marketing",
    desc: "Find opportunities in sales, customer service, digital marketing and business development.",
    image: "", // Add your image path here
    link: "https://www.linkedin.com/jobs/",
  },
  {
    title: "Government Jobs",
    desc: "Check official recruitment notices, eligibility criteria and examination updates.",
    image: "", // Add your image path here
    link: "https://www.ncs.gov.in/",
  },
  {
    title: "Local Jobs & Internships",
    desc: "Explore entry-level roles, internships and employment opportunities around Jattari.",
    image: "", // Add your image path here
    link: "https://www.linkedin.com/jobs/",
  },
];

const tips = [
  "Create a clear and professional resume.",
  "Prepare for interviews and improve communication skills.",
  "Build practical skills through projects and internships.",
  "Verify employers and never pay for guaranteed job offers.",
];

export default function JobsOpportunitiesPage() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.desc}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="jobs-page">
        <section className="jobs-hero">
          {/* Add your hero background image in CSS */}
          <div className="hero-content">
            <span>JATTARI · CAREERS · OPPORTUNITIES</span>
            <h1>
              Discover Opportunities.
              <br />
              <em>Build Your Future.</em>
            </h1>
            <p>
              Explore career pathways, local employment options
              and useful resources to take your next professional step.
            </p>
            <a href="#job-categories" className="jobs-btn">
              Explore Careers ↗
            </a>
          </div>
        </section>

        <section className="jobs-intro">
          <span className="label">YOUR CAREER JOURNEY</span>
          <h2>
            Find your path.
            <br />
            <em>Grow with confidence.</em>
          </h2>
          <p>
            From fresh graduates to experienced professionals,
            discover different career fields and learn how to
            prepare for opportunities in Jattari and nearby areas.
          </p>
        </section>

        <section className="jobs-section" id="job-categories">
          <div className="section-heading">
            <div>
              <span className="label">EXPLORE CAREERS</span>
              <h2>Career <em>Categories</em></h2>
            </div>
            <p>Search for a field that matches your interests and skills.</p>
          </div>

          <input
            className="job-search"
            type="search"
            placeholder="Search jobs or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <article className="job-card" key={job.title}>
                {job.image && (
                  <img src={job.image} alt={job.title} loading="lazy" />
                )}
                <div className="job-content">
                  <h3>{job.title}</h3>
                  <p>{job.desc}</p>
                  <a href={job.link} target="_blank" rel="noreferrer">
                    Explore Opportunities ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="notice">
            These are career categories, not verified vacancies.
            Check the employer, eligibility and application details
            before applying.
          </p>
        </section>

        <section className="career-tips">
          <div className="tips-inner">
            <div>
              <span className="label">CAREER GUIDANCE</span>
              <h2>
                Take the next step
                <br />
                <em>with confidence.</em>
              </h2>
              <p>
                A few practical steps can help you prepare for your
                next career opportunity.
              </p>
              <a
                href="https://www.ncs.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="tips-link"
              >
                Visit National Career Service ↗
              </a>
            </div>

            <div className="tips-list">
              {tips.map((tip, index) => (
                <div className="tip" key={tip}>
                  <span>0{index + 1}</span>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="jobs-cta">
          <span className="label">JATTARI LUXE · CAREER RESOURCES</span>
          <h2>
            Your future starts
            <br />
            <em>with one step.</em>
          </h2>
          <p>
            Keep learning, prepare your resume and explore
            trusted job resources.
          </p>
          <a
            href="https://www.linkedin.com/jobs/"
            target="_blank"
            rel="noreferrer"
            className="jobs-btn"
          >
            Search Jobs ↗
          </a>
        </section>
      </main>

      <Footer />

    </>
  );
}
