
"use client";

import Link from "next/link";
import Image from "next/image";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  {
    title: "Hospitals",
    subtitle: "Hospital care & facilities",
    description:
      "Explore hospital information, facilities and contact details.",
    href: "/healthcare/hospitals",
    icon: "✚",
  },
  {
    title: "Doctors & Clinics",
    subtitle: "Find local medical care",
    description:
      "Discover doctors, clinics and publicly available consultation information.",
    href: "/healthcare/doctors-clinics",
    icon: "⚕",
  },
  {
    title: "Dental Clinics",
    subtitle: "Care for every smile",
    description:
      "Explore dental care providers and information about dental services.",
    href: "/healthcare/dental-clinics",
    icon: "✧",
  },
  {
    title: "Pathology Labs",
    subtitle: "Diagnostic information",
    description:
      "Find diagnostic laboratories and publicly available test information.",
    href: "/healthcare/pathology-labs",
    icon: "⌕",
  },
  {
    title: "Pharmacies",
    subtitle: "Medical stores",
    description:
      "Explore pharmacies and their publicly available contact details.",
    href: "/healthcare/pharmacies",
    icon: "✚",
  },
];

const projects = [
  {
    name: "Anugrah Homes",
    eyebrow: "Residential development",
    description:
      "Discover a residential project while exploring Jattari's neighbourhoods and local lifestyle.",
    image: "/images/anugrah-homes.jpg",
    href: "/real-estate/featured-projects",
  },
  {
    name: "Skyline Aero Homes",
    eyebrow: "Explore local real estate",
    description:
      "Explore another residential development as part of your discovery of the area's living options.",
    image: "/images/skyline aero homes.jpg",
    href: "/real-estate/featured-projects",
  },
];

function MedicalEmblem() {
  return (
    <div className="hc-emblem" aria-label="Healthcare medical emblem">
      <div className="hc-emblem-orbit hc-orbit-a" />
      <div className="hc-emblem-orbit hc-orbit-b" />
      <div className="hc-emblem-orbit hc-orbit-c" />

      <span className="hc-emblem-dot hc-dot-a" />
      <span className="hc-emblem-dot hc-dot-b" />

      <div className="hc-emblem-core">
        <span className="hc-emblem-cross">+</span>

        <svg
          viewBox="0 0 180 220"
          className="hc-caduceus"
          fill="none"
          aria-hidden="true"
        >
          <g
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M90 55 V190" />
            <path d="M90 64 C63 64 56 85 72 101 C82 112 104 119 104 134 C104 149 76 153 76 169 C76 183 104 187 104 199" />
            <path d="M90 64 C117 64 124 85 108 101 C98 112 76 119 76 134 C76 149 104 153 104 169 C104 183 76 187 76 199" />
            <path d="M90 36 C80 36 74 44 74 53 C74 63 81 69 90 69 C99 69 106 63 106 53 C106 44 100 36 90 36 Z" />
            <path d="M90 13 V29 M74 21 H106" />
            <path d="M88 91 C61 91 42 80 26 61 C44 65 54 69 66 66 C46 56 34 44 27 31 C49 40 65 43 79 39" />
            <path d="M92 91 C119 91 138 80 154 61 C136 65 126 69 114 66 C134 56 146 44 153 31 C131 40 115 43 101 39" />
            <path d="M62 83 L48 94 M45 70 L32 80 M72 65 L63 49" />
            <path d="M118 83 L132 94 M135 70 L148 80 M108 65 L117 49" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function HealthcarePage() {
  return (
    <>
      <Navbar />

      <main className="hc-page">
        <style jsx global>{`
          .hc-page {
            --hc-cream: #fffdf8;
            --hc-ivory: #fff5e1;
            --hc-teal: #103f40;
            --hc-deep: #062c2f;
            --hc-gold: #d9b783;
            --hc-sage: #e8eee5;

            width: 100%;
            overflow: clip;
            color: var(--hc-teal);
            background: var(--hc-cream);
          }

          .hc-page * {
            box-sizing: border-box;
          }

          /* HERO */
          .hc-hero {
            position: relative;
            isolation: isolate;
            display: grid;
            place-items: center;
            width: 100%;
            min-height: 760px;
            overflow: hidden;
            background: var(--hc-deep);
          }

          .hc-hero-bg {
            position: absolute;
            z-index: -3;
            inset: 0;
          }

          .hc-hero-bg img {
            object-fit: cover;
            object-position: center;
          }

          .hc-hero::before {
            position: absolute;
            z-index: -2;
            inset: 0;
            content: "";
            background:
              radial-gradient(
                ellipse at center 40%,
                rgba(5, 42, 44, 0.15),
                rgba(5, 42, 44, 0.45) 55%,
                rgba(5, 35, 38, 0.64)
              ),
              linear-gradient(
                90deg,
                rgba(4, 38, 41, 0.24),
                rgba(4, 38, 41, 0.1) 50%,
                rgba(4, 38, 41, 0.25)
              );
          }

          .hc-hero::after {
            position: absolute;
            z-index: -1;
            inset: auto 0 0;
            height: 34%;
            content: "";
            background: linear-gradient(
              0deg,
              rgba(4, 35, 37, 0.88),
              transparent
            );
            pointer-events: none;
          }

          .hc-hero-inner {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 1500px;
            min-height: 760px;
            margin-inline: auto;
            padding: 32px 24px 40px;
            color: var(--hc-cream);
            text-align: center;
          }

          .hc-eyebrow {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            max-width: 100%;
            margin: 0;
            color: var(--hc-gold);
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }

          .hc-eyebrow::before,
          .hc-eyebrow::after {
            flex: 0 0 auto;
            width: 30px;
            height: 1px;
            content: "";
            background: var(--hc-gold);
          }

          /*
           * The emblem and all five service circles live inside
           * this dedicated area. They cannot overlap the heading below.
           */
          .hc-visual-area {
            position: relative;
            display: grid;
            place-items: center;
            flex: 0 0 auto;
            width: min(100%, 620px);
            height: 405px;
            margin: 8px auto 12px;
          }

          .hc-emblem {
            position: relative;
            display: grid;
            place-items: center;
            flex: 0 0 auto;
            width: 340px;
            height: 340px;
            margin: 0;
            color: var(--hc-gold);
          }

          .hc-emblem-core {
            position: relative;
            display: grid;
            place-items: center;
            width: 68%;
            height: 68%;
            border: 1px solid rgba(255, 245, 225, 0.9);
            border-radius: 50%;
            background: radial-gradient(
              circle at 35% 25%,
              rgba(255, 253, 248, 0.2),
              rgba(16, 63, 64, 0.8) 48%,
              rgba(4, 35, 37, 0.97)
            );
            box-shadow:
              0 0 14px rgba(255, 245, 225, 0.7),
              0 0 40px rgba(217, 183, 131, 0.48),
              inset 0 0 35px rgba(217, 183, 131, 0.2);
            animation: hc-float 5s ease-in-out infinite;
          }

          .hc-emblem-core::before,
          .hc-emblem-core::after {
            position: absolute;
            inset: -10px;
            border: 1px solid rgba(217, 183, 131, 0.8);
            border-radius: 50%;
            content: "";
            animation: hc-ring-pulse 3s ease-out infinite;
          }

          .hc-emblem-core::after {
            inset: -21px;
            animation-delay: 1.4s;
          }

          .hc-emblem-cross {
            position: absolute;
            z-index: 2;
            top: 8%;
            color: var(--hc-ivory);
            font: 300 44px/1 Arial, sans-serif;
            text-shadow: 0 0 15px var(--hc-gold);
          }

          .hc-caduceus {
            width: 57%;
            height: 67%;
            color: var(--hc-ivory);
            filter: drop-shadow(0 0 8px rgba(217, 183, 131, 0.9));
          }

          .hc-emblem-orbit {
            position: absolute;
            inset: 15px 0;
            border: 1px solid rgba(217, 183, 131, 0.75);
            border-radius: 50%;
            pointer-events: none;
          }

          .hc-orbit-a {
            transform: rotate(-28deg) scaleY(0.58);
            animation: hc-rotate 14s linear infinite;
          }

          .hc-orbit-b {
            transform: rotate(48deg) scaleY(0.64);
            border-color: rgba(255, 245, 225, 0.7);
            animation: hc-rotate 18s linear infinite reverse;
          }

          .hc-orbit-c {
            inset: 5px 34px;
            transform: rotate(90deg) scaleY(0.84);
            border-style: dashed;
            opacity: 0.55;
            animation: hc-rotate 25s linear infinite;
          }

          .hc-emblem-dot {
            position: absolute;
            z-index: 2;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--hc-ivory);
            box-shadow: 0 0 15px 4px var(--hc-gold);
          }

          .hc-dot-a {
            top: 12%;
            left: 23%;
          }

          .hc-dot-b {
            right: 16%;
            bottom: 20%;
          }

          .hc-orbit-services {
            position: absolute;
            z-index: 2;
            inset: 0;
            pointer-events: none;
          }

          .hc-orbit-label {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;
            width: 105px;
            color: var(--hc-cream);
            font-size: 12px;
            line-height: 1.35;
            text-align: center;
            text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85);
          }

          .hc-orbit-icon {
            display: grid;
            place-items: center;
            width: 52px;
            height: 52px;
            border: 1px solid var(--hc-gold);
            border-radius: 50%;
            color: var(--hc-ivory);
            background: rgba(6, 44, 47, 0.75);
            box-shadow: 0 0 18px rgba(217, 183, 131, 0.25);
            font-size: 23px;
            backdrop-filter: blur(8px);
          }

          /* Circles stay around the emblem, above the heading. */
          .hc-label-hospital {
            top: 3%;
            left: calc(50% - 220px);
          }

          .hc-label-doctor {
            top: 40%;
            left: calc(50% - 290px);
          }

          .hc-label-dental {
            bottom: 3%;
            left: calc(50% - 205px);
          }

          .hc-label-lab {
            top: 3%;
            right: calc(50% - 220px);
          }

          .hc-label-pharmacy {
            bottom: 3%;
            right: calc(50% - 205px);
          }

          /* Heading has its own separate block below the circles. */
          .hc-hero-copy {
            position: relative;
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 950px;
            margin: 0 auto;
          }

          .hc-hero-copy h1 {
            position: relative;
            width: 100%;
            max-width: 950px;
            margin: 0;
            padding: 0 8px;
            color: var(--hc-cream);
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(46px, 5vw, 76px);
            font-weight: 400;
            line-height: 1.08;
            letter-spacing: -0.035em;
            overflow-wrap: normal;
            word-break: normal;
            text-wrap: balance;
            text-shadow: 0 4px 25px rgba(0, 0, 0, 0.4);
          }

          .hc-hero-copy h1 span {
            display: block;
            color: var(--hc-gold);
            font-style: italic;
          }

          .hc-hero-description {
            width: 100%;
            max-width: 660px;
            margin: 16px auto 0;
            color: rgba(255, 253, 248, 0.94);
            font-size: 15px;
            line-height: 1.8;
            overflow-wrap: anywhere;
          }

          .hc-primary-button {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            gap: 17px;
            max-width: 100%;
            min-height: 50px;
            margin-top: 20px;
            padding: 0 26px;
            border: 1px solid var(--hc-ivory);
            border-radius: 999px;
            color: var(--hc-teal);
            background: var(--hc-ivory);
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .hc-primary-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(217, 183, 131, 0.3);
          }

          .hc-primary-button span {
            font-size: 20px;
          }

          /* INTRODUCTION */
          .hc-intro {
            display: grid;
            grid-template-columns: 0.85fr 1.15fr;
            gap: clamp(30px, 6vw, 85px);
            align-items: start;
            padding: clamp(65px, 8vw, 115px) clamp(24px, 7vw, 110px);
          }

          .hc-kicker {
            color: #9c7842;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .hc-intro h2,
          .hc-section-heading h2,
          .hc-community h2 {
            margin: 16px 0 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(35px, 4vw, 58px);
            font-weight: 400;
            line-height: 1.12;
            letter-spacing: -0.035em;
            overflow-wrap: anywhere;
            text-wrap: balance;
          }

          .hc-intro h2 em {
            color: #a27d43;
            font-weight: 400;
          }

          .hc-intro-copy {
            padding-top: 8px;
            color: #596765;
            font-size: 14px;
            line-height: 1.95;
          }

          .hc-intro-copy p {
            margin: 0 0 16px;
          }

          .hc-text-link {
            display: inline-flex;
            gap: 10px;
            margin-top: 6px;
            padding-bottom: 7px;
            border-bottom: 1px solid var(--hc-gold);
            color: var(--hc-teal);
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
          }

          /* HEALTHCARE CATEGORIES */
          .hc-services-section {
            padding: clamp(60px, 7vw, 95px) clamp(24px, 7vw, 110px);
            border-block: 1px solid rgba(16, 63, 64, 0.08);
            background: #f3f4ed;
          }

          .hc-section-heading {
            display: flex;
            justify-content: space-between;
            align-items: end;
            gap: 30px;
            margin-bottom: 38px;
          }

          .hc-section-heading > p {
            max-width: 330px;
            margin: 0 0 5px;
            color: #64716e;
            font-size: 13px;
            line-height: 1.8;
          }

          .hc-service-grid {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 16px;
          }

          .hc-service-card {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            grid-column: span 2;
            min-width: 0;
            min-height: 250px;
            padding: 25px;
            border: 1px solid rgba(16, 63, 64, 0.12);
            border-radius: 15px;
            color: var(--hc-teal);
            background: rgba(255, 253, 248, 0.92);
            text-decoration: none;
            transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          }

          .hc-service-card:nth-child(4) {
            grid-column: 2 / span 2;
          }

          .hc-service-card:hover {
            transform: translateY(-6px);
            border-color: var(--hc-gold);
            box-shadow: 0 18px 40px rgba(16, 63, 64, 0.09);
          }

          .hc-card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .hc-card-symbol {
            display: grid;
            place-items: center;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--hc-sage);
            font-size: 23px;
            transition: transform 0.3s, background 0.3s;
          }

          .hc-service-card:hover .hc-card-symbol {
            transform: rotate(-8deg) scale(1.08);
            background: var(--hc-ivory);
          }

          .hc-card-arrow {
            color: #9c7842;
            font-size: 22px;
          }

          .hc-service-card h3 {
            margin: 24px 0 7px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(21px, 2vw, 27px);
            font-weight: 400;
            line-height: 1.2;
            overflow-wrap: anywhere;
          }

          .hc-card-subtitle {
            color: #9c7842;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }

          .hc-service-card p {
            margin: 12px 0 0;
            color: #66726f;
            font-size: 12px;
            line-height: 1.8;
          }

          /* PROJECT FEATURE */
          .hc-community {
            display: grid;
            grid-template-columns: 0.85fr 1.15fr;
            gap: clamp(25px, 4vw, 60px);
            align-items: center;
            margin: clamp(48px, 7vw, 90px) clamp(16px, 5vw, 75px);
            padding: clamp(25px, 4vw, 55px);
            border-radius: 20px;
            color: var(--hc-cream);
            background: var(--hc-teal);
          }

          .hc-community h2 em {
            color: var(--hc-gold);
          }

          .hc-community-copy {
            color: rgba(255, 253, 248, 0.78);
            font-size: 13px;
            line-height: 1.9;
          }

          .hc-community-copy > p {
            margin: 0 0 15px;
          }

          .hc-project-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 15px;
            margin-top: 23px;
          }

          .hc-project-card {
            display: block;
            min-width: 0;
            overflow: hidden;
            border: 1px solid rgba(217, 183, 131, 0.3);
            border-radius: 13px;
            color: var(--hc-cream);
            background: rgba(255, 253, 248, 0.05);
            text-decoration: none;
            transition: transform 0.3s, border-color 0.3s, background 0.3s;
          }

          .hc-project-card:hover {
            transform: translateY(-5px);
            border-color: var(--hc-gold);
            background: rgba(255, 253, 248, 0.09);
          }

          .hc-project-image {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 10;
            overflow: hidden;
            background: #234d4c;
          }

          .hc-project-image img {
            object-fit: cover;
            transition: transform 0.5s;
          }

          .hc-project-card:hover .hc-project-image img {
            transform: scale(1.045);
          }

          .hc-project-content {
            padding: 16px;
          }

          .hc-project-eyebrow {
            color: var(--hc-gold);
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .hc-project-content h3 {
            margin: 9px 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(18px, 1.8vw, 24px);
            font-weight: 400;
            line-height: 1.2;
            overflow-wrap: anywhere;
          }

          .hc-project-content p {
            margin: 0;
            color: rgba(255, 253, 248, 0.72);
            font-size: 11px;
            line-height: 1.7;
          }

          .hc-project-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 15px;
            color: var(--hc-gold);
            font-size: 11px;
            font-weight: 700;
          }

          .hc-disclaimer {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 24px 38px;
            color: #7a8581;
            font-size: 11px;
            line-height: 1.8;
            text-align: center;
          }

          @keyframes hc-float {
            0%, 100% {
              transform: translateY(0) rotateY(-4deg);
            }
            50% {
              transform: translateY(-8px) rotateY(4deg);
            }
          }

          @keyframes hc-ring-pulse {
            0% {
              transform: scale(0.92);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.16);
              opacity: 0;
            }
          }

          @keyframes hc-rotate {
            from {
              rotate: 0deg;
            }
            to {
              rotate: 360deg;
            }
          }

          /* DESKTOP */
          @media (min-width: 1450px) {
            .hc-hero,
            .hc-hero-inner {
              min-height: 790px;
            }

            .hc-visual-area {
              height: 420px;
            }
          }

          /* TABLET */
          @media (max-width: 1000px) {
            .hc-hero,
            .hc-hero-inner {
              min-height: 760px;
            }

            .hc-visual-area {
              width: min(100%, 550px);
              height: 390px;
            }

            .hc-emblem {
              width: 310px;
              height: 310px;
            }

            .hc-label-hospital {
              left: calc(50% - 195px);
            }

            .hc-label-doctor {
              left: calc(50% - 250px);
            }

            .hc-label-dental {
              left: calc(50% - 180px);
            }

            .hc-label-lab {
              right: calc(50% - 195px);
            }

            .hc-label-pharmacy {
              right: calc(50% - 180px);
            }

            .hc-intro {
              gap: 35px;
            }

            .hc-service-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .hc-service-card,
            .hc-service-card:nth-child(4) {
              grid-column: auto;
            }

            .hc-community {
              grid-template-columns: 1fr;
            }

            .hc-project-grid {
              max-width: 760px;
            }
          }

          /* MOBILE */
          @media (max-width: 650px) {
            .hc-hero,
            .hc-hero-inner {
              min-height: 0;
            }

            .hc-hero-inner {
              padding: 35px 14px 38px;
            }

            .hc-eyebrow {
              gap: 8px;
              font-size: 9px;
              letter-spacing: 0.12em;
            }

            .hc-eyebrow::before,
            .hc-eyebrow::after {
              width: 15px;
            }

            .hc-visual-area {
              width: 100%;
              max-width: 360px;
              height: 320px;
              margin-top: 14px;
            }

            .hc-emblem {
              width: 255px;
              height: 255px;
            }

            .hc-orbit-label {
              width: 68px;
              gap: 5px;
              font-size: 9px;
            }

            .hc-orbit-icon {
              width: 36px;
              height: 36px;
              font-size: 17px;
            }

            .hc-label-hospital {
              top: 0;
              left: calc(50% - 125px);
            }

            .hc-label-doctor {
              top: 38%;
              left: -3px;
            }

            .hc-label-dental {
              bottom: 0;
              left: calc(50% - 105px);
            }

            .hc-label-lab {
              top: 0;
              right: calc(50% - 125px);
            }

            .hc-label-pharmacy {
              bottom: 0;
              right: calc(50% - 105px);
            }

            .hc-hero-copy h1 {
              max-width: 100%;
              padding-inline: 2px;
              font-size: clamp(36px, 8.5vw, 48px);
              line-height: 1.14;
              letter-spacing: -0.025em;
            }

            .hc-hero-description {
              max-width: 420px;
              margin-top: 12px;
              font-size: 12px;
              line-height: 1.75;
            }

            .hc-primary-button {
              min-height: 45px;
              margin-top: 18px;
              padding-inline: 20px;
              font-size: 12px;
            }

            .hc-intro {
              grid-template-columns: 1fr;
              gap: 20px;
              padding: 65px 7%;
            }

            .hc-intro h2,
            .hc-section-heading h2,
            .hc-community h2 {
              font-size: clamp(34px, 9vw, 43px);
            }

            .hc-intro-copy {
              font-size: 13px;
            }

            .hc-services-section {
              padding: 62px 6%;
            }

            .hc-section-heading {
              display: block;
              margin-bottom: 28px;
            }

            .hc-section-heading > p {
              margin-top: 15px;
            }

            .hc-service-grid {
              grid-template-columns: 1fr;
              gap: 12px;
            }

            .hc-service-card,
            .hc-service-card:nth-child(4) {
              grid-column: auto;
              min-height: 205px;
              padding: 22px;
            }

            .hc-service-card h3 {
              font-size: 24px;
            }

            .hc-community {
              grid-template-columns: 1fr;
              gap: 25px;
              margin: 48px 12px;
              padding: 25px 19px;
              border-radius: 16px;
            }

            .hc-project-grid {
              grid-template-columns: 1fr;
            }

            .hc-project-image {
              aspect-ratio: 16 / 9;
            }

            .hc-disclaimer {
              padding-inline: 7%;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hc-emblem-core,
            .hc-emblem-core::before,
            .hc-emblem-core::after,
            .hc-emblem-orbit {
              animation: none !important;
            }

            .hc-service-card,
            .hc-primary-button,
            .hc-project-card,
            .hc-project-image img {
              transition: none !important;
            }
          }
        `}</style>

        {/* HERO */}
        <section className="hc-hero">
          <div className="hc-hero-bg">
            <Image
              src="/images/Modern Teal Hospital Lobby Hero Background.jpg"
              alt="Hospital and healthcare environment"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className="hc-hero-inner">
            <p className="hc-eyebrow">Your health · Our community</p>

            <div className="hc-visual-area">
              <MedicalEmblem />

              <div className="hc-orbit-services" aria-hidden="true">
                <div className="hc-orbit-label hc-label-hospital">
                  <span className="hc-orbit-icon">✚</span>
                  <span>Hospitals</span>
                </div>

                <div className="hc-orbit-label hc-label-doctor">
                  <span className="hc-orbit-icon">⚕</span>
                  <span>Doctors &amp; Clinics</span>
                </div>

                <div className="hc-orbit-label hc-label-dental">
                  <span className="hc-orbit-icon">✧</span>
                  <span>Dental Clinics</span>
                </div>

                <div className="hc-orbit-label hc-label-lab">
                  <span className="hc-orbit-icon">⌕</span>
                  <span>Pathology Labs</span>
                </div>

                <div className="hc-orbit-label hc-label-pharmacy">
                  <span className="hc-orbit-icon">✚</span>
                  <span>Pharmacies</span>
                </div>
              </div>
            </div>

            <div className="hc-hero-copy">
              <h1>
                Healthcare,
                <span>closer to home.</span>
              </h1>

              <p className="hc-hero-description">
                Discover hospitals, doctors, dental clinics, diagnostic labs
                and pharmacies around Jattari, with useful information in one
                place.
              </p>

              <a href="#healthcare-services" className="hc-primary-button">
                Explore healthcare <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="hc-intro">
          <div>
            <span className="hc-kicker">Healthcare in Jattari</span>
            <h2>
              Better information.
              <br />
              <em>Closer connections.</em>
            </h2>
          </div>

          <div className="hc-intro-copy">
            <p>
              Finding useful healthcare information should feel simple.
              Explore information about healthcare services in and around
              Jattari, from hospitals and local clinics to diagnostic labs
              and pharmacies.
            </p>

            <p>
              Visit each category to learn more about local providers,
              locations and publicly available contact details. Confirm
              timings and services directly with providers before visiting.
            </p>

            <a href="#healthcare-services" className="hc-text-link">
              Explore all healthcare categories <span>↗</span>
            </a>
          </div>
        </section>

        {/* HEALTHCARE SUBPAGES */}
        <section className="hc-services-section" id="healthcare-services">
          <div className="hc-section-heading">
            <div>
              <span className="hc-kicker">Find what you need</span>
              <h2>
                Care for every
                <br />
                part of your journey.
              </h2>
            </div>

            <p>
              Choose a category to explore its dedicated page and find
              relevant local healthcare information.
            </p>
          </div>

          <div className="hc-service-grid">
            {services.map((service) => (
              <Link
                href={service.href}
                className="hc-service-card"
                key={service.href}
              >
                <div className="hc-card-top">
                  <span className="hc-card-symbol">{service.icon}</span>
                  <span className="hc-card-arrow">↗</span>
                </div>

                <h3>{service.title}</h3>
                <span className="hc-card-subtitle">{service.subtitle}</span>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ANUGRAH HOMES & SKYLINE AERO HOMES */}
        <section className="hc-community">
          <div>
            <span className="hc-kicker">
              Living · Community · Local growth
            </span>

            <h2>
              A place to live.
              <br />
              <em>A community to grow with.</em>
            </h2>
          </div>

          <div className="hc-community-copy">
            <p>
              A neighbourhood is shaped by more than its homes. Access to
              everyday services, healthcare, education and local connections
              all contribute to the experience of living in a community.
            </p>

            <p>
              As you explore Jattari, discover residential developments
              alongside useful information about the wider neighbourhood.
            </p>

            <div className="hc-project-grid">
              {projects.map((project) => (
                <Link
                  href={project.href}
                  className="hc-project-card"
                  key={project.name}
                >
                  <div className="hc-project-image">
                    <Image
                      src={project.image}
                      alt={`${project.name} residential project`}
                      fill
                      sizes="(max-width: 650px) 90vw, 35vw"
                    />
                  </div>

                  <div className="hc-project-content">
                    <span className="hc-project-eyebrow">
                      {project.eyebrow}
                    </span>

                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <span className="hc-project-cta">
                      Explore project <span>↗</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <p className="hc-disclaimer">
          This directory is intended for general information only. Confirm
          medical services, emergency availability, opening hours and contact
          details with the relevant provider. In an emergency, contact the
          appropriate emergency service.
        </p>
      </main>

      <Footer />
    </>
  );
}
