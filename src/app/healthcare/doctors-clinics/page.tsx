"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const HERO_BACKGROUND = "/images/healthcare-clinic.jpg";

const localClinics = [
  {
    name: "Mohit Clinic",
    area: "JATTARI",
    type: "Medical Clinic",
    description:
      "A local clinic listing near the Jattari bus stand. Contact the clinic to confirm consultation availability and services.",
    address:
      "Bus Stand, Main Road, Jattari, Uttar Pradesh 202137",
    number: "01",
    symbol: "✚",
  },
  {
    name: "Kusum Clinic",
    area: "JATTARI",
    type: "Clinic",
    description:
      "A clinic listed on Pisawa–Jattari Road. Confirm the doctor's availability and services before visiting.",
    address: "Pisawa–Jattari Road, Jattari, Uttar Pradesh 202137",
    number: "02",
    symbol: "✳",
  },
  {
    name: "Narwal Health Care",
    area: "ALIGARH–PALWAL ROAD",
    type: "Healthcare Provider",
    description:
      "A healthcare provider listing in the Jattari area. Contact the provider to confirm the available doctor and consultation hours.",
    address:
      "20, Aligarh–Palwal Road, Jattari, Uttar Pradesh 202137",
    number: "03",
    symbol: "✚",
  },
  {
    name: "Shri Raj Homoeopathic Clinic",
    area: "JARTAULI, JATTARI",
    type: "Homoeopathic Clinic",
    description:
      "A homoeopathic clinic listing near Jartauli. Ask the clinic about its consultation process and current timings.",
    address:
      "Aligarh–Palwal Road, Jartauli, near More, Jattari, Uttar Pradesh 202137",
    number: "04",
    symbol: "✧",
  },
  {
    name: "Raghav Clinic",
    area: "JATTARI",
    type: "Doctor's Clinic",
    description:
      "A local clinic listing along Aligarh–Palwal Road. The available listing does not confirm the doctor's specialty.",
    address: "Aligarh–Palwal Road, Jattari, Uttar Pradesh 202137",
    number: "05",
    symbol: "✚",
  },
  {
    name: "Shilpi Clinic",
    area: "JATTARI",
    type: "Medical Clinic",
    description:
      "A clinic listing in Jattari. Contact the clinic to confirm its current location, timings and available consultations.",
    address: "Jattari, Uttar Pradesh 202137",
    number: "06",
    symbol: "✚",
  },
];

const specialisedCare = [
  {
    name: "Attri Eye Centre",
    area: "JARELIYA ROAD, JATTARI",
    type: "Eye Care",
    description:
      "A local eye-care facility. Contact the centre to confirm available consultations and timings.",
    address: "Jareliya Road, Jattari, Uttar Pradesh 202137",
    number: "01",
    symbol: "◉",
  },
  {
    name: "GPG EYE +",
    area: "KHATU SHYAM MARKET, JATTARI",
    type: "Eye Care",
    description:
      "An eye-care centre listing in Jattari. Confirm current services and consultation availability directly.",
    address: "Khatu Shyam Market, Jattari, Uttar Pradesh 202137",
    number: "02",
    symbol: "◉",
  },
];

type Clinic = {
  name: string;
  area: string;
  type: string;
  description: string;
  address: string;
  number: string;
  symbol: string;
};

function ClinicRow({ clinic }: { clinic: Clinic }) {
  return (
    <article className="clinic-row">
      <div className="clinic-row-number">{clinic.number}</div>

      <div className="clinic-row-symbol" aria-hidden="true">
        {clinic.symbol}
      </div>

      <div className="clinic-row-content">
        <span className="clinic-row-area">{clinic.area}</span>

        <h3>{clinic.name}</h3>

        <span className="clinic-row-type">{clinic.type}</span>

        <p className="clinic-row-description">{clinic.description}</p>
      </div>

      <div className="clinic-row-address">
        <span className="address-label">
          <span aria-hidden="true">⌖</span> ADDRESS
        </span>
        <p>{clinic.address}</p>
      </div>

      <div className="clinic-row-arrow" aria-hidden="true">
        ↗
      </div>
    </article>
  );
}

export default function DoctorsClinicsPage() {
  return (
    <>
      <Navbar />

      <main className="doctors-page">
        {/* HERO */}
        <section
          className="doctors-hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(9,48,51,.96) 0%, rgba(9,48,51,.84) 52%, rgba(9,48,51,.45) 100%), url("${HERO_BACKGROUND}")`,
          }}
        >
          <div className="doctors-hero-content">
            <span className="doctors-eyebrow">
              JATTARI HEALTHCARE DIRECTORY
            </span>

            <h1>
              Doctors
              <br />
              &amp; Clinics
            </h1>

            <p>
              Discover local clinics and healthcare providers in Jattari.
              Explore useful location details and contact facilities to
              confirm consultations before your visit.
            </p>

            <a href="#local-clinics" className="doctors-hero-button">
              Explore the directory <span>↗</span>
            </a>
          </div>

          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-center">✚</div>
            <span className="orbit-dot" />
          </div>

          <div className="hero-caption">
            <span />
            YOUR LOCAL CARE GUIDE
          </div>
        </section>

        {/* INTRO */}
        <section className="doctors-intro content-shell">
          <div className="intro-heading">
            <span className="section-eyebrow">
              FIND CARE NEAR YOU
            </span>

            <h2>
              The right information
              <br />
              for your next visit.
            </h2>
          </div>

          <div className="intro-description">
            <p>
              Jattari has local clinics and healthcare providers serving
              residents and surrounding villages. This directory brings
              their available location information together in one place.
            </p>

            <p>
              Doctor names, qualifications, specialties and appointment
              availability are not verified for every listing. Please
              contact the clinic before visiting.
            </p>
          </div>
        </section>

        {/* LOCAL CLINICS */}
        <section className="directory-section content-shell" id="local-clinics">
          <div className="directory-heading">
            <div>
              <span className="section-eyebrow">01 / LOCAL DIRECTORY</span>
              <h2>Doctors &amp; clinics in Jattari</h2>
              <p>
                Explore local healthcare listings and their available
                address details.
              </p>
            </div>

            <div className="listing-total">
              <strong>06</strong>
              <span>LISTINGS</span>
            </div>
          </div>

          <div className="clinic-list">
            {localClinics.map((clinic) => (
              <ClinicRow key={clinic.name} clinic={clinic} />
            ))}
          </div>
        </section>

        {/* SPECIALISED CARE */}
        <section className="specialised-section">
          <div className="content-shell">
            <div className="directory-heading">
              <div>
                <span className="section-eyebrow">
                  02 / SPECIALISED CARE
                </span>
                <h2>Eye care &amp; other services</h2>
                <p>
                  Additional local listings for people looking for
                  specialised consultations.
                </p>
              </div>

              <div className="listing-total">
                <strong>02</strong>
                <span>LISTINGS</span>
              </div>
            </div>

            <div className="specialised-list">
              {specialisedCare.map((clinic) => (
                <ClinicRow key={clinic.name} clinic={clinic} />
              ))}
            </div>

            <div className="directory-note">
              <span className="note-icon">i</span>

              <p>
                <strong>Before visiting:</strong> Confirm the clinic
                address, doctor qualifications, consultation fee and
                timings directly. This directory is informational and does
                not replace professional medical advice.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .doctors-page {
          --dc-cream: #fffdf8;
          --dc-card: #f8f7ef;
          --dc-teal: #103f40;
          --dc-soft: #e8eee5;
          --dc-gold: #b98a4a;
          --dc-text: #64767a;
          --dc-line: #e1e2d9;

          color: var(--dc-teal);
          background: var(--dc-cream);
          overflow: hidden;
        }

        .doctors-page *,
        .doctors-page *::before,
        .doctors-page *::after {
          box-sizing: border-box;
        }

        .doctors-page .content-shell {
          width: min(1420px, calc(100% - 80px));
          margin-inline: auto;
        }

        /* HERO */

        .doctors-page .doctors-hero {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          min-height: 480px;
          padding: 65px max(40px, calc((100vw - 1420px) / 2));
          overflow: hidden;
          background-color: var(--dc-teal);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .doctors-page .doctors-hero-content {
          position: relative;
          z-index: 2;
          width: min(690px, 70%);
        }

        .doctors-page .doctors-eyebrow,
        .doctors-page .section-eyebrow {
          display: inline-block;
          color: var(--dc-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.7;
        }

        .doctors-page .doctors-hero h1 {
          margin: 18px 0;
          color: var(--dc-cream);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(46px, 5.5vw, 74px);
          font-weight: 400;
          letter-spacing: -1.8px;
          line-height: 1.05;
        }

        .doctors-page .doctors-hero-content > p {
          max-width: 560px;
          margin: 0;
          color: rgba(255, 253, 248, 0.85);
          font-size: 14px;
          line-height: 1.9;
        }

        .doctors-page .doctors-hero-button {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          margin-top: 27px;
          padding: 14px 19px;
          border: 1px solid rgba(255, 253, 248, 0.5);
          border-radius: 3px;
          color: var(--dc-cream);
          font-size: 12px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .doctors-page .doctors-hero-button:hover {
          color: var(--dc-teal);
          background: var(--dc-cream);
          transform: translateY(-3px);
        }

        .doctors-page .hero-orbit {
          position: absolute;
          top: 50%;
          right: 13%;
          width: clamp(150px, 19vw, 245px);
          aspect-ratio: 1;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .doctors-page .orbit {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255, 253, 248, 0.23);
          border-radius: 50%;
        }

        .doctors-page .orbit-one {
          animation: orbitRotate 25s linear infinite;
        }

        .doctors-page .orbit-two {
          inset: 15%;
          border-color: rgba(185, 138, 74, 0.65);
          animation: orbitRotate 18s linear infinite reverse;
        }

        .doctors-page .orbit-center {
          position: absolute;
          inset: 29%;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 253, 248, 0.18);
          border-radius: 50%;
          background: rgba(255, 253, 248, 0.06);
          color: var(--dc-cream);
          font-size: clamp(34px, 4vw, 58px);
        }

        .doctors-page .orbit-dot {
          position: absolute;
          top: 13%;
          right: 20%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--dc-gold);
          box-shadow: 0 0 20px rgba(185, 138, 74, 0.6);
        }

        .doctors-page .hero-caption {
          position: absolute;
          right: 6%;
          bottom: 28px;
          display: flex;
          align-items: center;
          gap: 11px;
          color: rgba(255, 253, 248, 0.8);
          font-size: 9px;
          letter-spacing: 1.7px;
        }

        .doctors-page .hero-caption > span {
          width: 28px;
          height: 1px;
          background: var(--dc-gold);
        }

        @keyframes orbitRotate {
          to {
            rotate: 360deg;
          }
        }

        /* INTRO */

        .doctors-page .doctors-intro {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: start;
          gap: 65px;
          padding-top: 75px;
          padding-bottom: 72px;
          border-bottom: 1px solid var(--dc-line);
        }

        .doctors-page .intro-heading h2,
        .doctors-page .directory-heading h2 {
          margin: 12px 0 0;
          color: var(--dc-teal);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(31px, 3vw, 43px);
          font-weight: 400;
          letter-spacing: -0.8px;
          line-height: 1.18;
        }

        .doctors-page .intro-description {
          max-width: 650px;
          padding-top: 5px;
        }

        .doctors-page .intro-description p {
          margin: 0 0 13px;
          color: var(--dc-text);
          font-size: 13px;
          line-height: 1.95;
        }

        .doctors-page .intro-description p:last-child {
          margin-bottom: 0;
        }

        /* DIRECTORY HEADINGS */

        .doctors-page .directory-section {
          padding-top: 72px;
          padding-bottom: 82px;
        }

        .doctors-page .directory-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 29px;
        }

        .doctors-page .directory-heading h2 {
          font-size: clamp(30px, 3vw, 41px);
        }

        .doctors-page .directory-heading > div:first-child > p {
          margin: 10px 0 0;
          color: var(--dc-text);
          font-size: 13px;
          line-height: 1.8;
        }

        .doctors-page .listing-total {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 9px;
          padding-bottom: 5px;
          color: var(--dc-text);
          font-size: 9px;
          letter-spacing: 1.4px;
        }

        .doctors-page .listing-total strong {
          color: var(--dc-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 29px;
          font-weight: 400;
        }

        /* EDITORIAL LIST — NO CARDS */

        .doctors-page .clinic-list,
        .doctors-page .specialised-list {
          border-top: 1px solid var(--dc-line);
        }

        .doctors-page .clinic-row {
          position: relative;
          display: grid;
          grid-template-columns: 42px 58px minmax(0, 1.35fr) minmax(190px, 0.8fr) 24px;
          align-items: center;
          gap: 22px;
          min-width: 0;
          padding: 27px 8px;
          border-bottom: 1px solid var(--dc-line);
          background: transparent;
          transition:
            background 0.25s ease,
            padding 0.25s ease;
          animation: rowEnter 0.45s both;
        }

        .doctors-page .clinic-row:hover {
          padding-right: 15px;
          padding-left: 15px;
          background: #f8f7ef;
        }

        @keyframes rowEnter {
          from {
            opacity: 0;
            translate: 0 8px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        .doctors-page .clinic-row-number {
          align-self: start;
          padding-top: 5px;
          color: #b9b9aa;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
        }

        .doctors-page .clinic-row-symbol {
          display: grid;
          width: 54px;
          height: 54px;
          place-items: center;
          border-radius: 50%;
          background: var(--dc-soft);
          color: var(--dc-teal);
          font-size: 25px;
          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .doctors-page .clinic-row:hover .clinic-row-symbol {
          background: #eee5d5;
          transform: rotate(-7deg);
        }

        .doctors-page .clinic-row-content {
          min-width: 0;
        }

        .doctors-page .clinic-row-area {
          display: block;
          margin-bottom: 7px;
          color: var(--dc-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.4px;
          line-height: 1.6;
        }

        .doctors-page .clinic-row-content h3 {
          margin: 0 0 8px;
          color: var(--dc-teal);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 400;
          letter-spacing: -0.4px;
          line-height: 1.2;
          overflow-wrap: anywhere;
        }

        .doctors-page .clinic-row-type {
          display: inline-block;
          padding: 5px 9px;
          border: 1px solid #ead9ba;
          border-radius: 2px;
          color: #916b37;
          font-size: 9px;
          line-height: 1.5;
        }

        .doctors-page .clinic-row-description {
          margin: 11px 0 0;
          color: var(--dc-text);
          font-size: 12px;
          line-height: 1.8;
        }

        .doctors-page .clinic-row-address {
          align-self: center;
          min-width: 0;
          padding-left: 20px;
          border-left: 1px solid var(--dc-line);
        }

        .doctors-page .address-label {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 9px;
          color: var(--dc-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .doctors-page .address-label > span {
          font-size: 17px;
        }

        .doctors-page .clinic-row-address p {
          margin: 0;
          color: #586d71;
          font-size: 11px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .doctors-page .clinic-row-arrow {
          align-self: center;
          color: var(--dc-gold);
          font-size: 21px;
          transition: transform 0.25s ease;
        }

        .doctors-page .clinic-row:hover .clinic-row-arrow {
          transform: translate(3px, -3px);
        }

        /* SPECIALISED CARE */

        .doctors-page .specialised-section {
          padding-top: 72px;
          padding-bottom: 75px;
          background: #f4f3eb;
        }

        .doctors-page .specialised-list {
          border-top-color: #dedfd5;
        }

        .doctors-page .specialised-list .clinic-row {
          border-bottom-color: #dedfd5;
        }

        .doctors-page .specialised-list .clinic-row:hover {
          background: #eeede4;
        }

        .doctors-page .directory-note {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin-top: 26px;
          padding: 18px 20px;
          border: 1px solid #e1e2d8;
          border-radius: 5px;
          background: rgba(255, 253, 248, 0.75);
        }

        .doctors-page .note-icon {
          display: grid;
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #c6a16a;
          border-radius: 50%;
          color: #9b773f;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13px;
        }

        .doctors-page .directory-note p {
          margin: 0;
          color: var(--dc-text);
          font-size: 11px;
          line-height: 1.8;
        }

        .doctors-page .directory-note strong {
          color: var(--dc-teal);
        }

        /* TABLET */

        @media (max-width: 1050px) {
          .doctors-page .content-shell {
            width: calc(100% - 48px);
          }

          .doctors-page .doctors-hero {
            padding: 55px 35px;
          }

          .doctors-page .doctors-hero-content {
            width: 75%;
          }

          .doctors-page .hero-orbit {
            right: 5%;
            opacity: 0.65;
          }

          .doctors-page .doctors-intro {
            gap: 35px;
          }

          .doctors-page .clinic-row {
            grid-template-columns: 30px 48px minmax(0, 1.3fr) minmax(155px, 0.8fr) 18px;
            gap: 15px;
          }

          .doctors-page .clinic-row-symbol {
            width: 46px;
            height: 46px;
          }

          .doctors-page .clinic-row-content h3 {
            font-size: 23px;
          }
        }

        /* MOBILE */

        @media (max-width: 680px) {
          .doctors-page .content-shell {
            width: calc(100% - 34px);
          }

          .doctors-page .doctors-hero {
            min-height: 430px;
            padding: 50px 22px 72px;
            background-position: 58% center;
          }

          .doctors-page .doctors-hero-content {
            width: 100%;
          }

          .doctors-page .doctors-hero h1 {
            font-size: clamp(40px, 10vw, 52px);
            letter-spacing: -1px;
          }

          .doctors-page .doctors-hero-content > p {
            max-width: 100%;
            font-size: 13px;
          }

          .doctors-page .hero-orbit {
            top: auto;
            right: -48px;
            bottom: -55px;
            width: 145px;
            transform: none;
            opacity: 0.28;
          }

          .doctors-page .hero-caption {
            right: 20px;
            bottom: 20px;
            font-size: 8px;
          }

          .doctors-page .doctors-intro {
            grid-template-columns: 1fr;
            gap: 20px;
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .doctors-page .intro-heading h2,
          .doctors-page .directory-heading h2 {
            font-size: 31px;
          }

          .doctors-page .directory-section,
          .doctors-page .specialised-section {
            padding-top: 50px;
            padding-bottom: 55px;
          }

          .doctors-page .directory-heading {
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 23px;
          }

          .doctors-page .listing-total {
            gap: 5px;
            padding-top: 5px;
            font-size: 8px;
          }

          .doctors-page .listing-total strong {
            font-size: 22px;
          }

          .doctors-page .clinic-row {
            grid-template-columns: 30px 45px minmax(0, 1fr);
            gap: 12px;
            padding: 23px 2px;
          }

          .doctors-page .clinic-row:hover {
            padding-right: 5px;
            padding-left: 5px;
          }

          .doctors-page .clinic-row-number {
            font-size: 15px;
          }

          .doctors-page .clinic-row-symbol {
            width: 42px;
            height: 42px;
            font-size: 21px;
          }

          .doctors-page .clinic-row-content h3 {
            font-size: 23px;
          }

          .doctors-page .clinic-row-description {
            font-size: 12px;
          }

          .doctors-page .clinic-row-address {
            grid-column: 3;
            padding-top: 12px;
            padding-left: 12px;
            border-top: 1px solid var(--dc-line);
            border-left: 0;
          }

          .doctors-page .clinic-row-arrow {
            display: none;
          }

          .doctors-page .directory-note {
            padding: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .doctors-page .orbit-one,
          .doctors-page .orbit-two,
          .doctors-page .clinic-row {
            animation: none;
          }

          .doctors-page .clinic-row,
          .doctors-page .clinic-row-symbol,
          .doctors-page .clinic-row-arrow,
          .doctors-page .doctors-hero-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}