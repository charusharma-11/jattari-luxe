
"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const HERO = "/images/Luxury Teal Pharmacy Interior.jpg";

const pharmacies = [
  {
    name: "Janta Medical Store",
    type: "LOCAL CHEMIST",
    intro:
      "A neighbourhood medical store listed in Jattari for everyday medicine enquiries. Contact the shop to check whether your required medicines are available.",
    address: "Aligarh–Palwal Road, Jattari, Uttar Pradesh 202137",
    phone: "",
  },
  {
    name: "Balyan Medical Store",
    type: "MEDICAL STORE",
    intro:
      "A local pharmacy listed on Khair–Aligarh Road. You can enquire about prescribed medicines and confirm delivery or availability directly.",
    address: "SH-22A, Khair–Aligarh Road, Jattari, Uttar Pradesh 202137",
    phone: "08859981482",
  },
  {
    name: "Om Medical Store",
    type: "LOCAL PHARMACY",
    intro:
      "A medical store listed in the Jattari area. Contact the shop to confirm its current stock, opening hours and services.",
    address: "SH-22A, Khair–Aligarh Road, Jattari, Uttar Pradesh 202137",
    phone: "",
  },
  {
    name: "Dharam Medical Store",
    type: "MEDICAL STORE",
    intro:
      "A local pharmacy listing in Jattari. Check directly for medicine availability and current operating hours before visiting.",
    address: "Main Road area, Jattari, Uttar Pradesh 202137",
    phone: "",
  },
  {
    name: "Pramod Medical Agency",
    type: "MEDICAL AGENCY",
    intro:
      "A medical agency listed in the Jattari business directory. Contact the business to confirm its services and whether it serves individual customers.",
    address: "Jattari, Uttar Pradesh 202137",
    phone: "",
  },
  {
    name: "Agrawal Medical Store",
    type: "LOCAL CHEMIST",
    intro:
      "Another medical-store listing in Jattari for local medicine enquiries. Confirm its precise location and availability before travelling.",
    address: "Jattari, Uttar Pradesh 202137",
    phone: "",
  },
];

const topics = [
  {
    symbol: "Rx",
    title: "Prescription Medicines",
    text: "Ask about the exact medicine and strength prescribed by your doctor.",
  },
  {
    symbol: "+",
    title: "First-Aid Essentials",
    text: "Enquire about bandages, dressings and basic first-aid supplies.",
  },
  {
    symbol: "◉",
    title: "Health Devices",
    text: "Ask whether thermometers and blood-pressure monitors are available.",
  },
  {
    symbol: "01",
    title: "Generic Medicines",
    text: "Ask a pharmacist about suitable generic alternatives to prescribed medicines.",
  },
];

export default function PharmaciesPage() {
  return (
    <>
      <Navbar />

      <main className="pharmacy-page">
        {/* HERO */}
        <section
          className="pharmacy-hero"
          style={{ backgroundImage: `url("${HERO}")` }}
        >
          <div className="hero-overlay" />

          <div className="hero-content">
            <span className="eyebrow">JATTARI HEALTHCARE DIRECTORY / 05</span>
            <h1>
              Everyday care.
              <br />
              Close to home.
            </h1>
            <p>
              Discover pharmacies and medical stores in Jattari. Explore
              local options, read short introductions and check addresses
              before planning your visit.
            </p>
            <a className="hero-button" href="#pharmacy-directory">
              Explore pharmacies <span>↗</span>
            </a>
          </div>

          <div className="hero-symbol" aria-hidden="true">
            <svg viewBox="0 0 80 80" fill="none">
              <path
                d="M32 12h16v20h20v16H48v20H32V48H12V32h20V12Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span>LOCAL HEALTHCARE</span>
            <span>JATTARI · UTTAR PRADESH</span>
          </div>

          <div className="hero-footer">
            <span>PHARMACY & MEDICAL STORE DIRECTORY</span>
            <span>202137 · JATTARI</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="pharmacy-intro">
          <div>
            <span className="eyebrow">YOUR LOCAL GUIDE</span>
            <h2>
              Find your
              <br />
              nearby chemist.
            </h2>
          </div>

          <p>
            Pharmacies are an important part of everyday healthcare. This
            directory introduces local medical stores around Jattari so you
            can check their locations and contact them before visiting.
            Stock, services and opening times can vary.
          </p>

          <div className="intro-count">
            <strong>06</strong>
            <span>LOCAL DIRECTORY ENTRIES</span>
          </div>
        </section>

        {/* MEDICINE CATEGORIES */}
        <section className="medicine-section">
          <div className="medicine-heading">
            <span className="eyebrow">AT THE PHARMACY</span>
            <h2>What do you need?</h2>
            <p>Enquire with the pharmacist about available products.</p>
          </div>

          <div className="medicine-topics">
            {topics.map((topic, index) => (
              <article className="medicine-topic" key={topic.title}>
                <div className="topic-symbol">
                  <span>{topic.symbol}</span>
                  <small>0{index + 1}</small>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* EDITORIAL DIRECTORY — INTRO FIRST, ADDRESS AFTER */}
        <section className="pharmacy-directory" id="pharmacy-directory">
          <div className="directory-heading">
            <div>
              <span className="eyebrow">JATTARI · 202137</span>
              <h2>Pharmacies around town.</h2>
            </div>
            <p>
              Read about each local option, then use its address or contact
              link to confirm the details.
            </p>
          </div>

          <div className="pharmacy-entries">
            {pharmacies.map((pharmacy, index) => (
              <article className="pharmacy-entry" key={pharmacy.name}>
                <div className="entry-number">
                  <span>0{index + 1}</span>
                  <i />
                </div>

                <div className="entry-content">
                  <span className="entry-type">{pharmacy.type}</span>
                  <h3>{pharmacy.name}</h3>

                  <p className="entry-intro">{pharmacy.intro}</p>

                  <div className="entry-address">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                    <span>{pharmacy.address}</span>
                  </div>

                  <div className="entry-actions">
                    {pharmacy.phone ? (
                      <a href={`tel:${pharmacy.phone}`} className="call-link">
                        Call pharmacy ↗
                      </a>
                    ) : (
                      <span className="contact-note">
                        Contact details not verified
                      </span>
                    )}

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        pharmacy.name + ", " + pharmacy.address
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="directions-link"
                    >
                      View directions ↗
                    </a>
                  </div>
                </div>

                <div className="entry-mark" aria-hidden="true">
                  <svg viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 7v50M7 32h50"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="23"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* JAN AUSHADHI */}
        <section className="jan-aushadhi">
          <div className="jan-art" aria-hidden="true">
            <div className="jan-circle">
              <svg viewBox="0 0 80 80" fill="none">
                <path
                  d="M32 12h16v20h20v16H48v20H32V48H12V32h20V12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span>GENERIC MEDICINES</span>
          </div>

          <div className="jan-content">
            <span className="eyebrow">ANOTHER LOCAL OPTION</span>
            <h2>
              Pradhan Mantri
              <br />
              Jan Aushadhi Kendra
            </h2>
            <p>
              Jan Aushadhi Kendras are part of a government initiative that
              makes quality generic medicines available through dedicated
              outlets. A Kendra is listed near Police Chowki on Main Road,
              Jattari. Contact the outlet to confirm its current status and
              availability.
            </p>

            <div className="jan-address">
              <span>⌖</span>
              <p>
                Nai Basti, Rawan Teela, near Police Chowki, Main Road,
                Jattari, Uttar Pradesh 202137
              </p>
            </div>

            <div className="jan-actions">
              <a href="tel:+919758715209">Call listed contact ↗</a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jan+Aushadhi+Kendra+Nai+Basti+Rawan+Teela+Jattari"
                target="_blank"
                rel="noreferrer"
              >
                View location ↗
              </a>
              <a
                href="https://janaushadhi.gov.in/"
                target="_blank"
                rel="noreferrer"
              >
                Official website ↗
              </a>
            </div>
          </div>
        </section>

        {/* VISIT GUIDE */}
        <section className="visit-guide">
          <div className="visit-heading">
            <span className="eyebrow">BEFORE YOU VISIT</span>
            <h2>
              A few checks
              <br />
              for peace of mind.
            </h2>
          </div>

          <div className="visit-steps">
            {[
              ["01", "Carry your prescription", "Follow your doctor's instructions."],
              ["02", "Confirm availability", "Ask whether your exact medicine is in stock."],
              ["03", "Check the packaging", "Review the medicine name, strength and expiry date."],
              ["04", "Ask the pharmacist", "Get professional advice before changing medicines."],
            ].map(([number, title, text]) => (
              <div className="visit-step" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="pharmacy-disclaimer">
          <span>i</span>
          <p>
            <strong>Directory information:</strong> Public listings may be
            outdated. Confirm each store address, phone number, opening
            hours and stock before visiting. This page is informational and
            does not replace advice from a qualified doctor or pharmacist.
          </p>
        </aside>
      </main>

      <Footer />

      <style jsx global>{`
        .pharmacy-page {
          --cream: #fffdf8;
          --soft: #f0f1e9;
          --teal: #103f40;
          --gold: #c69550;
          --muted: #657a79;
          --line: #e5e0d5;
          color: var(--teal);
          background: var(--cream);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }
        .pharmacy-page * { box-sizing: border-box; }
        .pharmacy-page a { text-decoration: none; }
        .pharmacy-page .eyebrow {
          color: var(--gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.8;
        }
        .pharmacy-page h1,
        .pharmacy-page h2,
        .pharmacy-page h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
        }
        .pharmacy-hero {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          min-height: 490px;
          color: white;
          background-color: var(--teal);
          background-size: cover;
          background-position: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(90deg,rgba(4,42,43,.97),rgba(5,48,49,.83) 42%,rgba(7,51,52,.12));
        }
        .hero-content {
          max-width: 650px;
          margin-left: max(6%,calc((100% - 1280px)/2));
          padding: 75px 0;
        }
        .hero-content .eyebrow { color: #e6c28e; }
        .hero-content h1 {
          font-size: clamp(46px,6vw,76px);
          line-height: 1;
          letter-spacing: -1.8px;
          margin: 20px 0;
        }
        .hero-content p {
          max-width: 460px;
          font-size: 13px;
          line-height: 1.9;
          color: #eee;
        }
        .hero-button {
          display: inline-block;
          margin-top: 16px;
          padding: 13px 19px;
          border-radius: 30px;
          background: var(--cream);
          color: var(--teal);
          font-size: 12px;
          font-weight: 700;
        }
        .hero-symbol {
          position: absolute;
          right: 8%;
          top: 50%;
          transform: translateY(-50%);
          width: 165px;
          height: 165px;
          border: 1px solid #e6c28e99;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          color: #e6c28e;
          text-align: center;
          font-size: 8px;
          letter-spacing: 1.5px;
        }
        .hero-symbol svg { width: 60px; height: 60px; }
        .hero-footer {
          position: absolute;
          left: 6%;
          right: 6%;
          bottom: 18px;
          display: flex;
          justify-content: space-between;
          color: #ffffffa8;
          font-size: 8px;
          letter-spacing: 1.6px;
        }
        .pharmacy-intro {
          max-width: 1280px;
          margin: auto;
          padding: 72px 35px 55px;
          display: grid;
          grid-template-columns: 1fr 1.3fr .6fr;
          align-items: end;
          gap: 40px;
        }
        .pharmacy-intro h2,
        .visit-heading h2 {
          font-size: 43px;
          letter-spacing: -1px;
          line-height: 1.08;
          margin: 13px 0 0;
        }
        .pharmacy-intro > p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.95;
          padding-left: 23px;
          border-left: 1px solid var(--line);
        }
        .intro-count {
          padding-left: 22px;
          border-left: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 8px;
          letter-spacing: 1.5px;
          color: var(--muted);
        }
        .intro-count strong {
          font-size: 55px;
          line-height: 1;
          font-family: Georgia,serif;
          font-weight: 400;
          color: var(--gold);
        }
        .medicine-section {
          padding: 48px max(6%,calc((100% - 1210px)/2));
          background: var(--soft);
        }
        .medicine-heading {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
        }
        .medicine-heading h2,
        .directory-heading h2 {
          font-size: 35px;
          margin: 0;
        }
        .medicine-heading p {
          color: var(--muted);
          font-size: 11px;
        }
        .medicine-topics {
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          border-top: 1px solid #d7dbd0;
          border-bottom: 1px solid #d7dbd0;
        }
        .medicine-topic { padding: 20px 17px 20px 0; }
        .medicine-topic + .medicine-topic {
          border-left: 1px solid #d7dbd0;
          padding-left: 17px;
        }
        .topic-symbol {
          width: 49px;
          height: 49px;
          display: grid;
          place-items: center;
          position: relative;
          border: 1px solid #d2c5ac;
          border-radius: 50%;
          margin-bottom: 15px;
        }
        .topic-symbol span { font: 21px Georgia,serif; }
        .topic-symbol small {
          position: absolute;
          right: -5px;
          top: -4px;
          background: var(--cream);
          color: var(--gold);
          padding: 3px;
          font-size: 8px;
        }
        .medicine-topic h3 { font-size: 17px; margin: 0 0 8px; }
        .medicine-topic p { color: var(--muted); font-size: 10px; line-height: 1.8; margin: 0; }
        .pharmacy-directory {
          max-width: 1280px;
          margin: auto;
          padding: 76px 35px 80px;
        }
        .directory-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 35px;
        }
        .directory-heading h2 { font-size: clamp(33px,4vw,46px); margin-top: 12px; }
        .directory-heading > p {
          max-width: 330px;
          padding-left: 20px;
          border-left: 1px solid var(--line);
          color: var(--muted);
          font-size: 11px;
          line-height: 1.9;
        }
        .pharmacy-entries {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 45px;
          border-top: 1px solid var(--line);
        }
        .pharmacy-entry {
          display: grid;
          grid-template-columns: 35px minmax(0,1fr) 30px;
          gap: 15px;
          padding: 27px 0;
          border-bottom: 1px solid var(--line);
          min-width: 0;
        }
        .entry-number { color: var(--gold); font: 19px Georgia,serif; }
        .entry-number i { display: block; width: 1px; height: 40px; background: #d9c7a6; margin: 12px auto; }
        .entry-content { min-width: 0; }
        .entry-type { color: var(--gold); font-size: 8px; letter-spacing: 1.6px; }
        .entry-content h3 { font-size: 24px; line-height: 1.2; margin: 9px 0; }
        .entry-intro { color: var(--muted); font-size: 11px; line-height: 1.85; margin: 0 0 14px; }
        .entry-address { display: flex; align-items: flex-start; gap: 9px; color: var(--muted); font-size: 10px; line-height: 1.8; overflow-wrap: anywhere; }
        .entry-address svg { width: 16px; height: 16px; flex: 0 0 auto; color: var(--gold); }
        .entry-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 15px; margin-top: 16px; }
        .entry-actions a { font-size: 10px; color: var(--teal); border-bottom: 1px solid var(--gold); padding-bottom: 4px; }
        .entry-actions .call-link { padding: 9px 12px; color: white; background: var(--teal); border: 0; }
        .contact-note { font-size: 9px; color: #94764e; }
        .entry-mark { width: 27px; height: 27px; color: var(--gold); }
        .jan-aushadhi {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          align-items: center;
          gap: 50px;
          padding: 60px max(6%,calc((100% - 1210px)/2));
          background: var(--teal);
          color: white;
        }
        .jan-art {
          min-height: 255px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          border: 1px solid #ffffff30;
        }
        .jan-circle {
          width: 110px;
          height: 110px;
          display: grid;
          place-items: center;
          border: 1px solid #c6955080;
          border-radius: 50%;
          color: #e6c28e;
          padding: 25px;
        }
        .jan-art > span { font-size: 8px; letter-spacing: 2px; color: #ffffffb0; }
        .jan-content h2 { font-size: clamp(33px,4vw,46px); line-height: 1.1; margin: 13px 0; }
        .jan-content > p { color: #ffffffbd; font-size: 12px; line-height: 1.9; }
        .jan-address { display: flex; gap: 10px; color: white; font-size: 11px; line-height: 1.8; }
        .jan-address p { margin: 0; }
        .jan-address span { color: #e6c28e; }
        .jan-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 22px; }
        .jan-actions a { padding: 11px 13px; color: var(--teal); background: var(--cream); font-size: 10px; }
        .jan-actions a + a { color: white; background: transparent; border: 1px solid #ffffff70; }
        .visit-guide {
          max-width: 1280px;
          margin: auto;
          padding: 75px 35px;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 60px;
        }
        .visit-steps { border-top: 1px solid var(--line); }
        .visit-step { display: grid; grid-template-columns: 40px 1fr; gap: 15px; padding: 18px 0; border-bottom: 1px solid var(--line); }
        .visit-step > span { color: var(--gold); font: 21px Georgia,serif; }
        .visit-step h3 { font: 600 13px Arial,sans-serif; margin: 0 0 6px; }
        .visit-step p { color: var(--muted); font-size: 11px; line-height: 1.8; margin: 0; }
        .pharmacy-disclaimer {
          max-width: 1210px;
          margin: 0 auto 40px;
          padding: 17px 20px;
          display: flex;
          gap: 14px;
          border: 1px solid var(--line);
          color: var(--muted);
          font-size: 10px;
          line-height: 1.9;
        }
        .pharmacy-disclaimer > span {
          width: 23px;
          height: 23px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border: 1px solid var(--gold);
          border-radius: 50%;
          color: var(--gold);
        }
        .pharmacy-disclaimer p { margin: 0; }
        .pharmacy-disclaimer strong { color: var(--teal); }
        @media(max-width:850px) {
          .hero-symbol { right: 3%; transform: translateY(-50%) scale(.8); }
          .pharmacy-intro { grid-template-columns: 1fr 1.2fr; gap: 25px; }
          .intro-count { grid-column: 1/-1; flex-direction: row; align-items: center; }
          .medicine-topics { grid-template-columns: 1fr 1fr; }
          .medicine-topic:nth-child(3) { border-left: 0; }
          .medicine-topic:nth-child(n+3) { border-top: 1px solid #d7dbd0; }
          .pharmacy-entries { column-gap: 22px; }
          .pharmacy-entry { grid-template-columns: 28px minmax(0,1fr); }
          .entry-mark { display: none; }
          .jan-aushadhi { gap: 25px; }
        }
        @media(max-width:600px) {
          .pharmacy-hero { min-height: 550px; align-items: flex-end; background-position: 60% center; }
          .hero-overlay { background: linear-gradient(0deg,rgba(4,42,43,.98),rgba(5,48,49,.82) 60%,rgba(7,51,52,.2)); }
          .hero-content { margin: 0; padding: 110px 24px 65px; }
          .hero-content h1 { font-size: 46px; }
          .hero-symbol { top: 15px; right: 20px; transform: scale(.55); transform-origin: top right; }
          .hero-footer { left: 24px; right: 24px; font-size: 7px; letter-spacing: .6px; }
          .pharmacy-intro,.pharmacy-directory,.visit-guide { padding: 48px 24px; }
          .pharmacy-intro { grid-template-columns: 1fr; gap: 20px; }
          .pharmacy-intro h2,.visit-heading h2 { font-size: 39px; }
          .pharmacy-intro > p { padding-left: 15px; }
          .intro-count { grid-column: auto; }
          .medicine-section { padding: 40px 24px; }
          .medicine-heading { display: block; }
          .medicine-heading h2 { font-size: 32px; margin-top: 10px; }
          .medicine-topics { grid-template-columns: 1fr; }
          .medicine-topic,.medicine-topic + .medicine-topic,.medicine-topic:nth-child(3) { display: grid; grid-template-columns: 55px 1fr; column-gap: 15px; border-left: 0; border-top: 1px solid #d7dbd0; padding: 16px 0; }
          .medicine-topic:first-child { border-top: 0; }
          .topic-symbol { grid-row: span 2; margin: 0; }
          .medicine-topic h3 { align-self: end; }
          .directory-heading { display: block; }
          .directory-heading h2 { font-size: 36px; }
          .directory-heading > p { padding-left: 15px; }
          .pharmacy-entries { grid-template-columns: 1fr; }
          .pharmacy-entry { grid-template-columns: 30px minmax(0,1fr); padding: 22px 0; }
          .entry-content h3 { font-size: 23px; }
          .jan-aushadhi { grid-template-columns: 1fr; padding: 42px 24px; }
          .jan-art { min-height: 190px; }
          .jan-content h2 { font-size: 36px; }
          .visit-guide { grid-template-columns: 1fr; gap: 25px; }
          .pharmacy-disclaimer { margin: 0 24px 30px; padding: 14px; }
        }
      `}</style>
    </>
  );
}
