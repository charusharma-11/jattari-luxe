
"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const HERO_BACKGROUND = "/images/Modern Teal Dental Clinic Interior.jpg";

const clinics = [
  {
    number: "01",
    name: "Shivaay Dental Care & Implant Centre",
    category: "DENTAL CARE · IMPLANTS",
    address: "Jattari, Uttar Pradesh 202137",
    description:
      "A local dental clinic and implant centre in Jattari. Contact the clinic to confirm available treatments and appointment timings.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",
    shape: "portrait",
  },
  {
    number: "02",
    name: "Orra Dental Clinic",
    category: "GENERAL DENTAL CARE",
    address:
      "Behind TVS showroom, near Escort agency, Jattari, Uttar Pradesh 202137",
    description:
      "A dental clinic located behind the TVS showroom near Escort agency. Confirm its current location and consultation timings before visiting.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85",
    shape: "wide",
  },
  {
    number: "03",
    name: "Seva Dental and Oral Care Clinic",
    category: "DENTAL & ORAL CARE",
    address: "SH 22A, Jattari, Uttar Pradesh 202137",
    description:
      "A dental and oral-care clinic listed along SH 22A in Jattari. Contact the clinic to confirm services and availability.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85",
    shape: "wide",
  },
  {
    number: "04",
    name: "Indu Dant Clinic",
    category: "DENTAL CLINIC",
    address: "2M96+QFX, Unnamed Road, Jattari, Uttar Pradesh 202137",
    description:
      "A dental clinic listing in Jattari. Verify the exact location and appointment availability before travelling.",
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1000&q=85",
    shape: "portrait",
  },
  {
    number: "05",
    name: "Attri Dental Clinic",
    category: "DENTAL PRACTICE",
    address: "Jattari, Uttar Pradesh 202137",
    description:
      "A dental practice listed in Jattari. Contact the clinic directly to confirm its services, timings and availability.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",
    shape: "wide",
  },
];

const nearbyClinics = [
  {
    name: "Vishwakarma Dental Care",
    area: "GHANGHAULI",
    address: "01, Jattari Road, Ghanghauli, Uttar Pradesh 202165",
    description:
      "A dental-care option on Jattari Road in Ghanghauli for residents of surrounding areas.",
    image:
      "https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bharat Dental Clinic",
    area: "TAPPAL",
    address:
      "Shop No. 11, Aligarh–Palwal Road, near Sarkari Hospital, Tappal, Uttar Pradesh 202165",
    description:
      "A dental clinic listed on the Aligarh–Palwal Road near the government hospital in Tappal.",
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=85",
  },
];

function ToothMark({ light = false }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={`tooth-mark ${light ? "tooth-mark-light" : ""}`}
    >
      <path
        d="M17 12C8 17 11 30 16 39C19 45 20 54 25 54C30 54 28 38 32 38C36 38 34 54 40 54C46 54 46 43 50 35C56 22 51 12 42 11C37 10 35 15 32 15C28 15 23 9 17 12Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 22C24 18 28 20 30 23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 10C19 15 12 22 12 22S5 15 5 10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function DentalClinicsPage() {
  return (
    <>
      <Navbar />

      <main className="dental-page">
        {/* HERO */}
        <section
          className="dental-hero"
          style={{ backgroundImage: `url("${HERO_BACKGROUND}")` }}
        >
          <div className="hero-shade" />

          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">
              JATTARI HEALTHCARE DIRECTORY
            </span>

            <h1>
              Dental Care
              <br />
              in Jattari
            </h1>

            <p>
              Find dental clinics in Jattari and nearby areas. Explore local
              options and useful location details to help plan your visit.
            </p>

            <a href="#local-clinics" className="hero-cta">
              Explore clinics <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-emblem" aria-hidden="true">
            <div className="hero-emblem-circle">
              <ToothMark light />
            </div>
            <span>HEALTHY SMILES</span>
            <span>BRIGHTER TOMORROWS</span>
          </div>

          <div className="hero-bottom-label">
            <span>LOCAL DIRECTORY</span>
            <span>01 — 05</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="dental-intro" id="local-clinics">
          <div className="intro-heading">
            <span className="eyebrow">YOUR LOCAL GUIDE</span>
            <h2>
              Find care.
              <br />
              Feel confident.
            </h2>
          </div>

          <div className="intro-description">
            <p>
              Whether you are looking for a routine dental consultation or
              exploring local oral-care options, start with this directory of
              clinics in Jattari and neighbouring areas.
            </p>
            <p className="intro-note">
              Call ahead to confirm current services, timings and appointments.
            </p>
          </div>

          <div className="intro-stat">
            <span className="stat-number">05</span>
            <span className="stat-label">LOCAL CLINIC ENTRIES</span>
            <span className="stat-rule" />
          </div>
        </section>

        {/* EDITORIAL CLINIC SHOWCASE — NOT CARDS OR A STANDARD LIST */}
        <section className="clinic-editorial">
          {clinics.map((clinic, index) => (
            <article
              className={`clinic-feature clinic-feature-${index + 1}`}
              key={clinic.number}
            >
              <div className={`clinic-photo clinic-photo-${clinic.shape}`}>
                <img src={clinic.image} alt="" loading="lazy" />
                <span className="photo-index">{clinic.number}</span>
                <span className="photo-caption">JATTARI · DENTAL CARE</span>
              </div>

              <div className="clinic-content">
                <div className="clinic-overline">
                  <ToothMark />
                  <span>{clinic.category}</span>
                </div>

                <h3>{clinic.name}</h3>
                <p className="clinic-description">{clinic.description}</p>

                <div className="clinic-address">
                  <span className="address-icon">
                    <PinMark />
                  </span>
                  <span>{clinic.address}</span>
                </div>

                <div className="clinic-bottom">
                  <span>LOCAL DIRECTORY</span>
                  <span>{clinic.number} / 05</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* SERVICES STRIP — ANOTHER FORMAT, NOT CARDS */}
        <section className="care-strip">
          <div className="care-strip-title">
            <span className="eyebrow">BEFORE YOUR VISIT</span>
            <h2>Make your visit count.</h2>
          </div>

          <div className="care-tip">
            <span className="tip-number">01</span>
            <div>
              <h3>Call ahead</h3>
              <p>Check opening hours and appointment availability.</p>
            </div>
          </div>

          <div className="care-tip">
            <span className="tip-number">02</span>
            <div>
              <h3>Ask about treatment</h3>
              <p>Confirm whether the clinic offers the service you need.</p>
            </div>
          </div>

          <div className="care-tip">
            <span className="tip-number">03</span>
            <div>
              <h3>Verify the address</h3>
              <p>Confirm the location before travelling.</p>
            </div>
          </div>
        </section>

        {/* NEARBY AREAS — IMAGE + TYPOGRAPHIC SPREAD */}
        <section className="nearby-section">
          <div className="nearby-heading">
            <div>
              <span className="eyebrow">EXPLORE NEARBY</span>
              <h2>
                Beyond
                <br />
                Jattari
              </h2>
            </div>

            <p>
              Looking a little further? These directory entries are in nearby
              areas. Check the address and availability before your visit.
            </p>
          </div>

          <div className="nearby-showcase">
            {nearbyClinics.map((clinic, index) => (
              <article className="nearby-feature" key={clinic.name}>
                <div className="nearby-image">
                  <img src={clinic.image} alt="" loading="lazy" />
                  <span className="nearby-image-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="nearby-copy">
                  <span className="nearby-area">
                    <PinMark /> {clinic.area}
                  </span>
                  <h3>{clinic.name}</h3>
                  <p>{clinic.description}</p>
                  <div className="nearby-address">{clinic.address}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="dental-disclaimer">
          <span className="disclaimer-icon">i</span>
          <p>
            <strong>Directory information:</strong> Clinic details may change.
            Confirm address, dentist qualifications, treatment availability,
            fees and opening hours directly with the provider. This page is for
            general information and is not a substitute for professional dental
            advice.
          </p>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .dental-page {
          --dental-cream: #fffdf8;
          --dental-soft: #fff5e1;
          --dental-teal: #103f40;
          --dental-teal-light: #164e52;
          --dental-gold: #c69550;
          --dental-ink: #183f40;
          --dental-muted: #637979;
          background: var(--dental-cream);
          color: var(--dental-ink);
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .dental-page * {
          box-sizing: border-box;
        }

        .dental-page img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .dental-page a {
          text-decoration: none;
        }

        .dental-hero {
          min-height: 490px;
          position: relative;
          display: flex;
          align-items: center;
          background-color: var(--dental-teal);
          background-size: cover;
          background-position: center 48%;
          color: white;
          isolation: isolate;
        }

        .hero-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(4, 44, 44, 0.97) 0%,
            rgba(7, 53, 53, 0.88) 31%,
            rgba(7, 53, 53, 0.38) 64%,
            rgba(7, 53, 53, 0.15) 100%
          );
        }

        .hero-copy {
          width: min(720px, 65%);
          padding: 86px 0 82px;
          margin-left: max(6%, calc((100% - 1320px) / 2));
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          color: var(--dental-gold);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .hero-eyebrow {
          color: #e6bf85;
          font-size: 12px;
          letter-spacing: 3px;
        }

        .hero-copy h1,
        .intro-heading h2,
        .nearby-heading h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          letter-spacing: -1.8px;
        }

        .hero-copy h1 {
          font-size: clamp(48px, 6.1vw, 82px);
          line-height: 0.99;
          margin: 20px 0 20px;
          max-width: 640px;
        }

        .hero-copy p {
          color: rgba(255, 255, 255, 0.88);
          max-width: 490px;
          font-size: 15px;
          line-height: 1.8;
          margin: 0 0 25px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          padding: 13px 18px 13px 22px;
          border-radius: 100px;
          background: var(--dental-cream);
          color: var(--dental-teal);
          font-size: 13px;
          font-weight: 700;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .hero-cta span {
          display: grid;
          place-items: center;
          width: 25px;
          height: 25px;
          border: 1px solid var(--dental-gold);
          border-radius: 50%;
          color: var(--dental-gold);
          font-size: 17px;
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          background: var(--dental-soft);
        }

        .hero-emblem {
          position: absolute;
          right: 7%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 11px;
          color: white;
          font-size: 10px;
          letter-spacing: 3px;
          text-align: center;
        }

        .hero-emblem-circle {
          width: 100px;
          height: 100px;
          border: 1px solid rgba(230, 191, 133, 0.95);
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin-bottom: 8px;
        }

        .tooth-mark {
          width: 29px;
          height: 29px;
          color: var(--dental-gold);
          flex: 0 0 auto;
        }

        .tooth-mark-light {
          width: 48px;
          height: 48px;
          color: white;
        }

        .hero-bottom-label {
          position: absolute;
          bottom: 20px;
          left: max(6%, calc((100% - 1320px) / 2));
          right: 6%;
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.68);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .dental-intro {
          max-width: 1320px;
          margin: 0 auto;
          padding: 83px 35px 55px;
          display: grid;
          grid-template-columns: 1.1fr 1.35fr 0.55fr;
          gap: 60px;
          align-items: end;
        }

        .intro-heading h2,
        .nearby-heading h2 {
          font-size: clamp(38px, 4.2vw, 55px);
          line-height: 1.04;
          margin: 17px 0 0;
        }

        .intro-description {
          border-left: 1px solid #dfd8c8;
          padding-left: 28px;
          padding-bottom: 3px;
        }

        .intro-description p {
          color: var(--dental-muted);
          font-size: 14px;
          line-height: 1.9;
          margin: 0 0 13px;
        }

        .intro-description .intro-note {
          font-size: 12px;
          color: #9a7849;
          margin: 0;
        }

        .intro-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 7px;
          padding-left: 22px;
          border-left: 1px solid #dfd8c8;
        }

        .stat-number {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 55px;
          line-height: 1;
          color: var(--dental-gold);
        }

        .stat-label {
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--dental-muted);
        }

        .stat-rule {
          margin-top: 8px;
          width: 52px;
          height: 1px;
          background: var(--dental-gold);
        }

        .clinic-editorial {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 35px 76px;
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          column-gap: 30px;
          row-gap: 46px;
        }

        .clinic-feature {
          position: relative;
          min-width: 0;
          display: grid;
          align-items: center;
          gap: 25px;
          padding-bottom: 28px;
          border-bottom: 1px solid #e8e2d6;
          animation: dentalReveal 0.7s ease both;
        }

        .clinic-feature-1,
        .clinic-feature-2 {
          grid-column: span 6;
          grid-template-columns: minmax(130px, 0.85fr) minmax(0, 1.15fr);
        }

        .clinic-feature-3,
        .clinic-feature-4,
        .clinic-feature-5 {
          grid-column: span 4;
          grid-template-columns: minmax(95px, 0.85fr) minmax(0, 1.15fr);
          gap: 18px;
        }

        .clinic-feature-2 {
          border-left: 1px solid #e8e2d6;
          padding-left: 28px;
        }

        .clinic-photo {
          height: 230px;
          position: relative;
          overflow: visible;
          background: #e8eee5;
          border-radius: 150px 150px 9px 9px;
        }

        .clinic-photo-wide {
          height: 205px;
          border-radius: 8px 90px 8px 8px;
        }

        .clinic-photo img {
          border-radius: inherit;
          transition: transform 0.55s ease;
        }

        .clinic-feature:hover .clinic-photo img,
        .nearby-feature:hover .nearby-image img {
          transform: scale(1.045);
        }

        .photo-index {
          position: absolute;
          top: 13px;
          right: -13px;
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: var(--dental-gold);
          color: white;
          display: grid;
          place-items: center;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          border: 3px solid var(--dental-cream);
        }

        .photo-caption {
          position: absolute;
          bottom: 12px;
          left: 12px;
          color: white;
          font-size: 8px;
          letter-spacing: 1.5px;
          background: rgba(8, 50, 50, 0.72);
          padding: 7px 9px;
        }

        .clinic-content {
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .clinic-overline {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 13px;
        }

        .clinic-overline .tooth-mark {
          width: 24px;
          height: 24px;
        }

        .clinic-overline span {
          color: var(--dental-muted);
          font-size: 9px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .clinic-content h3,
        .nearby-copy h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          letter-spacing: -0.5px;
          color: var(--dental-teal);
          font-size: 25px;
          line-height: 1.13;
          margin: 0 0 12px;
        }

        .clinic-description {
          color: var(--dental-muted);
          font-size: 12px;
          line-height: 1.8;
          margin: 0 0 17px;
        }

        .clinic-address {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #526d6c;
          font-size: 11px;
          line-height: 1.65;
          overflow-wrap: anywhere;
        }

        .address-icon {
          color: var(--dental-gold);
          width: 16px;
          height: 16px;
          flex: 0 0 auto;
        }

        .address-icon svg,
        .nearby-area svg {
          width: 100%;
          height: 100%;
        }

        .clinic-bottom {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 8px;
          margin-top: 20px;
          padding-top: 10px;
          border-top: 1px solid #e8e2d6;
          color: #9a8a71;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .clinic-feature-3 .clinic-photo,
        .clinic-feature-4 .clinic-photo,
        .clinic-feature-5 .clinic-photo {
          height: 185px;
        }

        .clinic-feature-3 .clinic-content h3,
        .clinic-feature-4 .clinic-content h3,
        .clinic-feature-5 .clinic-content h3 {
          font-size: 20px;
        }

        .clinic-feature-3 .clinic-description,
        .clinic-feature-4 .clinic-description,
        .clinic-feature-5 .clinic-description {
          font-size: 11px;
        }

        .clinic-feature-3 .clinic-overline span,
        .clinic-feature-4 .clinic-overline span,
        .clinic-feature-5 .clinic-overline span {
          font-size: 8px;
          letter-spacing: 0.7px;
        }

        .clinic-feature-3 .clinic-bottom,
        .clinic-feature-4 .clinic-bottom,
        .clinic-feature-5 .clinic-bottom {
          font-size: 7px;
        }

        .care-strip {
          padding: 47px max(6%, calc((100% - 1250px) / 2));
          background: #f0f1e9;
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr 1fr;
          gap: 28px;
          align-items: center;
        }

        .care-strip-title h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 29px;
          line-height: 1.15;
          font-weight: 400;
          color: var(--dental-teal);
          margin: 12px 0 0;
        }

        .care-tip {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding-left: 20px;
          border-left: 1px solid #d7d9ce;
        }

        .tip-number {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          color: var(--dental-gold);
          line-height: 1;
        }

        .care-tip h3 {
          margin: 0 0 8px;
          font-size: 13px;
          color: var(--dental-teal);
        }

        .care-tip p {
          margin: 0;
          font-size: 11px;
          color: var(--dental-muted);
          line-height: 1.75;
        }

        .nearby-section {
          max-width: 1320px;
          margin: 0 auto;
          padding: 84px 35px 70px;
        }

        .nearby-heading {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          gap: 40px;
          margin-bottom: 45px;
        }

        .nearby-heading h2 {
          margin-top: 15px;
        }

        .nearby-heading > p {
          max-width: 450px;
          margin: 0 0 7px;
          padding-left: 24px;
          border-left: 1px solid #dcd4c4;
          color: var(--dental-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .nearby-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .nearby-feature {
          display: grid;
          grid-template-columns: minmax(145px, 0.9fr) minmax(0, 1.1fr);
          align-items: center;
          gap: 25px;
          padding: 0 0 26px;
          border-bottom: 1px solid #e4ded2;
          min-width: 0;
        }

        .nearby-image {
          position: relative;
          height: 225px;
          overflow: hidden;
          border-radius: 48% 48% 8px 8px;
          background: #e8eee5;
        }

        .nearby-image img {
          transition: transform 0.55s ease;
        }

        .nearby-image-number {
          position: absolute;
          left: 12px;
          bottom: 12px;
          padding: 7px 10px;
          color: white;
          background: var(--dental-teal);
          font-size: 10px;
          letter-spacing: 1px;
        }

        .nearby-area {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--dental-gold);
          font-size: 9px;
          letter-spacing: 1.7px;
          margin-bottom: 12px;
        }

        .nearby-area svg {
          width: 14px;
          height: 14px;
        }

        .nearby-copy h3 {
          font-size: 24px;
        }

        .nearby-copy p,
        .nearby-address {
          color: var(--dental-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .nearby-copy p {
          margin: 0 0 13px;
        }

        .nearby-address {
          border-top: 1px solid #e8e2d6;
          padding-top: 12px;
          overflow-wrap: anywhere;
        }

        .dental-disclaimer {
          max-width: 1250px;
          margin: 0 auto 45px;
          padding: 18px 22px;
          border: 1px solid #e5dfd3;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          background: rgba(255, 255, 255, 0.6);
        }

        .disclaimer-icon {
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          width: 23px;
          height: 23px;
          border: 1px solid var(--dental-gold);
          border-radius: 50%;
          color: var(--dental-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
        }

        .dental-disclaimer p {
          margin: 0;
          color: var(--dental-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .dental-disclaimer strong {
          color: var(--dental-teal);
        }

        @keyframes dentalReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dental-page *,
          .dental-page *::before,
          .dental-page *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 1000px) {
          .hero-emblem {
            right: 4%;
            transform: translateY(-50%) scale(0.8);
            transform-origin: right center;
          }

          .dental-intro {
            grid-template-columns: 1fr 1.3fr;
            gap: 32px;
          }

          .intro-stat {
            grid-column: 1 / -1;
            flex-direction: row;
            align-items: center;
            gap: 15px;
            padding: 20px 0 0;
            border-left: 0;
            border-top: 1px solid #dfd8c8;
          }

          .stat-number {
            font-size: 38px;
          }

          .stat-rule {
            margin: 0;
          }

          .clinic-editorial {
            column-gap: 20px;
          }

          .clinic-feature-1,
          .clinic-feature-2 {
            grid-column: span 6;
            grid-template-columns: 1fr;
          }

          .clinic-feature-2 {
            padding-left: 20px;
          }

          .clinic-photo,
          .clinic-photo-wide {
            height: 240px;
          }

          .clinic-feature-3,
          .clinic-feature-4,
          .clinic-feature-5 {
            grid-column: span 4;
            grid-template-columns: 1fr;
          }

          .clinic-feature-3 .clinic-photo,
          .clinic-feature-4 .clinic-photo,
          .clinic-feature-5 .clinic-photo {
            height: 190px;
          }

          .care-strip {
            grid-template-columns: 1fr 1fr;
          }

          .nearby-showcase {
            gap: 28px;
          }

          .nearby-feature {
            grid-template-columns: 1fr;
          }

          .nearby-image {
            height: 250px;
          }

          .dental-disclaimer {
            margin-left: 25px;
            margin-right: 25px;
          }
        }

        @media (max-width: 650px) {
          .dental-hero {
            min-height: 570px;
            align-items: flex-end;
            background-position: 60% center;
          }

          .hero-shade {
            background: linear-gradient(
              0deg,
              rgba(4, 44, 44, 0.97) 0%,
              rgba(7, 53, 53, 0.88) 47%,
              rgba(7, 53, 53, 0.25) 100%
            );
          }

          .hero-copy {
            width: auto;
            margin: 0;
            padding: 100px 24px 75px;
          }

          .hero-copy h1 {
            font-size: clamp(46px, 13vw, 65px);
            margin: 15px 0;
          }

          .hero-copy p {
            font-size: 13px;
          }

          .hero-emblem {
            top: 28px;
            right: 22px;
            transform: scale(0.6);
            transform-origin: top right;
            gap: 6px;
          }

          .hero-emblem-circle {
            width: 75px;
            height: 75px;
          }

          .hero-emblem span {
            font-size: 8px;
          }

          .hero-bottom-label {
            left: 24px;
            right: 24px;
            bottom: 17px;
          }

          .dental-intro {
            padding: 55px 24px 38px;
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .intro-heading h2,
          .nearby-heading h2 {
            font-size: 43px;
          }

          .intro-description {
            padding-left: 18px;
          }

          .intro-stat {
            grid-column: auto;
          }

          .clinic-editorial {
            padding: 0 24px 48px;
            grid-template-columns: 1fr;
            row-gap: 35px;
          }

          .clinic-feature-1,
          .clinic-feature-2,
          .clinic-feature-3,
          .clinic-feature-4,
          .clinic-feature-5 {
            grid-column: auto;
            grid-template-columns: minmax(100px, 0.8fr) minmax(0, 1.2fr);
            gap: 18px;
            padding: 0 0 25px;
            border-left: 0;
          }

          .clinic-photo,
          .clinic-photo-wide,
          .clinic-feature-3 .clinic-photo,
          .clinic-feature-4 .clinic-photo,
          .clinic-feature-5 .clinic-photo {
            height: 180px;
          }

          .clinic-content h3,
          .clinic-feature-3 .clinic-content h3,
          .clinic-feature-4 .clinic-content h3,
          .clinic-feature-5 .clinic-content h3 {
            font-size: 20px;
          }

          .clinic-overline {
            gap: 5px;
            margin-bottom: 8px;
          }

          .clinic-overline .tooth-mark {
            width: 19px;
            height: 19px;
          }

          .clinic-overline span,
          .clinic-feature-3 .clinic-overline span,
          .clinic-feature-4 .clinic-overline span,
          .clinic-feature-5 .clinic-overline span {
            font-size: 7px;
            letter-spacing: 0.5px;
          }

          .clinic-description,
          .clinic-feature-3 .clinic-description,
          .clinic-feature-4 .clinic-description,
          .clinic-feature-5 .clinic-description {
            font-size: 11px;
            line-height: 1.65;
            margin-bottom: 10px;
          }

          .clinic-address {
            font-size: 10px;
          }

          .clinic-bottom {
            margin-top: 12px;
            font-size: 7px;
          }

          .photo-index {
            width: 32px;
            height: 32px;
            right: -8px;
          }

          .photo-caption {
            font-size: 6px;
            left: 6px;
            bottom: 6px;
            padding: 5px;
          }

          .care-strip {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 42px 24px;
          }

          .care-tip {
            padding: 0;
            border: 0;
          }

          .nearby-section {
            padding: 58px 24px 40px;
          }

          .nearby-heading {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 32px;
          }

          .nearby-heading > p {
            padding-left: 18px;
          }

          .nearby-showcase {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .nearby-feature {
            grid-template-columns: minmax(115px, 0.85fr) minmax(0, 1.15fr);
            gap: 18px;
          }

          .nearby-image {
            height: 190px;
          }

          .nearby-copy h3 {
            font-size: 21px;
          }

          .dental-disclaimer {
            margin: 0 24px 32px;
            padding: 15px;
          }
        }

        @media (max-width: 380px) {
          .clinic-feature-1,
          .clinic-feature-2,
          .clinic-feature-3,
          .clinic-feature-4,
          .clinic-feature-5,
          .nearby-feature {
            grid-template-columns: 1fr;
          }

          .clinic-photo,
          .clinic-photo-wide,
          .clinic-feature-3 .clinic-photo,
          .clinic-feature-4 .clinic-photo,
          .clinic-feature-5 .clinic-photo,
          .nearby-image {
            height: 220px;
          }
        }
      `}</style>
    </>
  );
}
