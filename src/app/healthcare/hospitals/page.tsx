
"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const HERO_BACKGROUND = "/images/healthcare-max.jpg";

const jattariHospitals = [
  {
    name: "Paliwal Hospital & Heart Centre",
    area: "JATTARI",
    type: "Hospital",
    description:
      "A local healthcare facility in Jattari. Contact the hospital directly to confirm available departments and services.",
    address:
      "Near Paliwal Gali, Main Market, Jattari, Uttar Pradesh 202137",
  },
  {
    name: "Government Hospital",
    area: "JATTARI",
    type: "Government health facility",
    description:
      "A government healthcare option serving residents of Jattari and nearby villages.",
    address: "Jattari, Uttar Pradesh 202137",
  },
  {
    name: "Safe Health Hospital",
    area: "JATTARI",
    type: "Hospital",
    description:
      "A local hospital option for people looking for healthcare services in the Jattari area.",
    address:
      "Palwal Road, Jattari, Aligarh district, Uttar Pradesh 202137",
  },
  {
    name: "Attri Eye Centre",
    area: "JATTARI",
    type: "Eye care",
    description:
      "An eye-care centre in Jattari. Contact the centre to confirm consultations and timings.",
    address: "Jareliya Road, Jattari, Uttar Pradesh 202137",
  },
  {
    name: "Raghav Clinic and Nursing Home",
    area: "JATTARI",
    type: "Clinic & nursing home",
    description:
      "A local clinic and nursing-home listing serving the Jattari community.",
    address: "Jattari, Uttar Pradesh 202137",
  },
  {
    name: "AJR Hospital",
    area: "JATTARI",
    type: "Hospital",
    description:
      "A hospital listed on the Pisawa–Jattari Road. Confirm its current services before visiting.",
    address: "Pisawa–Jattari Road, Jattari, Uttar Pradesh",
  },
];

const nearbyHospitals = [
  {
    name: "Community Health Centre, Tappal",
    area: "TAPPAL",
    type: "Government health centre",
    description:
      "A government community health facility serving Tappal and nearby villages.",
    address: "Aligarh–Palwal Road, Tappal, Uttar Pradesh 202165",
  },
  {
    name: "CHC Khair",
    area: "KHAIR",
    type: "Government health centre",
    description:
      "A government Community Health Centre serving Khair and surrounding rural areas.",
    address: "Aligarh–Palwal Road, Khair, Uttar Pradesh 202138",
  },
  {
    name: "Deen Dayal Upadhyay Joint Hospital",
    area: "ALIGARH",
    type: "Government hospital",
    description:
      "A government hospital in Aligarh for people looking for a larger public healthcare facility.",
    address:
      "66, Ramghat Road, Vikram Colony, Begpur, Aligarh, Uttar Pradesh 202001",
  },
  {
    name: "Jawaharlal Nehru Medical College & Hospital",
    area: "AMU CAMPUS, ALIGARH",
    type: "Teaching hospital",
    description:
      "A medical college and teaching hospital in Aligarh offering a wider hospital-care setting.",
    address:
      "Medical Road, Aligarh Muslim University Campus, Aligarh, Uttar Pradesh 202001",
  },
];

type Hospital = (typeof jattariHospitals)[number];

function HospitalCard({
  hospital,
  index,
}: {
  hospital: Hospital;
  index: number;
}) {
  return (
    <article
      className="hospital-card"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="hospital-card-top">
        <div className="hospital-icon" aria-hidden="true">
          <span>✚</span>
        </div>

        <span className="hospital-type">{hospital.type}</span>
      </div>

      <p className="hospital-area">{hospital.area}</p>

      <h3 className="hospital-name">{hospital.name}</h3>

      <p className="hospital-description">{hospital.description}</p>

      <div className="hospital-address">
        <span className="address-symbol" aria-hidden="true">
          ⌖
        </span>
        <p>{hospital.address}</p>
      </div>
    </article>
  );
}

export default function HospitalsPage() {
  return (
    <>
      <Navbar />

      <main className="hospitals-page">
        {/* HERO SECTION */}
        <section
          className="hospital-hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(9,48,51,.95) 0%, rgba(9,48,51,.82) 48%, rgba(9,48,51,.45) 100%), url("${HERO_BACKGROUND}")`,
          }}
        >
          <div className="hospital-hero-content">
            <span className="hero-eyebrow">
              JATTARI HEALTHCARE DIRECTORY
            </span>

            <h1>
              Hospitals &amp;
              <br />
              Healthcare Centres
            </h1>

            <p>
              Explore hospitals and healthcare facilities in Jattari and
              nearby areas of Aligarh. Find useful location information to
              help plan your visit.
            </p>

            <a href="#jattari-hospitals" className="hero-button">
              Explore hospitals <span>↗</span>
            </a>
          </div>

          <div className="hero-medical-mark" aria-hidden="true">
            <span>+</span>
          </div>

          <div className="hero-side-note">
            <span />
            CARE CLOSE TO HOME
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="hospital-intro section-shell">
          <div>
            <span className="section-kicker">HEALTHCARE IN JATTARI</span>
            <h2 className="intro-title">
              Finding care,
              <br />
              made a little easier.
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Jattari and its surrounding areas have local hospitals,
              clinics and government health centres for residents seeking
              medical care. Larger healthcare facilities are also available
              in nearby towns and Aligarh city.
            </p>
            <p>
              Use this directory as a starting point. Verify the current
              address, consultation hours, available services and emergency
              facilities directly before travelling.
            </p>
          </div>
        </section>

        {/* JATTARI HOSPITALS */}
        <section
          className="hospital-section section-shell"
          id="jattari-hospitals"
        >
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">LOCAL DIRECTORY</span>
              <h2>Hospitals in Jattari</h2>
              <p className="section-subtitle">
                Healthcare options within Jattari and its local area.
              </p>
            </div>

            <div className="section-count">
              <strong>06</strong>
              <span>LISTINGS</span>
            </div>
          </div>

          <div className="hospital-grid local-grid">
            {jattariHospitals.map((hospital, index) => (
              <HospitalCard
                key={hospital.name}
                hospital={hospital}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* NEARBY HOSPITALS */}
        <section className="nearby-section">
          <div className="section-shell">
            <div className="section-heading-row">
              <div>
                <span className="section-kicker">EXPLORE NEARBY</span>
                <h2>More healthcare options</h2>
                <p className="section-subtitle">
                  Additional facilities in Tappal, Khair and Aligarh.
                </p>
              </div>

              <div className="section-count">
                <strong>04</strong>
                <span>LISTINGS</span>
              </div>
            </div>

            <div className="hospital-grid nearby-grid">
              {nearbyHospitals.map((hospital, index) => (
                <HospitalCard
                  key={hospital.name}
                  hospital={hospital}
                  index={index}
                />
              ))}
            </div>

            <div className="hospital-disclaimer">
              <span className="disclaimer-icon">i</span>
              <p>
                <strong>Before you visit:</strong> Addresses and services may
                change. Confirm details directly with the facility. For a
                medical emergency, contact local emergency services.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .hospitals-page {
          --cream: #fffdf8;
          --teal: #103f40;
          --teal-light: #e8eee5;
          --gold: #b98a4a;
          --body: #64767a;
          --line: #e0e2d9;
          color: var(--teal);
          background: var(--cream);
          overflow: hidden;
        }

        .section-shell {
          width: min(1420px, calc(100% - 80px));
          margin-inline: auto;
        }

        /* HERO */
        .hospital-hero {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          min-height: 490px;
          padding: 65px max(40px, calc((100vw - 1420px) / 2));
          background-color: var(--teal);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          overflow: hidden;
        }

        .hospital-hero-content {
          position: relative;
          z-index: 2;
          width: min(720px, 75%);
        }

        .hero-eyebrow,
        .section-kicker {
          display: inline-block;
          color: var(--gold);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.6;
        }

        .hospital-hero h1 {
          margin: 18px 0;
          color: #fffdf8;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 5.2vw, 72px);
          font-weight: 400;
          letter-spacing: -1.8px;
          line-height: 1.07;
        }

        .hospital-hero-content > p {
          max-width: 570px;
          margin: 0;
          color: rgba(255, 253, 248, 0.85);
          font-size: 14px;
          line-height: 1.9;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          margin-top: 27px;
          padding: 14px 19px;
          border: 1px solid rgba(255, 253, 248, 0.5);
          border-radius: 3px;
          color: #fffdf8;
          font-size: 12px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .hero-button:hover {
          background: #fffdf8;
          color: var(--teal);
          transform: translateY(-3px);
        }

        .hero-medical-mark {
          position: absolute;
          z-index: 1;
          top: 50%;
          right: 12%;
          display: grid;
          width: clamp(125px, 17vw, 220px);
          aspect-ratio: 1;
          place-items: center;
          border: 1px solid rgba(255, 253, 248, 0.2);
          border-radius: 50%;
          color: rgba(255, 253, 248, 0.85);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .hero-medical-mark::before,
        .hero-medical-mark::after {
          position: absolute;
          inset: 13%;
          border: 1px solid rgba(255, 253, 248, 0.16);
          border-radius: 50%;
          content: "";
        }

        .hero-medical-mark::after {
          inset: 27%;
          border-color: rgba(185, 138, 74, 0.55);
        }

        .hero-medical-mark span {
          font-size: 80px;
          font-weight: 200;
          animation: pulse 3.5s ease-in-out infinite;
        }

        .hero-side-note {
          position: absolute;
          right: 6%;
          bottom: 30px;
          display: flex;
          align-items: center;
          gap: 11px;
          color: rgba(255, 253, 248, 0.8);
          font-size: 9px;
          letter-spacing: 1.8px;
        }

        .hero-side-note span {
          width: 30px;
          height: 1px;
          background: var(--gold);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(0.96);
          }
          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        /* INTRO */
        .hospital-intro {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 65px;
          align-items: start;
          padding-top: 76px;
          padding-bottom: 72px;
          border-bottom: 1px solid var(--line);
        }

        .intro-title,
        .section-heading-row h2 {
          margin: 12px 0 0;
          color: var(--teal);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 3.1vw, 43px);
          font-weight: 400;
          letter-spacing: -0.8px;
          line-height: 1.18;
        }

        .intro-copy {
          max-width: 650px;
          padding-top: 7px;
        }

        .intro-copy p {
          margin: 0 0 13px;
          color: var(--body);
          font-size: 13px;
          line-height: 1.95;
        }

        .intro-copy p:last-child {
          margin-bottom: 0;
        }

        /* SECTION HEADINGS */
        .hospital-section {
          padding-top: 72px;
          padding-bottom: 78px;
        }

        .section-heading-row {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 30px;
        }

        .section-heading-row h2 {
          font-size: clamp(30px, 3vw, 41px);
        }

        .section-subtitle {
          margin: 10px 0 0;
          color: var(--body);
          font-size: 13px;
          line-height: 1.8;
        }

        .section-count {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 9px;
          padding-bottom: 5px;
          color: var(--body);
          font-size: 9px;
          letter-spacing: 1.4px;
        }

        .section-count strong {
          color: var(--gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 400;
          letter-spacing: 0;
        }

        /* GRID */
        .hospital-grid {
          display: grid;
          align-items: stretch;
          gap: 20px;
        }

        .local-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .nearby-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        /* CARD STYLING */
        .hospital-card {
          display: flex;
          min-width: 0;
          height: 100%;
          flex-direction: column;
          box-sizing: border-box;
          padding: 25px 26px 23px;
          border: 1px solid #dfe2d8;
          border-radius: 16px;
          background: #f9f8f1;
          animation: cardEnter 0.5s both;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .hospital-card:hover {
          transform: translateY(-4px);
          border-color: rgba(185, 138, 74, 0.65);
          box-shadow: 0 14px 30px rgba(16, 63, 64, 0.07);
        }

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hospital-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 20px;
        }

        .hospital-icon {
          display: grid;
          width: 49px;
          height: 49px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 50%;
          background: var(--teal-light);
          color: var(--teal);
        }

        .hospital-icon span {
          font-size: 23px;
          transition: transform 0.25s ease;
        }

        .hospital-card:hover .hospital-icon span {
          transform: rotate(90deg);
        }

        .hospital-type {
          max-width: 68%;
          padding: 7px 10px;
          border: 1px solid #ead7b6;
          border-radius: 22px;
          color: #916b37;
          font-size: 9px;
          line-height: 1.45;
          text-align: center;
        }

        .hospital-area {
          margin: 0 0 9px;
          color: var(--gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.3px;
        }

        .hospital-name {
          margin: 0 0 13px;
          color: var(--teal);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(22px, 2vw, 29px);
          font-weight: 400;
          letter-spacing: -0.4px;
          line-height: 1.22;
          overflow-wrap: anywhere;
        }

        .hospital-description {
          margin: 0 0 22px;
          color: var(--body);
          font-size: 12px;
          line-height: 1.85;
        }

        .hospital-address {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #e2e3db;
        }

        .address-symbol {
          flex-shrink: 0;
          color: var(--gold);
          font-size: 18px;
          line-height: 1.4;
        }

        .hospital-address p {
          margin: 0;
          color: #586d71;
          font-size: 11px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        /* NEARBY SECTION */
        .nearby-section {
          padding-top: 72px;
          padding-bottom: 75px;
          background: #f4f3eb;
        }

        .hospital-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 25px;
          padding: 17px 19px;
          border: 1px solid #e1e2d8;
          border-radius: 9px;
          background: rgba(255, 253, 248, 0.8);
        }

        .disclaimer-icon {
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

        .hospital-disclaimer p {
          margin: 0;
          color: var(--body);
          font-size: 11px;
          line-height: 1.8;
        }

        .hospital-disclaimer strong {
          color: var(--teal);
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .section-shell {
            width: calc(100% - 48px);
          }

          .hospital-hero {
            min-height: 440px;
            padding: 55px 35px;
          }

          .hospital-hero-content {
            width: 76%;
          }

          .hero-medical-mark {
            right: 5%;
            opacity: 0.7;
          }

          .local-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hospital-intro {
            gap: 35px;
          }

          .hospital-name {
            font-size: 26px;
          }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .section-shell {
            width: calc(100% - 34px);
          }

          .hospital-hero {
            min-height: 430px;
            padding: 52px 22px 70px;
            background-position: 58% center;
          }

          .hospital-hero-content {
            width: 100%;
          }

          .hospital-hero h1 {
            font-size: clamp(38px, 10.5vw, 52px);
            letter-spacing: -1px;
          }

          .hospital-hero-content > p {
            max-width: 100%;
            font-size: 13px;
          }

          .hero-medical-mark {
            top: auto;
            right: -30px;
            bottom: -45px;
            width: 135px;
            transform: none;
            opacity: 0.35;
          }

          .hero-medical-mark span {
            font-size: 60px;
          }

          .hero-side-note {
            right: 20px;
            bottom: 20px;
            font-size: 8px;
          }

          .hospital-intro {
            grid-template-columns: 1fr;
            gap: 20px;
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .intro-title,
          .section-heading-row h2 {
            font-size: 32px;
          }

          .hospital-section {
            padding-top: 52px;
            padding-bottom: 55px;
          }

          .section-heading-row {
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 23px;
          }

          .section-count {
            gap: 5px;
            padding-top: 5px;
            font-size: 8px;
          }

          .section-count strong {
            font-size: 22px;
          }

          .local-grid,
          .nearby-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 15px;
          }

          .hospital-card {
            padding: 22px 20px;
          }

          .hospital-name {
            font-size: 27px;
          }

          .nearby-section {
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .hospital-disclaimer {
            padding: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hospital-card,
          .hero-medical-mark span {
            animation: none;
          }

          .hospital-card,
          .hospital-icon span,
          .hero-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
