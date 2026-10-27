
"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const HERO_BACKGROUND = "/images/Modern Pathology Lab Workspace.jpg";

const labs = [
  {
    code: "LAB / 001",
    name: "Dr Lal PathLabs",
    type: "DIAGNOSTIC CENTRE",
    address: "Ground Floor, Main Road, Jartauli More, near Town Area Office, Jattari, Aligarh 202137",
    phone: "+918071318008",
    hours: "Published hours: Mon–Sat, 7:30 AM–8:00 PM; Sunday, 7:30 AM–1:00 PM",
    accent: "featured",
    description:
      "A patient service centre listed for diagnostic testing and blood sample services.",
    href: "https://labs.lalpathlabs.com/location/uttar-pradesh/aligarh/jattari",
  },
  {
    code: "LAB / 002",
    name: "Pathkind Labs",
    type: "PATHOLOGY & DIAGNOSTICS",
    address:
      "Aligarh–Palwal Road, Pachori Market, near Shakhi Sari Showroom, Jattari 202137",
    phone: "+918650598056",
    hours: "Check directly for current timings and test availability.",
    accent: "standard",
    description:
      "A diagnostic collection centre listed in Jattari. Ask about specific tests and sample collection options.",
    href: "https://www.pathkindlabs.com/",
  },
  {
    code: "LAB / 003",
    name: "SRL Pathology Lab",
    type: "BLOOD TESTING",
    address:
      "Sheela Devi Market, near DS Public School, Jartauli Road, Jattari 202137",
    phone: "",
    hours: "Contact or visit to confirm current operating hours.",
    accent: "standard",
    description:
      "A local pathology and blood-testing listing. Publicly available information about its complete test menu is limited.",
    href: "",
  },
  {
    code: "LAB / 004",
    name: "Bharat Diagnostic Centre",
    type: "DIAGNOSTIC CENTRE",
    address: "2MC6+4CJ, Jattari, Uttar Pradesh 202137",
    phone: "+917037435584",
    hours: "Published listing indicates daily hours of 8:00 AM–8:00 PM; confirm before visiting.",
    accent: "standard",
    description:
      "A diagnostic centre listed in Jattari. Confirm the availability of your required investigation directly.",
    href: "",
  },
];

const testCategories = [
  {
    no: "01",
    name: "Blood Tests",
    detail: "Ask about CBC, haemoglobin and other blood investigations.",
    symbol: "B",
  },
  {
    no: "02",
    name: "Diabetes Screening",
    detail: "Check availability of blood glucose and HbA1c tests.",
    symbol: "G",
  },
  {
    no: "03",
    name: "Thyroid Profile",
    detail: "Confirm which thyroid investigations are available.",
    symbol: "T",
  },
  {
    no: "04",
    name: "Health Checkups",
    detail: "Request the exact tests and inclusions in each package.",
    symbol: "H",
  },
];

function LabIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M18 6h12M21 6v12L11 36c-2 3 0 6 4 6h18c4 0 6-3 4-6L27 18V6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 31h16M19 25h10M20 36h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function PathologyLabsPage() {
  return (
    <>
      <Navbar />

      <main className="pathology-page">
        {/* HERO — CINEMATIC LAB ENVIRONMENT */}
        <section
          className="path-hero"
          style={{ backgroundImage: `url("${HERO_BACKGROUND}")` }}
        >
          <div className="path-hero-overlay" />

          <div className="path-hero-copy">
            <span className="path-eyebrow">
              JATTARI HEALTHCARE DIRECTORY / 04
            </span>

            <h1>
              Better insight.
              <br />
              Informed care.
            </h1>

            <p>
              Explore pathology labs and diagnostic centres in Jattari.
              Find local information and confirm the right testing options
              before your visit.
            </p>

            <a href="#laboratory-directory" className="path-cta">
              Explore diagnostic centres <span>↗</span>
            </a>
          </div>

          <div className="hero-lab-graphic" aria-hidden="true">
            <div className="graphic-ring">
              <LabIcon />
            </div>
            <span>TESTING</span>
            <span>INFORMATION</span>
            <div className="graphic-orbit" />
          </div>

          <div className="path-hero-footer">
            <span>PATHOLOGY & DIAGNOSTICS</span>
            <span>JATTARI · UTTAR PRADESH</span>
          </div>
        </section>

        {/* DASHBOARD-STYLE INTRODUCTION */}
        <section className="path-overview">
          <div className="path-overview-heading">
            <span className="path-eyebrow">THE LOCAL PICTURE</span>
            <h2>
              Diagnostics,
              <br />
              made easier to explore.
            </h2>
          </div>

          <div className="path-overview-copy">
            <p>
              Use this directory to compare local diagnostic options,
              check addresses and prepare questions before visiting a lab.
              Tests, charges and reporting times differ by provider.
            </p>

            <div className="overview-status">
              <span className="status-dot" />
              <span>LOCAL DIRECTORY · DETAILS SUBJECT TO CONFIRMATION</span>
            </div>
          </div>

          <div className="path-overview-number">
            <span className="big-number">04</span>
            <span>DIRECTORY ENTRIES</span>
            <div className="number-bars" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </section>

        {/* FEATURED LAB — REPORT-COVER STYLE, NOT A CARD */}
        <section className="featured-lab" id="laboratory-directory">
          <div className="featured-index">
            <span>FEATURED DIRECTORY ENTRY</span>
            <span>001 / 004</span>
          </div>

          <div className="featured-main">
            <div className="featured-visual">
              <div className="visual-grid" />
              <div className="visual-circle visual-circle-one" />
              <div className="visual-circle visual-circle-two" />
              <div className="visual-lab-icon">
                <LabIcon />
              </div>
              <span className="visual-caption">DIAGNOSTIC SERVICES</span>
            </div>

            <div className="featured-copy">
              <span className="featured-label">01 — PATIENT SERVICE CENTRE</span>
              <h2>Dr Lal PathLabs</h2>
              <p>
                A diagnostic and blood-testing service centre listed near
                the Town Area Office at Jartauli More, Jattari.
              </p>

              <div className="featured-address">
                <LocationIcon />
                <span>
                  Ground Floor, Main Road, Jartauli More, near Town Area
                  Office, Jattari, Aligarh 202137
                </span>
              </div>

              <div className="featured-actions">
                <a href="tel:+918071318008" className="path-primary-action">
                  Call laboratory ↗
                </a>
                <a
                  href="https://labs.lalpathlabs.com/location/uttar-pradesh/aligarh/jattari"
                  target="_blank"
                  rel="noreferrer"
                  className="path-text-action"
                >
                  Official website ↗
                </a>
              </div>
            </div>
          </div>

          <div className="featured-bottom">
            <div>
              <span className="micro-label">CONTACT</span>
              <strong>+91 80713 18008</strong>
            </div>
            <div>
              <span className="micro-label">PUBLISHED HOURS</span>
              <strong>Morning to evening</strong>
            </div>
            <div>
              <span className="micro-label">LOCATION</span>
              <strong>Jartauli More, Jattari</strong>
            </div>
          </div>
        </section>

        {/* TEST CATEGORIES — TYPOGRAPHIC DATA GRID, NOT CARDS OR LIST */}
        <section className="test-explorer">
          <div className="test-explorer-heading">
            <span className="path-eyebrow">TEST EXPLORER</span>
            <h2>What are you looking for?</h2>
            <p>
              These are common investigation categories, not a confirmation
              that every listed laboratory provides each test.
            </p>
          </div>

          <div className="test-data-grid">
            {testCategories.map((test) => (
              <div className="test-data-item" key={test.no}>
                <span className="test-no">{test.no}</span>
                <span className="test-symbol">{test.symbol}</span>
                <div className="test-data-copy">
                  <h3>{test.name}</h3>
                  <p>{test.detail}</p>
                </div>
                <span className="test-arrow" aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* LAB DIRECTORY — HORIZONTAL RESEARCH SPREAD */}
        <section className="other-labs">
          <div className="other-labs-heading">
            <div>
              <span className="path-eyebrow">LOCAL DIRECTORY</span>
              <h2>More places to enquire.</h2>
            </div>
            <p>
              Contact each centre to verify its services, current location
              and availability.
            </p>
          </div>

          <div className="lab-research-spread">
            {labs.slice(1).map((lab, index) => (
              <article className="lab-research-entry" key={lab.code}>
                <div className="lab-entry-top">
                  <span>{lab.code}</span>
                  <span className="entry-symbol">
                    {index === 0 ? "P" : index === 1 ? "S" : "D"}
                  </span>
                </div>

                <span className="lab-entry-type">{lab.type}</span>
                <h3>{lab.name}</h3>
                <p>{lab.description}</p>

                <div className="lab-entry-address">
                  <LocationIcon />
                  <span>{lab.address}</span>
                </div>

                {lab.phone && (
                  <a className="lab-phone" href={`tel:${lab.phone}`}>
                    Call {lab.phone} ↗
                  </a>
                )}

                {lab.href && (
                  <a
                    className="lab-phone"
                    href={lab.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit website ↗
                  </a>
                )}

                <div className="lab-entry-hours">{lab.hours}</div>
              </article>
            ))}
          </div>
        </section>

        {/* BEFORE TESTING — TIMELINE FORMAT */}
        <section className="testing-timeline">
          <div className="timeline-intro">
            <span className="path-eyebrow">BEFORE YOU GO</span>
            <h2>
              Four things
              <br />
              worth checking.
            </h2>
          </div>

          <div className="timeline-steps">
            <div className="timeline-step">
              <span>01</span>
              <div>
                <h3>Prescription</h3>
                <p>Check whether your test requires a doctor prescription.</p>
              </div>
            </div>

            <div className="timeline-step">
              <span>02</span>
              <div>
                <h3>Preparation</h3>
                <p>Ask if fasting or any other preparation is necessary.</p>
              </div>
            </div>

            <div className="timeline-step">
              <span>03</span>
              <div>
                <h3>Price & report</h3>
                <p>Confirm charges and the expected reporting time.</p>
              </div>
            </div>

            <div className="timeline-step">
              <span>04</span>
              <div>
                <h3>Sample collection</h3>
                <p>Ask about collection timings and home-sample availability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="path-disclaimer">
          <span className="disclaimer-mark">i</span>
          <p>
            <strong>Important:</strong> This page is a general directory,
            not a medical recommendation. Verify provider details, test
            availability, fees, qualifications and report timelines directly.
            Consult a qualified healthcare professional about which tests
            you need and how to interpret the results.
          </p>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .pathology-page {
          --path-cream: #fffdf8;
          --path-soft: #fff5e1;
          --path-teal: #103f40;
          --path-teal-light: #164e52;
          --path-gold: #c69550;
          --path-muted: #687d7c;
          --path-border: #e5e1d7;
          background: var(--path-cream);
          color: var(--path-teal);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pathology-page * {
          box-sizing: border-box;
        }

        .pathology-page a {
          text-decoration: none;
        }

        .pathology-page svg {
          width: 100%;
          height: 100%;
        }

        .path-hero {
          position: relative;
          isolation: isolate;
          min-height: 490px;
          display: flex;
          align-items: center;
          color: white;
          background-color: var(--path-teal);
          background-size: cover;
          background-position: center;
        }

        .path-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(5, 42, 43, 0.97) 0%,
            rgba(7, 51, 52, 0.89) 36%,
            rgba(7, 51, 52, 0.4) 72%,
            rgba(7, 51, 52, 0.15) 100%
          );
        }

        .path-hero-copy {
          width: min(700px, 70%);
          margin-left: max(6%, calc((100% - 1280px) / 2));
          padding: 86px 0 83px;
          position: relative;
          z-index: 1;
        }

        .path-eyebrow {
          display: block;
          color: var(--path-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          line-height: 1.7;
        }

        .path-hero .path-eyebrow {
          color: #e4bd84;
        }

        .path-hero-copy h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          letter-spacing: -2px;
          font-size: clamp(48px, 6.2vw, 80px);
          line-height: 0.99;
          margin: 19px 0;
        }

        .path-hero-copy p {
          color: rgba(255, 255, 255, 0.86);
          font-size: 14px;
          line-height: 1.9;
          max-width: 480px;
          margin: 0 0 25px;
        }

        .path-cta {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 13px 17px 13px 21px;
          background: var(--path-cream);
          color: var(--path-teal);
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          transition: transform 0.25s ease;
        }

        .path-cta:hover {
          transform: translateY(-3px);
        }

        .path-cta span {
          color: var(--path-gold);
          font-size: 19px;
        }

        .hero-lab-graphic {
          position: absolute;
          right: 9%;
          top: 50%;
          transform: translateY(-50%);
          width: 180px;
          height: 180px;
          border: 1px solid rgba(230, 191, 133, 0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 9px;
          color: #fff;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .graphic-ring {
          display: grid;
          place-items: center;
          width: 75px;
          height: 75px;
          border: 1px solid rgba(230, 191, 133, 0.9);
          border-radius: 50%;
          color: #e6bf85;
          padding: 18px;
        }

        .graphic-orbit {
          position: absolute;
          inset: -17px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          border-right-color: transparent;
          transform: rotate(-30deg);
        }

        .path-hero-footer {
          position: absolute;
          bottom: 19px;
          left: max(6%, calc((100% - 1280px) / 2));
          right: 6%;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          font-size: 8px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.65);
        }

        .path-overview {
          max-width: 1280px;
          margin: 0 auto;
          padding: 76px 35px 60px;
          display: grid;
          grid-template-columns: 1.15fr 1.35fr 0.6fr;
          gap: 45px;
          align-items: end;
        }

        .path-overview-heading h2,
        .test-explorer-heading h2,
        .other-labs-heading h2,
        .timeline-intro h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(35px, 4vw, 49px);
          font-weight: 400;
          letter-spacing: -1.5px;
          line-height: 1.07;
          margin: 15px 0 0;
        }

        .path-overview-copy {
          padding-left: 25px;
          border-left: 1px solid var(--path-border);
        }

        .path-overview-copy p {
          margin: 0;
          font-size: 13px;
          color: var(--path-muted);
          line-height: 1.95;
        }

        .overview-status {
          margin-top: 17px;
          display: flex;
          gap: 9px;
          align-items: center;
          font-size: 8px;
          letter-spacing: 1px;
          color: #8a785e;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          background: var(--path-gold);
          border-radius: 50%;
          flex: 0 0 auto;
        }

        .path-overview-number {
          padding-left: 20px;
          border-left: 1px solid var(--path-border);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .big-number {
          font-family: Georgia, "Times New Roman", serif;
          color: var(--path-gold);
          font-size: 58px;
          line-height: 1;
        }

        .path-overview-number > span:nth-child(2) {
          font-size: 8px;
          letter-spacing: 1.7px;
          color: var(--path-muted);
        }

        .number-bars {
          display: flex;
          gap: 4px;
          margin-top: 5px;
        }

        .number-bars i {
          display: block;
          width: 19px;
          height: 3px;
          background: var(--path-gold);
        }

        .number-bars i:nth-child(2) {
          opacity: 0.7;
        }

        .number-bars i:nth-child(3) {
          opacity: 0.45;
        }

        .number-bars i:nth-child(4) {
          opacity: 0.2;
        }

        .featured-lab {
          max-width: 1210px;
          margin: 0 auto;
          padding: 0 35px 80px;
        }

        .featured-index {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 0;
          border-top: 1px solid var(--path-border);
          border-bottom: 1px solid var(--path-border);
          color: #9a805d;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .featured-main {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 65px;
          padding: 30px 0;
          align-items: center;
        }

        .featured-visual {
          min-height: 350px;
          position: relative;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(198, 149, 80, 0.18),
              transparent 37%
            ),
            linear-gradient(145deg, #e6ece5, #f5eee0);
        }

        .visual-grid {
          position: absolute;
          inset: 0;
          opacity: 0.25;
          background-image: linear-gradient(
              rgba(16, 63, 64, 0.13) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(16, 63, 64, 0.13) 1px,
              transparent 1px
            );
          background-size: 35px 35px;
          mask-image: linear-gradient(135deg, black, transparent 90%);
        }

        .visual-circle {
          position: absolute;
          border: 1px solid rgba(16, 63, 64, 0.22);
          border-radius: 50%;
        }

        .visual-circle-one {
          width: 245px;
          height: 245px;
        }

        .visual-circle-two {
          width: 180px;
          height: 180px;
          border-color: rgba(198, 149, 80, 0.65);
        }

        .visual-lab-icon {
          position: relative;
          z-index: 1;
          width: 100px;
          height: 100px;
          padding: 27px;
          border-radius: 50%;
          background: var(--path-teal);
          color: #f4d5a2;
          box-shadow: 0 20px 50px rgba(16, 63, 64, 0.18);
        }

        .visual-caption {
          position: absolute;
          bottom: 19px;
          left: 20px;
          color: var(--path-teal);
          font-size: 8px;
          letter-spacing: 2px;
        }

        .featured-copy {
          padding: 10px 0;
        }

        .featured-label {
          color: var(--path-gold);
          font-size: 9px;
          letter-spacing: 1.8px;
        }

        .featured-copy h2 {
          margin: 16px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: clamp(36px, 4vw, 51px);
          letter-spacing: -1.5px;
          line-height: 1.1;
        }

        .featured-copy > p {
          color: var(--path-muted);
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 22px;
          max-width: 470px;
        }

        .featured-address {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          max-width: 470px;
          padding: 16px 0;
          border-top: 1px solid var(--path-border);
          border-bottom: 1px solid var(--path-border);
          font-size: 11px;
          line-height: 1.8;
          color: var(--path-muted);
        }

        .featured-address svg,
        .lab-entry-address svg {
          width: 18px;
          height: 18px;
          flex: 0 0 auto;
          color: var(--path-gold);
        }

        .featured-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
          margin-top: 23px;
        }

        .path-primary-action {
          display: inline-block;
          background: var(--path-teal);
          color: white;
          padding: 13px 18px;
          font-size: 11px;
          letter-spacing: 0.3px;
          transition: background 0.2s ease;
        }

        .path-primary-action:hover {
          background: var(--path-teal-light);
        }

        .path-text-action,
        .lab-phone {
          color: var(--path-teal);
          font-size: 11px;
          border-bottom: 1px solid var(--path-gold);
          padding-bottom: 4px;
        }

        .featured-bottom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #f1f0e8;
          padding: 22px 25px;
          gap: 20px;
        }

        .featured-bottom > div {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 18px;
          border-left: 1px solid #d9d7ca;
        }

        .micro-label {
          color: #9a805d;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .featured-bottom strong {
          font-size: 11px;
          font-weight: 500;
          color: var(--path-teal);
        }

        .test-explorer {
          background: var(--path-teal);
          color: white;
          padding: 67px max(6%, calc((100% - 1210px) / 2)) 73px;
        }

        .test-explorer-heading {
          max-width: 620px;
          margin-bottom: 37px;
        }

        .test-explorer-heading h2 {
          color: white;
          font-size: clamp(34px, 4vw, 46px);
        }

        .test-explorer-heading > p {
          margin: 15px 0 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 12px;
          line-height: 1.9;
        }

        .test-data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          border-left: 1px solid rgba(255, 255, 255, 0.2);
        }

        .test-data-item {
          min-width: 0;
          min-height: 135px;
          display: grid;
          grid-template-columns: 35px 43px minmax(0, 1fr) 20px;
          align-items: start;
          gap: 17px;
          padding: 24px 20px;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: background 0.25s ease;
        }

        .test-data-item:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .test-no {
          color: #d5b17c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
        }

        .test-symbol {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(213, 177, 124, 0.65);
          border-radius: 50%;
          color: #e3c18d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
        }

        .test-data-copy h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          font-weight: 400;
          margin: 0 0 8px;
        }

        .test-data-copy p {
          color: rgba(255, 255, 255, 0.65);
          font-size: 11px;
          line-height: 1.8;
          margin: 0;
        }

        .test-arrow {
          color: #d5b17c;
          font-size: 18px;
        }

        .other-labs {
          max-width: 1280px;
          margin: 0 auto;
          padding: 78px 35px 83px;
        }

        .other-labs-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 38px;
        }

        .other-labs-heading h2 {
          font-size: clamp(34px, 4vw, 46px);
        }

        .other-labs-heading > p {
          max-width: 350px;
          border-left: 1px solid var(--path-border);
          padding-left: 20px;
          color: var(--path-muted);
          font-size: 12px;
          line-height: 1.9;
          margin: 0 0 5px;
        }

        .lab-research-spread {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--path-border);
          border-bottom: 1px solid var(--path-border);
        }

        .lab-research-entry {
          padding: 24px 23px 25px 0;
          min-width: 0;
        }

        .lab-research-entry + .lab-research-entry {
          border-left: 1px solid var(--path-border);
          padding-left: 23px;
        }

        .lab-entry-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--path-border);
          color: #9a805d;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .entry-symbol {
          width: 35px;
          height: 35px;
          display: grid;
          place-items: center;
          border: 1px solid #d9c29e;
          color: var(--path-teal);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
          border-radius: 50%;
        }

        .lab-entry-type {
          display: block;
          color: var(--path-gold);
          font-size: 8px;
          letter-spacing: 1.5px;
          margin-top: 20px;
        }

        .lab-research-entry h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 25px;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 10px 0;
        }

        .lab-research-entry > p {
          color: var(--path-muted);
          font-size: 11px;
          line-height: 1.85;
          min-height: 60px;
          margin: 0 0 16px;
        }

        .lab-entry-address {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 15px 0;
          border-top: 1px solid var(--path-border);
          border-bottom: 1px solid var(--path-border);
          color: var(--path-muted);
          font-size: 10px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .lab-phone {
          display: inline-block;
          margin-top: 15px;
          margin-right: 13px;
        }

        .lab-entry-hours {
          margin-top: 16px;
          color: #9a805d;
          font-size: 9px;
          line-height: 1.8;
        }

        .testing-timeline {
          background: #f0f1e9;
          padding: 66px max(6%, calc((100% - 1210px) / 2)) 70px;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 70px;
        }

        .timeline-intro h2 {
          font-size: clamp(35px, 4vw, 46px);
        }

        .timeline-steps {
          border-top: 1px solid #d8dbd0;
        }

        .timeline-step {
          display: grid;
          grid-template-columns: 45px 1fr;
          gap: 18px;
          padding: 19px 0;
          border-bottom: 1px solid #d8dbd0;
        }

        .timeline-step > span {
          color: var(--path-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
        }

        .timeline-step h3 {
          margin: 0 0 6px;
          font-size: 13px;
          font-weight: 600;
        }

        .timeline-step p {
          color: var(--path-muted);
          margin: 0;
          font-size: 11px;
          line-height: 1.8;
        }

        .path-disclaimer {
          max-width: 1210px;
          margin: 35px auto 45px;
          padding: 18px 22px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          border: 1px solid var(--path-border);
        }

        .disclaimer-mark {
          width: 23px;
          height: 23px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border: 1px solid var(--path-gold);
          border-radius: 50%;
          color: var(--path-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13px;
        }

        .path-disclaimer p {
          color: var(--path-muted);
          font-size: 10px;
          line-height: 1.9;
          margin: 0;
        }

        .path-disclaimer strong {
          color: var(--path-teal);
        }

        @media (max-width: 900px) {
          .hero-lab-graphic {
            right: 5%;
            transform: translateY(-50%) scale(0.8);
            transform-origin: right center;
          }

          .path-overview {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }

          .path-overview-number {
            grid-column: 1 / -1;
            flex-direction: row;
            align-items: center;
            gap: 15px;
            padding: 15px 0 0;
            border-left: 0;
            border-top: 1px solid var(--path-border);
          }

          .big-number {
            font-size: 40px;
          }

          .featured-main {
            gap: 30px;
          }

          .featured-visual {
            min-height: 300px;
          }

          .lab-research-spread {
            grid-template-columns: 1fr 1fr;
          }

          .lab-research-entry:nth-child(3) {
            grid-column: 1 / -1;
            border-left: 0;
            border-top: 1px solid var(--path-border);
            padding-left: 0;
          }

          .testing-timeline {
            grid-template-columns: 1fr 1.2fr;
            gap: 30px;
          }

          .path-disclaimer {
            margin-left: 25px;
            margin-right: 25px;
          }
        }

        @media (max-width: 600px) {
          .path-hero {
            min-height: 570px;
            align-items: flex-end;
            background-position: 60% center;
          }

          .path-hero-overlay {
            background: linear-gradient(
              0deg,
              rgba(5, 42, 43, 0.98) 0%,
              rgba(7, 51, 52, 0.88) 48%,
              rgba(7, 51, 52, 0.2) 100%
            );
          }

          .path-hero-copy {
            width: 100%;
            margin: 0;
            padding: 120px 24px 76px;
          }

          .path-hero-copy h1 {
            font-size: clamp(43px, 12vw, 61px);
          }

          .path-hero-copy p {
            font-size: 12px;
          }

          .hero-lab-graphic {
            top: 18px;
            right: 25px;
            transform: scale(0.58);
            transform-origin: top right;
          }

          .path-hero-footer {
            left: 24px;
            right: 24px;
            font-size: 7px;
            letter-spacing: 1px;
          }

          .path-overview {
            padding: 52px 24px 42px;
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .path-overview-heading h2,
          .test-explorer-heading h2,
          .other-labs-heading h2,
          .timeline-intro h2 {
            font-size: 37px;
          }

          .path-overview-copy {
            padding-left: 17px;
          }

          .path-overview-number {
            grid-column: auto;
          }

          .featured-lab {
            padding: 0 24px 55px;
          }

          .featured-index {
            font-size: 7px;
            letter-spacing: 0.8px;
          }

          .featured-main {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 24px 0;
          }

          .featured-visual {
            min-height: 245px;
          }

          .visual-circle-one {
            width: 190px;
            height: 190px;
          }

          .visual-circle-two {
            width: 145px;
            height: 145px;
          }

          .featured-copy h2 {
            font-size: 39px;
          }

          .featured-bottom {
            grid-template-columns: 1fr;
            gap: 17px;
            padding: 20px;
          }

          .featured-bottom > div {
            padding-left: 12px;
          }

          .test-explorer {
            padding: 48px 24px;
          }

          .test-data-grid {
            grid-template-columns: 1fr;
          }

          .test-data-item {
            grid-template-columns: 25px 37px minmax(0, 1fr) 15px;
            gap: 10px;
            padding: 19px 12px;
          }

          .test-symbol {
            width: 34px;
            height: 34px;
          }

          .test-data-copy h3 {
            font-size: 18px;
          }

          .other-labs {
            padding: 52px 24px;
          }

          .other-labs-heading {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .other-labs-heading > p {
            padding-left: 15px;
          }

          .lab-research-spread {
            grid-template-columns: 1fr;
          }

          .lab-research-entry,
          .lab-research-entry + .lab-research-entry,
          .lab-research-entry:nth-child(3) {
            grid-column: auto;
            border-left: 0;
            border-top: 1px solid var(--path-border);
            padding: 22px 0;
          }

          .lab-research-entry:first-child {
            border-top: 0;
          }

          .lab-research-entry > p {
            min-height: 0;
          }

          .testing-timeline {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 48px 24px;
          }

          .path-disclaimer {
            margin: 24px 24px 32px;
            padding: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pathology-page *,
          .pathology-page *::before,
          .pathology-page *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
